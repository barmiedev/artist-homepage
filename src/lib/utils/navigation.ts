import {
  type Locale,
  defaultLocale,
  getRouteTranslations,
} from '@/lib/utils/i18n';

type NavigationLink = {
  title: string;
  href: string;
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
    { title: 'HOME', href: homeLink },
    {
      title: 'ALBUMS',
      href: albumsLink,
    },
  ];
};
