export type FaqItem = { question: string; answer: string };

export default function FaqAccordion({ items, accordionId = 'accordionFaqs' }: { items: FaqItem[]; accordionId?: string }) {
  return (
    <div className="accordion" id={accordionId}>
      {items.map((item, i) => {
        const headingId = `${accordionId}-heading-${i}`;
        const collapseId = `${accordionId}-collapse-${i}`;
        return (
          <div
            className="accordion-item rounded-0 wow animate__animated animate__fadeInUp"
            data-wow-delay={i > 0 ? `${i * 0.1}s` : undefined}
            key={headingId}
          >
            <h2 className="accordion-header" id={headingId}>
              <button
                className={`accordion-button py-4 fw-semibold shadow-none ${i > 0 ? 'collapsed' : ''}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${collapseId}`}
                aria-expanded={i === 0}
                aria-controls={collapseId}
              >
                {item.question}
              </button>
            </h2>
            <div
              id={collapseId}
              className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`}
              aria-labelledby={headingId}
              data-bs-parent={`#${accordionId}`}
            >
              <div className="accordion-body pt-0 px-4 pb-4">
                <p className="mb-0">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
