import type { ReactNode } from 'react';
import Image from 'next/image';

type WhereToBuyProps = {
  address: string | null;
  contactHref: string;
  heading?: ReactNode;
  copy?: string;
  ctaText?: string;
  textWhite?: boolean;
  sectionClassName?: string;
  // Valor centra todo el bloque (título, texto e ícono) y pone el CTA debajo
  // del mapa; Cooperación/Petlink lo dejan en fila con el CTA a la derecha.
  layout?: 'inline' | 'centered';
  // Petlink superpone una ilustración sobre el mapa (img-chica-gato.svg).
  mapDecoration?: { src: string; className: string };
};

export default function WhereToBuy({
  address,
  contactHref,
  heading = '¿Dónde comprar?',
  copy = 'Disponible en cooperativas agropecuarias, veterinarias y petshops.',
  ctaText = 'Encontrá tu punto más cercano',
  textWhite = false,
  sectionClassName = 'py-5 py-md-7',
  layout = 'inline',
  mapDecoration,
}: WhereToBuyProps) {
  const mapQuery = encodeURIComponent(address ?? 'Argentina');
  const textClass = textWhite ? 'text-white' : '';
  const iconClass = textWhite ? 'text-white' : 'text-color-1';

  const map = (
    <div className="row wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
      <div className="col-12 position-relative">
        <iframe
          src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-radius-20"
          title="Mapa de puntos de venta"
        />
        {mapDecoration && (
          <Image src={mapDecoration.src} alt="" width={160} height={160} className={mapDecoration.className} />
        )}
      </div>
    </div>
  );

  if (layout === 'centered') {
    return (
      <section id="where-to-buy" className={sectionClassName}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center wow animate__animated animate__fadeInUp">
              <h2 className={`mb-3 ${textClass}`}>{heading}</h2>
              <p className={`fs-18 mb-0 ${textClass} d-flex align-items-center justify-content-center gap-2`}>
                <i className={`bi bi-geo-alt ${iconClass}`} /> {copy}
              </p>
            </div>
          </div>
          {map}
          <div className="text-center mt-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
            <a href={contactHref} className="btn btn-primary">
              {ctaText}
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="where-to-buy" className={sectionClassName}>
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg wow animate__animated animate__fadeInUp">
            <h2 className={`d-flex align-items-center gap-3 mb-3 ${textClass}`}>
              <i className={`bi bi-geo-alt ${iconClass}`} /> {heading}
            </h2>
            <p className={`fs-18 mb-0 ${textClass} wow animate__animated animate__fadeInUp`} data-wow-delay="0.1s">
              {copy}
            </p>
          </div>
          <div className="col-lg-auto text-lg-end mt-4 mt-lg-0 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
            <a href={contactHref} className="btn btn-primary">
              {ctaText}
            </a>
          </div>
        </div>
        {map}
      </div>
    </section>
  );
}
