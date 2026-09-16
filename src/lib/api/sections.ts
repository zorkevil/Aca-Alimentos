import { apiFetch } from '@/lib/api';
import type { BrandSlug, Section, Slider } from '@/lib/types';

type SectionsResponse = { data: Section[] };
type SectionResponse = { data: Section };
type SlidersResponse = { data: Slider[] };

// El sitio institucional ("ACA Alimentos", la raíz — no una de las 3 marcas)
// no aparece en GET /sections, pero sí tiene su propia sección/banner con un
// slug fijo, según la documentación de la API.
export const ACA_SECTION_SLUG = 'aca-alimentos';
type SectionSlug = BrandSlug | typeof ACA_SECTION_SLUG;

export async function getSections(): Promise<Section[]> {
  try {
    const response = await apiFetch<SectionsResponse>('/sections', {
      cache: 'no-store',
    });

    return response.data ?? [];
  } catch (error) {
    console.error('[getSections] API error', error);
    return [];
  }
}

export async function getSection(slug: SectionSlug): Promise<Section | null> {
  try {
    const response = await apiFetch<SectionResponse>(`/sections/${slug}`, {
      cache: 'no-store',
    });

    return response.data ?? null;
  } catch (error) {
    console.error('[getSection] API error', error);
    return null;
  }
}

export async function getSectionSliders(slug: SectionSlug): Promise<Slider[]> {
  try {
    const response = await apiFetch<SlidersResponse>(`/sections/${slug}/sliders`, {
      cache: 'no-store',
    });

    return response.data ?? [];
  } catch (error) {
    console.error('[getSectionSliders] API error', error);
    return [];
  }
}
