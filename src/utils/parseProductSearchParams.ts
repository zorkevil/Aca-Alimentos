import type { LifeStage, Species } from '@/lib/types';

export type RawSearchParams = Record<string, string | string[] | undefined>;

function toArray(value: string | string[] | undefined): string[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

export function parseSpecies(searchParams: RawSearchParams): Species[] {
  return toArray(searchParams.species).filter((v): v is Species => v === 'perro' || v === 'gato');
}

export function parseLifeStage(searchParams: RawSearchParams): LifeStage[] {
  return toArray(searchParams.life_stage).filter(
    (v): v is LifeStage => v === 'cachorro' || v === 'adulto' || v === 'senior',
  );
}

export function parseSection(searchParams: RawSearchParams) {
  const [value] = toArray(searchParams.section);
  return value as 'cooperacion' | 'valor' | 'petlink' | undefined;
}

export function parsePage(searchParams: RawSearchParams): number {
  const [value] = toArray(searchParams.page);
  const page = Number(value);
  return Number.isFinite(page) && page > 0 ? page : 1;
}
