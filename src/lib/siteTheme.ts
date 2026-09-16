import type { BrandSlug, Species } from '@/lib/types';

// Identifica cualquiera de los 4 sitios (los 3 de marca + el raíz de ACA, que
// no es una "sección" de la API pero sí necesita sus propios tokens visuales).
export type SiteSlug = 'aca' | BrandSlug;

export type SiteTheme = {
  // Color de los links/títulos de tarjetas de producto y blog, breadcrumbs y
  // encabezados de filtros — cada marca numera su paleta distinto, así que
  // "el mismo rol" cae en un número de token distinto por sitio.
  linkColor: string;
  breadcrumbExtraClass?: string;
  // Encabezados/links del sidebar de filtros (FILTROS ACTIVOS, ESPECIE ANIMAL,
  // etapa de vida...) y la pastilla de "sin resultados" — en ACA es un color
  // distinto al de linkColor (que ahí solo aplica a nombre de producto/breadcrumb).
  filterHeaderColor: string;
  filterExtraClass?: string;
  emptyStateBg: string;
  requiredMarkColor: string;
  // Color del badge de etapa de vida en las tarjetas de producto — cada marca
  // usa un color fijo distinto (Valor es la excepción: varía por producto
  // según la línea nutricional, algo que la API no expone, así que queda con
  // un valor único razonable en vez de fabricar esa variación).
  productBadgeColor: string;
  speciesBadgeBg: Record<Species, string>;
  speciesIcon: Record<Species, string>;
  // Fondo (y si hace falta texto blanco) del hero de /productos y /blog.
  catalogHeroBg: string;
  catalogHeroTextWhite: boolean;
  productCardVariant: 'default' | 'aca' | 'valor';
  // Petlink agranda el nombre, subtítulo y "Ver detalles" de las tarjetas de
  // producto (fs-22) — el resto de las marcas usa el tamaño por defecto.
  productCardTextExtraClass?: string;
  ctaButtonClass: string;
  navbarVariant: 'navbar-light' | 'navbar-dark';
  productNameClass: string;
  // Ficha de producto: muestra el badge de etapa de vida además del subtítulo
  // (solo ACA lo maqueta así — el resto muestra únicamente el subtítulo).
  showLifeStagePill: boolean;
  // Blog — caja de índice ("Acá vas a leer sobre") y bloque de cita, dentro
  // del cuerpo del artículo.
  blogTocBg: string;
  blogTocText: string;
  blogTocNumberColor: string;
  blogTocRadius: string;
  blogQuoteBg: string;
  blogQuoteText: string;
  blogQuoteRadius: string;
  blogHeadingExtraClass?: string;
  blogTagBadgeText: string;
  socialIcon: { variant: 'filled' | 'outlined'; bg?: string; border?: string; text: string };
};

const SHARED_SPECIES_ICON: Record<Species, string> = {
  perro: '/images/shared/icono-perro.svg',
  gato: '/images/shared/icono-gato.svg',
};

