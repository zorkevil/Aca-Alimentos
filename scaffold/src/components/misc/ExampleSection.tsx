// Componente de presentación: recibe todo por props, no hace fetch.
// Marcado 'use client' solo porque tiene un estado local de ejemplo (expandir/contraer);
// si la sección es puramente estática, no hace falta 'use client'.
'use client';

import { useState } from 'react';
import type { ExampleItem } from '@/lib/types';

type ExampleSectionProps = {
  items: ExampleItem[];
};

export default function ExampleSection({ items }: ExampleSectionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-6">
      <div className="container">
        <hr className="heading-hr mb-4" />
        <h2 className="mb-4">Ejemplo</h2>

        <div className="row">
          {items.slice(0, expanded ? items.length : 3).map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {items.length > 3 && (
          <button className="btn btn-outline-primary" onClick={() => setExpanded((v) => !v)}>
            {expanded ? 'Ver menos' : 'Ver más'}
          </button>
        )}
      </div>
    </section>
  );
}
