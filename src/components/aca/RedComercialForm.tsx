'use client';

// La API de leads requiere un `section` de marca (cooperacion/valor/petlink) y ACA en sí
// no es una sección — hasta que el backend defina cómo tratar leads corporativos de ACA,
// este formulario arma un mailto: con los datos cargados en vez de pegarle a /api/leads.
const CLIENT_TYPE_OPTIONS = [
  { value: 'Distribuidora', label: 'Distribuidora' },
  { value: 'Veterinaria', label: 'Veterinaria' },
  { value: 'Petshop', label: 'Petshop' },
  { value: 'Cooperativa', label: 'Cooperativa' },
  { value: 'Emprendedor/a', label: 'Emprendedor/a' },
];

const CONTACT_EMAIL = 'comercial@acaalimentos.com';

export default function RedComercialForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const body = [
      `Nombre y apellido: ${data.get('nombre')}`,
      `Email: ${data.get('email')}`,
      `Celular: ${data.get('celular')}`,
      `Ciudad: ${data.get('ciudad')}`,
      `Tipo de cliente: ${data.get('tipo-cliente')}`,
      `Mensaje: ${data.get('mensaje') || '-'}`,
    ].join('\n');

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      'Quiero sumarme a la red comercial de ACA',
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <form className="bg-color-8 p-4 p-md-5" onSubmit={handleSubmit}>
      <div className="row g-3 mb-3">
        <div className="col-12">
          <label htmlFor="nombre" className="form-label">
            Nombre y Apellido <span className="text-color-3">*</span>
          </label>
          <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Ingresá tu nombre y apellido" required />
        </div>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email <span className="text-color-3">*</span>
          </label>
          <input type="email" className="form-control" id="email" name="email" placeholder="Ingresá tu email" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="celular" className="form-label">
            Celular <span className="text-color-3">*</span>
          </label>
          <input type="tel" className="form-control" id="celular" name="celular" placeholder="Ingresá tu número" required />
        </div>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="ciudad" className="form-label">
            Ciudad <span className="text-color-3">*</span>
          </label>
          <input type="text" className="form-control" id="ciudad" name="ciudad" placeholder="Ingresá tu ciudad" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="tipo-cliente" className="form-label">
            Tipo de cliente <span className="text-color-3">*</span>
          </label>
          <select className="form-select" id="tipo-cliente" name="tipo-cliente" required defaultValue="">
            <option value="" disabled>
              Seleccioná una opción
            </option>
            {CLIENT_TYPE_OPTIONS.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-12">
          <label htmlFor="mensaje" className="form-label">
            Mensaje
          </label>
          <textarea className="form-control" id="mensaje" name="mensaje" rows={4} />
        </div>
      </div>

      <div className="text-center">
        <button type="submit" className="btn btn-primary">
          Quiero sumarme a la red comercial
        </button>
      </div>
    </form>
  );
}
