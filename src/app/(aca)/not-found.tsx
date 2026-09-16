import Link from 'next/link';

export default function AcaNotFound() {
  return (
    <section className="bg-color-2 py-8 py-md-8">
      <div className="container">
        <div className="row py-6 py-md-7">
          <div className="col-lg-6">
            <h1 className="text-white">¡UPS!</h1>
            <p className="fs-24 text-white">Alguien escondió esta página en otro lugar. Volvé al inicio desde acá.</p>
            <Link href="/" className="btn btn-primary">
              Ir al inicio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
