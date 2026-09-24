import { notFound } from 'next/navigation';

// Catch-all para cualquier URL de Petlink que no matchee ninguna ruta
// definida — sin esto, Next no puede saber qué layout aplica y cae al 404
// genérico en vez de renderizar `petlink/not-found.tsx`.
export default function PetlinkCatchAll() {
  notFound();
}
