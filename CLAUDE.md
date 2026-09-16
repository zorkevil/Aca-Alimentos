# Guía de desarrollo — Next.js (App Router) + API Laravel

> Este documento describe **cómo se construyen los proyectos frontend de este autor**: convenciones,
> estructura de carpetas, patrones de datos y decisiones técnicas. No contiene lógica de negocio de
> ningún proyecto puntual — está pensado para copiarse a la raíz de un proyecto **nuevo** (como
> `CLAUDE.md`) y que a partir de ahí cualquier trabajo respete este estilo por defecto.
>
> Extraído y generalizado a partir del proyecto "ACA Ganadería" (web/).

## 1. Stack base

- **Next.js (App Router)**, TypeScript en modo `strict`.
- **pnpm** como package manager.
- **Server Components por defecto.** El fetch de datos se hace en el servidor siempre que sea
  posible; el cliente (`'use client'`) se reserva para interactividad puntual (formularios, tabs,
  selects, estado local de UI).
- **Backend: API Laravel**, consumida por token (Bearer), nunca expuesta al browser.
- **UI: Bootstrap 5** (+ `bootstrap-icons`, `animate.css`, WOW.js para animaciones on-scroll) vía
  clases utilitarias directamente en el JSX. Sin CSS-in-JS. Un `globals.css` / `styles.css` propio
  extiende utilidades de Bootstrap y define tokens de color numerados (ver §7).
  - Tailwind puede estar instalado por el boilerplate de `create-next-app`, pero **no se usa** como
    sistema de estilos salvo que se decida explícitamente lo contrario en el proyecto nuevo.
- **Sin librería de estado global** (Redux/Zustand/Jotai). El estado vive en el server component
  (datos) o en `useState` local (UI). Si en algún momento hace falta compartir estado entre muchos
  componentes cliente, evaluarlo puntualmente — no agregarlo por defecto.
- **Sin react-hook-form / zod / axios.** Formularios con `FormData` nativo + validación HTML
  (`required`, `type="email"`, etc.). Llamadas HTTP con `fetch` nativo envuelto en un wrapper propio
  (§3).

## 2. Estructura de carpetas

```
src/
  app/                      # rutas (App Router)
    <seccion>/
      page.tsx              # server component, orquesta layout de la página
      <Seccion>Page.tsx     # opcional: si la página tiene lógica de presentación separada
    api/
      <recurso>/route.ts    # route handlers = proxy hacia Laravel (ver §5)
    layout.tsx
    globals.css
  components/
    <seccion>/              # componentes usados SOLO en esa página/sección
      <SubSeccion>/
    misc/                   # componentes reutilizables entre secciones (Hero, Contact, Cards, etc.)
  lib/
    api.ts                  # wrapper único de fetch (apiFetch<T>)
    api/
      <recurso>.ts          # un archivo por entidad del backend: getX(), getXBySlug(), etc.
    types.ts                # tipos/interfaces centralizados
    navigation.ts            # config de nav/menú si aplica
    mock.ts                  # datos mock TEMPORALES mientras no hay endpoint (marcar con comentario)
  styles/
    styles.css               # utilidades propias + overrides de Bootstrap
  utils/
    <helper>.ts               # helpers puros (formatDate, transformContent, etc.)
  types/
    *.d.ts                    # declaraciones de tipos de libs de terceros sin tipos
```

Regla de oro: **si un componente se usa en más de una sección, va a `components/misc/`; si es
específico de una sección, va en `components/<seccion>/`.**

## 3. Capa de datos (API Laravel)

Un único wrapper centraliza URL base, headers y auth:

```ts
// src/lib/api.ts
const API_URL = process.env.LARAVEL_API_URL!;
const API_TOKEN = process.env.LARAVEL_API_TOKEN!;

type ApiFetchOptions = RequestInit & { auth?: boolean };

export async function apiFetch<T>(
  endpoint: string,
  { auth = true, ...options }: ApiFetchOptions = {},
): Promise<T> {
  const headers: Record<string, string> = {
    Accept: 'application/json',
    ...(options.headers as Record<string, string>),
  };
  if (auth) headers.Authorization = `Bearer ${API_TOKEN}`;

  const res = await fetch(`${API_URL}${endpoint}`, { ...options, headers });
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.json();
}
```

