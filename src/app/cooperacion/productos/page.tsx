import type { Metadata } from 'next';
import { getProductFacets, getProducts } from '@/lib/api/products';
import ProductsCatalog from '@/components/misc/ProductsCatalog';
import {
  parseLifeStage,
  parsePage,
  parseSpecies,
  type RawSearchParams,
} from '@/utils/parseProductSearchParams';

export const metadata: Metadata = {
  title: 'Productos',
  description: 'Conocé los alimentos balanceados de Cooperación para perros y gatos.',
};

export default async function CooperacionProductosPage({
  searchParams,
}: {
  searchParams: Promise<RawSearchParams>;
}) {
  const params = await searchParams;
  const species = parseSpecies(params);
  const lifeStage = parseLifeStage(params);
  const page = parsePage(params);

  const [productsPage, facets] = await Promise.all([
    getProducts({ section: 'cooperacion', species, lifeStage, page, perPage: 24 }),
    getProductFacets(),
  ]);

  function buildPageHref(nextPage: number) {
    const query = new URLSearchParams();
    species.forEach((v) => query.append('species', v));
    lifeStage.forEach((v) => query.append('life_stage', v));
    if (nextPage > 1) query.append('page', String(nextPage));
    const qs = query.toString();
    return qs ? `/cooperacion/productos?${qs}` : '/cooperacion/productos';
  }

  return (
    <ProductsCatalog
      site="cooperacion"
      title="Nuestros productos"
      subtitle="Conocé los alimentos balanceados de Cooperación"
      page={productsPage}
      speciesFacets={facets.species}
      lifeStageFacets={facets.lifeStage}
      productHref={(slug) => `/cooperacion/productos/${slug}`}
      buildPageHref={buildPageHref}
    />
  );
}
