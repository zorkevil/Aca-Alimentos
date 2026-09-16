import '@/styles/styles-valor.scss';

import type { Metadata } from 'next';
import { montserrat, anton } from '@/lib/fonts';
import { BRAND_CONFIG } from '@/lib/brands';
import { getSection } from '@/lib/api/sections';
import BrandHeader from '@/components/brand/BrandHeader';
import BrandFooter from '@/components/brand/BrandFooter';
import ClientEffects from '@/components/misc/ClientEffects';

export const metadata: Metadata = {
  title: {
    default: BRAND_CONFIG.valor.name,
    template: `%s | ${BRAND_CONFIG.valor.name}`,
  },
};

export default async function ValorLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const brand = BRAND_CONFIG.valor;
  const section = await getSection('valor');

  return (
    <div className={`brand-shell ${montserrat.variable} ${anton.variable}`}>
      <ClientEffects />
      <BrandHeader brand={brand} showWhereToBuy={false} />
      <main>{children}</main>
      <BrandFooter brand={brand} section={section} showWhereToBuy={false} />
    </div>
  );
}