Cada entidad del backend tiene **su propio módulo** en `src/lib/api/<recurso>.ts`, con funciones que:

1. Llaman a `apiFetch<TResponse>` con el tipo de respuesta esperado (`{ data: T }` o `{ data: T[] }`).
2. Envuelven en `try/catch` y **nunca dejan que el error llegue a la página**: loguean con
   `console.error('[nombreFuncion] API error', error)` y devuelven un fallback seguro (`[]`, `null`,
   objeto vacío) según el caso. Las páginas asumen que las funciones de `lib/api` no lanzan.
3. Usan `cache: 'no-store'` cuando el dato es dinámico (o se define explícitamente la estrategia de
   cache/revalidate si el proyecto lo requiere).

```ts
// src/lib/api/products.ts
export async function getProducts(section?: string): Promise<ProductItem[]> {
  try {
    const query = section ? `?general_category=${section}` : '';
    const response = await apiFetch<{ data: ProductItem[] }>(`/products${query}`, {
      cache: 'no-store',
    });
    return response.data ?? [];
  } catch (error) {
    console.error('[getProducts] API error', error);
    return [];
  }
}
```

## 4. Patrón Server / Client: sufijo `.server.tsx`

Cuando una sección necesita datos del backend pero también tiene partes interactivas, se separa en
dos archivos:

- `Seccion.server.tsx` — **server component**, hace los `await getX()` necesarios y le pasa el
  resultado como props al componente de presentación.
- `Seccion.tsx` — componente de presentación (puede ser `'use client'` si tiene interactividad),
  recibe todo por props, no hace fetch.

```tsx
// HaciendaTabsSection.server.tsx
export default async function HaciendaTabsSectionServer() {
  const alliances = await getAlliances();
  const auctions = await getAuctions();
  return <HaciendaTabsSection alliances={alliances} auctions={auctions} />;
}
```

Esto mantiene el fetch en el servidor sin forzar `'use client'` en árboles enteros de UI.

## 5. Formularios y proxy de escritura

No se llama a Laravel directamente desde el cliente para operaciones de escritura (evita exponer el
token). El flujo es:

1. Componente cliente (`'use client'`) arma el payload con `FormData` desde el `onSubmit`.
2. Hace `fetch('/api/<recurso>', { method: 'POST', body: JSON.stringify(payload) })` — una **API
   Route de Next**, no la API de Laravel.
3. La API Route (`src/app/api/<recurso>/route.ts`) valida mínimamente, llama a `apiFetch` (server-side,
   con el token) y devuelve `NextResponse.json(...)`.

```ts
// src/app/api/contact/route.ts
export async function POST(req: Request) {
  try {
    const payload = await req.json();
    if (!payload.email) return NextResponse.json({ error: 'Datos incompletos' }, { status: 400 });
    await apiFetch('/contacts', { method: 'POST', body: JSON.stringify(payload) });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[POST /api/contact]', error);
    return NextResponse.json({ error: 'Error al enviar el formulario' }, { status: 500 });
  }
}
```

Validación de campos: HTML nativo (`required`, `type`) en el form, validación mínima server-side en
la route. Sin librería de esquemas salvo que el proyecto lo pida explícitamente.

## 6. Tipos

- Centralizados en `src/lib/types.ts`, agrupados con separadores comentados:
  ```ts
  // =============================================================================
  // INTERFACES DE DATOS
  // =============================================================================
  ```
  y una segunda sección para props de secciones (`XxxSectionProps`).
- `interface` para entidades de dominio y props de componentes; `type` para uniones, alias simples y
  shapes puntuales (`ApiFetchOptions`, `ProductsApiResponse`, etc. — estos últimos quedan locales al
  archivo de `lib/api/` que los usa, no van a `types.ts`).
- Comentar el formato cuando no es obvio (ej. `date: string; // formato ISO: "2025-10-31"`).

## 7. Estilos

- Bootstrap 5 importado global en `layout.tsx` junto con `bootstrap-icons`, `animate.css` y los CSS
  de librerías de terceros que se usen (swiper, tom-select, etc.).
