import {
  type Locale,
  defaultLocale,
  getRouteTranslations,
} from '@/lib/utils/i18n';

type LinkTag = 'home' | 'albums' | 'track';

type NavigationLink = {
  title: string;
  href: string;
  tag: LinkTag;
};

export const getNavigationLinks = async (
  locale: Locale,
): Promise<NavigationLink[]> => {
  const homeLink = locale === defaultLocale ? '/' : `/${locale}`;
  const albumsLink =
    locale === defaultLocale
      ? '/albums'
      : `/${locale}/${(await getRouteTranslations(locale)).albums}`;

  return [
    { title: 'HOME', href: homeLink, tag: 'home' },
    {
      title: 'ALBUMS',
      href: albumsLink,
      tag: 'albums',
    },
  ];
};

export const getLink = async ({
  locale,
  slug,
  tag,
}: { locale: Locale; slug?: string; tag?: LinkTag }) => {
  const routes = await getRouteTranslations(locale);
  const prefix = locale === defaultLocale ? '' : `/${locale}`;

  if (!tag || tag === 'home') {
    return prefix;
  }

  if (tag === 'albums') {
    return slug
      ? `${prefix}/${routes.albums}/${slug}`
      : `${prefix}/${routes.albums}`;
  }

  if (tag === 'track' && slug) {
    return `${prefix}/${routes.tracks}/${slug}`;
  }

  return prefix;
};
