import { loadQuery } from '@/sanity/lib/load-query';
import type { GlobalsQueryResult } from '@/sanity/sanity.types';
import { defineQuery } from 'groq';

const globalsQuery = defineQuery(
  `*[_type == "globals"][0]{...,siteFavicon{asset->{path,url}},"metaImage": siteImage{asset->{path,url}}}`,
);

export const getGlobals = async () => {
  const { data } = await loadQuery<GlobalsQueryResult>({
    query: globalsQuery,
  });

  return data;
};
