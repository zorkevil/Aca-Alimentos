import type { Product } from '@/lib/types';
import type { SiteSlug } from '@/lib/siteTheme';
import NutrientsTable from './NutrientsTable';
import ConsumptionTable from './ConsumptionTable';

const SECTIONS = [
  { id: 'Ingredientes', title: 'Ingredientes' },
  { id: 'Indicaciones', title: 'Indicaciones de uso' },
  { id: 'Composicion', title: 'Composición Nutricional' },
  { id: 'Consumo', title: 'Tabla de Consumo' },
] as const;

export default function ProductAccordion({ product, site }: { product: Product; site: SiteSlug }) {
  const uppercase = site === 'valor';

  return (
    <div className="accordion" id="accordionProducto">
      {SECTIONS.map((section, i) => (
        <div
          className="accordion-item rounded-0 wow animate__animated animate__fadeInUp"
          data-wow-delay={i > 0 ? `${i * 0.1}s` : undefined}
          key={section.id}
        >
          <h2 className="accordion-header" id={`heading${section.id}`}>
            <button
              className={`accordion-button py-4 fw-semibold shadow-none ${i > 0 ? 'collapsed' : ''} ${uppercase ? 'text-uppercase' : ''}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${section.id}`}
              aria-expanded={i === 0}
              aria-controls={`collapse${section.id}`}
            >
              {section.title}
            </button>
          </h2>
          <div
            id={`collapse${section.id}`}
            className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`}
            aria-labelledby={`heading${section.id}`}
            data-bs-parent="#accordionProducto"
          >
            <div className="accordion-body pt-0 px-4 pb-4">
              {section.id === 'Ingredientes' && product.ingredients && (
                <div dangerouslySetInnerHTML={{ __html: product.ingredients }} />
              )}
              {section.id === 'Indicaciones' && product.usageInstructions && (
                <div dangerouslySetInnerHTML={{ __html: product.usageInstructions }} />
              )}
              {section.id === 'Composicion' && <NutrientsTable nutrients={product.nutrients} />}
              {section.id === 'Consumo' && <ConsumptionTable rows={product.consumptionTable} />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
