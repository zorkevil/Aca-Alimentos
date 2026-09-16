import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Slider } from '@/lib/types';

type BrandHeroProps = {
  sliders: Slider[];
  fallbackTitle: ReactNode;
  fallbackSubtitle: string;
  // Estado sin banners cargados en la API — cada marca lo maqueta un poco
  // distinto (logo o no, uno o dos botones, clase de color del CTA).
  logo?: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  primaryCtaClass?: string;
  secondaryCtaText?: string;
  // Cooperación/Valor dejan el contenido del hero a la izquierda (col-lg-7/6
  // sin margen automático); Petlink lo maqueta a la derecha (col-lg-6 ms-auto).
  contentColClass?: string;
};

// Carrusel de banners de la marca (GET /sections/{slug}/sliders). Si todavía no hay
// banners cargados en el panel, muestra una portada estática con el nombre/tagline.
export default function BrandHero({
  sliders,
  fallbackTitle,
  fallbackSubtitle,
  logo,
  primaryCtaText,
  primaryCtaHref,
  primaryCtaClass = 'btn-primary',
  secondaryCtaText,
  contentColClass = 'col-lg-7',
}: BrandHeroProps) {
  if (sliders.length === 0) {
    return (
      <section id="hero" className="hero-slide hero-slide-1">
        <div className="container py-5 py-md-7">
          <div className="row align-items-center">
            <div className={contentColClass}>
              {logo && (
                // <img> plano (no next/image): la maqueta no le pone width/height a
                // este ícono y deja que el CSS (.hero-logo, max-height:80px) resuelva
                // el tamaño solo — con next/image, los atributos width/height que
                // exige reservan una caja con el ratio equivocado y corren el logo.
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={logo}
                  alt=""
                  aria-hidden
                  className="hero-logo mb-4 wow animate__animated animate__fadeInUp"
                />
              )}
              <h1 className="h1 text-white mb-4 wow animate__animated animate__fadeInUp">{fallbackTitle}</h1>
              <p className="fs-20 text-white mb-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                {fallbackSubtitle}
              </p>
              <div className="d-flex flex-wrap gap-3 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                <Link href={primaryCtaHref} className={`btn ${primaryCtaClass}`}>
                  {primaryCtaText}
                </Link>
                {secondaryCtaText && (
                  <a href="#" className="btn btn-outline-light">
                    {secondaryCtaText}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="hero">
      <h1 className="visually-hidden">{fallbackTitle}</h1>
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
              <div className="hero-slide" style={{ zIndex: 0 }}>
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
                    <div className={contentColClass}>
                      {logo && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={logo}
                          alt=""
                          aria-hidden
                          className="hero-logo mb-4 wow animate__animated animate__fadeInUp"
                        />
                      )}
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
                          className={`btn ${primaryCtaClass} wow animate__animated animate__fadeInUp`}
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
    </section>
  );
}
