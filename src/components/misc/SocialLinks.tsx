import Image from 'next/image';
import type { ReactNode } from 'react';

type SocialLinksProps = {
  instagram: string | null;
  facebook: string | null;
  heading?: ReactNode;
  sectionBgClass?: string;
  showDivider?: boolean;
  // Cooperación/Petlink dejan las pestañas de Instagram/Facebook como
  // placeholders vacíos (sin embed real todavía) — acá se linkea directo al
  // perfil de la marca. Valor es la excepción: su maqueta sí trae una imagen
  // de vista previa debajo de los íconos, no un placeholder vacío.
  previewImage?: { src: string; alt: string };
};

export default function SocialLinks({
  instagram,
  facebook,
  heading = 'Seguinos en nuestras redes sociales',
  sectionBgClass = 'bg-color-7',
  showDivider = true,
  previewImage,
}: SocialLinksProps) {
  if (!instagram && !facebook) return null;

  // En todas las maquetas el primer ícono disponible (Instagram si existe,
  // si no Facebook) lleva la clase "active" por defecto — el CSS de marca le
  // da fondo + borde a `.social-tab-btn.active`/`.nav-underline .nav-link.active`,
  // no es un estado de hover accidental.
  const activeTab = instagram ? 'instagram' : 'facebook';

  return (
    <section id="social-media" className={`${sectionBgClass} py-5 py-md-7`.trim()}>
      {previewImage && (
        <>
          <Image
            src="/images/valor/overlay-plantas-04.png"
            alt=""
            aria-hidden
            width={200}
            height={400}
            className="deco-side deco-side-left"
          />
          <Image
            src="/images/valor/overlay-plantas-04.png"
            alt=""
            aria-hidden
            width={200}
            height={400}
            className="deco-side deco-side-right"
          />
        </>
      )}
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center wow animate__animated animate__fadeInUp">
            {showDivider && <hr className="heading-hr mx-auto" />}
            <h2>{heading}</h2>
          </div>
        </div>
        <div className="row justify-content-center wow animate__animated animate__fadeInUp">
          <div className="col-12 col-lg-10">
            {previewImage ? (
              <>
                <ul className="nav nav-underline justify-content-center mb-4 gap-3" id="socialTabs" role="tablist">
                  {instagram && (
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link${activeTab === 'instagram' ? ' active' : ''}`}
                        id="instagram-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#instagram-pane"
                        type="button"
                        role="tab"
                        aria-controls="instagram-pane"
                        aria-selected={activeTab === 'instagram'}
                        aria-label="Instagram"
                      >
                        <i className="bi bi-instagram fs-40" />
                      </button>
                    </li>
                  )}
                  {facebook && (
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link${activeTab === 'facebook' ? ' active' : ''}`}
                        id="facebook-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#facebook-pane"
                        type="button"
                        role="tab"
                        aria-controls="facebook-pane"
                        aria-selected={activeTab === 'facebook'}
                        aria-label="Facebook"
                      >
                        <i className="bi bi-facebook fs-40" />
                      </button>
                    </li>
                  )}
                </ul>
                <div className="tab-content" id="redesTabContent">
                  {instagram && (
                    <div
                      className={`tab-pane fade text-center${activeTab === 'instagram' ? ' show active' : ''}`}
                      id="instagram-pane"
                      role="tabpanel"
                      aria-labelledby="instagram-tab"
                    >
                      <Image src={previewImage.src} alt={previewImage.alt} width={955} height={587} className="img-fluid" />
                    </div>
                  )}
                  {facebook && (
                    <div
                      className={`tab-pane fade text-center${activeTab === 'facebook' ? ' show active' : ''}`}
                      id="facebook-pane"
                      role="tabpanel"
                      aria-labelledby="facebook-tab"
                    >
                      <Image src={previewImage.src} alt={previewImage.alt} width={955} height={587} className="img-fluid" />
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="d-flex justify-content-center gap-3">
                {instagram && (
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-tab-btn nav-link${activeTab === 'instagram' ? ' active' : ''}`}
                  >
                    <i className="bi bi-instagram fs-40" />
                  </a>
                )}
                {facebook && (
                  <a
                    href={facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-tab-btn nav-link${activeTab === 'facebook' ? ' active' : ''}`}
                  >
                    <i className="bi bi-facebook fs-40" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
