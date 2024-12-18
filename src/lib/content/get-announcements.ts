import { loadQuery } from '@/sanity/lib/load-query';
import type { AnnouncementQueryResult } from '@/sanity/sanity.types';
import { defineQuery } from 'groq';
import type { QueryParams } from 'sanity';

const announcementQuery = defineQuery(
  `*[_type == "announcement" && active == true && slug.current == $slug][0]{..., "listen": listen->{title, spotifyUrl, appleUrl, youtubeUrl, soundcloudUrl, bandcampUrl, tidalUrl}}`,
);

export const getAnnouncement = async (params: QueryParams) => {
  const { data } = await loadQuery<AnnouncementQueryResult>({
    query: announcementQuery,
    params,
  });

  return data;
};

export const getAnnouncements = async () => {
  const { data } = await loadQuery<AnnouncementQueryResult[]>({
    query: defineQuery(
      `*[_type == "announcement" && active == true] | order(publishedAt desc)`,
    ),
  });

  return data;
};

export const getAnnouncementsWithoutSlug = async (slug: string) => {
  const { data } = await loadQuery<AnnouncementQueryResult[]>({
    query: defineQuery(
      `*[_type == "announcement" && active == true && slug.current != "${slug}"] | order(publishedAt desc)`,
    ),
  });

  return data;
};

export const getLastAnnouncements = async (howMany?: number) => {
  const { data } = await loadQuery<AnnouncementQueryResult[]>({
    query: defineQuery(
      `*[_type == "announcement" && active == true] | order(publishedAt desc) [0...${howMany}]`,
    ),
  });

  return data;
};

export const getLastAnnouncement = async () => {
  const { data } = await loadQuery<AnnouncementQueryResult>({
    query: defineQuery(
      `*[_type == "announcement" && active == true] | order(publishedAt desc) [0]`,
    ),
  });

  return data;
};
