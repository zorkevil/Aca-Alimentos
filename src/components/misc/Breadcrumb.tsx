import Link from 'next/link';
import type { BreadcrumbItem } from '@/lib/types';
import { SITE_THEME, type SiteSlug } from '@/lib/siteTheme';

export default function Breadcrumb({ items, site }: { items: BreadcrumbItem[]; site: SiteSlug }) {
  const theme = SITE_THEME[site];

  return (
    <section className="pt-5 pt-md-7">
      <div className="container">
        <p className={`small wow animate__animated animate__fadeInUp ${theme.breadcrumbExtraClass ?? ''}`.trim()}>
          {items.map((item, i) => (
            <span key={`${item.label}-${i}`}>
              {i > 0 && <span className={`mx-1 ${theme.linkColor}`}>&rsaquo;</span>}
              {item.href ? (
                <Link href={item.href} className={`${theme.linkColor} fw-normal text-decoration-none`}>
                  {item.label}
                </Link>
              ) : (
                <span className={`${theme.linkColor} fw-bold`}>{item.label}</span>
              )}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
