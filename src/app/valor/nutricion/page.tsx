import { Fragment } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nutrición',
  description: 'Descubrí qué necesita tu mascota: el valor de la nutrición en cada etapa de su vida.',
};

type Benefit = { icon: string; title: string; text: string };
type Segment = {
  id: string;
  navLabel: string;
  colorNum: number;
  protein: string;
  proteinSmall?: string;
  audience: string;
  audienceSmall?: string;
  image: string;
  alt: string;
  benefits: Benefit[];
  shaded: boolean;
};

const SEGMENTS: Segment[] = [
  {
    id: 'adult-cats',
    navLabel: 'Gatos Adultos',
    colorNum: 3,
    protein: 'PESCADO BLANCO',
    audience: 'GATOS ADULTOS',
    audienceSmall: '(MÁS DE 12 MESES)',
    image: '/images/valor/img-gatos-adultos.png',
    alt: 'Valor Gatos Adultos Pescado Blanco',
    shaded: true,
    benefits: [
      { icon: '/images/valor/icono-gatos-adultos-01.png', title: 'Pelaje suave y brillante', text: 'La combinación de Omega 3 y 6 favorece la salud de la piel.' },
      { icon: '/images/valor/icono-gatos-adultos-02.png', title: 'Salud osteoarticular', text: 'Su fórmula aporta nutrientes clave para huesos y articulaciones.' },
      { icon: '/images/valor/icono-gatos-adultos-03.png', title: 'Menor olor y volumen de las heces', text: 'Contiene extracto de Yucca schidigera.' },
      { icon: '/images/valor/icono-gatos-adultos-04.png', title: 'Control de bolas de pelo', text: 'Incorpora fibras que ayudan a reducir su formación en el tracto digestivo.' },
    ],
  },
  {
    id: 'kitten-cats',
    navLabel: 'Gatos Kitten',
    colorNum: 4,
    protein: 'PESCADO BLANCO',
    audience: 'GATOS KITTEN',
    audienceSmall: '(HASTA 12 MESES)',
    image: '/images/valor/img-gatos-kitten.png',
    alt: 'Valor Gatos Kitten Pescado Blanco',
    shaded: false,
    benefits: [
      { icon: '/images/valor/icono-gatos-kitten-01.png', title: 'Óptimo crecimiento', text: 'Proteínas de alto valor biológico, vitaminas y minerales que favorecen el crecimiento y desarrollo. Con DHA para estimular el cerebro y la visión.' },
      { icon: '/images/valor/icono-gatos-kitten-02.png', title: 'Colabora con la inmunidad', text: 'Con prebióticos FOS, MOS y betaglucanos que ayudan a fortalecer el sistema inmune y la microbiota intestinal.' },
      { icon: '/images/valor/icono-gatos-kitten-03.png', title: 'Visión y corazón saludables', text: 'Con taurina, un nutriente esencial para el desarrollo de la visión y el correcto funcionamiento cardíaco.' },
    ],
  },
  {
    id: 'urinary-cats',
    navLabel: 'Gatos Urinary',
    colorNum: 5,
    protein: 'CARNE DE POLLO',
    audience: 'URINARY',
    audienceSmall: '(PARA GATOS ADULTOS)',
    image: '/images/valor/img-gatos-urinary.png',
    alt: 'Valor Gatos Urinary Carne de Pollo',
    shaded: true,
    benefits: [
      { icon: '/images/valor/icono-gatos-urinary-01.png', title: 'Sistema urinario saludable', text: 'Proteínas de calidad, bajo contenido de magnesio y control del pH urinario para el cuidado del sistema urinario.' },
      { icon: '/images/valor/icono-gatos-urinary-02.png', title: 'Visión y corazón saludables', text: 'Con taurina, un nutriente esencial para la visión y el correcto funcionamiento cardíaco.' },
      { icon: '/images/valor/icono-gatos-urinary-03.png', title: 'Defensas naturales', text: 'Ayuda a fortalecer el sistema inmunológico y la salud general.' },
      { icon: '/images/valor/icono-gatos-urinary-04.png', title: 'Masa muscular compacta', text: 'Más del 80% de proteínas de origen animal y carnitina para mantener una musculatura fuerte.' },
    ],
  },
  {
    id: 'adult-mini-dogs',
    navLabel: 'Perros Adultos y Mini',
    colorNum: 6,
    protein: 'POLLO DE CAMPO',
    audience: 'PERROS ADULTOS Y MINI',
    image: '/images/valor/img-perros-adultos-y-mini.png',
    alt: 'Valor Perros Adultos y Mini Pollo de Campo',
    shaded: false,
    benefits: [
      { icon: '/images/valor/icono-perros-adultos-y-mini-01.png', title: 'Proteínas de alta asimilación', text: 'Proteínas de alto valor biológico, calcio y fósforo para músculos, huesos y dientes saludables.' },
      { icon: '/images/valor/icono-perros-adultos-y-mini-02.png', title: 'Salud dental', text: 'Con hexametafosfato, que ayuda a prevenir la formación de sarro y placa bacteriana.' },
      { icon: '/images/valor/icono-perros-adultos-y-mini-03.png', title: 'Pelaje suave y brillante', text: 'Omega 3 y 6, vitamina A y zinc para cuidar la piel y mantener el brillo del pelaje.' },
    ],
  },
  {
    id: 'adult-dogs-beef',
    navLabel: 'Perros Adultos',
    colorNum: 7,
    protein: 'CARNE VACUNA',
    audience: 'PERROS ADULTOS',
    audienceSmall: '(MEDIANOS Y GRANDES)',
    image: '/images/valor/img-perros-adultos.png',
    alt: 'Valor Perros Adultos Carne Vacuna',
    shaded: true,
    benefits: [
      { icon: '/images/valor/icono-perros-adultos-01.png', title: 'Proteínas de la mejor calidad', text: 'Proteínas de alto valor biológico y un balance adecuado de calcio y fósforo para músculos, huesos y dientes saludables.' },
      { icon: '/images/valor/icono-perros-adultos-02.png', title: 'Seguridad digestiva', text: 'Con fibras prebióticas que favorecen la digestión y fortalecen las defensas naturales.' },
      { icon: '/images/valor/icono-perros-adultos-03.png', title: 'Protección de las articulaciones', text: 'Condroitina, glucosamina, manganeso y Omega 3 para cuidar las articulaciones y mantener la movilidad.' },
    ],
  },
  {
    id: 'adult-dogs-lamb-sensitive',
    navLabel: 'Perros Adultos Piel Sensible',
    colorNum: 8,
    protein: 'CORDERO',
    proteinSmall: 'DE LA PATAGONIA',
    audience: 'PERROS ADULTOS',
    audienceSmall: '(MEDIANOS Y GRANDES PIEL SENSIBLE)',
    image: '/images/valor/img-perros-adultos-piel-sensible.png',
    alt: 'Valor Perros Adultos Piel Sensible Cordero de la Patagonia',
    shaded: false,
    benefits: [
      { icon: '/images/valor/icono-perros-adultos-piel-sensible-01.png', title: 'Piel y pelo saludables', text: 'Con proteínas de cordero y proteínas hidrolizadas que ayudan a reducir la sensibilidad alimentaria y mantener un pelaje saludable.' },
      { icon: '/images/valor/icono-perros-adultos-piel-sensible-02.png', title: 'Seguridad digestiva', text: 'Con fibras prebióticas que favorecen el funcionamiento digestivo.' },
      { icon: '/images/valor/icono-perros-adultos-piel-sensible-03.png', title: 'Protección de las articulaciones', text: 'Condroitina, glucosamina, manganeso y Omega 3 para cuidar las articulaciones y mantener la movilidad.' },
    ],
  },
  {
    id: 'mini-dogs-lamb',
    navLabel: 'Perros Adultos Mini',
    colorNum: 9,
    protein: 'CORDERO',
    proteinSmall: 'DE LA PATAGONIA',
    audience: 'PERROS ADULTOS',
    audienceSmall: '(PEQUEÑOS Y MINIS)',
    image: '/images/valor/img-perros-adultos-mini.png',
    alt: 'Valor Perros Adultos Mini Cordero de la Patagonia',
    shaded: true,
    benefits: [
      { icon: '/images/valor/icono-perros-adultos-mini-01.png', title: 'Piel y pelo saludables', text: 'Con proteínas de cordero e hidrolizadas que ayudan a reducir la sensibilidad alimentaria y mantener un pelaje suave y brillante.' },
      { icon: '/images/valor/icono-perros-adultos-mini-02.png', title: 'Salud dental', text: 'Con hexametafosfato, que ayuda a prevenir la formación de sarro y placa bacteriana.' },
      { icon: '/images/valor/icono-perros-adultos-mini-03.png', title: 'Visión y funcionamiento cognitivo', text: 'Con DHA proveniente de aceite de pescado, que contribuye a la visión, el aprendizaje y el funcionamiento del sistema nervioso.' },
    ],
  },
  {
    id: 'puppies',
    navLabel: 'Perros Cachorros',
    colorNum: 10,
    protein: 'CARNE + POLLO',
    audience: 'PERROS CACHORROS',
    image: '/images/valor/img-perros-cachorros.png',
    alt: 'Valor Perros Cachorros Carne + Pollo',
    shaded: false,
    benefits: [
      { icon: '/images/valor/icono-perros-cachorros-01.png', title: 'Crecimiento saludable', text: 'Calcio, fósforo, vitaminas y aminoácidos esenciales para un desarrollo equilibrado.' },
      { icon: '/images/valor/icono-perros-cachorros-02.png', title: 'Óptimo desarrollo neuronal', text: 'Con Omega 3, EPA y DHA, que favorecen el aprendizaje y el desarrollo del sistema nervioso.' },
      { icon: '/images/valor/icono-perros-cachorros-03.png', title: 'Defensas naturales fortalecidas', text: 'Vitamina E, selenio y semillas de lino que contribuyen al fortalecimiento del sistema inmune.' },
    ],
  },
];