- `src/styles/styles.css` (importado en `layout.tsx`) es donde viven:
  - Tokens de color numerados: `.text-color-N`, `.bg-color-N`, `.border-color-N` (definir la paleta
    del proyecto acá, no hardcodear hex sueltos en componentes).
  - Extensiones a la escala de spacing de Bootstrap si `m-1..5`/`p-1..5` se quedan cortos (`m-6`,
    `m-7`, etc.).
  - Overrides puntuales de componentes de Bootstrap (botones, forms, navbar, accordion, tabs) para
    adaptarlos a la identidad visual del cliente.
- Animaciones on-scroll con clases `wow animate__animated animate__fadeInUp` + `data-wow-delay`.
- Sin CSS Modules ni styled-components. Si el proyecto nuevo va a usar Tailwind de verdad, decidirlo
  explícitamente al arrancar y actualizar esta sección (no mezclar los dos enfoques a medias).

## 8. Variables de entorno

- Nombres: `LARAVEL_API_URL`, `LARAVEL_API_TOKEN`, `API_BASE_URL`.
- **Sin prefijo `NEXT_PUBLIC_`** salvo que un valor deba llegar sí o sí al bundle del cliente — el
  fetch a Laravel es server-side, así que el token nunca debe ser público.
- `.env.example` versionado con las claves vacías; `.env.local` real fuera de git.

## 9. Metadata / SEO

- `metadata` de Next exportado por página (`title`, `description`).
- En `layout.tsx`, `title.template: '%s | Nombre del sitio'` + `title.default`.
- Scripts de terceros (GTM, GA4) inyectados con `next/script` y `strategy="afterInteractive"`,
  agrupados con comentarios de sección (`{/* ====== GTM ====== */}`).

## 10. Tooling

- **pnpm** + scripts estándar (`dev`, `build`, `start`, `lint`).
- **ESLint** flat config: `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript` +
  `eslint-config-prettier` al final.
- **Prettier**: comillas simples, `semi: true`, `trailingComma: 'all'`, `printWidth: 100`,
  `arrowParens: 'always'`, `endOfLine: 'lf'`.
- **Husky + lint-staged** en pre-commit: `eslint --fix` + `prettier --write` sobre los archivos
  staged.
- `tsconfig.json` con `strict: true` y alias `"@/*": ["src/*"]`.

## 11. Nombres

- Componentes: `PascalCase.tsx` (`HeroSection.tsx`, `ContactSection.tsx`).
- Server companions: mismo nombre + `.server.tsx`.
- Funciones de `lib/api`: verbo + entidad — `getProducts`, `getProductBySlug`, `getAlliances`.
- Carpetas de sección: minúsculas o camelCase según si es ruta de URL (`hacienda/`, minúscula, sin
  espacios ni tildes) o agrupación interna (`haciendaTabs/`, camelCase).
- CSS: clases utilitarias en español-neutro cuando son específicas del layout (`contacto-bg`,
  `servicio-box`), en inglés cuando son genéricas (`box-hover`, `icon-64`).

## 12. Qué NO hacer (por decisión explícita, no por omisión)

- No usar axios — `fetch` nativo alcanza.
- No usar Redux/Zustand/Context global para datos de servidor — traerlos de nuevo en el server
  component de cada página es preferible a cachear a mano.
- No usar react-hook-form/zod salvo pedido explícito — formularios simples no lo necesitan.
- No dejar que un error de `lib/api` explote una página — siempre fallback + log.
- No mezclar Tailwind y Bootstrap "a medias": elegir uno para el proyecto nuevo y listar la decisión
  acá arriba.

---

## Cómo arrancar un proyecto nuevo con esta guía

1. Copiar la carpeta `scaffold/` (hermana de este archivo) al root del proyecto vacío.
2. Copiar este `CLAUDE.md` a la raíz del proyecto nuevo (así cualquier sesión de Claude Code lo carga
   automáticamente).
3. `pnpm install`, `cp .env.example .env.local` y completar `LARAVEL_API_URL` / `LARAVEL_API_TOKEN`.
4. `pnpm exec husky init` si el hook de pre-commit no quedó armado por el `postinstall`.
5. Reemplazar el módulo de ejemplo `src/lib/api/example.ts` por los recursos reales del backend, y
   `src/lib/types.ts` con las entidades reales.
6. Ajustar la paleta de colores y overrides en `src/styles/styles.css` a la identidad visual del
   cliente nuevo.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
