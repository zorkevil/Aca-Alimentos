import type { Metadata } from 'next';
import { getProductFacets, getProducts } from '@/lib/api/products';
import { getSections } from '@/lib/api/sections';
import ProductsCatalog from '@/components/misc/ProductsCatalog';
import { isBrandSlug, type BrandSlug } from '@/lib/types';
import {
  parseLifeStage,
  parsePage,
  parseSection,
  parseSpecies,
  type RawSearchParams,
} from '@/utils/parseProductSearchParams';

export const metadata: Metadata = {
  title: 'Productos',
  description: 'Catálogo completo de alimentos balanceados ACA: Cooperación, Valor y Petlink.',
};

export default async function ProductosPage({
  searchParams,
}: {
  searchParams: Promise<RawSearchParams>;
}) {
  const params = await searchParams;
  const species = parseSpecies(params);
  const lifeStage = parseLifeStage(params);
  const section = parseSection(params);
  const page = parsePage(params);

  const [productsPage, facets, sections] = await Promise.all([
    getProducts({ species, lifeStage, section, page, perPage: 24 }),
    getProductFacets(),
    getSections(),
  ]);

  const sectionFacets: { slug: BrandSlug; name: string }[] = sections
    .map((s) => (isBrandSlug(s.slug) ? { slug: s.slug, name: s.name } : null))
    .filter((s) => s !== null);

  function buildPageHref(nextPage: number) {
    const query = new URLSearchParams();
    species.forEach((v) => query.append('species', v));
    lifeStage.forEach((v) => query.append('life_stage', v));
    if (section) query.append('section', section);
    if (nextPage > 1) query.append('page', String(nextPage));
    const qs = query.toString();
    return qs ? `/productos?${qs}` : '/productos';
  }

  return (
    <ProductsCatalog
      site="aca"
      title="Nuestros productos"
      subtitle="Conocé los alimentos balanceados de nuestras marcas"
      page={productsPage}
      speciesFacets={facets.species}
      lifeStageFacets={facets.lifeStage}
      sectionFacets={sectionFacets}
      showSectionFilter
      productHref={(slug) => `/productos/${slug}`}
      buildPageHref={buildPageHref}
    />
  );
}
