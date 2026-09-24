// Patrón server/client: este archivo (.server.tsx) hace el fetch y le pasa los datos
// por props al componente de presentación (ExampleSection.tsx). Borrar cuando ya no
// haga falta de referencia.

import ExampleSection from './ExampleSection';
import { getExamples } from '@/lib/api/example';

export default async function ExampleSectionServer() {
  const items = await getExamples();

  return <ExampleSection items={items} />;
}
