import Link from 'next/link';
import type { ReactNode } from 'react';
import type { BlogPost } from '@/lib/types';
import type { SiteSlug } from '@/lib/siteTheme';
import BlogCard from './BlogCard';

type BlogTeaserProps = {
  posts: BlogPost[];
  site: SiteSlug;
  blogHref: string;
  postHref: (slug: string) => string;
  heading?: ReactNode;
  sectionBgClass?: string;
  showDivider?: boolean;
};

export default function BlogTeaser({
  posts,
  site,
  blogHref,
  postHref,
  heading = 'Nuestro blog',
  sectionBgClass = 'bg-color-7',
  showDivider = true,
}: BlogTeaserProps) {
  if (posts.length === 0) return null;

  return (
    <section id="blog" className={`${sectionBgClass} py-5 py-md-7`.trim()}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center wow animate__animated animate__fadeInUp">
            {showDivider && <hr className="heading-hr mx-auto" />}
            <h2>{heading}</h2>
          </div>
        </div>
        <div className="row g-4 mb-5">
          {posts.map((post, i) => (
            <div className="col-md-6 col-lg-4" key={post.slug}>
              <BlogCard post={post} href={postHref(post.slug)} site={site} animationDelay={`${i * 0.1}s`} />
            </div>
          ))}
        </div>
        <div className="text-center wow animate__animated animate__fadeInUp">
          <Link href={blogHref} className="btn btn-primary">
            Ver todos los artículos
          </Link>
        </div>
      </div>
    </section>
  );
}
