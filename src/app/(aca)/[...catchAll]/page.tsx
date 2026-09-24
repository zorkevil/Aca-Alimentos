import { notFound } from 'next/navigation';

// Catch-all para cualquier URL institucional que no matchee ninguna ruta
// definida — sin esto, Next no puede saber qué layout aplica y cae al 404
// genérico en vez de renderizar `(aca)/not-found.tsx`.
export default function AcaCatchAll() {
  notFound();
}
