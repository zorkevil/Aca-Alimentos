import type { Metadata } from 'next';
import { getSection } from '@/lib/api/sections';
import LeadForm from '@/components/brand/LeadForm';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contactate con Petlink: escribinos y te respondemos a la brevedad.',
};

export default async function PetlinkContactoPage() {
  const section = await getSection('petlink');

  return (
    <>
      <section className="py-5 py-md-7 contact-hero">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-white wow animate__animated animate__fadeInUp">CONTÁCTANOS</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 py-md-7">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5 wow animate__animated animate__fadeInUp">
              <p className="fs-20 fw-medium">
                <span className="fw-bold">Queremos ayudarte.</span> Completá el formulario y nos comunicaremos con
                vos lo antes posible.
              </p>
              <hr className="text-color-2 my-4" />
              <h2 className="h3 mb-4">¡Seguinos!</h2>
              <div className="d-flex gap-3">
                {section?.instagram && (
                  <a
                    href={section.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-circle d-flex align-items-center justify-content-center icon-80 border border-2 border-color-2 text-color-2"
                    aria-label="Instagram"
                  >
                    <i className="bi bi-instagram fs-40" />
                  </a>
                )}
                {section?.facebook && (
                  <a
                    href={section.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-circle d-flex align-items-center justify-content-center icon-80 border border-2 border-color-2 text-color-2"
                    aria-label="Facebook"
                  >
                    <i className="bi bi-facebook fs-40" />
                  </a>
                )}
              </div>
            </div>

            <div className="col-lg-7 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <LeadForm section="petlink" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
