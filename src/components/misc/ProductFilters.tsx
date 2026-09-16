'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import type { BrandSlug, LifeStage, Species } from '@/lib/types';
import type { Facet } from '@/lib/api/products';
import { SITE_THEME, type SiteSlug } from '@/lib/siteTheme';

export type SectionFacet = { slug: BrandSlug; name: string };

type ProductFiltersProps = {
  site: SiteSlug;
  speciesFacets: Facet<Species>[];
  lifeStageFacets: Facet<LifeStage>[];
  sectionFacets?: SectionFacet[];
  showSectionFilter?: boolean;
  idPrefix?: string;
};

function useProductFilterParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const species = searchParams.getAll('species');
  const lifeStage = searchParams.getAll('life_stage');
  const sections = searchParams.getAll('section');

  function updateParam(key: string, value: string, checked: boolean) {
    const params = new URLSearchParams(searchParams.toString());
    const current = params.getAll(key).filter((v) => v !== value);
    const next = checked ? [...current, value] : current;

    params.delete(key);
    next.forEach((v) => params.append(key, v));
    params.delete('page');

    router.push(`${pathname}?${params.toString()}`);
  }

  function clearAll() {
    router.push(pathname);
  }

  return { species, lifeStage, sections, updateParam, clearAll };
}

function FilterFields({
  site,
  speciesFacets,
  lifeStageFacets,
  sectionFacets = [],
  showSectionFilter,
  idPrefix = '',
}: ProductFiltersProps) {
  const { species, lifeStage, sections, updateParam, clearAll } = useProductFilterParams();
  const hasActiveFilters = species.length > 0 || lifeStage.length > 0 || sections.length > 0;
  const theme = SITE_THEME[site];
  const headerClass = `${theme.filterHeaderColor}${theme.filterExtraClass ? ` ${theme.filterExtraClass}` : ''}`;

  return (
    <>
      {hasActiveFilters && (
        <div className="mb-4">
          <h6 className={`${headerClass} fw-bold mb-3`}>FILTROS ACTIVOS</h6>
          {species.map((value) => (
            <button
              key={`active-species-${value}`}
              className={`d-block ${headerClass} text-decoration-underline mb-2 btn btn-link p-0 border-0`}
              onClick={() => updateParam('species', value, false)}
            >
              {speciesFacets.find((s) => s.slug === value)?.name ?? value}{' '}
              <i className="bi bi-x fs-20 align-middle" />
            </button>
          ))}
          {lifeStage.map((value) => (
            <button
              key={`active-life-stage-${value}`}
              className={`d-block ${headerClass} text-decoration-underline mb-2 btn btn-link p-0 border-0`}
              onClick={() => updateParam('life_stage', value, false)}
            >
              {lifeStageFacets.find((s) => s.slug === value)?.name ?? value}{' '}
              <i className="bi bi-x fs-20 align-middle" />
            </button>
          ))}
          {sections.map((value) => (
            <button
              key={`active-section-${value}`}
              className={`d-block ${headerClass} text-decoration-underline mb-2 btn btn-link p-0 border-0`}
              onClick={() => updateParam('section', value, false)}
            >
              {sectionFacets.find((s) => s.slug === value)?.name ?? value}{' '}
              <i className="bi bi-x fs-20 align-middle" />
            </button>
          ))}
          <button
            className={`d-block ${theme.requiredMarkColor}${theme.filterExtraClass ? ` ${theme.filterExtraClass}` : ''} text-decoration-underline btn btn-link p-0 border-0`}
            onClick={clearAll}
          >
            Borrar todos <i className="bi bi-x fs-20 align-middle" />
          </button>
          <hr className="mt-4 w-60" />
        </div>
      )}

      {showSectionFilter && (
        <div className="mb-4">
          <h6 className={`${headerClass} fw-bold mb-3`}>MARCAS</h6>
          {sectionFacets.map((option) => (
            <div
              className={`form-check mb-2${theme.filterExtraClass ? ` ${theme.filterExtraClass}` : ''}`}
              key={option.slug}
            >
              <input
                className="form-check-input"
                type="checkbox"
                id={`${idPrefix}section-${option.slug}`}
                checked={sections.includes(option.slug)}
                onChange={(e) => updateParam('section', option.slug, e.target.checked)}
              />
              <label className="form-check-label" htmlFor={`${idPrefix}section-${option.slug}`}>
                {option.name}
              </label>
            </div>
          ))}
        </div>
      )}

      <div className="mb-4">
        <h6 className={`${headerClass} fw-bold mb-3`}>ESPECIE ANIMAL</h6>
        {speciesFacets.map((option) => (
          <div
            className={`form-check mb-2${theme.filterExtraClass ? ` ${theme.filterExtraClass}` : ''}`}
            key={option.slug}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id={`${idPrefix}especie-${option.slug}`}
              checked={species.includes(option.slug)}
              onChange={(e) => updateParam('species', option.slug, e.target.checked)}
            />
            <label className="form-check-label" htmlFor={`${idPrefix}especie-${option.slug}`}>
              {option.name}
            </label>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h6 className={`${headerClass} fw-bold mb-3`}>ETAPA DE VIDA</h6>
        {lifeStageFacets.map((option) => (
          <div
            className={`form-check mb-2${theme.filterExtraClass ? ` ${theme.filterExtraClass}` : ''}`}
            key={option.slug}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id={`${idPrefix}etapa-${option.slug}`}
              checked={lifeStage.includes(option.slug)}
              onChange={(e) => updateParam('life_stage', option.slug, e.target.checked)}
            />
            <label className="form-check-label" htmlFor={`${idPrefix}etapa-${option.slug}`}>
              {option.name}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}

export default function ProductFilters(props: ProductFiltersProps) {
  const OffcanvasTitle = props.site === 'aca' ? 'h5' : 'h4';

  return (
    <>
      <aside className="col-lg-3 d-none d-lg-block">
        <FilterFields {...props} />
      </aside>

      <button
        className="btn btn-primary btn-filter-mobile d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasFilters"
        aria-controls="offcanvasFilters"
        aria-label="Filtros"
      >
        <i className="bi bi-funnel" />
      </button>

      <div
        className="offcanvas offcanvas-start d-lg-none"
        tabIndex={-1}
        id="offcanvasFilters"
        aria-labelledby="offcanvasFiltersLabel"
      >
        <div className="offcanvas-header">
          <OffcanvasTitle className="offcanvas-title" id="offcanvasFiltersLabel">
            FILTROS
          </OffcanvasTitle>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Cerrar" />
        </div>
        <div className="offcanvas-body">
          <FilterFields {...props} idPrefix="m-" />
        </div>
      </div>
    </>
  );
}
