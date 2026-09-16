import type { Metadata } from 'next';
import FaqAccordion from '@/components/misc/FaqAccordion';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes',
  description: 'Respuestas a las consultas más frecuentes sobre los productos Valor.',
};

const FAQS = [
  {
    question: '¿Cuánto le tengo que dar por día?',
    answer:
      'La cantidad diaria recomendada depende del peso, la edad y el nivel de actividad de tu mascota. Podés consultar la tabla de consumo que figura en el envase o en la ficha de cada producto para conocer la porción indicada.',
  },
  {
    question: '¿Cómo hago el cambio desde otro alimento?',
    answer:
      'Te recomendamos hacer la transición de forma gradual, mezclando el alimento anterior con Valor durante 7 a 10 días, aumentando progresivamente la proporción del nuevo alimento hasta reemplazarlo por completo.',
  },
  {
    question: '¿Cómo conviene guardarlo?',
    answer:
      'Conservá el alimento en un lugar fresco y seco, dentro de su envase original bien cerrado, para preservar su frescura y evitar el contacto con humedad o luz solar directa.',
  },
  {
    question: '¿Dónde veo la fecha de vencimiento?',
    answer: 'La fecha de vencimiento y el número de lote se encuentran impresos en la parte posterior o inferior del envase.',
  },
  {
    question: '¿Dónde se produce?',
    answer: 'Valor es fabricado por ACA Alimentos S.A. en Argentina, bajo estrictos controles de calidad en cada etapa del proceso productivo.',
  },
  {
    question: '¿Puedo vender Valor en mi veterinaria o petshop?',
    answer: 'Sí, podés convertirte en punto de venta de Valor. Escribinos a través del formulario de contacto y nuestro equipo comercial se pondrá en contacto con vos.',
  },
];

export default function ValorFaqsPage() {
  return (
    <>
      <section className="py-5 py-md-7 faqs-hero">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-white wow animate__animated animate__fadeInUp">PREGUNTAS FRECUENTES</h1>
              <p className="lead text-white mb-0 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                Encontrá las respuestas a las consultas más frecuentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 py-md-7">
        <div className="container">
          <FaqAccordion items={FAQS} />
        </div>
      </section>
    </>
  );
}
