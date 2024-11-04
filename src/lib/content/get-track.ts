import { loadQuery } from '@/sanity/lib/load-query';
import type { TrackQueryResult } from '@/sanity/sanity.types';
import { defineQuery } from 'groq';
import type { QueryParams } from 'sanity';

const trackQuery = defineQuery(
  `*[_type == "track" && slug.current == $slug][0]{..., "album": album->{title, "slug": slug.current}, "lyrics": lyrics[]->{text,language}}`,
);

export const getTrack = async (params: QueryParams) => {
  const { data } = await loadQuery<TrackQueryResult>({
    query: trackQuery,
    params,
  });

  return data;
};
