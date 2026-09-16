import type { Metadata } from 'next';
import Image from 'next/image';
import { getSection } from '@/lib/api/sections';

export const metadata: Metadata = {
  title: 'Quiénes Somos',
  description: 'Conocé Cooperación: nutrición equilibrada y compromiso ambiental para tu mascota.',
};

const CARE_APPROACH = [
  { icon: '/images/cooperacion/icono-cuidado-01.png', title: 'Alimentación equilibrada', text: 'La buena nutrición es la base para una vida activa. Por eso desarrollamos alimentos completos y balanceados que aportan lo que tu mascota necesita para disfrutar cada día.' },
  { icon: '/images/cooperacion/icono-cuidado-02.png', title: 'Cada etapa importa', text: 'Cachorro o adulto, cada etapa tiene necesidades diferentes. Nuestras fórmulas acompañan su crecimiento y ayudan a mantenerlo fuerte y lleno de energía.' },
  { icon: '/images/cooperacion/icono-cuidado-03.png', title: 'Que disfrute la comida', text: 'Una buena alimentación también empieza por el gusto. Elaboramos fórmulas pensadas para que comer sea un momento que tu mascota espere todos los días.' },
  { icon: '/images/cooperacion/icono-cuidado-04.png', title: 'Elegir con tranquilidad', text: 'Encontrar el alimento adecuado debe ser una decisión simple, para que puedas enfocarte en disfrutar cada momento con él, verlo sano y activo.' },
];

const GUIDING_PRINCIPLES = [
  { image: '/images/cooperacion/img-guia-01.jpg', title: 'Nutrición simple y completa', text: 'Desarrollamos alimentos completos y balanceados para que cuidar la alimentación de tu mascota sea una elección simple.' },
  { image: '/images/cooperacion/img-guia-02.jpg', title: 'Cercanía', text: 'Entendemos que cada mascota forma parte de una familia y queremos acompañarla todos los días.' },
  { image: '/images/cooperacion/img-guia-03.jpg', title: 'Compromiso con el ambiente', text: 'Creemos que cuidar a las mascotas también implica cuidar el entorno en el que viven. Por eso elegimos envases 100% reciclables y avanzamos hacia una producción cada vez más responsable.' },
];

export default async function CooperacionQuienesSomosPage() {
  const section = await getSection('cooperacion');

  return (
    <>
      <section className="py-5 py-md-7 about-hero">
        <div className="container">
          <div className="row py-6 py-md-7">
            <div className="col-lg-6 wow animate__animated animate__fadeInUp">
              <h1 className="text-white">Creemos que cuidar también puede ser simple.</h1>
              <p className="fs-20 text-white mb-0">Cooperación está pensada para formar parte de la rutina familiar de todos los días.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="bg-gradient-6-4 py-5 py-md-7">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow animate__animated animate__fadeInUp">
              <Image src="/images/cooperacion/img-por-que-elegirnos.png" alt="Por qué elegir Cooperación" width={640} height={480} className="img-fluid border-radius-20" />
            </div>
            <div className="col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <Image src="/images/cooperacion/logo-cooperacion-color.svg" alt="Cooperación" width={280} height={100} className="w-75 h-auto mb-4" />
              <h2 className="mb-4">¿Por qué elegirnos?</h2>
              <p className="fs-24 mb-0">
                Cada mascota necesita una alimentación adecuada para desarrollarse y mantenerse saludable.
                Cooperación nace con la idea de ofrecer una opción confiable para quienes buscan cuidar a sus
                perros y gatos todos los días, con alimentos formulados para acompañar cada etapa de su vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-we-understand-care" className="py-5 py-md-7">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center wow animate__animated animate__fadeInUp">
              <hr className="heading-hr mx-auto" />
              <h2>Nuestra forma de entender el cuidado</h2>
            </div>
          </div>
          <div className="row gx-4 gy-5 text-center">
            {CARE_APPROACH.map((item, i) => (
              <div className="col-md-6 col-lg-3 wow animate__animated animate__fadeInUp" data-wow-delay={i > 0 ? `${i * 0.1}s` : undefined} key={item.title}>
                <Image src={item.icon} alt="" width={200} height={200} className="img-fluid mw-200 mb-3" />
                <h3 className="text-color-1 mb-2">{item.title}</h3>
                <p className="fs-18 mb-0">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="what-guides-us" className="bg-color-6 py-5 py-md-7">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center wow animate__animated animate__fadeInUp">
              <hr className="heading-hr mx-auto" />
              <h2>Lo que nos guía</h2>
            </div>
          </div>
          <div className="row g-4">
            {GUIDING_PRINCIPLES.map((item, i) => (
              <div className="col-lg-4 wow animate__animated animate__fadeInUp" data-wow-delay={i > 0 ? `${i * 0.1}s` : undefined} key={item.title}>
                <div className="h-100 border-radius-20 bg-white overflow-hidden">
                  <Image src={item.image} alt="" width={400} height={280} className="img-fluid w-100" />
                  <div className="p-4">
                    <h3 className="text-color-1 mb-3">{item.title}</h3>
                    <p className="fs-18 mb-0">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="recyclable-packaging" className="bg-color-4 py-5 py-md-7">
        <div className="container">
          <div className="row bg-color-9 border-radius-30 overflow-hidden align-items-center">
            <div className="col-lg-6 order-2 order-lg-1 p-5 wow animate__animated animate__fadeInUp">
              <h2 className="fs-52 text-color-1 mb-4">CONOCÉ POR QUÉ ELEGIMOS ENVASES 100% RECICLABLES</h2>
              <a href="/cooperacion/sustentabilidad" className="btn btn-primary">
                Leer más
              </a>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 p-5 d-flex align-items-center justify-content-center wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <Image src="/images/cooperacion/img-reciclable.png" alt="" width={300} height={300} className="img-fluid mw-300 border-radius-20" />
            </div>
          </div>
        </div>
      </section>

      <section id="who-its-for" className="py-5 py-md-7">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow animate__animated animate__fadeInUp">
              <Image src="/images/cooperacion/logo-cooperacion-color.svg" alt="Cooperación" width={280} height={100} className="w-75 h-auto mb-4" />
              <h2 className="text-white mb-4">fue pensada para quienes...</h2>
              <ul className="fs-24 mb-4">
                <li>No tienen tiempo de cocinar, pero quieren que las mascotas de la familia coman rico.</li>
                <li>Valoran una nutrición completa y equilibrada.</li>
                <li>Se interesan por el medio ambiente.</li>
              </ul>
              <a href="/cooperacion/contacto" className="btn btn-primary mb-4">
                Queremos acompañarte
              </a>
              <div className="d-flex align-items-center gap-3">
                <h2 className="h3 text-white mb-0">¡Seguinos!</h2>
                {section?.facebook && (
                  <a
                    href={section.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-circle d-flex align-items-center justify-content-center icon-80 bg-color-1 text-white"
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
                    className="rounded-circle d-flex align-items-center justify-content-center icon-80 bg-color-1 text-white"
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
