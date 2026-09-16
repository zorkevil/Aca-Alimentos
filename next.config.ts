import type { NextConfig } from 'next';

function apiRemotePattern() {
  const apiUrl = process.env.LARAVEL_API_URL;
  if (!apiUrl) return [];

  try {
    const { protocol, hostname, port, pathname } = new URL(apiUrl);
    // El backend puede estar servido desde un subdirectorio (p. ej. XAMPP en
    // local: /aca-alimentos-backend/public/api) — el storage de imágenes
    // cuelga del mismo subdirectorio, no de la raíz del host.
    const basePath = pathname.replace(/\/api\/?$/, '');
    return [
      {
        protocol: protocol.replace(':', '') as 'http' | 'https',
        hostname,
        port,
        pathname: `${basePath}/storage/**`,
      },
    ];
  } catch {
    return [];
  }
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: apiRemotePattern(),
    // El backend local (XAMPP) resuelve a localhost/127.0.0.1 — Next.js
    // bloquea por defecto optimizar imágenes de IPs privadas (protección
    // SSRF). En producción la API real tiene un dominio público, así que
    // esto solo habilita el caso de desarrollo local.
    dangerouslyAllowLocalIP: true,
  },
};

export default nextConfig;
