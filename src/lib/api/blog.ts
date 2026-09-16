import { apiFetch } from '@/lib/api';
import { buildQueryString } from '@/utils/queryString';
import type { BlogPostDetail, BrandSlug, PaginatedResponse, BlogPost } from '@/lib/types';

type BlogPostDetailResponse = { data: BlogPostDetail };

export type GetBlogPostsParams = {
  page?: number;
  perPage?: number;
  search?: string;
  tags?: string[];
};

const EMPTY_PAGE: PaginatedResponse<BlogPost> = {
  data: [],
  links: { first: null, last: null, prev: null, next: null },
  meta: { current_page: 1, last_page: 1, per_page: 0, total: 0 },
};

export async function getBlogPosts(
  sectionSlug: BrandSlug,
  params: GetBlogPostsParams = {},
): Promise<PaginatedResponse<BlogPost>> {
  try {
    const query = buildQueryString({
      page: params.page,
      per_page: params.perPage,
      search: params.search,
      tags: params.tags,
    });

    const response = await apiFetch<PaginatedResponse<BlogPost>>(
      `/sections/${sectionSlug}/blog-posts${query}`,
      { cache: 'no-store' },
    );

    return response ?? EMPTY_PAGE;
  } catch (error) {
    console.error('[getBlogPosts] API error', error);
    return EMPTY_PAGE;
  }
}

export async function getBlogPostBySlug(
  sectionSlug: BrandSlug,
  postSlug: string,
): Promise<BlogPostDetail | null> {
  try {
    const response = await apiFetch<BlogPostDetailResponse>(
      `/sections/${sectionSlug}/blog-posts/${postSlug}`,
      { cache: 'no-store' },
    );

    return response.data ?? null;
  } catch (error) {
    console.error('[getBlogPostBySlug] API error', error);
    return null;
  }
}
