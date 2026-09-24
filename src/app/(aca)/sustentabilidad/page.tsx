import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sustentabilidad',
  description: 'El compromiso de ACA Alimentos con la sustentabilidad a lo largo de todo el ciclo del producto.',
};

const PRODUCT_CYCLE = [
  { icon: '/images/aca/icono-materias-primas.svg', title: 'Materias primas', text: 'Trabajamos con ingredientes seleccionados para desarrollar formulaciones nutricionales equilibradas.', reverse: true },
  { icon: '/images/aca/icono-produccion.svg', title: 'Producción', text: 'Promovemos la optimización continua de procesos y recursos.', reverse: false },
  { icon: '/images/aca/icono-nutricion.svg', title: 'Nutrición', text: 'Desarrollamos productos pensados para acompañar el bienestar de perros y gatos.', reverse: true },
  { icon: '/images/aca/icono-empaques.svg', title: 'Empaques', text: 'Nuestros envases están diseñados para ser 100% reciclables.', reverse: false },
  { icon: '/images/aca/icono-reciclabilidad.svg', title: 'Reciclabilidad', text: 'Buscamos impulsar una cultura de recuperación y valorización de materiales.', reverse: true },
  { icon: '/images/aca/icono-mejora-continua.svg', title: 'Mejora continua', text: 'Seguimos incorporando iniciativas que fortalezcan nuestro desempeño ambiental y operativo.', reverse: false },
];

const ACTION_LINES = [
  { icon: '/images/aca/icono-gestion-recursos.svg', domeClass: 'dome-16 bg-color-16', bgClass: 'bg-color-16', title: 'Gestión responsable de recursos', text: 'Trabajamos para optimizar el uso de recursos en nuestros procesos.' },
  { icon: '/images/aca/icono-economia-circular.svg', domeClass: 'dome-6 bg-color-6', bgClass: 'bg-color-6', title: 'Economía Circular', text: 'Promovemos iniciativas orientadas a la reutilización y recuperación de materiales.' },
  { icon: '/images/aca/icono-innovacion.svg', domeClass: 'dome-17 bg-color-17', bgClass: 'bg-color-17', title: 'Innovación', text: 'Buscamos oportunidades para seguir evolucionando nuestros productos y procesos.' },
  { icon: '/images/aca/icono-desarrollo-largo-plazo.svg', domeClass: 'dome-15 bg-color-15', bgClass: 'bg-color-15', title: 'Desarrollo de largo plazo', text: 'Tomamos decisiones pensando en el impacto futuro de nuestra actividad.' },
];

export default function SustentabilidadPage() {
  return (
    <>
      <section className="py-5 py-md-7 sustainability-hero">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 wow animate__animated animate__fadeInUp">
              <h1 className="text-white mb-0">Construimos valor con una mirada sustentable</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-color-17 py-5 py-md-7">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-3 text-center wow animate__animated animate__fadeIn">
              <Image src="/images/aca/icono-sustentabilidad2.svg" alt="Sustentabilidad" width={150} height={150} className="icon-150" />
            </div>
            <div className="col-lg-7">
              <p className="text-white wow animate__animated animate__fadeInUp">
                Entendemos la <strong>sustentabilidad</strong> como{' '}
                <strong>
                  una forma de trabajar que integra la calidad de nuestros productos, el cuidado de los recursos y
                  el compromiso con las personas y comunidades con las que nos vinculamos.
                </strong>
              </p>
              <p className="text-white wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                Trabajamos con una visión de largo plazo, impulsando iniciativas que nos permitan seguir creciendo
                de <strong>manera responsable y generar un impacto positivo en cada etapa de nuestro negocio.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 py-md-7">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow animate__animated animate__fadeInUp">
              <Image src="/images/aca/img-nuestra-forma.jpg" alt="Nuestra forma de hacer las cosas" width={640} height={480} className="img-fluid border-radius-20" />
            </div>
            <div className="col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <h2 className="mb-4">
                La sustentabilidad como parte de
                <br />
                <span>nuestra forma de hacer las cosas</span>
              </h2>
              <p className="mb-4">
                En <strong>ACA</strong> entendemos que el crecimiento sostenible se construye a través de
                decisiones concretas que atraviesan toda nuestra actividad.
              </p>
              <p className="mb-0">
                Desde la selección de materias primas hasta el diseño de nuestros empaques, buscamos generar valor
                de manera responsable, promoviendo la mejora continua de nuestros procesos y el uso eficiente de
                los recursos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-color-8 py-5 py-md-7">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="text-center wow animate__animated animate__fadeInUp">
                Nuestro compromiso a lo largo del <span className="text-color-6">ciclo del producto</span>
              </h2>
            </div>
          </div>
          <div className="steps-grid">
            {PRODUCT_CYCLE.map((step, i) => (
              <div
                className={`step-item ${step.reverse ? 'step-item-reverse' : ''} step-col-${i + 1}`}
                key={step.title}
              >
                <div className="step-label wow animate__animated animate__fadeInUp">
                  <h6 className="text-color-17 mb-2">{step.title}</h6>
                  <p className="fs-14 mb-0 pb-0">{step.text}</p>
                </div>
                <span className="step-dot rounded-circle bg-color-17 my-3" />
                <div className="step-circle-wrap wow animate__animated animate__fadeInUp">
                  <div className="step-circle">
                    <svg
                      className={`step-arc ${step.reverse ? 'step-arc-top' : 'step-arc-bottom'}`}
                      viewBox="0 0 200 200"
                      aria-hidden="true"
                    >
                      <circle cx="100" cy="100" r="100" strokeDasharray="175 500" />
                    </svg>
                    <Image src={step.icon} alt="" fill style={{ objectFit: 'contain' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 recyclable-packaging">
        <div className="container py-lg-5">
          <div className="row">
            <div className="col-lg-6 wow animate__animated animate__fadeInUp">
              <div className="d-flex align-items-center gap-3 mb-4">
                <Image src="/images/aca/icono-empaque-reciclable.svg" alt="" width={40} height={40} className="icon-40 flex-shrink-0" />
                <h2 className="text-white mb-0">Empaque 100% reciclable</h2>
              </div>
              <p className="text-white mb-0">
                Creemos que cada mejora cuenta. Por eso trabajamos con envases diseñados para ser 100%
                reciclables, promoviendo una gestión más responsable de los materiales y acompañando los
                principios de la economía circular.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 py-md-7">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="wow animate__animated animate__fadeInUp">
                Nuestras <span className="text-color-6">líneas de acción</span>
              </h2>
              <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                La sustentabilidad es un proceso de mejora continua. Por eso seguimos desarrollando proyectos e
                iniciativas que nos permitan fortalecer nuestro desempeño ambiental, optimizar nuestros procesos y
                continuar construyendo valor para las generaciones futuras.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {ACTION_LINES.map((line, i) => (
              <div className="col-md-6 col-lg-3 wow animate__animated animate__fadeInUp" data-wow-delay={i > 0 ? `${i * 0.1}s` : undefined} key={line.title}>
                <div className="d-flex flex-column h-100 border-radius-25 overflow-hidden">
                  <div className={`${line.domeClass} bg-darken-35 p-4 text-center`}>
                    <Image src={line.icon} alt="" width={80} height={80} className="icon-80" />
                  </div>
                  <div className={`${line.bgClass} pt-0 px-4 pb-5 text-center flex-grow-1 d-flex flex-column`}>
                    <h4 className="text-white mb-3">{line.title}</h4>
                    <p className="text-white mb-0">{line.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
