import { notFound } from 'next/navigation';

// Catch-all para cualquier URL de Valor que no matchee ninguna ruta
// definida — sin esto, Next no puede saber qué layout aplica y cae al 404
// genérico en vez de renderizar `valor/not-found.tsx`.
export default function ValorCatchAll() {
  notFound();
}
