import { loadQuery } from '@/sanity/lib/load-query';
import type { AlbumQueryResult } from '@/sanity/sanity.types';
import { defineQuery } from 'groq';
import type { QueryParams } from 'sanity';

const albumQuery = defineQuery(
  `*[_type == "album" && slug.current == $slug][0]{..., "tracks": tracks[]->{title, "slug": slug.current, trackNumber}, mixedBy->{name}, masteredBy->{name}, "listen": listen->{title, spotifyUrl, appleUrl, youtubeUrl, soundcloudUrl, bandcampUrl, tidalUrl}, "recordedBy": recordedBy[]->{name}, "credits": credits[]->{person->{name}, role, description}}`,
);

export const getAlbum = async (params: QueryParams) => {
  const { data } = await loadQuery<AlbumQueryResult>({
    query: albumQuery,
    params,
  });

  return data;
};
