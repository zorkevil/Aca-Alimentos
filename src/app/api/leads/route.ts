import { NextResponse } from 'next/server';
import { apiFetch } from '@/lib/api';
import { isBrandSlug, type LeadPayload } from '@/lib/types';

export async function POST(req: Request) {
  try {
    const payload: LeadPayload = await req.json();

    if (!payload.name || !payload.email || !payload.section || !isBrandSlug(payload.section)) {
      return NextResponse.json({ error: 'Datos incompletos' }, { status: 400 });
    }

    await apiFetch('/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[POST /api/leads]', error);
    return NextResponse.json({ error: 'Error al enviar el formulario' }, { status: 500 });
  }
}
