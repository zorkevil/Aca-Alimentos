'use client';

// Bootstrap solo sincroniza automáticamente sus propios ".carousel-indicators";
// las miniaturas de producto son botones aparte (misma maqueta, ver main.js),
// así que hay que escuchar "slid.bs.carousel" a mano y marcar la miniatura
// correspondiente como activa.
import { useEffect } from 'react';

export default function ProductGalleryEffects() {
  useEffect(() => {
    const carousel = document.getElementById('productCarousel');
    if (!carousel) return;

    function handleSlid(event: Event) {
      const to = (event as Event & { to: number }).to;
      document.querySelectorAll<HTMLElement>('.product-thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === to);
      });
    }

    carousel.addEventListener('slid.bs.carousel', handleSlid);
    return () => carousel.removeEventListener('slid.bs.carousel', handleSlid);
  }, []);

  return null;
}
