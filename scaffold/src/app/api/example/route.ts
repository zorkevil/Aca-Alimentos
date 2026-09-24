// Patrón de proxy: el cliente nunca llama a Laravel directamente para escribir datos.
// Este route handler recibe el payload del form, valida lo mínimo y reenvía con el token
// del lado del servidor.

import { NextResponse } from 'next/server';
import { apiFetch } from '@/lib/api';

type ExamplePayload = {
  email: string | null;
  message: string | null;
};

export async function POST(req: Request) {
  try {
    const payload: ExamplePayload = await req.json();

    if (!payload.email || !payload.message) {
      return NextResponse.json({ error: 'Datos incompletos' }, { status: 400 });
    }

    await apiFetch('/examples', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      auth: true,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[POST /api/example]', error);
    return NextResponse.json({ error: 'Error al enviar el formulario' }, { status: 500 });
  }
}
