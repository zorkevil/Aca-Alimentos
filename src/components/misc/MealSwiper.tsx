'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

type MealSwiperProps = {
  images: { src: string; alt: string }[];
};

export default function MealSwiper({ images }: MealSwiperProps) {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      className="mealSwiper"
      effect="fade"
      fadeEffect={{ crossFade: true }}
      loop
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      speed={1000}
    >
      {images.map((image) => (
        <SwiperSlide key={image.src}>
          <Image src={image.src} alt={image.alt} width={500} height={500} className="img-fluid" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
