import { apiFetch } from '@/lib/api';
import type { Tag } from '@/lib/types';

type TagsResponse = { data: Tag[] };

export async function getTags(): Promise<Tag[]> {
  try {
    const response = await apiFetch<TagsResponse>('/tags', {
      cache: 'no-store',
    });

    return response.data ?? [];
  } catch (error) {
    console.error('[getTags] API error', error);
    return [];
  }
}
