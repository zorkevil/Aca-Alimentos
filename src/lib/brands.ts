import type { BrandSlug } from '@/lib/types';

export interface BrandConfig {
  slug: BrandSlug;
  name: string;
  tagline: string;
  logo: string;
  uniquePage: { href: string; label: string };
}

export const BRAND_CONFIG: Record<BrandSlug, BrandConfig> = {
  cooperacion: {
    slug: 'cooperacion',
    name: 'Cooperación',
    tagline: 'Natural por dentro, responsable por fuera.',
    logo: '/images/cooperacion/logo-cooperacion-color.svg',
    uniquePage: { href: '/cooperacion/sustentabilidad', label: 'Sustentabilidad' },
  },
  valor: {
    slug: 'valor',
    name: 'Valor',
    tagline: 'Nutriendo el instinto.',
    logo: '/images/valor/logo-valor-color.svg',
    uniquePage: { href: '/valor/nutricion', label: 'Nutrición' },
  },
  petlink: {
    slug: 'petlink',
    name: 'Petlink',
    tagline: 'Alimentando el vínculo.',
    logo: '/images/petlink/logo-petlink-blanco.svg',
    uniquePage: { href: '/petlink/vinculo', label: 'Vínculo' },
  },
};
