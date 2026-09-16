import type { Metadata } from 'next';
import Image from 'next/image';
import { getSection } from '@/lib/api/sections';

export const metadata: Metadata = {
  title: 'Quiénes Somos',
  description: 'Conocé Valor: una nutrición pensada para cada necesidad de tu mascota.',
};

const NUTRITION_APPROACH = [
  { icon: '/images/valor/icono-nutricion-01.svg', color: 7, title: 'CADA FÓRMULA TIENE SU PROPÓSITO', text: 'Desarrollamos fórmulas pensadas para responder a necesidades nutricionales concretas.' },
  { icon: '/images/valor/icono-nutricion-02.svg', color: 3, title: 'INGREDIENTES QUE CUMPLEN UNA FUNCIÓN', text: 'Seleccionamos cada ingrediente que resulta en el equilibrio y funcionamiento adecuado de cada fórmula.' },
  { icon: '/images/valor/icono-nutricion-03.svg', color: 1, title: 'NUTRICIÓN PARA CADA ETAPA', text: 'Las necesidades nutricionales evolucionan con el crecimiento, la adultez y el paso del tiempo. Por eso desarrollamos fórmulas específicas para acompañar cada etapa.' },
  { icon: '/images/valor/icono-nutricion-04.svg', color: 9, title: 'BIENESTAR DESDE LA ALIMENTACIÓN', text: 'Una nutrición adecuada ayuda a mejorar la salud y la calidad de vida de perros y gatos.' },
];

const GUIDING_PRINCIPLES = [
  { image: '/images/valor/img-guia-01.jpg', color: 7, title: 'CALIDAD', text: 'Cada fórmula parte de una mirada nutricional fundamentada, porque entendemos que una buena alimentación requiere criterio y precisión.' },
  { image: '/images/valor/img-guia-02.jpg', color: 3, title: 'COMPROMISO', text: 'Trabajamos para desarrollar alimentos que respondan a las necesidades reales de perros y gatos en cada etapa de su vida.' },
  { image: '/images/valor/img-guia-03.jpg', color: 9, title: 'CONFIANZA', text: 'Creemos que elegir un alimento también implica confiar en la marca, conocimiento y tecnología que está detrás de cada fórmula.' },
];

