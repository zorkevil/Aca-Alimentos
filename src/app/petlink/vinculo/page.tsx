import { Fragment } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BondGridEffects from '@/components/petlink/BondGridEffects';

export const metadata: Metadata = {
  title: 'Vínculo',
  description: 'Descubrí las distintas formas en que se manifiesta el vínculo con tu mascota.',
};

type Tip = { icon: string; title: string; text: string };
type Bond = { icon: string; iconAlt: string; title: string; text: string; image: string; tips: Tip[] };

const BONDS: Bond[] = [
  {
    icon: '/images/petlink/icono-vinculo-01.svg',
    iconAlt: '/images/petlink/icono-vinculo-01-alt.svg',
    title: 'Compañeros de viaje',
    text: 'Les encanta salir juntos y descubrir lugares nuevos. Disfrutan compartir cada aventura!',
    image: '/images/petlink/img-vinculo-01.jpg',
    tips: [
      { icon: '/images/petlink/icono-vinculo-10.svg', title: 'Planificá el viaje con anticipación', text: 'Si viajás en avión, barco o cruzás fronteras, revisá previamente la documentación, vacunas y requisitos exigidos por cada destino o medio de transporte.' },
      { icon: '/images/petlink/icono-vinculo-01-alt.svg', title: 'Llevá todo lo necesario para su rutina', text: 'Calculá la cantidad de alimento que va a necesitar durante el viaje y transportalo en recipientes bien cerrados para conservar su frescura.' },
      { icon: '/images/petlink/icono-vinculo-11.svg', title: 'No olvides agua y recipientes de viaje', text: 'Contar con bebederos y comederos plegables facilita las paradas y ayuda a mantener una buena hidratación durante todo el recorrido.' },
      { icon: '/images/petlink/icono-vinculo-12.svg', title: 'Elegí destinos aptos para mascotas', text: 'Antes de viajar, verificá si el alojamiento, las playas, parques o actividades permiten el ingreso de mascotas para evitar imprevistos.' },
      { icon: '/images/petlink/icono-vinculo-13.svg', title: 'Pensá en su seguridad y bienestar', text: 'Utilizá sistemas de sujeción adecuados durante los traslados y considerá herramientas como identificaciones actualizadas o dispositivos de rastreo para viajar con mayor tranquilidad.' },
    ],
  },
  {
    icon: '/images/petlink/icono-vinculo-02.svg',
    iconAlt: '/images/petlink/icono-vinculo-02-alt.svg',
    title: 'Compañeros de sillón',
    text: 'Disfrutan momentos tranquilos, series, siestas y compañía. Estar juntos es un gran plan.',
    image: '/images/petlink/img-vinculo-02.jpg',
    tips: [
      { icon: '/images/petlink/icono-vinculo-14.svg', title: 'No olviden moverse juntos', text: 'Aunque disfruten del descanso, la actividad física sigue siendo importante para mantener una buena calidad de vida.' },
      { icon: '/images/petlink/icono-vinculo-15.svg', title: 'Prestá atención a su peso', text: 'Las mascotas con hábitos más tranquilos pueden necesitar un seguimiento especial de su condición corporal y alimentación.' },
      { icon: '/images/petlink/icono-vinculo-16.svg', title: 'Proponé juegos de estimulación mental', text: 'Los desafíos simples ayudan a mantenerlos activos y entretenidos incluso dentro de casa.' },
      { icon: '/images/petlink/icono-vinculo-17.svg', title: 'Facilitá su descanso y movilidad', text: 'Camitas cómodas, mantas y, cuando sea necesario, rampas o escalones pueden ayudar a proteger sus articulaciones y mejorar su bienestar diario.' },
      { icon: '/images/petlink/icono-vinculo-18.svg', title: 'Mantené al día sus cuidados preventivos', text: 'Desparasitantes y tratamientos contra pulgas y garrapatas son parte de los cuidados que necesitan, incluso si pasan mucho tiempo dentro de casa.' },
    ],
  },
  {
    icon: '/images/petlink/icono-vinculo-03.svg',
    iconAlt: '/images/petlink/icono-vinculo-03-alt.svg',
    title: 'Compañeros de aventura',
    text: 'Les gusta el movimiento. Caminatas, running y estar al aire libre son parte de su rutina.',
    image: '/images/petlink/img-vinculo-03.jpg',
    tips: [
      { icon: '/images/petlink/icono-vinculo-19.svg', title: 'Adaptá sus cuidados a su nivel de actividad', text: 'La alimentación, la hidratación y los tiempos de recuperación deben acompañar el esfuerzo que realiza cada día.' },
      { icon: '/images/petlink/icono-vinculo-20.svg', title: 'Prestá atención a las señales de cansancio', text: 'Observar cómo respira, cuánto jadea o cuánto se prolonga su recuperación puede ayudarte a identificar cuándo necesita bajar el ritmo y descansar.' },
      { icon: '/images/petlink/icono-vinculo-21.svg', title: 'Mantenelo hidratado durante toda la actividad', text: 'Llevar agua y ofrecerla regularmente es fundamental, especialmente en días calurosos o durante ejercicios prolongados.' },
      { icon: '/images/petlink/icono-vinculo-12.svg', title: 'Protegé sus patas y articulaciones', text: 'Las superficies calientes, ásperas o los recorridos extensos pueden afectar almohadillas, músculos y articulaciones. Revisarlas después de cada salida ayuda a detectar molestias a tiempo.' },
      { icon: '/images/petlink/icono-vinculo-22.svg', title: 'Preparalo para cada aventura', text: 'Antes de visitar nuevos entornos o realizar actividades especiales, consultá con tu veterinario sobre medidas preventivas, antiparasitarios y cuidados específicos para cada destino.' },
    ],
  },
  {
    icon: '/images/petlink/icono-vinculo-04.svg',
    iconAlt: '/images/petlink/icono-vinculo-04-alt.svg',
    title: 'Compañeros de sueño',
    text: 'Les gusta dormir juntos y compartir la cama, encuentran tranquilidad en la compañía.',
    image: '/images/petlink/img-vinculo-04.jpg',
    tips: [
      { icon: '/images/petlink/icono-vinculo-23.svg', title: 'Respetá sus horas de descanso', text: 'Dormir bien es fundamental para su bienestar físico y emocional. Un sueño de calidad los ayuda a recuperarse y mantenerse activos.' },
      { icon: '/images/petlink/icono-vinculo-17.svg', title: 'Asegurale diferentes espacios para descansar', text: 'Aunque duerma con vos, es importante que tenga alternativas cómodas como una camita, manta o rincón propio para elegir dónde descansar.' },
      { icon: '/images/petlink/icono-vinculo-24.svg', title: 'Facilitá su movilidad', text: 'Rampas, escalones o superficies antideslizantes pueden ayudar a proteger sus articulaciones y brindar mayor seguridad al subir y bajar de la cama o el sillón.' },
      { icon: '/images/petlink/icono-vinculo-11.svg', title: 'Mantené agua fresca a su disposición', text: 'Muchas mascotas se hidratan durante la noche, por lo que es importante que siempre tengan acceso fácil al agua.' },
      { icon: '/images/petlink/icono-vinculo-04-alt.svg', title: 'Observá cambios en sus hábitos de sueño', text: 'Dormir más, menos o cambiar repentinamente sus rutinas de descanso puede ser una señal de que algo merece atención.' },
    ],
  },
  {
    icon: '/images/petlink/icono-vinculo-05.svg',
    iconAlt: '/images/petlink/icono-vinculo-05-alt.svg',
    title: 'Compañeros de aprendizaje',
    text: 'Disfrutan aprender juntos. Les gusta entrenar, descubrir nuevos desafíos y celebrar cada avance.',
    image: '/images/petlink/img-vinculo-05.jpg',
    tips: [
      { icon: '/images/petlink/icono-vinculo-25.svg', title: 'Utilizá refuerzo positivo', text: 'Reconocer y premiar los logros ayuda a construir experiencias positivas y fortalece la confianza.' },
      { icon: '/images/petlink/icono-vinculo-23.svg', title: 'Hacé sesiones cortas y constantes', text: 'Los períodos breves suelen ser más efectivos que los entrenamientos extensos y ayudan a mantener su atención.' },
      { icon: '/images/petlink/icono-vinculo-26.svg', title: 'Celebrá cada avance', text: 'Valorar los progresos, por pequeños que sean, favorece el aprendizaje y fortalece el vínculo.' },
      { icon: '/images/petlink/icono-vinculo-27.svg', title: 'Adaptate a su ritmo', text: 'Cada mascota aprende de manera diferente. Respetar sus tiempos permite construir una experiencia más positiva.' },
      { icon: '/images/petlink/icono-vinculo-28.svg', title: 'Explorá nuevos desafíos juntos', text: 'Desde ejercicios de obediencia hasta juegos de estimulación o actividades recreativas, aprender cosas nuevas puede convertirse en una experiencia compartida.' },
    ],
  },
  {
    icon: '/images/petlink/icono-vinculo-06.svg',
    iconAlt: '/images/petlink/icono-vinculo-06-alt.svg',
    title: 'Compañeros de todos los días',
    text: 'Comparten cada momento de la rutina. Están juntos en casa y en los paseos.',
    image: '/images/petlink/img-vinculo-06.jpg',
    tips: [
      { icon: '/images/petlink/icono-vinculo-23.svg', title: 'Mantené rutinas consistentes', text: 'La previsibilidad ayuda a que se sienta seguro y se adapte mejor a la dinámica del hogar.' },
      { icon: '/images/petlink/icono-vinculo-28.svg', title: 'Dedicale tiempo de calidad', text: 'No hace falta hacer grandes planes para fortalecer el vínculo. Los momentos compartidos del día a día también cuentan.' },
      { icon: '/images/petlink/icono-vinculo-20.svg', title: 'Prestá atención a los cambios', text: 'Las mascotas suelen expresar mucho a través de su comportamiento. Detectar cambios a tiempo puede ayudarte a identificar que algo no está bien.' },
      { icon: '/images/petlink/icono-vinculo-29.svg', title: 'Creá un ambiente confortable', text: 'La temperatura, la ventilación y los espacios de descanso influyen directamente en su bienestar. Un entorno adecuado puede marcar una gran diferencia en su calidad de vida.' },
      { icon: '/images/petlink/icono-vinculo-30.svg', title: 'Acompañá su bienestar con buena alimentación', text: 'La nutrición forma parte de su rutina diaria y contribuye a mantenerlo activo, saludable y lleno de energía.' },
    ],
  },
  {
    icon: '/images/petlink/icono-vinculo-07.svg',
    iconAlt: '/images/petlink/icono-vinculo-07-alt.svg',
    title: 'Compañeros de trabajo',
    text: 'Te acompañan mientras estudiás, trabajás o pasás horas frente a una pantalla. Siempre están cerca.',
    image: '/images/petlink/img-vinculo-07.jpg',
    tips: [
      { icon: '/images/petlink/icono-vinculo-17.svg', title: 'Creá un espacio cómodo cerca tuyo', text: 'Tener un lugar propio les permite acompañarte mientras trabajás sin generar estrés ni interrupciones constantes.' },
      { icon: '/images/petlink/icono-vinculo-04-alt.svg', title: 'Respetá sus momentos de descanso', text: 'Aunque compartan el mismo ambiente, también necesitan espacios de tranquilidad durante el día.' },
      { icon: '/images/petlink/icono-vinculo-23.svg', title: 'Incorporá pausas compartidas', text: 'Unos minutos de juego, paseo o interacción pueden ayudar a despejarse y fortalecer el vínculo.' },
      { icon: '/images/petlink/icono-vinculo-31.svg', title: 'Ayudalo a gastar energía en momentos clave', text: 'Si suele estar muy activo durante reuniones o videollamadas, una caminata, sesión de juego o actividad previa puede ayudarlo a mantenerse más tranquilo.' },
      { icon: '/images/petlink/icono-vinculo-28.svg', title: 'Ofrecé estímulos durante el día', text: 'Juguetes, desafíos simples o actividades de enriquecimiento ayudan a evitar el aburrimiento cuando estás ocupado.' },
    ],
  },
  {
    icon: '/images/petlink/icono-vinculo-08.svg',
    iconAlt: '/images/petlink/icono-vinculo-08-alt.svg',
    title: 'Compañeros de paseo',
    text: 'Les encanta descubrir experiencias nuevas. Cada salida es una oportunidad para explorar.',
    image: '/images/petlink/img-vinculo-08.jpg',
    tips: [
      { icon: '/images/petlink/icono-vinculo-32.svg', title: 'Elegí la correa adecuada para cada situación', text: 'En espacios urbanos suele ser útil una correa más corta para tener mayor control, mientras que en parques o lugares habilitados una correa larga puede brindar más libertad para explorar.' },
      { icon: '/images/petlink/icono-vinculo-33.svg', title: 'Convertí el paseo en una experiencia de exploración', text: 'Más allá de caminar, salir también es una oportunidad para descubrir nuevos aromas, sonidos y estímulos.' },
      { icon: '/images/petlink/icono-vinculo-34.svg', title: 'Dale tiempo para olfatear', text: 'El olfato es una de sus principales formas de conocer el entorno. Permitirle explorar a su ritmo enriquece la experiencia del paseo.' },
      { icon: '/images/petlink/icono-vinculo-08-alt.svg', title: 'Combiná rutina y novedades', text: 'Los recorridos conocidos aportan seguridad, mientras que los caminos nuevos ayudan a estimular su curiosidad.' },
      { icon: '/images/petlink/icono-vinculo-13.svg', title: 'Mantené su identificación actualizada', text: 'Una chapita identificatoria o sistema de rastreo puede aportar tranquilidad cuando exploran lugares nuevos.' },
    ],
  },
  {
    icon: '/images/petlink/icono-vinculo-09.svg',
    iconAlt: '/images/petlink/icono-vinculo-09-alt.svg',
    title: 'Compañeros de juego',
    text: 'Siempre encuentran una excusa para divertirse. Jugar juntos es una de sus formas favoritas de compartir tiempo.',
    image: '/images/petlink/img-vinculo-09.jpg',
    tips: [
      { icon: '/images/petlink/icono-vinculo-32.svg', title: 'Reservá un momento para jugar cada día', text: 'Las rutinas de juego fortalecen el vínculo y ayudan a liberar energía.' },
      { icon: '/images/petlink/icono-vinculo-28.svg', title: 'Rotá los juguetes', text: 'Introducir novedades mantiene el interés y la curiosidad.' },
      { icon: '/images/petlink/icono-vinculo-34.svg', title: 'Combiná actividad física y mental', text: 'Los desafíos que los hacen pensar también son una forma de entretenimiento.' },
      { icon: '/images/petlink/icono-vinculo-08-alt.svg', title: 'Supervisá los juguetes', text: 'Es importante asegurarse de que estén en buen estado y sean seguros.' },
      { icon: '/images/petlink/icono-vinculo-13.svg', title: 'Aprovechá el juego para conectar', text: 'Más allá de la diversión, es un momento de atención y compañía.' },
    ],
  },
];

