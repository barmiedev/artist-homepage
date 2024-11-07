import { loadQuery } from '@/sanity/lib/load-query';
import type {
  AlbumQueryResult,
  Article,
  SingleArticleQueryResult,
} from '@/sanity/sanity.types';
import { defineQuery } from 'groq';
import type { QueryParams } from 'sanity';

const articlesQuery = ({
  howMany,
  withoutSlug,
}: { howMany?: number; withoutSlug?: string }) => {
  let slice = '';
  let filter = '';
  if (howMany) {
    slice = `[0...${howMany.toString()}]`;
  }
  if (withoutSlug) {
    filter = `&& slug.current != "${withoutSlug}"`;
  }
  return defineQuery(
    `*[_type == "article"${filter}]${slice} | order(publishedAt desc)`,
  );
};

export const getArticles = async (howMany?: number) => {
  const { data } = await loadQuery<SingleArticleQueryResult[]>({
    query: articlesQuery({ howMany }),
  });

  return data;
};

export const getArticlesWithoutSlug = async (
  slug: string,
  howMany?: number,
) => {
  const { data } = await loadQuery<SingleArticleQueryResult[]>({
    query: articlesQuery({ howMany, withoutSlug: slug }),
  });

  return data;
};

const singleArticleQuery = defineQuery(
  `*[_type == "article" && slug.current == $slug][0]`,
);

export const getSingleArticle = async (params: QueryParams) => {
  const { data } = await loadQuery<SingleArticleQueryResult>({
    query: singleArticleQuery,
    params,
  });

  return data;
};
