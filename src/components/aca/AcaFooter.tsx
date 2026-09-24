import Image from 'next/image';
import Link from 'next/link';
import type { Section } from '@/lib/types';

type AcaFooterProps = {
  section: Section | null;
};

export default function AcaFooter({ section }: AcaFooterProps) {
  const socialLinks = [
    { href: section?.facebook, label: 'Facebook', icon: 'bi-facebook' },
    { href: section?.instagram, label: 'Instagram', icon: 'bi-instagram' },
  ].filter((social) => Boolean(social.href));

  return (
    <footer>
      <div className="container py-5 py-md-7">
        <div className="row g-5">
          <div className="col-lg-5 wow animate__animated animate__fadeInUp">
            <Image
              src="/images/aca/logo-aca-negro.svg"
              alt="ACA Alimentos"
              className="footer-logo img-fluid mb-4"
              width={160}
              height={60}
            />
            <p className="w-xl-75 mb-0">
              Comprometidos con la nutrición de calidad para mascotas y la sustentabilidad
              ambiental.
            </p>
          </div>

          <div className="col-lg-3 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
            <nav className="d-flex flex-column gap-3">
              <Link href="/" className="footer-link">
                Inicio
              </Link>
              <Link href="/nosotros" className="footer-link">
                Nosotros
              </Link>
              <Link href="/productos" className="footer-link">
                Productos
              </Link>
              <Link href="/sostenibilidad" className="footer-link">
                Sostenibilidad
              </Link>
              <Link href="/red-comercial" className="footer-link">
                Red Comercial
              </Link>
              <Link href="/red-comercial#form-red-comercial" className="footer-link">
                Contacto
              </Link>
            </nav>
          </div>

          <div className="col-lg-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
            <div className="d-flex flex-column gap-3 mb-5">
              {section?.contactAddress && (
                <div className="d-flex align-items-center gap-3">
                  <i className="bi bi-geo-alt fs-5" />
                  <span>{section.contactAddress}</span>
                </div>
              )}
              {section?.contactPhone && (
                <div className="d-flex align-items-center gap-3">
                  <i className="bi bi-telephone fs-5" />
                  <a href={`tel:${section.contactPhone}`} className="footer-link">
                    {section.contactPhone}
                  </a>
                </div>
              )}
              {section?.contactEmail && (
                <div className="d-flex align-items-center gap-3">
                  <i className="bi bi-envelope fs-5" />
                  <a href={`mailto:${section.contactEmail}`} className="footer-link">
                    {section.contactEmail}
                  </a>
                </div>
              )}
            </div>
            <div className="d-flex gap-3">
              {socialLinks.map((social) => (
                <a
                  href={social.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social"
                  aria-label={social.label}
                  key={social.label}
                >
                  <i className={`bi ${social.icon}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <hr className="footer-divider" />
        <p className="text-center py-4 mb-0">
          © {new Date().getFullYear()} ACA | Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
