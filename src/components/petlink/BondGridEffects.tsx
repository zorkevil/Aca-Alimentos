'use client';

// El panel de detalle de cada "bond-box" (#bondGrid en vinculo.html) tiene que
// aparecer siempre después de la fila del box que lo abrió, ocupando todo el
// ancho del grid — pero al estar en el DOM justo después de SU box (no del
// último de la fila), un simple `grid-column: 1 / -1` empuja el resto de los
// boxes de esa fila hacia abajo. La maqueta lo resuelve moviendo el panel con
// JS al abrirse (evento `show.bs.collapse`), justo después del último box de
// su fila, y recalculando la posición de la flechita (`--arrow-left`).
import { useEffect } from 'react';

function columnsPerRow() {
  const w = window.innerWidth;
  if (w < 768) return 1;
  if (w < 1200) return 2;
  return 3;
}

export default function BondGridEffects() {
  useEffect(() => {
    const grid = document.getElementById('bondGrid');
    if (!grid) return;

    const boxes = Array.from(grid.querySelectorAll<HTMLElement>('.bond-box'));

    function positionPanel(panel: HTMLElement) {
      const index = boxes.findIndex((box) => box.getAttribute('data-bs-target') === `#${panel.id}`);
      if (index === -1) return;

      const perRow = columnsPerRow();
      const rowEndIndex = Math.min(Math.ceil((index + 1) / perRow) * perRow, boxes.length) - 1;
      const afterBox = boxes[rowEndIndex];

      if (panel.previousElementSibling !== afterBox) {
        afterBox.insertAdjacentElement('afterend', panel);
      }

      const col = index % perRow;
      const arrowLeft = ((col + 0.5) / perRow) * 100;
      panel.querySelector<HTMLElement>('.bond-detail')?.style.setProperty('--arrow-left', `${arrowLeft}%`);
    }

    function handleShow(event: Event) {
      positionPanel(event.target as HTMLElement);
    }

    function handleResize() {
      const openPanel = grid?.querySelector<HTMLElement>('.bond-detail-wrap.show');
      if (openPanel) positionPanel(openPanel);
    }

    grid.addEventListener('show.bs.collapse', handleShow);
    window.addEventListener('resize', handleResize);

    return () => {
      grid.removeEventListener('show.bs.collapse', handleShow);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return null;
}
