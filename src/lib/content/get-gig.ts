import { loadQuery } from '@/sanity/lib/load-query';
import type { GigQueryResult } from '@/sanity/sanity.types';
import { defineQuery } from 'groq';
import type { QueryParams } from 'sanity';

const gigQuery = defineQuery(`*[_type == "gig" && slug.current == $slug][0]`);

export const getGig = async (params: QueryParams) => {
  const { data } = await loadQuery<GigQueryResult>({
    query: gigQuery,
    params,
  });

  return data;
};