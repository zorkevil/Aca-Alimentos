import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/api/blog';
import BlogPostDetail from '@/components/misc/BlogPostDetail';

type NoticiaPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: NoticiaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug('petlink', slug);
  return { title: post?.title ?? 'Artículo' };
}

export default async function PetlinkNoticiaPage({ params }: NoticiaPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug('petlink', slug);

  if (!post) notFound();

  const relatedPage = await getBlogPosts('petlink', {
    tags: post.tags.map((t) => t.slug),
    perPage: 4,
  });
  const relatedPosts = relatedPage.data.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <BlogPostDetail
      post={post}
      site="petlink"
      brandHref="/petlink"
      blogHref="/petlink/blog"
      relatedPosts={relatedPosts}
      postHref={(relatedSlug) => `/petlink/blog/${relatedSlug}`}
      productsBasePath="/petlink/productos"
    />
  );
}
