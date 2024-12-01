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

export const getLastPastGigs = async (howMany?: number) => {
  const { data } = await loadQuery<Gig[]>({
    query: defineQuery(
      `*[_type == "gig" && date < now()] | order(date desc) [0...${howMany}]`,
    ),
  });

  return data;
};

export const getNextGigs = async (howMany?: number) => {
  const { data } = await loadQuery<Gig[]>({
    query: defineQuery(
      `*[_type == "gig" && date > now()] | order(date asc) [0...${howMany}]`,
    ),
  });

  return data;
};
