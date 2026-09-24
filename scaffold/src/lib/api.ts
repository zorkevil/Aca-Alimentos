const API_URL = process.env.LARAVEL_API_URL!;
const API_TOKEN = process.env.LARAVEL_API_TOKEN!;

type ApiFetchOptions = RequestInit & {
  auth?: boolean;
};

export async function apiFetch<T>(
  endpoint: string,
  { auth = true, ...options }: ApiFetchOptions = {},
): Promise<T> {
  const headers: Record<string, string> = {
    Accept: 'application/json',
    ...(options.headers as Record<string, string>),
  };

  if (auth) {
    headers.Authorization = `Bearer ${API_TOKEN}`;
  }

  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    throw new Error(`API error ${res.status}`);
  }

  return res.json();
}
