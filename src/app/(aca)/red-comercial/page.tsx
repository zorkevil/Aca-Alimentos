import type { Metadata } from 'next';
import Image from 'next/image';
import BrandsGrid from '@/components/aca/BrandsGrid';
import RedComercialForm from '@/components/aca/RedComercialForm';

export const metadata: Metadata = {
  title: 'Red Comercial',
  description: 'Sumate a la red comercial de ACA Alimentos: distribuidores, veterinarias, mayoristas, pet shops y forrajerías.',
};

const WHO_CAN_JOIN = [
  { icon: '/images/aca/icono-distribuidores.svg', domeClass: 'dome-1 bg-color-1', bgClass: 'bg-color-1', title: 'Distribuidores', text: 'Empresas con capacidad de desarrollo comercial y cobertura regional.' },
  { icon: '/images/aca/icono-veterinarias.svg', domeClass: 'dome-5 bg-color-5', bgClass: 'bg-color-5', title: 'Veterinarias', text: 'Profesionales y centros veterinarios interesados en incorporar nuestras marcas.' },
  { icon: '/images/aca/icono-mayoristas.svg', domeClass: 'dome-2 bg-color-2', bgClass: 'bg-color-2', title: 'Mayoristas', text: 'Operadores con foco en abastecimiento y distribución.' },
  { icon: '/images/aca/icono-pet-shops.svg', domeClass: 'dome-15 bg-color-15', bgClass: 'bg-color-15', title: 'Pet Shops', text: 'Comercios especializados que buscan ampliar su propuesta de valor.' },
  { icon: '/images/aca/icono-forrajerias.svg', domeClass: 'dome-16 bg-color-16', bgClass: 'bg-color-16', title: 'Forrajerías', text: 'Puntos de venta que acompañan el crecimiento del mercado pet.' },
];

const WHY_WORK_WITH_US = [
  { icon: '/images/aca/logo-aca-iso-color.svg', tint: true, title: 'Respaldo institucional', text: 'Formamos parte de ACA Asociación de Cooperativas Argentinas, una organización con más de 100 años de trayectoria.' },
  { icon: '/images/aca/icono-propuestas-diferenciadas.svg', title: 'Marcas con propuestas diferenciadas', text: 'Contamos con distintas líneas desarrolladas para responder a diferentes perfiles de consumidores y segmentos del mercado.' },
  { icon: '/images/aca/icono-vision.svg', title: 'Visión de largo plazo', text: 'Construimos relaciones comerciales orientadas al crecimiento sostenido.' },
  { icon: '/images/aca/icono-red.svg', title: 'Acompañamiento comercial', text: 'Trabajamos junto a nuestros socios para impulsar el desarrollo de cada negocio.' },
  { icon: '/images/aca/icono-produccion-argentina.svg', title: 'Producción argentina', text: 'Capacidad productiva propia orientada a garantizar continuidad y crecimiento.' },
];

export default function RedComercialPage() {
  return (
    <>
      <section className="py-5 py-md-7 commercial-network-hero">
        <div className="container">
          <div className="row py-6 py-md-7">
            <div className="col-lg-6 wow animate__animated animate__fadeInUp">
              <h1 className="text-white">Sumate a nuestra red comercial</h1>
              <p className="fs-20 text-white mb-3">
                Impulsamos el crecimiento de nuestras marcas de alimentos balanceados junto a distribuidores,
                veterinarias, pet shops y forrajerías de todo el país.
              </p>
              <p className="fs-20 fw-bold text-white mb-4">
                Si buscás incorporar productos con respaldo institucional, visión de largo plazo y oportunidades
                de desarrollo comercial, queremos conocerte.
              </p>
              <a href="#form-red-comercial" className="btn btn-primary">
                Quiero que me contacten
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-color-2 py-5 py-md-7">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow animate__animated animate__fadeInUp">
              <h2 className="text-white mb-4">
                Crecemos junto a quienes <span>comparten nuestra visión</span>
              </h2>
              <p className="text-white mb-4">
                En <strong>ACA</strong> creemos que las relaciones comerciales más sólidas se construyen a largo
                plazo.
              </p>
              <p className="text-white mb-0">
                Por eso desarrollamos vínculos basados en la confianza, el acompañamiento y el crecimiento
                conjunto, trabajando junto a empresas y profesionales que buscan ofrecer productos de calidad a
                sus clientes.
              </p>
            </div>
            <div className="col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <Image src="/images/aca/img-nuestra-vision.jpg" alt="Red comercial ACA" width={640} height={480} className="img-fluid border-radius-20" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-color-8 py-5 py-md-7">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="wow animate__animated animate__fadeInUp">
                ¿Quiénes pueden formar <span className="text-color-6">parte de nuestra red?</span>
              </h2>
            </div>
          </div>
          <div className="row g-4">
            {WHO_CAN_JOIN.map((item, i) => (
              <div className="col-md-6 col-lg wow animate__animated animate__fadeInUp" data-wow-delay={i > 0 ? `${i * 0.1}s` : undefined} key={item.title}>
                <div className="d-flex flex-column h-100 border-radius-25 overflow-hidden">
                  <div className={`${item.domeClass} bg-darken-35 p-4 text-center`}>
                    <Image src={item.icon} alt="" width={80} height={80} className="icon-80" />
                  </div>
                  <div className={`${item.bgClass} pt-0 px-4 pb-5 text-center flex-grow-1 d-flex flex-column`}>
                    <h4 className="text-white mb-3">{item.title}</h4>
                    <p className="text-white mb-0">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 py-md-7">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="wow animate__animated animate__fadeInUp">
                ¿Por qué trabajar con nuestros <span className="text-color-6">Alimentos Balanceados?</span>
              </h2>
            </div>
          </div>
          <div className="row g-4 mb-5">
            {WHY_WORK_WITH_US.map((item, i) => (
              <div className="col-md-4 col-lg wow animate__animated animate__fadeInUp" data-wow-delay={i > 0 ? `${i * 0.1}s` : undefined} key={item.title}>
                <Image src={item.icon} alt="" width={60} height={60} className={`icon-60 mb-3 ${item.tint ? 'logo-tint-18' : ''}`} />
                <h5 className="mb-2">{item.title}</h5>
                <p className="mb-0">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#form-red-comercial" className="btn btn-primary">
              Quiero sumarme a la red comercial
            </a>
          </div>
        </div>
      </section>

      <BrandsGrid shaded />

      <section id="form-red-comercial" className="py-5 py-md-7">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow animate__animated animate__fadeInUp">
              <h2 className="mb-4">
                Buscamos socios <span>para seguir creciendo</span>
              </h2>
              <p className="mb-4">
                Estamos ampliando nuestra presencia en distintas regiones del país y queremos conectar con
                empresas y profesionales interesados en desarrollar nuestras marcas.
              </p>
              <p className="mb-0">
                Si creés que podemos construir oportunidades juntos,{' '}
                <strong>completá el siguiente formulario y nuestro equipo comercial se pondrá en contacto.</strong>
              </p>
            </div>
            <div className="col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <RedComercialForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
