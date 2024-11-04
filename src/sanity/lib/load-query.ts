import { sanityClient } from 'sanity:client';
import type { QueryParams } from 'sanity';

export async function loadQuery<T>({
  query,
  params,
}: {
  query: string;
  params?: QueryParams;
}) {
  const { result } = await sanityClient.fetch<T>(query, params ?? {}, {
    filterResponse: false,
  });

  return {
    data: result,
  };
}
