import Image from 'next/image';
import ProductGalleryEffects from './ProductGalleryEffects';

type ProductGalleryProps = {
  images: string[];
  alt: string;
};

// Carousel real de Bootstrap (igual que la maqueta) — así la transición de
// deslizamiento entre fotos la maneja el CSS/JS nativo de Bootstrap, sin
// reimplementarla a mano con estado de React (eso hacía el cambio de foto
// instantáneo, sin animación).
export default function ProductGallery({ images, alt }: ProductGalleryProps) {
  if (images.length === 0) return null;

  return (
    <div className="row g-3 align-items-start">
      {images.length > 1 && <ProductGalleryEffects />}
      {images.length > 1 && (
        <div className="col-auto">
          <div className="product-thumbnails d-flex flex-column gap-2">
            {images.map((src, i) => (
              <button
                key={src + i}
                type="button"
                className={`product-thumbnail ${i === 0 ? 'active' : ''}`}
                data-bs-target="#productCarousel"
                data-bs-slide-to={i}
                aria-current={i === 0}
                aria-label={`Vista ${i + 1}`}
              >
                <Image src={src} alt={`Vista ${i + 1}`} width={80} height={80} />
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="col">
        <div id="productCarousel" className="carousel slide" data-bs-ride="false">
          <div className="carousel-inner">
            {images.map((src, i) => (
              <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={src + i}>
                <Image
                  src={src}
                  alt={i === 0 ? alt : `${alt} — vista ${i + 1}`}
                  width={800}
                  height={800}
                  className="d-block w-100 img-fluid"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
          {images.length > 1 && (
            <>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#productCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Anterior</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#productCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Siguiente</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
