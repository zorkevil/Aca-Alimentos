import Image from 'next/image';
import Link from 'next/link';
import { getSection, getSectionSliders } from '@/lib/api/sections';
import { getProducts } from '@/lib/api/products';
import { getBlogPosts } from '@/lib/api/blog';
import BrandHero from '@/components/brand/BrandHero';
import FeaturedProductsSwiper from '@/components/misc/FeaturedProductsSwiper';
import SocialLinks from '@/components/misc/SocialLinks';
import BlogTeaser from '@/components/misc/BlogTeaser';
import { BRAND_CONFIG } from '@/lib/brands';

export default async function PetlinkHomePage() {
  const [section, sliders, featuredPage, blogPage] = await Promise.all([
    getSection('petlink'),
    getSectionSliders('petlink'),
    getProducts({ section: 'petlink', perPage: 6 }),
    getBlogPosts('petlink', { perPage: 3 }),
  ]);

  return (
    <>
      <BrandHero
        sliders={sliders}
        logo={BRAND_CONFIG.petlink.logo}
        fallbackTitle="Alimentando el vínculo."
        fallbackSubtitle="Alimento balanceado para perros y gatos, con el sabor que les gusta y la nutrición que necesitan."
        primaryCtaText="Conocé nuestros productos"
        primaryCtaHref="/petlink/productos"
        secondaryCtaText="Más información"
        contentColClass="col-lg-6 ms-auto"
      />

      <section id="why-petlink" className="pt-5 pt-md-7">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center wow animate__animated animate__fadeInUp">
              <hr className="heading-hr mx-auto" />
              <h2>¿Por qué elegir Petlink?</h2>
            </div>
          </div>
          <div className="row align-items-stretch g-4">
            <div className="col-lg-6 order-lg-2 wow animate__animated animate__fadeInUp">
              <Image
                src="/images/petlink/img-bolsa-comida-desktop.png"
                alt="Bolsa de comida Petlink"
                width={600}
                height={600}
                className="img-fluid"
              />
            </div>
            <div className="col-lg-3 order-lg-1 d-flex flex-column justify-content-evenly gap-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <div>
                <h4 className="text-lg-end fw-800">Tecnología de digestión saludable</h4>
                <p className="text-lg-end">
                  Elaborado con fibras prebióticas y un balance nutricional que favorece la digestión y una mejor
                  asimilación de los nutrientes.
                </p>
              </div>
              <div>
                <h4 className="text-lg-end fw-800">Envase 100% reciclable</h4>
                <p className="text-lg-end">Un envase pensado para cuidar el entorno en el que viven tu mascota y vos.</p>
              </div>
            </div>
            <div className="col-lg-3 order-lg-3 d-flex flex-column justify-content-evenly gap-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
              <div>
                <h4 className="fw-800">Composición nutricional equilibrada</h4>
                <p>
                  Una combinación de proteínas de origen animal, omegas, aminoácidos y nutrientes esenciales
                  pensada para acompañar el bienestar diario de tu mascota.
                </p>
              </div>
              <div>
                <h4 className="fw-800">Energía y vitalidad diaria</h4>
                <p>Un aporte equilibrado de energía para que esté fuerte, activo y saludable todos los días.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="strengthen-bond" className="py-5 py-md-7">
        <Image
          src="/images/petlink/img-miscelanea.svg"
          alt=""
          aria-hidden
          width={200}
          height={400}
          className="miscelanea-left d-none d-lg-block wow animate__animated animate__fadeInUp"
          data-wow-delay="0.2s"
        />
        <div className="container">
          <div className="row g-5 align-items-end">
            <div className="col-lg-6 wow animate__animated animate__fadeInUp">
              <hr className="heading-hr text-white" />
              <h2 className="mb-4 text-white">Fortalecé el vínculo con cada comida</h2>
              <p className="fs-18 mb-4 text-white">
                La comida también construye vínculo. Ser quien le sirve su alimento todos los días, mantener
                rutinas que le dan seguridad, usar su comida como premio durante el juego o el entrenamiento, y
                verlo feliz al comer son momentos que fortalecen la conexión entre tu mascota y vos.
              </p>
              <Link href="/petlink/quienes-somos" className="btn btn-primary">
                Conocé más
              </Link>
            </div>
            <div className="col-lg-6 text-center wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <Image src="/images/petlink/img-chico-perro.svg" alt="" width={400} height={400} className="img-fluid w-75" />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-2-8">
        <section id="featured-products" className="py-5 py-md-7">
          <Image
            src="/images/petlink/img-miscelanea.svg"
            alt=""
            aria-hidden
            width={200}
            height={400}
            className="miscelanea-right d-none d-lg-block wow animate__animated animate__fadeInUp"
            data-wow-delay="0.1s"
          />
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center wow animate__animated animate__fadeInUp">
                <hr className="heading-hr mx-auto text-white" />
                <h2 className="text-white">Productos destacados</h2>
              </div>
            </div>

            <FeaturedProductsSwiper
              products={featuredPage.data}
              site="petlink"
              productsBasePath="/petlink/productos"
              arrowsWhite
            />

            <div className="text-center mt-5 wow animate__animated animate__fadeInUp">
              <Link href="/petlink/productos" className="btn btn-primary">
                Ver todos los productos
              </Link>
            </div>
          </div>
        </section>
      </div>

      <SocialLinks
        instagram={section?.instagram ?? null}
        facebook={section?.facebook ?? null}
        sectionBgClass=""
      />

      <BlogTeaser
        posts={blogPage.data}
        site="petlink"
        blogHref="/petlink/blog"
        postHref={(slug) => `/petlink/blog/${slug}`}
        sectionBgClass=""
      />
    </>
  );
}
