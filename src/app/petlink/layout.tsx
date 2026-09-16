import '@/styles/styles-petlink.scss';

import type { Metadata } from 'next';
import { phenomena } from '@/lib/fonts';
import { BRAND_CONFIG } from '@/lib/brands';
import { getSection } from '@/lib/api/sections';
import BrandHeader from '@/components/brand/BrandHeader';
import BrandFooter from '@/components/brand/BrandFooter';
import ClientEffects from '@/components/misc/ClientEffects';

export const metadata: Metadata = {
  title: {
    default: BRAND_CONFIG.petlink.name,
    template: `%s | ${BRAND_CONFIG.petlink.name}`,
  },
};

export default async function PetlinkLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const brand = BRAND_CONFIG.petlink;
  const section = await getSection('petlink');

  return (
    <div className={`brand-shell ${phenomena.variable}`}>
      <ClientEffects />
      <BrandHeader brand={brand} showWhereToBuy={false} />
      <main>{children}</main>
      <BrandFooter brand={brand} section={section} showWhereToBuy={false} />
    </div>
  );
}
