import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sustentabilidad',
  description: 'El compromiso de Cooperación con el medio ambiente: envases reciclables y consumo responsable.',
};

export default function CooperacionSustentabilidadPage() {
  return (
    <>
      <section className="py-5 py-md-7 sustainability-hero">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-white wow animate__animated animate__fadeInUp">Cuidemos el mundo que compartimos</h1>
              <p className="lead text-white mb-0 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                Una decisión fácil para quienes buscan cuidar a su mascota y al medio ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="eco-packaging" className="bg-color-8 py-5 py-md-7">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow animate__animated animate__fadeInUp">
              <Image src="/images/cooperacion/img-reciclable.png" alt="" width={600} height={480} className="img-fluid border-radius-20" />
            </div>
            <div className="col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <Image
                src="/images/cooperacion/envase-100-reciclable.png"
                alt=""
                width={360}
                height={400}
                className="img-fluid w-60 d-block mx-auto mx-lg-0 border-radius-20 mb-4"
              />
              <p className="fs-18 mb-4">
                Las bolsas de <strong>Cooperación</strong> están fabricadas con materiales reciclables, pensados
                para <strong>reducir la generación de residuos y acompañar una alimentación más responsable.</strong>
              </p>
              <p className="fs-18 mb-0">
                Creemos que las pequeñas decisiones también generan impacto. Por eso incorporamos envases
                reciclables como parte de <strong>nuestro compromiso con las mascotas y el entorno.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="eco-plastics" className="bg-color-10 py-5 py-md-7">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center wow animate__animated animate__fadeInUp">
              <hr className="heading-hr mx-auto" />
              <h2 className="mb-4">No todos los plásticos se reciclan</h2>
              <p className="fs-18 mb-0">
                Algunos materiales pueden volver a utilizarse y otros no tan fácilmente. Conocer la diferencia es
                una forma simple de tomar decisiones más responsables.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 wow animate__animated animate__fadeInUp">
              <Image src="/images/cooperacion/img-plasticos-reciclables.png" alt="" width={500} height={400} className="img-fluid border-radius-20" />
            </div>
            <div className="col-md-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <Image
                src="/images/cooperacion/img-plasticos-dificiles-de-recuperar.png"
                alt=""
                width={500}
                height={400}
                className="img-fluid border-radius-20"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-color-8 py-5 py-md-7">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center wow animate__animated animate__fadeInUp">
              <hr className="heading-hr mx-auto" />
              <h2 className="mb-4">Pequeñas acciones, gran impacto</h2>
              <p className="fs-18 mb-0">Separar bien los plásticos ayuda a cuidar nuestro planeta.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <Image
                src="/images/cooperacion/img-pequenas-acciones-desktop.png"
                alt=""
                width={1200}
                height={500}
                className="img-fluid border-radius-20 w-100"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 py-md-7 sustainability-cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow animate__animated animate__fadeInUp">
              <h2 className="fs-28 text-white mb-4">
                Cooperación es sabroso, balanceado y amigable con el planeta. Encontrá el ideal para tu mascota.
              </h2>
              <a href="/cooperacion/contacto" className="btn btn-primary">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
