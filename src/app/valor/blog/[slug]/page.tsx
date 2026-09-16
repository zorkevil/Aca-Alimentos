import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/api/blog';
import BlogPostDetail from '@/components/misc/BlogPostDetail';

type NoticiaPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: NoticiaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug('valor', slug);
  return { title: post?.title ?? 'Artículo' };
}

export default async function ValorNoticiaPage({ params }: NoticiaPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug('valor', slug);

  if (!post) notFound();

  const relatedPage = await getBlogPosts('valor', {
    tags: post.tags.map((t) => t.slug),
    perPage: 4,
  });
  const relatedPosts = relatedPage.data.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <BlogPostDetail
      post={post}
      site="valor"
      brandHref="/valor"
      blogHref="/valor/blog"
      relatedPosts={relatedPosts}
      postHref={(relatedSlug) => `/valor/blog/${relatedSlug}`}
      productsBasePath="/valor/productos"
    />
  );
}
