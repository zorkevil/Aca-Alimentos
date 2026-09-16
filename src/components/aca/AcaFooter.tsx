import Image from 'next/image';
import Link from 'next/link';

const SOCIAL_LINKS = [
  { href: '#', label: 'Facebook', icon: 'bi-facebook' },
  { href: '#', label: 'X', icon: 'bi-twitter-x' },
  { href: '#', label: 'Instagram', icon: 'bi-instagram' },
  { href: '#', label: 'YouTube', icon: 'bi-youtube' },
] as const;

export default function AcaFooter() {
  return (
    <footer>
      <div className="container py-5 py-md-7">
        <div className="row">
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
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-geo-alt fs-5" />
                <span>Av. Cooperativa 1234, Buenos Aires, Argentina</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-telephone fs-5" />
                <span>+54 11 1234-5678</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-envelope fs-5" />
                <span>info@acaalimentos.com</span>
              </div>
            </div>
            <div className="d-flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a href={social.href} className="footer-social" aria-label={social.label} key={social.label}>
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
          © {new Date().getFullYear()} ACA Alimentos | Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
