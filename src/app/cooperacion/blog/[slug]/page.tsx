import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/api/blog';
import BlogPostDetail from '@/components/misc/BlogPostDetail';

type NoticiaPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: NoticiaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug('cooperacion', slug);
  return { title: post?.title ?? 'Artículo' };
}

export default async function CooperacionNoticiaPage({ params }: NoticiaPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug('cooperacion', slug);

  if (!post) notFound();

  const relatedPage = await getBlogPosts('cooperacion', {
    tags: post.tags.map((t) => t.slug),
    perPage: 4,
  });
  const relatedPosts = relatedPage.data.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <BlogPostDetail
      post={post}
      site="cooperacion"
      brandHref="/cooperacion"
      blogHref="/cooperacion/blog"
      relatedPosts={relatedPosts}
      postHref={(relatedSlug) => `/cooperacion/blog/${relatedSlug}`}
      productsBasePath="/cooperacion/productos"
    />
  );
}
