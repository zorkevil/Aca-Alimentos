import '@/styles/styles-cooperacion.scss';

import type { Metadata } from 'next';
import { firaSans } from '@/lib/fonts';
import { BRAND_CONFIG } from '@/lib/brands';
import { getSection } from '@/lib/api/sections';
import BrandHeader from '@/components/brand/BrandHeader';
import BrandFooter from '@/components/brand/BrandFooter';
import ClientEffects from '@/components/misc/ClientEffects';

export const metadata: Metadata = {
  title: {
    default: BRAND_CONFIG.cooperacion.name,
    template: `%s | ${BRAND_CONFIG.cooperacion.name}`,
  },
};

export default async function CooperacionLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const brand = BRAND_CONFIG.cooperacion;
  const section = await getSection('cooperacion');

  return (
    <div className={`brand-shell ${firaSans.variable}`}>
      <ClientEffects />
      <BrandHeader brand={brand} />
      <main>{children}</main>
      <BrandFooter brand={brand} section={section} />
    </div>
  );
}
