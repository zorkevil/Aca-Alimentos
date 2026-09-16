'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { BrandConfig } from '@/lib/brands';
import { SITE_THEME } from '@/lib/siteTheme';

type BrandHeaderProps = {
  brand: BrandConfig;
  // Valor y Petlink no tienen sección "Dónde Comprar" — se oculta también del
  // menú (Cooperación sí la mantiene).
  showWhereToBuy?: boolean;
};

export default function BrandHeader({ brand, showWhereToBuy = true }: BrandHeaderProps) {
  const pathname = usePathname();
  const basePath = `/${brand.slug}`;
  const navbarVariant = SITE_THEME[brand.slug].navbarVariant;

  const navLinks = [
    { href: basePath, label: 'Inicio' },
    { href: `${basePath}/productos`, label: 'Productos' },
    { href: `${basePath}/quienes-somos`, label: 'Quiénes Somos' },
    brand.uniquePage,
    { href: `${basePath}/blog`, label: 'Blog' },
    { href: `${basePath}/faqs`, label: 'FAQs' },
  ];

  const isActive = (href: string) => (href === basePath ? pathname === basePath : pathname.startsWith(href));

  return (
    <header className="fixed-top">
      <nav className={`navbar navbar-expand-xl ${navbarVariant}`}>
        <div className="container">
          <Link className="navbar-brand animate__animated animate__fadeInDown" href={basePath}>
            <Image
              src={brand.logo}
              alt={brand.name}
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
              {navLinks.map((link, i) => (
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
              {showWhereToBuy && (
                <li
                  className="nav-item animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.8s' }}
                >
                  <Link className="nav-link" href={`${basePath}#where-to-buy`}>
                    Dónde Comprar
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <Link
            href={`${basePath}/contacto`}
            className="btn btn-primary d-none d-xl-block animate__animated animate__fadeInDown"
            style={{ animationDelay: '0.9s' }}
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
                <Image src={brand.logo} alt={brand.name} className="navbar-logo" width={50} height={50} />
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
                {navLinks.map((link) => (
                  <li className="nav-item" key={link.href}>
                    <Link className={`nav-link ${isActive(link.href) ? 'active' : ''}`} href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
                {showWhereToBuy && (
                  <li className="nav-item">
                    <Link className="nav-link" href={`${basePath}#where-to-buy`}>
                      Dónde Comprar
                    </Link>
                  </li>
                )}
                <li className="nav-item mt-4">
                  <Link href={`${basePath}/contacto`} className="btn btn-primary w-100">
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
