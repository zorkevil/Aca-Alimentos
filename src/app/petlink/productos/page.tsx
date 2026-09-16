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
  description: 'Conocé los alimentos balanceados de Petlink para perros y gatos.',
};

export default async function PetlinkProductosPage({
  searchParams,
}: {
  searchParams: Promise<RawSearchParams>;
}) {
  const params = await searchParams;
  const species = parseSpecies(params);
  const lifeStage = parseLifeStage(params);
  const page = parsePage(params);

  const [productsPage, facets] = await Promise.all([
    getProducts({ section: 'petlink', species, lifeStage, page, perPage: 24 }),
    getProductFacets(),
  ]);

  function buildPageHref(nextPage: number) {
    const query = new URLSearchParams();
    species.forEach((v) => query.append('species', v));
    lifeStage.forEach((v) => query.append('life_stage', v));
    if (nextPage > 1) query.append('page', String(nextPage));
    const qs = query.toString();
    return qs ? `/petlink/productos?${qs}` : '/petlink/productos';
  }

  return (
    <ProductsCatalog
      site="petlink"
      title="Nuestros productos"
      subtitle="Conocé los alimentos balanceados de Petlink"
      page={productsPage}
      speciesFacets={facets.species}
      lifeStageFacets={facets.lifeStage}
      productHref={(slug) => `/petlink/productos/${slug}`}
      buildPageHref={buildPageHref}
    />
  );
}
