import { Fragment } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BrandsGrid from '@/components/aca/BrandsGrid';

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Conocé ACA Alimentos: capacidad productiva, calidad en cada etapa e innovación.',
};

const QUALITY_STEPS = [
  {
    icon: '/images/aca/icono-formulacion.svg',
    domeClass: 'dome-1 bg-color-1',
    bgClass: 'bg-color-1',
    title: 'Formulación nutricional',
    text: 'Desarrollamos recetas pensadas para acompañar distintas necesidades, edades y estilos de vida.',
  },
  {
    icon: '/images/aca/icono-ingredientes.svg',
    domeClass: 'dome-6 bg-color-6',
    bgClass: 'bg-color-6',
    title: 'Selección de ingredientes',
    text: 'Trabajamos con materias primas seleccionadas para cada formulación.',
  },
  {
    icon: '/images/aca/icono-elaboracion.svg',
    domeClass: 'dome-2 bg-color-2',
    bgClass: 'bg-color-2',
    title: 'Elaboración',
    text: 'Aplicamos procesos orientados a garantizar consistencia y calidad en cada producción.',
  },
  {
    icon: '/images/aca/icono-mejora.svg',
    domeClass: 'dome-15 bg-color-15',
    bgClass: 'bg-color-15',
    title: 'Mejora continua',
    text: 'Buscamos permanentemente nuevas oportunidades para optimizar productos y procesos.',
  },
];

