import Image from 'next/image';
import Link from 'next/link';
import { getSection, getSectionSliders } from '@/lib/api/sections';
import { getProducts } from '@/lib/api/products';
import { getBlogPosts } from '@/lib/api/blog';
import BrandHero from '@/components/brand/BrandHero';
import FeaturedProductsSwiper from '@/components/misc/FeaturedProductsSwiper';
import SocialLinks from '@/components/misc/SocialLinks';
import BlogTeaser from '@/components/misc/BlogTeaser';
import MealSwiper from '@/components/misc/MealSwiper';

const NUTRITION_HIGHLIGHTS = [
  { icon: '/images/valor/icono-proteinas-de-alta-asimilacion.svg', text: 'Proteínas de alta asimilación' },
  { icon: '/images/valor/icono-nutricion-completa-y-equilibrada.svg', text: 'Nutrición completa y equilibrada' },
  { icon: '/images/valor/icono-origen-de-carnes-selectas.svg', text: 'Origen de carnes selectas' },
  { icon: '/images/valor/icono-optimo-balance-de-ingredientes-naturales.svg', text: 'Óptimo balance de ingredientes naturales' },
];

const MEAL_IMAGES = [
  { src: '/images/valor/img-plato-comida-carne.png', alt: 'Plato de carne' },
  { src: '/images/valor/img-plato-comida-carne-pollo.png', alt: 'Plato de carne y pollo' },
  { src: '/images/valor/img-plato-comida-pescado.png', alt: 'Plato de pescado' },
  { src: '/images/valor/img-plato-comida-pollo-campo.png', alt: 'Plato de pollo de campo' },
  { src: '/images/valor/img-plato-comida-cordero.png', alt: 'Plato de cordero' },
];

export default async function ValorHomePage() {
  const [section, sliders, perroPage, gatoPage, blogPage] = await Promise.all([
    getSection('valor'),
    getSectionSliders('valor'),
    getProducts({ section: 'valor', species: ['perro'], perPage: 6 }),
    getProducts({ section: 'valor', species: ['gato'], perPage: 6 }),
    getBlogPosts('valor', { perPage: 3 }),
  ]);

  return (
    <>
      <BrandHero
        sliders={sliders}
        fallbackTitle={
          <>
            NUTRIENDO
            <br />
            <span className="text-color-3">EL INSTINTO</span>
          </>
        }
        fallbackSubtitle="Nutrición inspirada en su naturaleza, con recetas pensadas para acompañarlos todos los días."
        primaryCtaText="Ver productos"
        primaryCtaHref="/valor/productos"
        primaryCtaClass="btn-color-3"
        secondaryCtaText="Conocenos más"
        contentColClass="col-lg-6"
      />

      <div className="bg-gradient-13-12 bg-trees">
        <section id="nutrition-benefits" className="py-5 py-md-7">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                  EL VALOR
                  <br />
                  <span className="text-color-7">DE LA NUTRICIÓN</span>
                </h2>
                <p className="fs-18 mb-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                  La nutrición adecuada depende de factores como la edad, el tamaño, y las necesidades específicas
                  de cada mascota. VALOR desarrolla fórmulas balanceadas que combinan ingredientes de calidad para
                  acompañar su salud y bienestar en cada etapa.
                </p>
                <Link href="/valor/nutricion" className="btn btn-color-7 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                  Descubrí qué necesita tu mascota
                </Link>
              </div>
            </div>
            <div className="row align-items-stretch g-4">
              <div className="col-lg-6 order-lg-2 wow animate__animated animate__fadeInUp">
                <MealSwiper images={MEAL_IMAGES} />
              </div>
              <div className="col-lg-3 order-lg-1 d-flex flex-column justify-content-evenly gap-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                {NUTRITION_HIGHLIGHTS.slice(0, 2).map((item) => (
                  <div className="text-center" key={item.text}>
                    <Image src={item.icon} alt="" width={100} height={100} className="icon-100 mb-3" />
                    <h4 className="font-montserrat fw-medium">{item.text}</h4>
                  </div>
                ))}
              </div>
              <div className="col-lg-3 order-lg-3 d-flex flex-column justify-content-evenly gap-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                {NUTRITION_HIGHLIGHTS.slice(2).map((item) => (
                  <div className="text-center" key={item.text}>
                    <Image src={item.icon} alt="" width={100} height={100} className="icon-100 mb-3" />
                    <h4 className="font-montserrat fw-medium">{item.text}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="featured-products" className="py-5 py-md-7 position-relative">
          <Image
            src="/images/valor/overlay-plantas-04.png"
            alt=""
            aria-hidden
            width={200}
            height={400}
            className="deco-side deco-side-left"
          />
          <Image
            src="/images/valor/overlay-plantas-04.png"
            alt=""
            aria-hidden
            width={200}
            height={400}
            className="deco-side deco-side-right"
          />
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center wow animate__animated animate__fadeInUp">
                <h2>
                  PRODUCTOS
                  <br />
                  <span className="text-color-3">DESTACADOS</span>
                </h2>
                <hr className="heading-hr text-color-7 mx-auto" />
              </div>
            </div>

            <ul className="nav nav-underline justify-content-center mb-4 gap-3" id="productsTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="perro-tab" data-bs-toggle="tab" data-bs-target="#perro-pane" type="button" role="tab" aria-controls="perro-pane" aria-selected="true">
                  PERRO
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="gato-tab" data-bs-toggle="tab" data-bs-target="#gato-pane" type="button" role="tab" aria-controls="gato-pane" aria-selected="false">
                  GATO
                </button>
              </li>
            </ul>

            <div className="tab-content wow animate__animated animate__fadeInUp" id="productosTabContent">
              <div className="tab-pane fade show active" id="perro-pane" role="tabpanel" aria-labelledby="perro-tab">
                <FeaturedProductsSwiper products={perroPage.data} site="valor" productsBasePath="/valor/productos" />
              </div>
              <div className="tab-pane fade" id="gato-pane" role="tabpanel" aria-labelledby="gato-tab">
                <FeaturedProductsSwiper products={gatoPage.data} site="valor" productsBasePath="/valor/productos" />
              </div>
            </div>

            <div className="text-center mt-5 wow animate__animated animate__fadeInUp">
              <Link href="/valor/productos" className="btn btn-color-3">
                Ver todos los productos
              </Link>
            </div>
          </div>
        </section>

      </div>

      <div className="bg-gradient-12-13">
        <SocialLinks
          instagram={section?.instagram ?? null}
          facebook={section?.facebook ?? null}
          heading={
            <>
              SEGUINOS EN
              <br />
              <span className="text-color-5">NUESTRAS REDES SOCIALES</span>
            </>
          }
          sectionBgClass=""
          showDivider={false}
          previewImage={{ src: '/images/valor/img-redes-sociales.png', alt: '' }}
          bleedIntoNextSection={blogPage.data.length > 0}
        />

        <BlogTeaser
          posts={blogPage.data}
          site="valor"
          blogHref="/valor/blog"
          postHref={(slug) => `/valor/blog/${slug}`}
          heading={
            <>
              CLAVES PARA CUIDAR
              <br />
              <span className="text-color-1">LA SALUD DE TU MASCOTA</span>
            </>
          }
          sectionBgClass="deco-bottom"
          showDivider={false}
        />
      </div>
    </>
  );
}