export default function ValorNutricionPage() {
  return (
    <>
      <section className="py-5 py-md-7 nutricion-hero">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="text-white wow animate__animated animate__fadeInUp">EL VALOR DE LA NUTRICIÓN</h1>
              <p className="lead text-white mb-0 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                Ingredientes naturales, proteínas de origen animal y el balance exacto que tu mascota necesita en
                cada etapa de su vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 py-md-7">
        <div className="container">
          <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-7 wow animate__animated animate__fadeInUp">
              <Image
                src="/images/valor/img-protenia-importa.png"
                alt="La proteína importa: 70% mínimo de proteína de origen animal en todas las líneas"
                width={700}
                height={500}
                className="img-fluid"
              />
            </div>
            <div className="col-lg-5 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <p className="fs-18 mb-4">
                Perros y gatos evolucionaron como carnívoros. Su sistema digestivo está diseñado para procesar
                proteínas animales con mucha mayor eficiencia que las vegetales. Esto significa{' '}
                <strong>más nutrientes aprovechados, músculos mejor mantenidos y menos desperdicio en cada digestión.</strong>
              </p>
              <p className="fs-18 mb-0">
                <strong>Una proteína de origen animal aporta todos los aminoácidos esenciales en las proporciones
                correctas.</strong> Las proteínas vegetales, en cambio, suelen ser incompletas y requieren
                combinaciones complejas para compensar lo que les falta.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-center mb-5 wow animate__animated animate__fadeInUp">
              <h2>
                ELEGÍ EL <span className="text-color-1">VALOR</span> IDEAL PARA TU MASCOTA
              </h2>
            </div>
          </div>
          <div className="row g-3 align-items-stretch">
            {SEGMENTS.map((segment) => (
              <div className="col-12 col-sm-6 col-lg-3 d-flex" key={segment.id}>
                <a
                  href={`#${segment.id}`}
                  className={`btn btn-outline-color-${segment.colorNum} w-100 d-flex align-items-center justify-content-center text-center`}
                >
                  {segment.navLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {SEGMENTS.map((segment) => (
        <section id={segment.id} className={segment.shaded ? 'bg-color-13 py-5 py-md-7' : 'py-5 py-md-7'} key={segment.id}>
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5 text-center wow animate__animated animate__fadeInUp">
                <Image src={segment.image} alt={segment.alt} width={500} height={500} className="img-fluid" />
              </div>
              <div className="col-lg-7 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                <h2 className={`h3 text-color-${segment.colorNum} mb-3`}>
                  {segment.protein} {segment.proteinSmall && <small className="fs-40">{segment.proteinSmall}</small>}
                </h2>
                <h3 className={`h4 d-inline-block bg-color-${segment.colorNum} text-white px-3 py-2 mb-4`}>
                  {segment.audience}{' '}
                  {segment.audienceSmall && <small className="fs-18">{segment.audienceSmall}</small>}
                </h3>
                <div className={`benefit-list text-color-${segment.colorNum} mb-4`}>
                  {segment.benefits.map((benefit) => (
                    <Fragment key={benefit.title}>
                      <Image src={benefit.icon} alt="" width={50} height={50} className="benefit-icon icon-50" />
                      <p className="mb-0">
                        <strong>{benefit.title}:</strong> {benefit.text}
                      </p>
                    </Fragment>
                  ))}
                </div>
                <Link href="/valor/productos" className={`btn btn-outline-color-${segment.colorNum}`}>
                  Ver Producto
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section id="product-bags-cta" className="pt-5 pt-md-7">
        <div className="container text-center">
          <div className="row mb-6">
            <div className="col-12 wow animate__animated animate__fadeInUp">
              <Link href="/valor/productos" className="btn btn-primary">
                Ver todos los productos
              </Link>
            </div>
          </div>
          <div className="row product-bags-row">
            <div className="col-12 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <Image
                src="/images/valor/img-bolsas-alimentos.png"
                alt="Bolsas de productos Valor"
                width={1200}
                height={500}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
