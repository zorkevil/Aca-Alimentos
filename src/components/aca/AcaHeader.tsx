'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
] as const;

const BRAND_LINKS = [
  { href: '/cooperacion', label: 'Cooperación' },
  { href: '/valor', label: 'Valor' },
  { href: '/petlink', label: 'Petlink' },
] as const;

const TRAILING_LINKS = [
  { href: '/productos', label: 'Productos' },
  { href: '/sostenibilidad', label: 'Sostenibilidad' },
  { href: '/red-comercial', label: 'Red Comercial' },
] as const;

export default function AcaHeader() {
  const pathname = usePathname();

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-xl navbar-light">
        <div className="container">
          <Link className="navbar-brand animate__animated animate__fadeInDown" href="/">
            <Image
              src="/images/aca/logo-aca-iso-color.svg"
              alt="ACA Alimentos"
              className="navbar-logo"
              width={64}
              height={64}
              priority
            />
          </Link>

          <button
            className="navbar-toggler animate__animated animate__fadeInDown"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Abrir navegación"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="navbar-collapse justify-content-center d-none d-xl-flex">
            <ul className="navbar-nav">
              {NAV_LINKS.map((link, i) => (
                <li
                  className="nav-item animate__animated animate__fadeInDown"
                  style={{ animationDelay: `${0.1 * (i + 1)}s` }}
                  key={link.href}
                >
                  <Link className={`nav-link ${isActive(link.href) ? 'active' : ''}`} href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li
                className="nav-item dropdown animate__animated animate__fadeInDown"
                style={{ animationDelay: '0.3s' }}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Nuestras Marcas
                </a>
                <ul className="dropdown-menu">
                  {BRAND_LINKS.map((brand) => (
                    <li key={brand.href}>
                      {/* <a> normal, no <Link>: cruza a un sitio de marca con su propio
                          CSS de layout — una navegación client-side de Next no reemplaza
                          la hoja de estilos anterior por la nueva. */}
                      <a className="dropdown-item" href={brand.href}>
                        {brand.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              {TRAILING_LINKS.map((link, i) => (
                <li
                  className="nav-item animate__animated animate__fadeInDown"
                  style={{ animationDelay: `${0.4 + 0.1 * i}s` }}
                  key={link.href}
                >
                  <Link className={`nav-link ${isActive(link.href) ? 'active' : ''}`} href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/red-comercial#form-red-comercial"
            className="btn btn-secondary d-none d-xl-block animate__animated animate__fadeInDown"
            style={{ animationDelay: '0.7s' }}
          >
            Contacto
          </Link>

          <div
            className="offcanvas offcanvas-end d-xl-none"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h4 className="offcanvas-title" id="offcanvasNavbarLabel">
                <Image
                  src="/images/aca/logo-aca-iso-color.svg"
                  alt="ACA Alimentos"
                  className="navbar-logo"
                  width={50}
                  height={50}
                />
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Cerrar"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                {[...NAV_LINKS].map((link) => (
                  <li className="nav-item" key={link.href}>
                    <Link className={`nav-link ${isActive(link.href) ? 'active' : ''}`} href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Nuestras Marcas
                  </a>
                  <ul className="dropdown-menu">
                    {BRAND_LINKS.map((brand) => (
                      <li key={brand.href}>
                        <a className="dropdown-item" href={brand.href}>
                          {brand.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                {TRAILING_LINKS.map((link) => (
                  <li className="nav-item" key={link.href}>
                    <Link className={`nav-link ${isActive(link.href) ? 'active' : ''}`} href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="nav-item mt-4">
                  <Link href="/red-comercial#form-red-comercial" className="btn btn-secondary w-100">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
