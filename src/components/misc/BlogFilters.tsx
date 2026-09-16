'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import type { Tag } from '@/lib/types';
import { SITE_THEME, type SiteSlug } from '@/lib/siteTheme';

type BlogFiltersProps = {
  site: SiteSlug;
  tags: Tag[];
};

function useTagFilterParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeTags = searchParams.getAll('tags');
  const search = searchParams.get('search') ?? '';

  function toggleTag(slug: string, checked: boolean) {
    const params = new URLSearchParams(searchParams.toString());
    const current = params.getAll('tags').filter((v) => v !== slug);
    const next = checked ? [...current, slug] : current;

    params.delete('tags');
    next.forEach((v) => params.append('tags', v));
    params.delete('page');

    router.push(`${pathname}?${params.toString()}`);
  }

  function setSearch(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set('search', value);
    else params.delete('search');
    params.delete('page');
    router.push(`${pathname}?${params.toString()}`);
  }

  function clearAll() {
    router.push(pathname);
  }

  return { activeTags, search, toggleTag, setSearch, clearAll };
}

function TagCheckboxes({ site, tags, idPrefix = '' }: { site: SiteSlug; tags: Tag[]; idPrefix?: string }) {
  const { activeTags, toggleTag, clearAll } = useTagFilterParams();
  const theme = SITE_THEME[site];
  const headerClass = `${theme.filterHeaderColor}${theme.filterExtraClass ? ` ${theme.filterExtraClass}` : ''}`;

  return (
    <>
      {activeTags.length > 0 && (
        <div className="mb-4">
          <h6 className={`${headerClass} fw-bold mb-3`}>FILTROS ACTIVOS</h6>
          {activeTags.map((slug) => (
            <button
              key={slug}
              className={`d-block ${headerClass} text-decoration-underline mb-2 btn btn-link p-0 border-0`}
              onClick={() => toggleTag(slug, false)}
            >
              {tags.find((t) => t.slug === slug)?.name ?? slug} <i className="bi bi-x fs-20 align-middle" />
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

      <div className="mb-4">
        <h6 className={`${headerClass} fw-bold mb-3`}>¿SOBRE QUÉ QUERÉS LEER?</h6>
        {tags.map((tag) => (
          <div className={`form-check mb-2${theme.filterExtraClass ? ` ${theme.filterExtraClass}` : ''}`} key={tag.slug}>
            <input
              className="form-check-input"
              type="checkbox"
              id={`${idPrefix}tag-${tag.slug}`}
              checked={activeTags.includes(tag.slug)}
              onChange={(e) => toggleTag(tag.slug, e.target.checked)}
            />
            <label className="form-check-label" htmlFor={`${idPrefix}tag-${tag.slug}`}>
              {tag.name}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}

export function BlogSearchInput() {
  const { search, setSearch } = useTagFilterParams();

  return (
    <input
      type="search"
      className="form-control search-input mb-4 wow animate__animated animate__fadeInUp"
      placeholder="Buscar..."
      defaultValue={search}
      onKeyDown={(e) => {
        if (e.key === 'Enter') setSearch((e.target as HTMLInputElement).value);
      }}
      onBlur={(e) => setSearch(e.target.value)}
    />
  );
}

export default function BlogFilters({ site, tags }: BlogFiltersProps) {
  return (
    <>
      <aside className="col-lg-3 d-none d-lg-block">
        <TagCheckboxes site={site} tags={tags} />
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
          <h4 className="offcanvas-title" id="offcanvasFiltersLabel">
            FILTROS
          </h4>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Cerrar" />
        </div>
        <div className="offcanvas-body">
          <TagCheckboxes site={site} tags={tags} idPrefix="m-" />
        </div>
      </div>
    </>
  );
}
