import type { Metadata } from 'next';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';

export const metadata: Metadata = {
  title: {
    default: 'ACA Alimentos',
    template: '%s | ACA Alimentos',
  },
  description:
    'Alimentos balanceados para perros y gatos. Conocé ACA Alimentos y nuestras marcas: Cooperación, Valor y Petlink.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body data-bs-theme="light">{children}</body>
    </html>
  );
}
