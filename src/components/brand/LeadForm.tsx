'use client';

import { useState } from 'react';
import type { BrandSlug } from '@/lib/types';
import { SITE_THEME } from '@/lib/siteTheme';
import BrandSelect from '@/components/misc/BrandSelect';

const CLIENT_TYPE_OPTIONS: Record<BrandSlug, { value: string; label: string }[]> = {
  cooperacion: [
    { value: 'mascota', label: 'Tengo una mascota' },
    { value: 'distribuidora', label: 'Tengo una distribuidora' },
    { value: 'veterinaria', label: 'Tengo una veterinaria' },
    { value: 'petshop', label: 'Tengo un petshop' },
  ],
  petlink: [
    { value: 'mascota', label: 'Tengo una mascota' },
    { value: 'distribuidora', label: 'Tengo una distribuidora' },
    { value: 'veterinaria-petshop', label: 'Tengo una veterinaria o petshop' },
  ],
  valor: [
    { value: 'mascota', label: 'Tengo una mascota' },
    { value: 'distribuidora', label: 'Tengo una distribuidora' },
    { value: 'veterinaria-petshop', label: 'Tengo una veterinaria o petshop' },
  ],
};

type LeadFormProps = {
  section: BrandSlug;
};

export default function LeadForm({ section }: LeadFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const theme = SITE_THEME[section];
  const requiredMark = <span className={theme.requiredMarkColor}>*</span>;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setErrorMessage(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      section,
      name: data.get('nombre'),
      email: data.get('email'),
      phone: data.get('celular') || undefined,
      city: data.get('ciudad') || undefined,
      client_type: data.get('tipo-cliente') || undefined,
      message: data.get('mensaje') || undefined,
    };

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? 'No pudimos enviar tu consulta.');
      }

      setStatus('success');
      form.reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'No pudimos enviar tu consulta.');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-5">
        <i className="bi bi-check-circle fs-1 text-color-1 d-block mb-3" />
        <p className="fs-18 mb-0">¡Gracias! Recibimos tu consulta y nos vamos a comunicar a la brevedad.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="nombre" className="form-label">
            Nombre y Apellido {requiredMark}
          </label>
          <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Ingresá tu nombre y apellido" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email {requiredMark}
          </label>
          <input type="email" className="form-control" id="email" name="email" placeholder="Ingresá tu email" required />
        </div>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="celular" className="form-label">
            Celular {requiredMark}
          </label>
          <input type="tel" className="form-control" id="celular" name="celular" placeholder="Ingresá tu número" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="ciudad" className="form-label">
            Ciudad {requiredMark}
          </label>
          <input type="text" className="form-control" id="ciudad" name="ciudad" placeholder="Ingresá tu ciudad" required />
        </div>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-12">
          <label htmlFor="tipo-cliente" className="form-label">
            Tipo de cliente {requiredMark}
          </label>
          <BrandSelect id="tipo-cliente" name="tipo-cliente" options={CLIENT_TYPE_OPTIONS[section]} required />
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-12">
          <label htmlFor="mensaje" className="form-label">
            Mensaje
          </label>
          <textarea className="form-control" id="mensaje" name="mensaje" rows={4} maxLength={5000} />
        </div>
      </div>

      {status === 'error' && (
        <p className="text-color-3 text-center mb-3">{errorMessage}</p>
      )}

      <div className="text-center">
        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando…' : 'Enviar'}
        </button>
      </div>
    </form>
  );
}
