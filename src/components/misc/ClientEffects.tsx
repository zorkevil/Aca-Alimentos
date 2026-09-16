'use client';

// Efectos globales que necesitan window/DOM: JS de Bootstrap (dropdowns, offcanvas,
// carousels) y animaciones on-scroll para los elementos ".wow" de las maquetas.
//
// Nota: el paquete npm "wowjs" no expone módulos ES/CJS reales (es un IIFE pensado
// para <script> suelto), así que en vez de esa librería replicamos su comportamiento
// con IntersectionObserver: oculta ".wow" hasta que entra en viewport, ahí aplica el
// data-wow-delay y lo muestra — la animación en sí ya la hace animate.css vía las
// clases que trae cada elemento en el markup.
import { useEffect } from 'react';

export default function ClientEffects() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');

    const wowElements = document.querySelectorAll<HTMLElement>('.wow');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = el.getAttribute('data-wow-delay');
          if (delay) el.style.animationDelay = delay;
          el.style.visibility = 'visible';
          observer.unobserve(el);
        });
      },
      { threshold: 0.1 },
    );

    wowElements.forEach((el) => {
      el.style.visibility = 'hidden';
      observer.observe(el);
    });

    // Reinicia las animaciones al cambiar de slide en carruseles secundarios
    // (no en el hero, que ya está visible de entrada).
    const carousels = document.querySelectorAll('.carousel:not(#heroCarousel)');

    function restartWow(event: Event) {
      const activeSlide = (event.target as HTMLElement).querySelector('.carousel-item.active');
      activeSlide?.querySelectorAll<HTMLElement>('.wow').forEach((el) => {
        el.style.visibility = 'hidden';
        // Fuerza el reinicio de la animación de animate.css
        el.classList.remove('animate__animated');
        void el.offsetWidth;
        el.classList.add('animate__animated');
        el.style.visibility = 'visible';
      });
    }

    carousels.forEach((carousel) => carousel.addEventListener('slid.bs.carousel', restartWow));

    return () => {
      observer.disconnect();
      carousels.forEach((carousel) =>
        carousel.removeEventListener('slid.bs.carousel', restartWow),
      );
    };
  }, []);

  return null;
}