export default function PetlinkVinculoPage() {
  return (
    <>
      <BondGridEffects />

      <section className="py-5 py-md-7 bond-hero">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-white wow animate__animated animate__fadeInUp">Vínculo</h1>
              <p className="lead text-white mb-0 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                Descubrí las distintas formas en que se manifiesta el vínculo con tu mascota.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="bond-showcase" className="py-5 py-md-7 overflow-hidden">
        <Image
          src="/images/petlink/img-miscelanea-02.svg"
          alt=""
          aria-hidden
          width={574}
          height={222}
          className="miscelanea-left d-none d-lg-block wow animate__animated animate__fadeInUp"
          data-wow-delay="0.2s"
        />
        <Image
          src="/images/petlink/img-miscelanea-03.svg"
          alt=""
          aria-hidden
          width={436}
          height={348}
          className="miscelanea-right d-none d-lg-block wow animate__animated animate__fadeInUp"
          data-wow-delay="0.1s"
        />
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center wow animate__animated animate__fadeInUp">
              <hr className="heading-hr mx-auto" />
              <h2>¿Cómo es tu vínculo?</h2>
            </div>
          </div>

          <div id="bondGrid" className="bond-grid">
            {BONDS.map((bond, i) => {
              const detailId = `bondDetail${i + 1}`;
              return (
                <Fragment key={bond.title}>
                  <button
                    type="button"
                    className="bond-box wow animate__animated animate__fadeInUp"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${detailId}`}
                    aria-expanded="false"
                    aria-controls={detailId}
                  >
                    <span className="bond-box-content">
                      <span
                        className="bond-box-icon"
                        style={{ '--icon-default': `url('${bond.icon}')`, '--icon-active': `url('${bond.iconAlt}')` } as React.CSSProperties}
                      />
                      <h3 className="h5 mb-2">{bond.title}</h3>
                      <p className="text-color-9 mb-0">{bond.text}</p>
                    </span>
                    <span className="bond-box-image" style={{ backgroundImage: `url('${bond.image}')` }} />
                  </button>

                  <div className="collapse bond-detail-wrap" id={detailId} data-bs-parent="#bondGrid">
                    <div className="bond-detail bg-color-2">
                      <div className="row g-4">
                        {bond.tips.map((tip) => (
                          <div className="col-12 col-md-6 col-lg" key={tip.title}>
                            <Image src={tip.icon} alt="" width={30} height={30} className="icon-30 mb-3" />
                            <h4 className="h5 text-white mb-2">{tip.title}</h4>
                            <p className="text-white mb-0">{tip.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-5 py-md-7 feeding-cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow animate__animated animate__fadeInUp">
              <h2 className="fs-40 text-color-2 mb-4">
                Que el momento de alimentarlo sea todavía más especial. Conocé Petlink y permitinos acompañar cada
                etapa de tu historia.
              </h2>
              <Link href="/petlink/productos" className="btn btn-primary">
                Ver productos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
