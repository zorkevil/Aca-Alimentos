import Image from 'next/image';

const BRANDS = [
  {
    href: '/cooperacion',
    image: '/images/aca/img-cooperacion.jpg',
    logo: '/images/cooperacion/logo-cooperacion-color.svg',
    logoWidth: 200,
    bg: 'bg-color-12',
    text: 'text-color-4',
    name: 'Cooperación',
    tagline: 'Natural por dentro, responsable por fuera.',
  },
  {
    href: '/valor',
    image: '/images/aca/img-valor.jpg',
    logo: '/images/valor/logo-valor-color.svg',
    logoWidth: 200,
    bg: 'bg-color-13',
    text: 'text-color-4',
    name: 'Valor',
    tagline: 'Nutriendo el instinto',
  },
  {
    href: '/petlink',
    image: '/images/aca/img-petlink.jpg',
    logo: '/images/petlink/logo-petlink-blanco.svg',
    logoWidth: 150,
    bg: 'bg-color-14',
    text: 'text-white',
    name: 'Petlink',
    tagline: 'Alimentando el vínculo',
  },
] as const;

type BrandsGridProps = {
  // red-comercial.html usa bg-color-8 (crema) en esta sección; index.html y
  // nosotros.html la dejan sin fondo — se replica esa diferencia tal cual.
  shaded?: boolean;
  // Solo nosotros.html agrega el copy debajo del título; index.html y
  // red-comercial.html dejan el encabezado solo.
  subtitle?: boolean;
};

export default function BrandsGrid({ shaded = false, subtitle = false }: BrandsGridProps) {
  return (
    <section className={`py-5 py-md-7 ${shaded ? 'bg-color-8' : ''}`}>
      <div className="container">
        <div className="row mb-5">
          <div className={subtitle ? 'col-lg-8 mx-auto text-center' : 'col-12'}>
            <h2 className={`wow animate__animated animate__fadeInUp ${subtitle ? '' : 'text-center'}`}>
              Nuestras <span className="text-color-6">Marcas</span>
            </h2>
            {subtitle && (
              <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                A partir de nuestra experiencia productiva y conocimiento nutricional, desarrollamos marcas pensadas
                para diferentes necesidades y perfiles de consumidores.
              </p>
            )}
          </div>
        </div>
        <div className="row g-4">
          {BRANDS.map((brand, i) => (
            <div
              className="col-lg-4 wow animate__animated animate__fadeInUp"
              data-wow-delay={i > 0 ? `${i * 0.1}s` : undefined}
              key={brand.href}
            >
              {/* <a> normal: cruza a un sitio de marca con su propio CSS de layout,
                  una navegación client-side de Next no reemplaza la hoja de estilos. */}
              <a href={brand.href} className="d-flex flex-column h-100 border-radius-25 overflow-hidden text-decoration-none">
                <Image src={brand.image} alt="" width={640} height={480} className="img-fluid w-100" />
                <div className={`${brand.bg} p-4 text-center flex-grow-1 d-flex flex-column align-items-center justify-content-center`}>
                  <Image src={brand.logo} alt={brand.name} width={brand.logoWidth} height={100} className="mw-200 mh-100 mb-3" />
                  <p className={`${brand.text} mb-0`}>{brand.tagline}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
