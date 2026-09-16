import BrandNotFound from '@/components/brand/BrandNotFound';

export default function ValorNotFound() {
  return (
    <BrandNotFound
      homeHref="/valor"
      title="MIAU..."
      message="Parece que esta página no está por acá. Volvé al inicio desde aquí."
      centered
    />
  );
}
