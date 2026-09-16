import Image from 'next/image';
import Link from 'next/link';
import { getSection, getSectionSliders } from '@/lib/api/sections';
import { getProducts } from '@/lib/api/products';
import { getBlogPosts } from '@/lib/api/blog';
import BrandHero from '@/components/brand/BrandHero';
import FeaturedProductsSwiper from '@/components/misc/FeaturedProductsSwiper';
import WhereToBuy from '@/components/misc/WhereToBuy';
import SocialLinks from '@/components/misc/SocialLinks';
import BlogTeaser from '@/components/misc/BlogTeaser';
import { BRAND_CONFIG } from '@/lib/brands';

export default async function CooperacionHomePage() {
  const [section, sliders, featuredPage, blogPage] = await Promise.all([
    getSection('cooperacion'),
    getSectionSliders('cooperacion'),
    getProducts({ section: 'cooperacion', perPage: 6 }),
    getBlogPosts('cooperacion', { perPage: 3 }),
  ]);

  return (
    <>
      <BrandHero
        sliders={sliders}
        logo={BRAND_CONFIG.cooperacion.logo}
        fallbackTitle="Natural por dentro, responsable por fuera."
        fallbackSubtitle="Alimento balanceado para perros y gatos, con el sabor que les gusta y la nutrición que necesitan."
        primaryCtaText="Conocé nuestros productos"
        primaryCtaHref="/cooperacion/productos"
        secondaryCtaText="Más información"
      />

      <section id="benefits" className="bg-color-1 py-5 py-md-7">
        <div className="benefits-deco-wrapper">
          <Image
            src="/images/cooperacion/img-hueso-granos-alimento.png"
            alt=""
            width={200}
            height={200}
            aria-hidden
            className="benefits-deco benefits-deco-top-left"
          />
          <Image
            src="/images/cooperacion/img-granos-alimento.png"
            alt=""
            width={200}
            height={200}
            aria-hidden
            className="benefits-deco benefits-deco-top-right"
          />
          <Image
            src="/images/cooperacion/img-hueso.png"
            alt=""
            width={200}
            height={200}
            aria-hidden
            className="benefits-deco benefits-deco-mid-right wow animate__animated animate__fadeInRight"
          />
        </div>
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <hr className="heading-hr text-white mx-auto" />
              <h2 className="text-center text-white">Beneficios</h2>
            </div>
          </div>
          <div className="row align-items-stretch g-4">
            <div className="col-lg-6 order-lg-2 wow animate__animated animate__fadeInUp">
              <Image
                src="/images/cooperacion/img-plato-comida.png"
                alt="Plato de comida"
                width={600}
                height={600}
                className="img-fluid plato-img"
              />
            </div>
            <div className="col-lg-3 order-lg-1 d-flex flex-column justify-content-evenly gap-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <div>
                <Image src="/images/cooperacion/img-flecha-blanca-01.svg" alt="" width={40} height={40} aria-hidden className="flecha-blanca-01 d-none d-lg-block ms-auto mb-3" />
                <h4 className="text-white">Sabor que les encanta</h4>
                <p className="text-white">Se ve apetitoso y lo comen con ganas.</p>
              </div>
              <div>
                <Image src="/images/cooperacion/img-flecha-blanca-02.svg" alt="" width={40} height={40} aria-hidden className="flecha-blanca-02 d-none d-lg-block ms-auto mb-3" />
                <h4 className="text-white">Nutrición suficiente y equilibrada</h4>
                <p className="text-white">Para que estén bien alimentados y activos.</p>
              </div>
            </div>
            <div className="col-lg-3 order-lg-3 d-flex flex-column justify-content-evenly gap-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
              <div>
                <Image src="/images/cooperacion/img-flecha-blanca-03.svg" alt="" width={40} height={40} aria-hidden className="flecha-blanca-03 d-none d-lg-block me-auto mb-3" />
                <h4 className="text-white text-lg-end">Fácil y práctico</h4>
                <p className="text-white text-lg-end">Sin vueltas. Abrís, servís y listo.</p>
              </div>
              <div>
                <Image src="/images/cooperacion/img-flecha-blanca-04.svg" alt="" width={40} height={40} aria-hidden className="flecha-blanca-04 d-none d-lg-block me-auto mb-3" />
                <h4 className="text-white text-lg-end">100% reciclable</h4>
                <p className="text-white text-lg-end">Cuidar a tu mascota también es cuidar el planeta.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sustainability" className="bg-gradient-9-8 pb-5 pb-md-7">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow animate__animated animate__fadeInUp">
              <Image
                src="/images/cooperacion/logo-compromiso-sustentable.png"
                alt="Compromiso Sustentable"
                width={134}
                height={134}
                className="icon-134 mb-4"
              />
              <h2 className="mb-4">Comprometidos con el planeta</h2>
              <p className="mb-4 fs-18">
                Nuestros envases son <strong>100% reciclables</strong>. Porque creemos que cada pequeño gesto suma.
                Podés acercarlos a los puntos verdes y ayudar a <strong>reducir el impacto ambiental</strong>.
              </p>
              <Link href="/cooperacion/sustentabilidad" className="btn btn-primary">
                Ver más
              </Link>
            </div>
            <div className="col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <Image
                src="/images/cooperacion/img-comprometidos-con-el-planeta.png"
                alt=""
                width={600}
                height={480}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="featured-products" className="bg-color-8 py-5 py-md-7">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center wow animate__animated animate__fadeInUp">
              <hr className="heading-hr mx-auto" />
              <h2>Productos destacados</h2>
            </div>
          </div>

          <FeaturedProductsSwiper products={featuredPage.data} site="cooperacion" productsBasePath="/cooperacion/productos" />

          <div className="text-center mt-5 wow animate__animated animate__fadeInUp">
            <Link href="/cooperacion/productos" className="btn btn-primary">
              Ver todos los productos
            </Link>
          </div>
        </div>
      </section>

      <WhereToBuy
        address={section?.contactAddress ?? null}
        contactHref="/cooperacion/contacto"
        sectionClassName="bg-gradient-8-7 py-5 py-md-7"
      />

      <SocialLinks instagram={section?.instagram ?? null} facebook={section?.facebook ?? null} />

      <BlogTeaser
        posts={blogPage.data}
        site="cooperacion"
        blogHref="/cooperacion/blog"
        postHref={(slug) => `/cooperacion/blog/${slug}`}
      />
    </>
  );
}
