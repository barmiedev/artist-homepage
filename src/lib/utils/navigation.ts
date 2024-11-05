import {
  type Locale,
  defaultLocale,
  getRouteTranslations,
  isLocale,
} from '@/lib/utils/i18n';

type LinkTag = 'home' | 'albums' | 'track' | 'gigs' | 'gig';

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
  const gigsLink =
    locale === defaultLocale
      ? '/gigs'
      : `/${locale}/${(await getRouteTranslations(locale)).gigs}`;

  return [
    { title: 'HOME', href: homeLink, tag: 'home' },
    {
      title: 'ALBUMS',
      href: albumsLink,
      tag: 'albums',
    },
    {
      title: 'GIGS',
      href: gigsLink,
      tag: 'gigs',
    },
  ];
};

export const getLink = async ({
  locale,
  slug,
  tag,
}: { locale: Locale; slug?: string | null; tag?: LinkTag }) => {
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

  if (tag === 'gigs') {
    return slug
      ? `${prefix}/${routes.gigs}/${slug}`
      : `${prefix}/${routes.gigs}`;
  }

  return prefix;
};

// Function to generate localized paths
export const getLocalizedPath = async ({
  targetLocale,
  currentLocale,
  currentPath,
  segments,
}: {
  targetLocale: string;
  currentLocale: string;
  currentPath: string;
  segments: string[];
}) => {
  if (currentPath === '/' && targetLocale === defaultLocale) return '/';
  if (currentPath === '/' && targetLocale !== defaultLocale)
    return `/${targetLocale}`;

  const routes = await getRouteTranslations(targetLocale);
  const currentRoutes = await getRouteTranslations(currentLocale);
  let defaultRoutes = routes;

  if (currentLocale !== defaultLocale) {
    defaultRoutes = await getRouteTranslations(defaultLocale);
  }

  const pathSegments = segments
    .filter(Boolean)
    .slice(currentLocale === defaultLocale ? 0 : 1);

  if (currentLocale !== targetLocale) {
    pathSegments.forEach((segment, index) => {
      const key = Object.keys(currentRoutes).find(
        (key) => currentRoutes[key] === segment,
      );
      if (!key) return;
      pathSegments[index] = defaultRoutes[key] || segment;
    });
  }

  if (targetLocale === defaultLocale) {
    return `/${pathSegments.join('/')}`;
  }

  const translatedSegments = pathSegments.map((segment) => {
    return routes[segment] || segment;
  });

  return `/${targetLocale}/${translatedSegments.join('/')}`;
};

export const getSegments = (currentPath: string) => {
  const segments = currentPath.split('/').filter(Boolean);
  const currentLocale =
    segments[0] && isLocale(segments[0]) ? segments[0] : defaultLocale;
  return { currentLocale, segments };
};
