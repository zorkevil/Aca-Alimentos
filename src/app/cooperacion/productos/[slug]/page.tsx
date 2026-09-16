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

export default async function CooperacionProductoPage({ params }: ProductoPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product || product.section.slug !== 'cooperacion') notFound();

  const relatedProducts = await getRelatedProducts(product);

  return (
    <ProductDetail
      product={product}
      site="cooperacion"
      breadcrumbItems={[
        { label: 'Inicio', href: '/cooperacion' },
        { label: 'Nuestros productos', href: '/cooperacion/productos' },
        { label: product.name },
      ]}
      contactHref="/cooperacion/contacto"
      relatedProducts={relatedProducts}
      productHref={(relatedSlug) => `/cooperacion/productos/${relatedSlug}`}
    />
  );
}
