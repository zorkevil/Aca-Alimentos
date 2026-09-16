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

export default async function ProductoPage({ params }: ProductoPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  const relatedProducts = await getRelatedProducts(product);

  return (
    <ProductDetail
      product={product}
      site="aca"
      breadcrumbItems={[
        { label: 'Inicio', href: '/' },
        { label: 'Nuestros productos', href: '/productos' },
        { label: product.name },
      ]}
      contactHref="/red-comercial#form-red-comercial"
      relatedProducts={relatedProducts}
      productHref={(relatedSlug) => `/productos/${relatedSlug}`}
    />
  );
}
