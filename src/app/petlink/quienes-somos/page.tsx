import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getSection } from '@/lib/api/sections';

export const metadata: Metadata = {
  title: 'Quiénes Somos',
  description: 'Conocé Petlink: alimento que acompaña la vida compartida con tu mascota.',
};

const SHARED_LIFE = [
  { image: '/images/petlink/img-vida-compartida-01.jpg', title: 'Cada etapa trae nuevas necesidades', text: 'Las necesidades nutricionales cambian con el crecimiento y el paso del tiempo. Por eso desarrollamos alimentos pensados para acompañar cada etapa de la vida de perros y gatos.' },
  { image: '/images/petlink/img-vida-compartida-02.jpg', title: 'La alimentación es nuestra forma de fortalecer el vínculo', text: 'Alimentar es mucho más que responder a una necesidad. Es un momento cotidiano que fortalece la confianza, crea rutinas y refuerza el vínculo entre las personas y sus mascotas.' },
];

const GUIDING_PRINCIPLES = [
  { icon: '/images/petlink/icono-guia-01.png', title: 'Cercanía', text: 'Diseñamos productos pensando en la vida real de las personas y sus mascotas.' },
  { icon: '/images/petlink/icono-guia-02.png', title: 'Alegría', text: 'Disfrutar juntos también forma parte de una vida plena, para las personas y para sus mascotas.' },
  { icon: '/images/petlink/icono-guia-03.png', title: 'Bienestar', text: 'Entendemos el bienestar como el resultado de una buena alimentación, cuidados diarios y experiencias compartidas.' },
];

export default async function PetlinkQuienesSomosPage() {
  const section = await getSection('petlink');

  return (
    <>
      <section className="py-5 py-md-7 about-hero">
        <div className="container">
          <div className="row py-6 py-md-7">
            <div className="col-lg-7 wow animate__animated animate__fadeInUp">
              <h1 className="text-white">Alimento que acompaña la vida compartida.</h1>
              <p className="fs-20 text-white mb-0">
                Creemos que una buena alimentación también fortalece los momentos que comparten todos los días.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-5 py-md-7">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow animate__animated animate__fadeInUp">
              <Image src="/images/petlink/img-por-que-elegirnos.jpg" alt="Por qué elegir Petlink" width={640} height={480} className="img-fluid border-radius-20" />
            </div>
            <div className="col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <Image src="/images/petlink/logo-petlink.svg" alt="Petlink" width={200} height={80} className="mw-200 h-auto mb-4" />
              <h2 className="fs-48">¿Por qué elegirnos?</h2>
              <p className="fs-24 mb-0">
                Tu mascota es una parte esencial de tu vida. Comparten paseos, juegos, viajes, descanso y nuevas
                experiencias. Petlink nace para acompañar esa forma de vivir con ellos, desarrollando alimentos
                pensados para responder a sus necesidades nutricionales mientras siguen siendo parte de cada
                aventura.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="shared-life" className="py-5 py-md-7">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center wow animate__animated animate__fadeInUp">
              <hr className="heading-hr text-color-1 mx-auto" />
              <h2>Nuestra forma de entender la vida compartida</h2>
            </div>
          </div>
          <div className="row g-4">
            {SHARED_LIFE.map((item, i) => (
              <div className="col-lg-4 wow animate__animated animate__fadeInUp" data-wow-delay={i > 0 ? `${i * 0.1}s` : undefined} key={item.title}>
                <div className="h-100 border-radius-25 bg-color-2 overflow-hidden">
                  <Image src={item.image} alt="" width={400} height={280} className="img-fluid w-100" />
                  <div className="p-4">
                    <h4 className="text-color-1">{item.title}</h4>
                    <p className="fs-18 text-white mb-0">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-lg-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
              <div className="h-100 border-radius-25 bg-color-2 overflow-hidden">
                <Image src="/images/petlink/img-vida-compartida-03.jpg" alt="" width={400} height={280} className="img-fluid w-100" />
                <div className="p-4">
                  <h4 className="text-color-1">Cada vínculo es único</h4>
                  <p className="fs-18 text-white mb-4">
                    Algunos disfrutan los paseos, otros los juegos, las aventuras o la tranquilidad de estar en
                    casa.
                  </p>
                  <hr className="text-color-1 opacity-50" />
                  <p className="fs-18 text-white mb-2">Encontrá consejos para fortalecer el vínculo con tu mascota.</p>
                  <Link href="/petlink/blog" className="text-color-1 fw-bold text-decoration-none">
                    Leer más →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-guides-us" className="py-5 py-md-7">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center wow animate__animated animate__fadeInUp">
              <hr className="heading-hr text-color-1 mx-auto" />
              <h2>Lo que nos guía</h2>
            </div>
          </div>
          <div className="row gx-4 gy-5 text-center">
            {GUIDING_PRINCIPLES.map((item, i) => (
              <div className="col-md-6 col-lg-4 wow animate__animated animate__fadeInUp" data-wow-delay={i > 0 ? `${i * 0.1}s` : undefined} key={item.title}>
                <Image src={item.icon} alt="" width={150} height={150} className="icon-150 mb-3" />
                <h4>{item.title}</h4>
                <p className="fs-18 mb-0">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="who-its-for" className="py-5 py-md-7">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow animate__animated animate__fadeInUp">
              <Image src="/images/petlink/logo-petlink.svg" alt="Petlink" width={200} height={80} className="mw-200 h-auto mb-4" />
              <h2 className="text-color-2 mb-4">fue pensada para quienes...</h2>
              <ul className="fs-24 mb-4">
                <li>Ven a su mascota como un compañero de vida.</li>
                <li>Buscan una alimentación que impulse un estilo de vida compartido.</li>
                <li>Quieren acompañar su bienestar dentro y fuera de casa.</li>
              </ul>
              <p className="fs-24 fw-bold text-color-2 mb-4">¡Queremos acompañarte!</p>
              <div className="d-flex align-items-center gap-3">
                <h2 className="h3 text-color-2 mb-0">Seguinos</h2>
                {section?.instagram && (
                  <a
                    href={section.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-circle d-flex align-items-center justify-content-center icon-80 bg-color-1 text-color-2"
                    aria-label="Instagram"
                  >
                    <i className="bi bi-instagram fs-40" />
                  </a>
                )}
                {section?.facebook && (
                  <a
                    href={section.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-circle d-flex align-items-center justify-content-center icon-80 bg-color-1 text-color-2"
                    aria-label="Facebook"
                  >
                    <i className="bi bi-facebook fs-40" />
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
