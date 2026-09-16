import Image from 'next/image';
import Link from 'next/link';
import BrandsGrid from '@/components/aca/BrandsGrid';
import { ACA_SECTION_SLUG, getSectionSliders } from '@/lib/api/sections';

export default async function AcaHomePage() {
  const sliders = await getSectionSliders(ACA_SECTION_SLUG);

  return (
    <>
      <section>
        <h1 className="visually-hidden">Alimentos balanceados</h1>
        {sliders.length === 0 ? (
          <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to={1} aria-label="Slide 2" />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="hero-slide hero-slide-1 d-flex align-items-center">
                  <div className="container py-5 py-md-7">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <h2 className="h1 text-white mb-4 wow animate__animated animate__fadeInUp">
                          Detrás de cada alimento, una experiencia que nutre.
                        </h2>
                        <p className="fs-20 text-white mb-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                          Desarrollamos alimentos balanceados para perros y gatos con un compromiso simple:
                          contribuir a su bienestar a través de una nutrición completa, equilibrada y de calidad.
                        </p>
                        <Link href="/nosotros" className="btn btn-tertiary wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                          Conocé nuestras marcas
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="hero-slide hero-slide-2 d-flex align-items-center">
                  <div className="container py-5 py-md-7">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <h2 className="h1 text-white mb-4 wow animate__animated animate__fadeInUp">
                          Detrás de cada alimento, una experiencia que nutre.
                        </h2>
                        <p className="fs-20 text-white mb-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                          Desarrollamos alimentos balanceados para perros y gatos con un compromiso simple:
                          contribuir a su bienestar a través de una nutrición completa, equilibrada y de calidad.
                        </p>
                        <Link href="/nosotros" className="btn btn-tertiary wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                          Conocé nuestras marcas
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              {sliders.map((slider, i) => (
                <button
                  key={slider.id}
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide-to={i}
                  className={i === 0 ? 'active' : ''}
                  aria-current={i === 0}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="carousel-inner">
              {sliders.map((slider, i) => (
                <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={slider.id}>
                  <div className="hero-slide d-flex align-items-center" style={{ zIndex: 0 }}>
                    {slider.image && (
                      <Image
                        src={slider.image}
                        alt={slider.imageAlt ?? slider.title}
                        fill
                        priority={i === 0}
                        style={{ objectFit: 'cover', zIndex: -1 }}
                      />
                    )}
                    <div className="container py-5 py-md-7">
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <h2 className="h1 text-white mb-4 wow animate__animated animate__fadeInUp">
                            {slider.title}
                          </h2>
                          {slider.subtitle && (
                            <p
                              className="fs-20 text-white mb-4 wow animate__animated animate__fadeInUp"
                              data-wow-delay="0.2s"
                            >
                              {slider.subtitle}
                            </p>
                          )}
                          {slider.buttonText && slider.buttonLink && (
                            <Link
                              href={slider.buttonLink}
                              className="btn btn-tertiary wow animate__animated animate__fadeInUp"
                              data-wow-delay="0.4s"
                            >
                              {slider.buttonText}
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="bg-color-2 py-5 py-md-7">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-3 text-center wow animate__animated animate__fadeIn">
              <Image src="/images/aca/logo-aca-iso-blanco.svg" alt="ACA Alimentos" width={160} height={160} className="img-fluid mh-100" />
            </div>
            <div className="col-lg-7">
              <h2 className="text-color-6 wow animate__animated animate__fadeInUp">Alimentos Balanceados</h2>
              <p className="text-white wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                Somos una empresa{' '}
                <strong>
                  comprometida con la nutrición de calidad para mascotas, trabajando dentro del ecosistema
                  cooperativo para ofrecer las mejores opciones en alimentos balanceados para perros y gatos
                </strong>
                . Nuestras tres líneas de productos están diseñadas para satisfacer todas las necesidades
                nutricionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BrandsGrid />

      <section className="bg-color-8 py-5 py-md-7">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="text-center wow animate__animated animate__fadeInUp">
                Alimentos por <span className="text-color-6">especie</span>
              </h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 text-center wow animate__animated animate__fadeInUp">
              <Image
                src="/images/aca/img-especie-gatos.svg"
                alt="Alimentos para gatos"
                width={400}
                height={300}
                className="d-block mx-auto img-fluid mb-4"
              />
              <Link href="/productos?species=gato" className="btn btn-secondary">
                Gatos
              </Link>
            </div>
            <div className="col-lg-6 text-center wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <Image
                src="/images/aca/img-especie-perros.svg"
                alt="Alimentos para perros"
                width={400}
                height={300}
                className="d-block mx-auto img-fluid mb-4"
              />
              <Link href="/productos?species=perro" className="btn btn-primary">
                Perros
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 py-md-7">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="text-center wow animate__animated animate__fadeInUp">
                Todo lo que ellos <span className="text-color-6">necesitan</span>
              </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="row g-4">
                <div className="col-lg-4 wow animate__animated animate__fadeInUp">
                  <div className="d-flex flex-column h-100 border-radius-25 overflow-hidden">
                    <div className="dome-1 bg-color-1 bg-darken-35 p-4 text-center">
                      <Image src="/images/aca/icono-sustentabilidad.svg" alt="Sustentabilidad" width={80} height={80} className="icon-80" />
                    </div>
                    <div className="bg-color-1 pt-0 px-4 pb-5 text-center flex-grow-1 d-flex flex-column justify-content-center">
                      <h3 className="text-white mb-3">Sustentabilidad</h3>
                      <p className="text-white mb-0">
                        Comprometidos con el reciclaje y la economía circular para un planeta más limpio.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                  <div className="d-flex flex-column h-100 border-radius-25 overflow-hidden">
                    <div className="dome-6 bg-color-6 bg-darken-35 p-4 text-center">
                      <Image src="/images/aca/icono-calidad.svg" alt="Calidad" width={80} height={80} className="icon-80" />
                    </div>
                    <div className="bg-color-6 pt-0 px-4 pb-5 text-center flex-grow-1 d-flex flex-column justify-content-center">
                      <h3 className="text-white mb-3">Calidad</h3>
                      <p className="text-white mb-0">
                        Ingredientes seleccionados y procesos certificados para garantizar la mejor nutrición.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                  <div className="d-flex flex-column h-100 border-radius-25 overflow-hidden">
                    <div className="dome-2 bg-color-2 bg-darken-35 p-4 text-center">
                      <Image src="/images/aca/icono-tecnologia.svg" alt="Tecnología" width={80} height={80} className="icon-80" />
                    </div>
                    <div className="bg-color-2 pt-0 px-4 pb-5 text-center flex-grow-1 d-flex flex-column justify-content-center">
                      <h3 className="text-white mb-3">Tecnología</h3>
                      <p className="text-white mb-0">Innovación constante en formulaciones para el bienestar.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-distribuidores py-5 py-md-7">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-lg-7">
              <h2 className="text-white mb-4 wow animate__animated animate__fadeInUp">¿Querés vender nuestros productos?</h2>
              <p className="fs-18 text-white mb-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                Descubrí cómo comercializar Cooperación, Valor y PetLink.
              </p>
              <Link
                href="/red-comercial#form-red-comercial"
                className="btn btn-primary wow animate__animated animate__fadeInUp"
                data-wow-delay="0.4s"
              >
                Contactanos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
