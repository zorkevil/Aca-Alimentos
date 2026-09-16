import type { Metadata } from 'next';
import { getBlogPosts } from '@/lib/api/blog';
import { getTags } from '@/lib/api/tags';
import BlogCatalog from '@/components/misc/BlogCatalog';
import { parsePage, type RawSearchParams } from '@/utils/parseProductSearchParams';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Consejos y novedades de Valor sobre nutrición para tu mascota.',
};

function parseTags(searchParams: RawSearchParams): string[] {
  const value = searchParams.tags;
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

export default async function ValorBlogPage({
  searchParams,
}: {
  searchParams: Promise<RawSearchParams>;
}) {
  const params = await searchParams;
  const page = parsePage(params);
  const tags = parseTags(params);
  const search = typeof params.search === 'string' ? params.search : undefined;

  const [blogPage, allTags] = await Promise.all([
    getBlogPosts('valor', { page, perPage: 9, tags, search }),
    getTags(),
  ]);

  function buildPageHref(nextPage: number) {
    const query = new URLSearchParams();
    tags.forEach((v) => query.append('tags', v));
    if (search) query.append('search', search);
    if (nextPage > 1) query.append('page', String(nextPage));
    const qs = query.toString();
    return qs ? `/valor/blog?${qs}` : '/valor/blog';
  }

  return (
    <BlogCatalog
      site="valor"
      title="Claves para cuidar la salud de tu mascota"
      page={blogPage}
      tags={allTags}
      postHref={(slug) => `/valor/blog/${slug}`}
      buildPageHref={buildPageHref}
    />
  );
}
