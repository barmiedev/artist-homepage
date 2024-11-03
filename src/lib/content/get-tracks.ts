import { loadQuery } from '@/sanity/lib/load-query';
import type { SanityDocument } from '@sanity/client';

export const getTracks = async () => {
  const { data } = (await loadQuery({
    query: `*[_type == "track"]`,
  })) as { data: SanityDocument[] };

  return data;
};
