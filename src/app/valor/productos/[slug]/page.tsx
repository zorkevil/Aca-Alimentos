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

export default async function ValorProductoPage({ params }: ProductoPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product || product.section.slug !== 'valor') notFound();

  const relatedProducts = await getRelatedProducts(product);

  return (
    <ProductDetail
      product={product}
      site="valor"
      breadcrumbItems={[
        { label: 'Inicio', href: '/valor' },
        { label: 'Nuestros productos', href: '/valor/productos' },
        { label: product.name },
      ]}
      contactHref="/valor/contacto"
      relatedProducts={relatedProducts}
      productHref={(relatedSlug) => `/valor/productos/${relatedSlug}`}
    />
  );
}
