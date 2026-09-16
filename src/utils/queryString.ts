type QueryValue = string | number | undefined | null | readonly (string | number)[];

// Arma un query string. Los valores multi-valor (species, life_stage, tags)
// la API los acepta en 3 formas equivalentes (array, CSV o valor único) — acá
// se usa la forma CSV (?campo=a,b) por prolijidad, en vez de repetir
// ?campo[]=a&campo[]=b.
export function buildQueryString(params: Record<string, QueryValue>): string {
  const search = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null || value === '') continue;

    if (Array.isArray(value)) {
      if (value.length === 0) continue;
      search.append(key, value.join(','));
    } else {
      search.append(key, String(value));
    }
  }

  const query = search.toString();
  return query ? `?${query}` : '';
}
