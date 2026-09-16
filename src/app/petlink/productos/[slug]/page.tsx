import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug, getRelatedProducts } from '@/lib/api/products';
import ProductDetail from '@/components/misc/ProductDetail';

type ProductoPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: ProductoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  return { title: product?.name ?? 'Producto' };
}

export default async function PetlinkProductoPage({ params }: ProductoPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product || product.section.slug !== 'petlink') notFound();

  const relatedProducts = await getRelatedProducts(product);

  return (
    <ProductDetail
      product={product}
      site="petlink"
      breadcrumbItems={[
        { label: 'Inicio', href: '/petlink' },
        { label: 'Nuestros productos', href: '/petlink/productos' },
        { label: product.name },
      ]}
      contactHref="/petlink/contacto"
      relatedProducts={relatedProducts}
      productHref={(relatedSlug) => `/petlink/productos/${relatedSlug}`}
    />
  );
}