export const SITE_THEME: Record<SiteSlug, SiteTheme> = {
  aca: {
    linkColor: 'text-color-4',
    filterHeaderColor: 'text-color-2',
    emptyStateBg: 'bg-color-8',
    requiredMarkColor: 'text-color-3',
    productBadgeColor: 'text-color-6',
    speciesBadgeBg: { perro: 'bg-color-1', gato: 'bg-color-2' },
    speciesIcon: { perro: '/images/aca/icono-perro-aca.svg', gato: '/images/aca/icono-gato-aca.svg' },
    catalogHeroBg: 'hero-interna',
    catalogHeroTextWhite: true,
    productCardVariant: 'aca',
    ctaButtonClass: 'btn-primary',
    navbarVariant: 'navbar-light',
    productNameClass: 'h2 text-color-4',
    showLifeStagePill: true,
    // ACA no tiene blog — valores sin uso, copiados de cooperación por completitud de tipos.
    blogTocBg: 'bg-color-8',
    blogTocText: 'text-color-1',
    blogTocNumberColor: 'text-color-4',
    blogTocRadius: 'border-radius-20',
    blogQuoteBg: 'bg-color-5',
    blogQuoteText: 'text-color-1',
    blogQuoteRadius: 'border-radius-20',
    blogTagBadgeText: 'text-white',
    socialIcon: { variant: 'filled', bg: 'bg-color-6', border: 'border-color-1', text: 'text-color-1' },
  },
  cooperacion: {
    linkColor: 'text-color-1',
    filterHeaderColor: 'text-color-1',
    emptyStateBg: 'bg-color-6',
    requiredMarkColor: 'text-color-3',
    productBadgeColor: 'text-color-2',
    speciesBadgeBg: { perro: 'bg-color-1', gato: 'bg-color-4' },
    speciesIcon: SHARED_SPECIES_ICON,
    catalogHeroBg: 'bg-color-6',
    catalogHeroTextWhite: false,
    productCardVariant: 'default',
    ctaButtonClass: 'btn-primary',
    navbarVariant: 'navbar-light',
    productNameClass: 'h2',
    showLifeStagePill: false,
    blogTocBg: 'bg-color-8',
    blogTocText: 'text-color-1',
    blogTocNumberColor: 'text-color-4',
    blogTocRadius: 'border-radius-20',
    blogQuoteBg: 'bg-color-5',
    blogQuoteText: 'text-color-1',
    blogQuoteRadius: 'border-radius-20',
    blogTagBadgeText: 'text-white',
    socialIcon: { variant: 'filled', bg: 'bg-color-6', border: 'border-color-1', text: 'text-color-1' },
  },
  petlink: {
    linkColor: 'text-color-2',
    breadcrumbExtraClass: 'fs-22',
    filterHeaderColor: 'text-color-2',
    filterExtraClass: 'fs-22',
    emptyStateBg: 'bg-color-4',
    requiredMarkColor: 'text-color-3',
    productBadgeColor: 'text-color-6',
    speciesBadgeBg: { perro: 'bg-color-2', gato: 'bg-color-1' },
    speciesIcon: SHARED_SPECIES_ICON,
    catalogHeroBg: 'bg-color-4',
    catalogHeroTextWhite: false,
    productCardVariant: 'default',
    productCardTextExtraClass: 'fs-22',
    ctaButtonClass: 'btn-primary',
    navbarVariant: 'navbar-dark',
    productNameClass: 'h2',
    showLifeStagePill: false,
    blogTocBg: 'bg-color-4',
    blogTocText: 'text-color-2',
    blogTocNumberColor: 'text-color-1',
    blogTocRadius: 'border-radius-20',
    blogQuoteBg: 'bg-color-4',
    blogQuoteText: 'text-color-2',
    blogQuoteRadius: 'border-radius-20',
    blogTagBadgeText: 'text-color-2',
    socialIcon: { variant: 'outlined', border: 'border-2 border-color-2', text: 'text-color-2' },
  },
  valor: {
    linkColor: 'text-color-2',
    filterHeaderColor: 'text-color-2',
    emptyStateBg: 'bg-color-12',
    requiredMarkColor: 'text-color-11',
    productBadgeColor: 'text-color-2',
    speciesBadgeBg: { perro: 'bg-color-1', gato: 'bg-color-4' },
    speciesIcon: SHARED_SPECIES_ICON,
    catalogHeroBg: 'bg-color-12',
    catalogHeroTextWhite: false,
    productCardVariant: 'valor',
    ctaButtonClass: 'btn-color-7',
    navbarVariant: 'navbar-light',
    productNameClass: 'fs-60 text-color-2',
    showLifeStagePill: false,
    blogTocBg: 'bg-color-13',
    blogTocText: 'text-color-2',
    blogTocNumberColor: 'text-color-1',
    blogTocRadius: 'border-radius-5',
    blogQuoteBg: 'bg-color-12',
    blogQuoteText: 'text-color-2',
    blogQuoteRadius: 'border-radius-5',
    blogHeadingExtraClass: 'font-montserrat',
    blogTagBadgeText: 'text-white',
    socialIcon: { variant: 'outlined', text: 'text-color-1' },
  },
};
