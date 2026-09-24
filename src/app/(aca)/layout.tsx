import '@/styles/styles-aca.scss';

import { heebo } from '@/lib/fonts';
import { ACA_SECTION_SLUG, getSection } from '@/lib/api/sections';
import AcaHeader from '@/components/aca/AcaHeader';
import AcaFooter from '@/components/aca/AcaFooter';
import ClientEffects from '@/components/misc/ClientEffects';

export default async function AcaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const section = await getSection(ACA_SECTION_SLUG);

  return (
    <div className={`brand-shell ${heebo.variable}`}>
      <ClientEffects />
      <AcaHeader />
      <main>{children}</main>
      <AcaFooter section={section} />
    </div>
  );
}
