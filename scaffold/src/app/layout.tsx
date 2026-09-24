import type { Metadata } from 'next';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';
import '@/styles/styles.css';

// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'REEMPLAZAR nombre del sitio',
    template: '%s | REEMPLAZAR nombre del sitio',
  },
  description: 'REEMPLAZAR descripción del sitio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body data-bs-theme="light" className="font-sans antialiased">
        {/* <Header /> */}

        <main>{children}</main>

        {/* <Footer /> */}
      </body>
    </html>
  );
}
