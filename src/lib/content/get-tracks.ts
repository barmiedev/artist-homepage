import { loadQuery } from '@/sanity/lib/load-query';
import type { SanityDocument } from '@sanity/client';
import type { QueryParams } from 'sanity';

export const getTracks = async () => {
  const { data } = (await loadQuery({
    query: `*[_type == "track"]`,
  })) as { data: SanityDocument };

  return data;
};
