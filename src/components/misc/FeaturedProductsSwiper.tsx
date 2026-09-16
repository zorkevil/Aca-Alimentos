'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import type { Product } from '@/lib/types';
import type { SiteSlug } from '@/lib/siteTheme';
import ProductCard from './ProductCard';

type FeaturedProductsSwiperProps = {
  products: Product[];
  site: SiteSlug;
  // string, no función: este componente cruza al cliente y las props que llegan
  // desde un Server Component no pueden ser funciones.
  productsBasePath: string;
  // Petlink monta este swiper sobre un fondo oscuro y necesita flechas blancas
  // (`.swiper-arrows-white` en styles-petlink.scss).
  arrowsWhite?: boolean;
};

export default function FeaturedProductsSwiper({
  products,
  site,
  productsBasePath,
  arrowsWhite = false,
}: FeaturedProductsSwiperProps) {
  if (products.length === 0) return null;

  return (
    <div className={`featured-products-swiper-wrap position-relative ${arrowsWhite ? 'swiper-arrows-white' : ''}`.trim()}>
      <div className="featured-products-swiper-clip">
        <Swiper
          modules={[Navigation]}
          className="featuredProductsSwiper"
          slidesPerView={1}
          spaceBetween={24}
          loop={products.length > 3}
          navigation={{
            nextEl: '.featured-products-swiper-wrap .swiper-button-next',
            prevEl: '.featured-products-swiper-wrap .swiper-button-prev',
          }}
          breakpoints={{
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.slug}>
              <ProductCard product={product} href={`${productsBasePath}/${product.slug}`} site={site} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-button-prev" />
      <div className="swiper-button-next" />
    </div>
  );
}
