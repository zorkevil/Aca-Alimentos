import Link from 'next/link';

type BrandNotFoundProps = {
  homeHref: string;
  title?: string;
  message?: string;
  centered?: boolean;
};

export default function BrandNotFound({
  homeHref,
  title = '¡UPS!',
  message = 'Alguien escondió esta página en otro lugar. Volvé al inicio desde acá.',
  centered = false,
}: BrandNotFoundProps) {
  return (
    <section className="error-404-hero py-8 py-md-8">
      <div className="container">
        <div className={`row py-6 py-md-7 ${centered ? 'justify-content-center text-center' : ''}`.trim()}>
          <div className="col-lg-6">
            <h1 className="text-white">{title}</h1>
            <p className="fs-24 text-white">{message}</p>
            <Link href={homeHref} className="btn btn-primary">
              Ir al inicio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
