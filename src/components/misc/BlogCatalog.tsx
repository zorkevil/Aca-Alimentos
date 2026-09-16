import type { ReactNode } from 'react';
import type { BlogPost, PaginatedResponse, Tag } from '@/lib/types';
import { SITE_THEME, type SiteSlug } from '@/lib/siteTheme';
import BlogCard from './BlogCard';
import BlogFilters, { BlogSearchInput } from './BlogFilters';
import Pagination from './Pagination';

type BlogCatalogProps = {
  site: SiteSlug;
  title: ReactNode;
  page: PaginatedResponse<BlogPost>;
  tags: Tag[];
  postHref: (slug: string) => string;
  buildPageHref: (page: number) => string;
};

export default function BlogCatalog({ site, title, page, tags, postHref, buildPageHref }: BlogCatalogProps) {
  const theme = SITE_THEME[site];
  const heroTextClass = theme.catalogHeroTextWhite ? 'text-white' : '';

  return (
    <>
      <section className={`${theme.catalogHeroBg} py-5 py-md-7`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className={`wow animate__animated animate__fadeInUp ${heroTextClass}`}>{title}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 py-md-7">
        <div className="container">
          <div className="row">
            <BlogFilters site={site} tags={tags} />

            <div className="col-lg-9">
              <BlogSearchInput />

              {page.data.length === 0 ? (
                <div className="text-center py-5">
                  <i className="bi bi-search fs-1 text-color-1 d-block mb-3" />
                  <p className="fs-18 mb-0">No encontramos artículos que coincidan con la búsqueda.</p>
                </div>
              ) : (
                <>
                  <div className="row g-4 mb-5">
                    {page.data.map((post, i) => (
                      <div className="col-md-6 col-xl-4" key={post.slug}>
                        <BlogCard post={post} href={postHref(post.slug)} site={site} animationDelay={`${(i % 6) * 0.05}s`} />
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
