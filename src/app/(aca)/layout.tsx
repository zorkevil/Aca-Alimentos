import '@/styles/styles-aca.scss';

import { heebo } from '@/lib/fonts';
import AcaHeader from '@/components/aca/AcaHeader';
import AcaFooter from '@/components/aca/AcaFooter';
import ClientEffects from '@/components/misc/ClientEffects';

export default function AcaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`brand-shell ${heebo.variable}`}>
      <ClientEffects />
      <AcaHeader />
      <main>{children}</main>
      <AcaFooter />
    </div>
  );
}
