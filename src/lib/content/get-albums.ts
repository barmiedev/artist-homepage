import type { SanityDocument } from '@sanity/client';
import { loadQuery } from '../../sanity/lib/load-query';

export const getAlbums = async () => {
  const { data } = (await loadQuery<SanityDocument[]>({
    query: `*[_type == "album"]`,
  })) as { data: SanityDocument[] };

  return data;
};
