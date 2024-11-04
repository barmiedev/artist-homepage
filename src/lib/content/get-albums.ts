import { loadQuery } from '@/sanity/lib/load-query';
import type { AlbumQueryResult } from '@/sanity/sanity.types';
import { defineQuery } from 'groq';

const albumsQuery = defineQuery(`*[_type == "album"]`);

export const getAlbums = async () => {
  const { data } = await loadQuery<AlbumQueryResult[]>({
    query: albumsQuery,
  });

  return data;
};