export default async function ValorQuienesSomosPage() {
  const section = await getSection('valor');

  return (
    <>
      <section className="py-5 py-md-7 about-hero">
        <div className="container">
          <div className="row py-6 py-md-7">
            <div className="col-lg-7 wow animate__animated animate__fadeInUp">
              <p className="fs-32 fw-bold text-white mb-2">SOMOS VALOR</p>
              <h1 className="text-white mb-4">UNA NUTRICIÓN PENSADA PARA CADA NECESIDAD.</h1>
              <p className="fs-20 text-white mb-0">
                Fórmulas específicas e ingredientes seleccionados para acompañar las distintas necesidades
                nutricionales de perros y gatos en cada etapa de su vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="bg-gradient-12-13 py-5 py-md-7">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow animate__animated animate__fadeInUp">
              <Image src="/images/valor/img-por-que-elegirnos.jpg" alt="Por qué elegir Valor" width={640} height={480} className="img-fluid border-radius-20" />
            </div>
            <div className="col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <Image src="/images/valor/logo-valor-color.svg" alt="Valor" width={200} height={80} className="mw-200 h-auto mb-4" />
              <h2 className="fs-48 mb-4">¿POR QUÉ ELEGIRNOS?</h2>
              <p className="fs-24 mb-0">
                Cada mascota tiene requerimientos nutricionales diferentes. Por eso desarrollamos alimentos
                pensados para responder a distintas etapas, estilos de vida y necesidades específicas, con
                fórmulas desarrolladas para potenciar su bienestar desde la nutrición.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-we-understand-nutrition" className="py-5 py-md-7">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center wow animate__animated animate__fadeInUp">
              <h2>
                NUESTRA FORMA DE
                <br />
                <span className="text-color-3">ENTENDER LA NUTRICIÓN</span>
              </h2>
              <hr className="heading-hr text-color-3 mx-auto" />
            </div>
          </div>
          <div className="row gx-4 gy-5 text-center">
            {NUTRITION_APPROACH.map((item, i) => (
              <div className="col-md-6 col-lg-3 wow animate__animated animate__fadeInUp" data-wow-delay={i > 0 ? `${i * 0.1}s` : undefined} key={item.title}>
                <Image src={item.icon} alt="" width={150} height={150} className="icon-150 mb-3" />
                <h4 className={`font-montserrat fw-bold text-color-${item.color} mb-0`}>{item.title}</h4>
                <hr className={`heading-hr-sm text-color-${item.color} mx-auto`} />
                <p className="fs-18 mb-0">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ingredients-difference" className="py-5 py-md-7">
        <div className="container">
          <div className="row bg-color-12 border-radius-30 overflow-hidden align-items-center">
            <div className="col-lg-7 order-2 order-lg-1 p-5 wow animate__animated animate__fadeInUp">
              <h2 className="fs-52 mb-4">
                CONOCÉ CÓMO CADA INGREDIENTE PUEDE <span className="text-color-1">HACER LA DIFERENCIA</span>
              </h2>
              <a href="/valor/nutricion" className="btn btn-primary">
                Leer más
              </a>
            </div>
            <div className="col-lg-5 order-1 order-lg-2 p-0 wow animate__animated animate__fadeIn" data-wow-delay="0.1s">
              <Image
                src="/images/valor/fondo-ingredientes-diferencia.png"
                alt=""
                width={500}
                height={500}
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="what-guides-us" className="py-5 py-md-7">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center wow animate__animated animate__fadeInUp">
              <h2>
                LO QUE <span className="text-color-1">NOS GUÍA</span>
              </h2>
            </div>
          </div>
          <div className="row g-4">
            {GUIDING_PRINCIPLES.map((item, i) => (
              <div className="col-lg-4 wow animate__animated animate__fadeInUp" data-wow-delay={i > 0 ? `${i * 0.1}s` : undefined} key={item.title}>
                <div className="h-100 border-radius-25 bg-color-12 overflow-hidden">
                  <Image src={item.image} alt="" width={400} height={280} className="img-fluid w-100" />
                  <div className="p-4">
                    <h4 className={`fw-bold text-color-${item.color} mb-3`}>{item.title}</h4>
                    <p className="fs-18 mb-0">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="who-its-for" className="py-5 py-md-7">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow animate__animated animate__fadeInUp">
              <Image src="/images/valor/logo-valor-color.svg" alt="Valor" width={200} height={80} className="mw-200 h-auto mb-4" />
              <h2 className="fs-40 text-white mb-4">FUE PENSADO PARA QUIENES...</h2>
              <ul className="fs-24 mb-4">
                <li>Quieren elegir la alimentación de su mascota con respaldo e información.</li>
                <li>Entienden que las necesidades nutricionales cambian en cada etapa de la vida.</li>
                <li>Buscan fórmulas desarrolladas para responder a necesidades específicas.</li>
                <li>Valoran una nutrición pensada para acompañar el bienestar a largo plazo.</li>
              </ul>
              <p className="fs-28 fw-bold text-white text-center mb-0">¿Te identificás?</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-color-1 py-5 py-md-7 text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 wow animate__animated animate__fadeInUp">
              <p className="h3 mb-2">SEGUINOS</p>
              <p className="h3 text-white mb-4">¡QUEREMOS ACOMPAÑARTE!</p>
              <p className="fs-18 text-white mb-4">
                Seguinos en nuestras redes y encontrá consejos, novedades y todo lo que tu mascota necesita.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                {section?.facebook && (
                  <a
                    href={section.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-circle d-flex align-items-center justify-content-center icon-80 bg-color-2 text-white"
                    aria-label="Facebook"
                  >
                    <i className="bi bi-facebook fs-40" />
                  </a>
                )}
                {section?.instagram && (
                  <a
                    href={section.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-circle d-flex align-items-center justify-content-center icon-80 bg-color-2 text-white"
                    aria-label="Instagram"
                  >
                    <i className="bi bi-instagram fs-40" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
