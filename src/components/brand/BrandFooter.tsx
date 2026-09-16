import Image from 'next/image';
import Link from 'next/link';
import type { BrandConfig } from '@/lib/brands';
import type { Section } from '@/lib/types';

type BrandFooterProps = {
  brand: BrandConfig;
  section: Section | null;
  // Valor y Petlink no tienen sección "Dónde Comprar" — se oculta también del
  // footer (Cooperación sí la mantiene).
  showWhereToBuy?: boolean;
};

export default function BrandFooter({ brand, section, showWhereToBuy = true }: BrandFooterProps) {
  const basePath = `/${brand.slug}`;

  const socialLinks = [
    { href: section?.facebook, label: 'Facebook', icon: 'bi-facebook' },
    { href: section?.instagram, label: 'Instagram', icon: 'bi-instagram' },
  ].filter((social) => Boolean(social.href));

  return (
    <footer>
      <div className="container py-5 py-md-7">
        <div className="row">
          <div className="col-lg-5 wow animate__animated animate__fadeInUp">
            <Image
              src={brand.logo}
              alt={brand.name}
              className="footer-logo img-fluid mb-5"
              width={180}
              height={70}
            />
            <div className="d-flex gap-3">
              {socialLinks.map((social) => (
                <a
                  href={social.href!}
                  target={social.href === '#' ? undefined : '_blank'}
                  rel={social.href === '#' ? undefined : 'noopener noreferrer'}
                  className="footer-social"
                  aria-label={social.label}
                  key={social.label}
                >
                  <i className={`bi ${social.icon}`} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-3 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
            <nav className="d-flex flex-column gap-3">
              <Link href={basePath} className="footer-link">
                Inicio
              </Link>
              <Link href={`${basePath}/productos`} className="footer-link">
                Productos
              </Link>
              <Link href={`${basePath}/quienes-somos`} className="footer-link">
                Quiénes Somos
              </Link>
              <Link href={brand.uniquePage.href} className="footer-link">
                {brand.uniquePage.label}
              </Link>
              <Link href={`${basePath}/blog`} className="footer-link">
                Blog
              </Link>
              <Link href={`${basePath}/faqs`} className="footer-link">
                FAQs
              </Link>
              {showWhereToBuy && (
                <Link href={`${basePath}#where-to-buy`} className="footer-link">
                  Dónde Comprar
                </Link>
              )}
            </nav>
          </div>

          <div className="col-lg-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
            <Image
              src="/images/aca/logo-aca-negro.svg"
              alt="ACA Alimentos"
              className="footer-aca-logo img-fluid opacity-50 mb-5"
              width={120}
              height={45}
            />
            <div className="d-flex flex-column gap-3">
              {section?.contactAddress && (
                <div className="d-flex align-items-center gap-3">
                  <i className="bi bi-geo-alt fs-5" />
                  <span>{section.contactAddress}</span>
                </div>
              )}
              {section?.contactPhone && (
                <div className="d-flex align-items-center gap-3">
                  <i className="bi bi-telephone fs-5" />
                  <span>{section.contactPhone}</span>
                </div>
              )}
              {section?.contactEmail && (
                <div className="d-flex align-items-center gap-3">
                  <i className="bi bi-envelope fs-5" />
                  <span>{section.contactEmail}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <hr className="footer-divider" />
        <p className="text-center py-4 mb-0">
          © {new Date().getFullYear()} {brand.name} | Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
