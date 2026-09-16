import Image from 'next/image';
import Link from 'next/link';
import type { BreadcrumbItem, Product } from '@/lib/types';
import { SITE_THEME, type SiteSlug } from '@/lib/siteTheme';
import Breadcrumb from './Breadcrumb';
import ProductGallery from './ProductGallery';
import ProductAccordion from './ProductAccordion';
import ProductCard from './ProductCard';

const LIFE_STAGE_LABEL: Record<Product['lifeStage'], string> = {
  cachorro: 'Cachorros',
  adulto: 'Adultos',
  senior: 'Adultos Mayores',
};

type ProductDetailProps = {
  product: Product;
  site: SiteSlug;
  breadcrumbItems: BreadcrumbItem[];
  contactHref: string;
  relatedProducts: Product[];
  productHref: (slug: string) => string;
};

export default function ProductDetail({
  product,
  site,
  breadcrumbItems,
  contactHref,
  relatedProducts,
  productHref,
}: ProductDetailProps) {
  const theme = SITE_THEME[site];
  const images = [product.image, ...product.images].filter((src): src is string => Boolean(src));

  return (
    <>
      <Breadcrumb items={breadcrumbItems} site={site} />

      <section>
        <div className="container">
          <div className="row align-items-start gy-4">
            <div className="col-lg-6 wow animate__animated animate__fadeIn">
              <ProductGallery images={images} alt={product.name} />
            </div>

            <div className="col-lg-6">
              <h1 className={`${theme.productNameClass} wow animate__animated animate__fadeInUp`}>
                {product.name}
              </h1>

              <div
                className="d-flex align-items-center gap-3 mb-3 wow animate__animated animate__fadeInUp"
                data-wow-delay="0.05s"
              >
                <span
                  className={`rounded-circle d-flex align-items-center justify-content-center icon-40 ${theme.speciesBadgeBg[product.species]} flex-shrink-0`}
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
                {product.subtitle && <span className="fs-28">{product.subtitle}</span>}
                {theme.showLifeStagePill && (
                  <span className={`badge rounded-pill ${theme.speciesBadgeBg[product.species]} text-white`}>
                    {LIFE_STAGE_LABEL[product.lifeStage]}
                  </span>
                )}
              </div>

              <hr className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s" />

              {product.shortDescription && (
                <div
                  className="d-flex align-items-center gap-3 mb-3 wow animate__animated animate__fadeInUp"
                  data-wow-delay="0.15s"
                >
                  <p className="mb-0 fw-semibold">{product.shortDescription}</p>
                </div>
              )}

              <hr className="wow animate__animated animate__fadeInUp" data-wow-delay="0.2s" />

              {product.description && (
                <div
                  className="mb-4 wow animate__animated animate__fadeInUp"
                  data-wow-delay="0.25s"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              )}

              <div className="d-flex flex-wrap gap-3 wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                <Link href={contactHref} className={`btn ${theme.ctaButtonClass}`}>
                  Contactanos
                </Link>
                {product.technicalSheet && (
                  <a
                    href={product.technicalSheet}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                  >
                    Descargá el folleto informativo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 pt-md-7">
        <div className="container">
          <ProductAccordion product={product} site={site} />
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className={`py-5 py-md-7 ${site === 'valor' ? 'deco-bottom' : ''}`.trim()}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                {site === 'valor' ? (
                  <>
                    <h2>
                      PRODUCTOS
                      <br />
                      <span className="text-color-3">RELACIONADOS</span>
                    </h2>
                    <hr className="heading-hr text-color-7 mx-auto" />
                  </>
                ) : (
                  <h2 className="wow animate__animated animate__fadeInUp">Productos relacionados</h2>
                )}
              </div>
            </div>
            <div className="row g-4">
              {relatedProducts.map((related, i) => (
                <div className="col-md-6 col-xl-3" key={related.slug}>
                  <ProductCard
                    product={related}
                    href={productHref(related.slug)}
                    site={site}
                    animationDelay={`${i * 0.1}s`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
