import type { ReactNode } from 'react';
import type { LifeStage, PaginatedResponse, Product, Species } from '@/lib/types';
import type { Facet } from '@/lib/api/products';
import { SITE_THEME, type SiteSlug } from '@/lib/siteTheme';
import ProductCard from './ProductCard';
import ProductFilters, { type SectionFacet } from './ProductFilters';
import Pagination from './Pagination';

type ProductsCatalogProps = {
  site: SiteSlug;
  title: ReactNode;
  subtitle: string;
  page: PaginatedResponse<Product>;
  speciesFacets: Facet<Species>[];
  lifeStageFacets: Facet<LifeStage>[];
  sectionFacets?: SectionFacet[];
  showSectionFilter?: boolean;
  productHref: (slug: string) => string;
  buildPageHref: (page: number) => string;
};

export default function ProductsCatalog({
  site,
  title,
  subtitle,
  page,
  speciesFacets,
  lifeStageFacets,
  sectionFacets,
  showSectionFilter = false,
  productHref,
  buildPageHref,
}: ProductsCatalogProps) {
  const theme = SITE_THEME[site];
  const heroTextClass = theme.catalogHeroTextWhite ? 'text-white' : '';
  const sectionExtraClass = site === 'valor' ? ' deco-bottom' : '';

  return (
    <>
      <section className={`${theme.catalogHeroBg} py-5 py-md-7`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className={`wow animate__animated animate__fadeInUp ${heroTextClass}`}>{title}</h1>
              <p
                className={`lead mb-0 wow animate__animated animate__fadeInUp ${heroTextClass}`}
                data-wow-delay="0.1s"
              >
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-5 py-md-7${sectionExtraClass}`}>
        <div className="container">
          <div className="row">
            <ProductFilters
              site={site}
              speciesFacets={speciesFacets}
              lifeStageFacets={lifeStageFacets}
              sectionFacets={sectionFacets}
              showSectionFilter={showSectionFilter}
            />

            <div className="col-lg-9">
              {page.data.length === 0 ? (
                <div className="d-flex flex-column align-items-center pt-5 pt-md-7 wow animate__animated animate__fadeInUp">
                  <div className={`${theme.emptyStateBg} rounded-4 py-2 px-4 d-flex align-items-center mb-3`}>
                    <i className={`bi bi-info-circle ${theme.filterHeaderColor} me-3`} />
                    <p className={`mb-0 fs-5 ${theme.filterHeaderColor}`}>
                      No encontramos productos que coincidan con la búsqueda
                    </p>
                  </div>
                  <a href={buildPageHref(1).split('?')[0]} className="btn btn-primary">
                    Reintentar
                  </a>
                </div>
              ) : (
                <>
                  <div className="row g-4 mb-5">
                    {page.data.map((product, i) => (
                      <div className="col-md-6 col-xl-4" key={product.slug}>
                        <ProductCard
                          product={product}
                          href={productHref(product.slug)}
                          site={site}
                          animationDelay={`${(i % 6) * 0.05}s`}
                        />
                      </div>
                    ))}
                  </div>

                  <Pagination
                    currentPage={page.meta.current_page}
                    lastPage={page.meta.last_page}
                    buildHref={buildPageHref}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
