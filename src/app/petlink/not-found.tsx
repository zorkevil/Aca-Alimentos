import BrandNotFound from '@/components/brand/BrandNotFound';

export default function PetlinkNotFound() {
  return (
    <BrandNotFound
      homeHref="/petlink"
      title="Ups..."
      message="Esta página se distrajo persiguiendo una pelota. Volvé al inicio desde aquí."
      centered
    />
  );
}
