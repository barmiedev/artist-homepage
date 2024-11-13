import { loadQuery } from '@/sanity/lib/load-query';
import type { DocsQueryResult, GigsQueryResult } from '@/sanity/sanity.types';
import { defineQuery } from 'groq';

const docsQuery = defineQuery(`*[_type == "docs"] | order(language asc)`);

export const getDocs = async () => {
  const { data } = await loadQuery<DocsQueryResult>({
    query: docsQuery,
  });

  return data;
};
