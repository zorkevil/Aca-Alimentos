import { apiFetch } from '@/lib/api';
import { buildQueryString } from '@/utils/queryString';
import type { BrandSlug, LifeStage, PaginatedResponse, Product, Species } from '@/lib/types';

type ProductResponse = { data: Product };

export type GetProductsParams = {
  section?: BrandSlug;
  species?: Species[];
  lifeStage?: LifeStage[];
  search?: string;
  page?: number;
  perPage?: number;
};

const EMPTY_PAGE: PaginatedResponse<Product> = {
  data: [],
  links: { first: null, last: null, prev: null, next: null },
  meta: { current_page: 1, last_page: 1, per_page: 0, total: 0 },
};

export async function getProducts(
  params: GetProductsParams = {},
): Promise<PaginatedResponse<Product>> {
  try {
    const query = buildQueryString({
      section: params.section,
      species: params.species,
      life_stage: params.lifeStage,
      search: params.search,
      page: params.page,
      per_page: params.perPage,
    });

    const response = await apiFetch<PaginatedResponse<Product>>(`/products${query}`, {
      cache: 'no-store',
    });

    return response ?? EMPTY_PAGE;
  } catch (error) {
    console.error('[getProducts] API error', error);
    return EMPTY_PAGE;
  }
}

// Orden de exhibición en los filtros (coincide con la maqueta) — la API
// devuelve las listas ordenadas alfabéticamente por nombre, así que se
// reordenan acá; cualquier valor nuevo que la API agregue en el futuro cae
// al final en vez de romper el orden esperado.
const SPECIES_VALUES: Species[] = ['perro', 'gato'];
const LIFE_STAGE_VALUES: LifeStage[] = ['cachorro', 'adulto', 'senior'];

function sortByFixedOrder<T extends { slug: string }>(values: T[], order: string[]): T[] {
  return [...values].sort((a, b) => {
    const ai = order.indexOf(a.slug);
    const bi = order.indexOf(b.slug);
    if (ai === -1 && bi === -1) return a.slug.localeCompare(b.slug);
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });
}

export type Facet<T extends string> = { slug: T; name: string };

export type ProductFacets = { species: Facet<Species>[]; lifeStage: Facet<LifeStage>[] };

const FALLBACK_FACETS: ProductFacets = {
  species: SPECIES_VALUES.map((slug) => ({ slug, name: slug })),
  lifeStage: LIFE_STAGE_VALUES.map((slug) => ({ slug, name: slug })),
};

// Los filtros de producto siempre muestran TODAS las opciones del catálogo
// (existan o no productos cargados con esa especie/etapa), tomadas de los
// endpoints dedicados de la API — no se infieren de los productos existentes.
// El texto mostrado (`name`) también viene de la API, no de una traducción
// fija en el frontend.
export async function getProductFacets(): Promise<ProductFacets> {
  try {
    const [speciesRes, lifeStageRes] = await Promise.all([
      apiFetch<{ data: Facet<Species>[] }>('/species', { cache: 'no-store' }),
      apiFetch<{ data: Facet<LifeStage>[] }>('/life-stages', { cache: 'no-store' }),
    ]);

    return {
      species: sortByFixedOrder(speciesRes.data, SPECIES_VALUES),
      lifeStage: sortByFixedOrder(lifeStageRes.data, LIFE_STAGE_VALUES),
    };
  } catch (error) {
    console.error('[getProductFacets] API error', error);
    return FALLBACK_FACETS;
  }
}

// "Productos relacionados" en la ficha de producto: no hay endpoint dedicado,
// así que se arma con /products filtrado por marca. Prioriza misma especie
// que el producto actual, pero completa con el resto del catálogo de la marca
// si el catálogo es chico y ese filtro por sí solo no llega a "limit" —
// mejor mostrar algo relacionado (misma marca) que nada.
export async function getRelatedProducts(
  product: Product,
  limit = 4,
): Promise<Product[]> {
  const section = product.section.slug;

  const sameSpecies = await getProducts({ section, species: [product.species], perPage: limit + 1 });
  const related = sameSpecies.data.filter((p) => p.slug !== product.slug);

  if (related.length >= limit) return related.slice(0, limit);

  const rest = await getProducts({ section, perPage: limit + 1 });
  const seen = new Set(related.map((p) => p.slug));
  for (const p of rest.data) {
    if (related.length >= limit) break;
    if (p.slug === product.slug || seen.has(p.slug)) continue;
    related.push(p);
    seen.add(p.slug);
  }

  return related.slice(0, limit);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const response = await apiFetch<ProductResponse>(`/products/${slug}`, {
      cache: 'no-store',
    });

    return response.data ?? null;
  } catch (error) {
    console.error('[getProductBySlug] API error', error);
    return null;
  }
}
