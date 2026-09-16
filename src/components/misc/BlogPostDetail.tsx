import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost, BlogPostDetail as BlogPostDetailType } from '@/lib/types';
import { SITE_THEME, type SiteSlug } from '@/lib/siteTheme';
import { BRAND_CONFIG } from '@/lib/brands';
import BlogPostBody from './BlogPostBody';
import BlogCard from './BlogCard';
import ShareButtons from './ShareButtons';

type BlogPostDetailProps = {
  post: BlogPostDetailType;
  site: SiteSlug;
  brandHref: string;
  blogHref: string;
  relatedPosts: BlogPost[];
  postHref: (slug: string) => string;
  productsBasePath: string;
};

export default function BlogPostDetail({
  post,
  site,
  brandHref,
  blogHref,
  relatedPosts,
  postHref,
  productsBasePath,
}: BlogPostDetailProps) {
  const theme = SITE_THEME[site];
  const brandName = site === 'aca' ? 'ACA' : BRAND_CONFIG[site].name;
  const socialIconClass =
    theme.socialIcon.variant === 'filled'
      ? `rounded-circle d-flex align-items-center justify-content-center icon-80 border ${theme.socialIcon.border ?? ''} ${theme.socialIcon.bg ?? ''} ${theme.socialIcon.text}`
      : `rounded-circle d-flex align-items-center justify-content-center icon-80 border ${theme.socialIcon.border ?? ''} ${theme.socialIcon.text}`;

  return (
    <>
      <section className="pt-5 pt-md-7">
        <div className="container">
          <div className="col-lg-8 mx-auto">
            <p className={`small ${theme.breadcrumbExtraClass ?? ''} wow animate__animated animate__fadeInUp`}>
              <a href={brandHref} className={`${theme.linkColor} fw-normal text-decoration-none`}>
                {brandName}
              </a>
              <span className={`mx-1 ${theme.linkColor}`}>&rsaquo;</span>
              <a href={blogHref} className={`${theme.linkColor} fw-normal text-decoration-none`}>
                Blog
              </a>
              <span className={`mx-1 ${theme.linkColor}`}>&rsaquo;</span>
              <span className={`${theme.linkColor} fw-bold`}>{post.title}</span>
            </p>

            {post.tags.length > 0 && (
              <div className="d-flex flex-wrap align-items-center gap-2 mb-3 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                {post.tags.map((tag) => (
                  <span className={`badge bg-color-1 ${theme.blogTagBadgeText}`} key={tag.slug}>
                    {tag.name}
                  </span>
                ))}
              </div>
            )}

            <h1 className="wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
              {post.title}
            </h1>

            {post.readingTime && (
              <div className="d-flex align-items-center gap-2 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                <span className={`fs-14 ${theme.linkColor}`}>Tiempo estimado de lectura:</span>
                <i className={`bi bi-clock ${theme.linkColor} fs-14`} />
                <span className={`fs-14 ${theme.linkColor}`}>{post.readingTime}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="pt-4 pb-5 pb-md-7">
        <div className="container">
          <div className="col-lg-8 mx-auto">
            {post.image && (
              <Image
                src={post.image}
                alt={post.imageAlt ?? post.title}
                width={1200}
                height={675}
                className="img-fluid border-radius-20 w-100 mb-4 wow animate__animated animate__fadeIn"
              />
            )}

            {post.excerpt && <p className="wow animate__animated animate__fadeInUp">{post.excerpt}</p>}

            <BlogPostBody blocks={post.blocks} site={site} productsBasePath={productsBasePath} />

            <div className="text-center mt-5 wow animate__animated animate__fadeInUp">
              <h2 className="h3 mb-3">Compartí esta información:</h2>
              <ShareButtons iconClass={socialIconClass} />
            </div>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-5 py-md-7">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2>Artículos relacionados</h2>
              </div>
            </div>
            <div className="row g-4 mb-5">
              {relatedPosts.map((related) => (
                <div className="col-md-6 col-lg-4" key={related.slug}>
                  <BlogCard post={related} href={postHref(related.slug)} site={site} />
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href={blogHref} className={`btn ${theme.ctaButtonClass}`}>
                Ver todos los artículos
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
