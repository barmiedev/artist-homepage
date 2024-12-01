import {
  type Locale,
  defaultLocale,
  getRouteTranslations,
  isLocale,
} from '@/lib/utils/i18n';

export type LinkTag =
  | 'home'
  | 'albums'
  | 'track'
  | 'gigs'
  | 'gig'
  | 'blog'
  | 'announcement'
  | 'docs'
  | 'contact';

export type NavigationLink = {
  title: string;
  href: string;
  tag: LinkTag;
  hide?: boolean;
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
  const blogLink =
    locale === defaultLocale
      ? '/blog'
      : `/${locale}/${(await getRouteTranslations(locale)).blog}`;
  const contactLink =
    locale === defaultLocale
      ? '/contact'
      : `/${locale}/${(await getRouteTranslations(locale)).contact}`;
  const docsLink =
    locale === defaultLocale
      ? '/docs'
      : `/${locale}/${(await getRouteTranslations(locale)).docs}`;

  return [
    { title: 'home', href: homeLink, tag: 'home', hide: true },
    {
      title: 'albums',
      href: albumsLink,
      tag: 'albums',
    },
    {
      title: 'gigs',
      href: gigsLink,
      tag: 'gigs',
    },
    {
      title: 'blog',
      href: blogLink,
      tag: 'blog',
    },
    {
      title: 'docs',
      href: docsLink,
      tag: 'docs',
    },
    {
      title: 'contact',
      href: contactLink,
      tag: 'contact',
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
    return `${prefix}/`;
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

  if (tag === 'blog') {
    return slug
      ? `${prefix}/${routes.blog}/${slug}`
      : `${prefix}/${routes.blog}`;
  }

  if (tag === 'announcement' && slug) {
    return `${prefix}/${routes.announcements}/${slug}`;
  }

  if (tag === 'docs') {
    return `${prefix}/${routes.docs}`;
  }

  if (tag === 'contact') {
    return `${prefix}/${routes.contact}`;
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
