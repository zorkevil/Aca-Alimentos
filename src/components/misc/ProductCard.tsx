import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { SITE_THEME, type SiteSlug } from '@/lib/siteTheme';

const LIFE_STAGE_LABEL: Record<Product['lifeStage'], string> = {
  cachorro: 'Cachorros',
  adulto: 'Adultos',
  senior: 'Senior',
};

type ProductCardProps = {
  product: Product;
  href: string;
  site: SiteSlug;
  animationDelay?: string;
};

export default function ProductCard({ product, href, site, animationDelay }: ProductCardProps) {
  const theme = SITE_THEME[site];

  const cardBody = (
    <>
      <span
        className={`position-absolute top-0 end-0 m-3 rounded-circle d-flex align-items-center justify-content-center icon-40 ${theme.speciesBadgeBg[product.species]}`}
      >
        <Image
          src={theme.speciesIcon[product.species]}
          alt=""
          aria-hidden
          width={25}
          height={25}
          className="icon-25"
        />
      </span>

      {product.image && (
        <Image src={product.image} alt={product.name} width={400} height={400} className="img-fluid mb-3" />
      )}

      <h6 className={`${theme.linkColor} mb-1 ${theme.productCardTextExtraClass ?? ''}`}>{product.name}</h6>
      {product.subtitle && <p className={theme.productCardTextExtraClass}>{product.subtitle}</p>}

      <div className="d-flex flex-wrap gap-2 mb-4 flex-grow-1 align-content-start">
        <span
          className={`badge border ${theme.productBadgeColor.replace('text-color', 'border-color')} ${theme.productBadgeColor} bg-transparent`}
        >
          {LIFE_STAGE_LABEL[product.lifeStage]}
        </span>
      </div>

      <Link
        href={href}
        className={`${theme.linkColor} fw-bold text-decoration-underline ${theme.productCardTextExtraClass ?? ''}`}
      >
        Ver detalles
      </Link>
    </>
  );

  if (theme.productCardVariant === 'valor') {
    return (
      <div className="card-corner-wrap h-100 wow animate__animated animate__fadeInUp" data-wow-delay={animationDelay}>
        <div className="position-relative h-100 d-flex flex-column border-radius-5 p-4 bg-white card-corner-cut">
          {cardBody}
        </div>
      </div>
    );
  }

  const wrapperClass =
    theme.productCardVariant === 'aca'
      ? 'position-relative h-100 d-flex flex-column border-radius-20 p-4 border border-color-7 bg-color-9 wow animate__animated animate__fadeInUp'
      : 'position-relative h-100 d-flex flex-column border-radius-20 p-4 bg-white shadow-sm wow animate__animated animate__fadeInUp';

  return (
    <div className={wrapperClass} data-wow-delay={animationDelay}>
      {cardBody}
    </div>
  );
}
