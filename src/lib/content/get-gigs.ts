import { loadQuery } from '@/sanity/lib/load-query';
import type { Gig, GigsQueryResult } from '@/sanity/sanity.types';
import { defineQuery } from 'groq';

const gigsQuery = defineQuery(`*[_type == "gig"] | order(date desc)`);

export const getGigs = async () => {
  const { data } = await loadQuery<GigsQueryResult>({
    query: gigsQuery,
  });

  return data;
};

export const getLastGigs = async (howMany?: number) => {
  const { data } = await loadQuery<Gig[]>({
    query: defineQuery(`*[_type == "gig"] | order(date desc) [0...${howMany}]`),
  });

  return data;
};
