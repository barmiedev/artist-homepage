import { loadQuery } from '@/sanity/lib/load-query';
import type { SanityDocument } from '@sanity/client';
import type { QueryParams } from 'sanity';

export const getTrack = async (params: QueryParams) => {
  const { data } = (await loadQuery({
    query: `*[_type == "track" && slug.current == $slug][0]{..., "album": album->{title, "slug": slug.current}, "lyrics": lyrics[]->{text,language}}`,
    params,
  })) as { data: SanityDocument };

  return data;
};
