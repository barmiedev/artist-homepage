import { loadQuery } from '@/sanity/lib/load-query';
import type { Album } from '@/sanity/sanity.types';
import { defineQuery } from 'groq';

const albumsQuery = defineQuery(`*[_type == "album"]`);

export const getAlbums = async () => {
  const { data } = await loadQuery<Album[]>({
    query: albumsQuery,
  });

  return data;
};