const TRACK_RECORD = [
  { icon: '/images/aca/logo-aca-iso-color.svg', text: 'Más de 100 años de trayectoria', grayscale: true },
  { icon: '/images/aca/icono-red.svg', text: 'Red cooperativa con presencia federal' },
  { icon: '/images/aca/icono-elaboracion2.svg', text: 'Miles de productores vinculados al sistema' },
  { icon: '/images/aca/icono-argentina.svg', text: 'Presencia en todo el territorio argentino' },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="py-5 py-md-7 about-hero">
        <div className="container">
          <div className="row py-6 py-md-7">
            <div className="col-lg-6 wow animate__animated animate__fadeInUp">
              <h1 className="text-white">Comprometidos con la nutrición animal, desde el origen</h1>
              <p className="fs-20 text-white mb-4">
                Desde la selección de ingredientes hasta la elaboración de cada producto y la entrega en cada
                destino, trabajamos para nutrir con confianza.
              </p>
              <a href="#nuestra-capacidad-productiva" className="btn btn-primary">
                Conocé nuestra capacidad productiva
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="nuestra-capacidad-productiva" className="py-5 py-md-7">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow animate__animated animate__fadeInUp">
              <h2 className="mb-4">
                Una capacidad productiva que
                <br />
                <span>impulsa nuestro crecimiento</span>
              </h2>
              <p className="mb-4">
                En <strong>ACA</strong> desarrollamos y elaboramos Alimentos Balanceados para perros y gatos con
                una visión de largo plazo, acompañando el crecimiento de nuestras marcas y de nuestros socios
                comerciales en todo el país.
              </p>
              <p className="mb-0">
                Nuestra infraestructura productiva, junto al compromiso de nuestros equipos, nos permite trabajar
                con foco en la calidad, la eficiencia y la mejora continua.
              </p>
            </div>
            <div className="col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <Image
                src="/images/aca/img-capacidad-productiva.jpg"
                alt="Capacidad productiva ACA"
                width={640}
                height={480}
                className="img-fluid border-radius-20"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-color-8 py-5 py-md-7">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-6 wow animate__animated animate__fadeInUp">
                  <Image
                    src="/images/aca/img-produccion-argentina.png"
                    alt="Producción 100% argentina"
                    width={320}
                    height={320}
                    className="img-fluid w-100 border-radius-20"
                  />
                </div>
                <div className="col-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                  <Image
                    src="/images/aca/img-planta-habilitada-por-senasa.png"
                    alt="Planta habilitada por SENASA"
                    width={320}
                    height={320}
                    className="img-fluid w-100 border-radius-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 py-md-7">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="wow animate__animated animate__fadeInUp">
                Calidad en cada <span className="text-color-6">etapa del proceso</span>
              </h2>
              <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                La calidad es el resultado de una cadena de trabajo que comienza mucho antes de que el producto
                llegue al comedero. Desde la selección de materias primas hasta la elaboración y el control de
                cada lote, trabajamos para ofrecer productos que respondan a las necesidades nutricionales de
                perros y gatos en cada etapa de vida.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {QUALITY_STEPS.map((step, i) => (
              <div className="col-md-6 col-lg-3 wow animate__animated animate__fadeInUp" data-wow-delay={i > 0 ? `${i * 0.1}s` : undefined} key={step.title}>
                <div className="d-flex flex-column h-100 border-radius-25 overflow-hidden">
                  <div className={`${step.domeClass} bg-darken-35 p-4 text-center`}>
                    <Image src={step.icon} alt="" width={80} height={80} className="icon-80" />
                  </div>
                  <div className={`${step.bgClass} pt-0 px-4 pb-5 text-center flex-grow-1 d-flex flex-column`}>
                    <h4 className="text-white mb-3">{step.title}</h4>
                    <p className="text-white mb-0">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-color-2 py-5 py-md-7">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow animate__animated animate__fadeInUp">
              <Image src="/images/aca/img-innovacion.png" alt="Innovación ACA" width={640} height={480} className="img-fluid border-radius-20" />
            </div>
            <div className="col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <h2 className="text-white mb-4">Innovación que acompaña el futuro</h2>
              <p className="text-white mb-0">
                Invertimos en tecnología y desarrollo constante para mejorar nuestros procesos, adaptarnos a las
                nuevas necesidades del mercado y seguir creciendo junto a nuestras marcas y socios comerciales.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 py-md-7">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-7 wow animate__animated animate__fadeInUp">
              <div className="d-flex align-items-center gap-4 mb-4 mx-xxl-2">
                <Image src="/images/aca/logo-aca-iso-color.svg" alt="ACA" width={100} height={100} className="mw-100 mh-100 logo-grayscale flex-shrink-0" />
                <h2 className="mb-0 text-start">
                  El respaldo de una organización <span>con más de cien años de historia</span>
                </h2>
              </div>
              <p className="mb-0">
                Nuestra línea de Alimentos Balanceados forma parte de Asociación de Cooperativas Argentinas, una
                organización que desde hace más de un siglo impulsa el desarrollo productivo del país a través del
                trabajo cooperativo. Compartimos una visión basada en el compromiso, la construcción de valor y el
                desarrollo sostenible de largo plazo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-color-8 py-5 py-md-7">
        <div className="container">
          <div className="row g-5">
            {TRACK_RECORD.map((item, i) => (
              <Fragment key={item.text}>
                {i > 0 && (
                  <div className="col-lg-auto d-none d-lg-flex align-items-center">
                    <div className="vr" />
                  </div>
                )}
                <div
                  className="col-lg d-flex align-items-center gap-3 wow animate__animated animate__fadeInUp"
                  data-wow-delay={i > 0 ? `${i * 0.1}s` : undefined}
                >
                  <Image src={item.icon} alt="" width={50} height={50} className={`mw-50 mh-100 ${item.grayscale ? 'logo-grayscale' : ''}`} />
                  <h6 className="mb-0">{item.text}</h6>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <BrandsGrid subtitle />

      <section className="py-5 py-md-7 join-network-hero">
        <div className="container">
          <div className="row py-6 py-md-7">
            <div className="col-lg-6 wow animate__animated animate__fadeInUp">
              <div className="d-flex align-items-center gap-3 mb-4">
                <Image src="/images/aca/icono-construimos.svg" alt="" width={80} height={80} className="icon-80 flex-shrink-0" />
                <h2 className="text-white mb-0">Construimos valor pensando en el largo plazo</h2>
              </div>
              <p className="text-white mb-4">
                Creemos que crecer implica hacerlo de manera responsable. Por eso trabajamos con una mirada de
                largo plazo que integra la calidad de nuestros productos, el cuidado de los recursos, el
                desarrollo de las personas y la mejora continua de nuestros procesos.
              </p>
              <Link href="/sostenibilidad" className="btn btn-primary">
                Conocé nuestro compromiso con la sustentabilidad
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
