import { loadQuery } from '@/sanity/lib/load-query';
import type { TracksQueryResult } from '@/sanity/sanity.types';
import { defineQuery } from 'groq';

const tracksQuery = defineQuery(`*[_type == "track"]`);

export const getTracks = async () => {
  const { data } = await loadQuery<TracksQueryResult>({
    query: tracksQuery,
  });

  return data;
};
