import { loadQuery } from '@/sanity/lib/load-query';
import type { SanityDocument } from '@sanity/client';
import type { QueryParams } from 'sanity';

export const getAlbum = async (params: QueryParams) => {
  const { data } = (await loadQuery({
    query: `*[_type == "album" && slug.current == $slug][0]{..., "tracks": tracks[]->{title, "slug": slug.current}}`,
    params,
  })) as { data: SanityDocument };

  return data;
};
