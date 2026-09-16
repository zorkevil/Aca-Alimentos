'use client';

import { useState } from 'react';

type ShareButtonsProps = {
  iconClass: string;
};

// Facebook tiene una URL oficial de "compartir" (sharer.php); Instagram no
// tiene un equivalente web para compartir un link externo, así que copia el
// link al portapapeles y avisa — el patrón que usan la mayoría de los blogs.
export default function ShareButtons({ iconClass }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  function shareOnFacebook(event: React.MouseEvent) {
    event.preventDefault();
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      'compartir-facebook',
      'width=600,height=400,noopener,noreferrer',
    );
  }

  async function copyLinkForInstagram(event: React.MouseEvent) {
    event.preventDefault();
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Clipboard API no disponible/permitida — sin feedback en vez de romper.
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center gap-3">
        <a href="#" onClick={shareOnFacebook} className={iconClass} aria-label="Compartir en Facebook">
          <i className="bi bi-facebook fs-40" />
        </a>
        <a href="#" onClick={copyLinkForInstagram} className={iconClass} aria-label="Compartir en Instagram">
          <i className="bi bi-instagram fs-40" />
        </a>
      </div>
      {copied && (
        <p className="text-center mt-3 mb-0 fs-14">Link copiado — pegalo en tu historia o bio de Instagram.</p>
      )}
    </>
  );
}
