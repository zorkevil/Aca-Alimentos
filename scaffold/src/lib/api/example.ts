// Ejemplo de módulo de recurso — copiar este archivo por cada entidad real del backend
// (ej: products.ts, categories.ts, contacts.ts) y borrar este cuando ya no haga falta de referencia.

import { apiFetch } from '@/lib/api';
import type { ExampleItem } from '@/lib/types';

type ExampleListResponse = { data: ExampleItem[] };
type ExampleDetailResponse = { data: ExampleItem };

export async function getExamples(): Promise<ExampleItem[]> {
  try {
    const response = await apiFetch<ExampleListResponse>('/examples', {
      cache: 'no-store',
    });

    return response.data ?? [];
  } catch (error) {
    console.error('[getExamples] API error', error);
    return [];
  }
}

export async function getExampleBySlug(slug: string): Promise<ExampleItem | null> {
  try {
    const response = await apiFetch<ExampleDetailResponse>(`/examples/${slug}`, {
      cache: 'no-store',
    });

    return response.data ?? null;
  } catch (error) {
    console.error('[getExampleBySlug] API error', error);
    return null;
  }
}
