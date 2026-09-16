import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/lib/types';
import { SITE_THEME, type SiteSlug } from '@/lib/siteTheme';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-AR', { day: 'numeric', month: 'short', year: 'numeric' });
}

type BlogCardProps = {
  post: BlogPost;
  href: string;
  site: SiteSlug;
  animationDelay?: string;
};

export default function BlogCard({ post, href, site, animationDelay }: BlogCardProps) {
  const theme = SITE_THEME[site];

  const cardBody = (
    <>
      {post.image && (
        <Image
          src={post.image}
          alt={post.imageAlt ?? post.title}
          width={600}
          height={360}
          className="img-fluid border-radius-10 mb-3"
        />
      )}
      <p className="fs-12 text-secondary mb-2">
        <i className="bi bi-calendar3 me-1" />
        {formatDate(post.publishedAt)}
      </p>
      <h5 className={`${theme.linkColor} mb-2`}>{post.title}</h5>
      {post.excerpt && (
        <p className={`${site === 'petlink' ? 'fs-16' : 'fs-14'} text-secondary flex-grow-1`}>{post.excerpt}</p>
      )}
      <Link href={href} className={`${theme.linkColor} fw-bold text-decoration-underline`}>
        Leer más
      </Link>
    </>
  );

  if (theme.productCardVariant === 'valor') {
    return (
      <div className="card-corner-wrap h-100 wow animate__animated animate__fadeInUp" data-wow-delay={animationDelay}>
        <div className="h-100 d-flex flex-column border-radius-5 p-4 bg-white card-corner-cut">{cardBody}</div>
      </div>
    );
  }

  return (
    <div
      className="h-100 d-flex flex-column border-radius-20 p-4 bg-white shadow-sm wow animate__animated animate__fadeInUp"
      data-wow-delay={animationDelay}
    >
      {cardBody}
    </div>
  );
}
