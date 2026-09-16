import type { Metadata } from 'next';
import { getBlogPosts } from '@/lib/api/blog';
import { getTags } from '@/lib/api/tags';
import BlogCatalog from '@/components/misc/BlogCatalog';
import { parsePage, type RawSearchParams } from '@/utils/parseProductSearchParams';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Consejos y novedades de Petlink para el vínculo con tu mascota.',
};

function parseTags(searchParams: RawSearchParams): string[] {
  const value = searchParams.tags;
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

export default async function PetlinkBlogPage({
  searchParams,
}: {
  searchParams: Promise<RawSearchParams>;
}) {
  const params = await searchParams;
  const page = parsePage(params);
  const tags = parseTags(params);
  const search = typeof params.search === 'string' ? params.search : undefined;

  const [blogPage, allTags] = await Promise.all([
    getBlogPosts('petlink', { page, perPage: 9, tags, search }),
    getTags(),
  ]);

  function buildPageHref(nextPage: number) {
    const query = new URLSearchParams();
    tags.forEach((v) => query.append('tags', v));
    if (search) query.append('search', search);
    if (nextPage > 1) query.append('page', String(nextPage));
    const qs = query.toString();
    return qs ? `/petlink/blog?${qs}` : '/petlink/blog';
  }

  return (
    <BlogCatalog
      site="petlink"
      title="Saber más es cuidar mejor"
      page={blogPage}
      tags={allTags}
      postHref={(slug) => `/petlink/blog/${slug}`}
      buildPageHref={buildPageHref}
    />
  );
}
