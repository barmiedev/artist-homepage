import {
  defaultLocale,
  getLocalesWithout,
  getRouteTranslations,
} from '@/lib/utils/i18n';
import { getAlbums } from './get-albums';
import { getTracks } from './get-tracks';

const generateLocalizedHomePage = async () => {
  const paths = [];

  // Add localized paths
  for (const locale of getLocalesWithout(defaultLocale)) {
    paths.push({
      params: { path: locale },
      props: { locale, page: 'home' },
    });
  }

  return paths;
};

const generateLocalizedAlbumPages = async () => {
  const pages = await getAlbums();
  const paths = [];

  // Add localized paths
  for (const locale of getLocalesWithout(defaultLocale)) {
    const routes = await getRouteTranslations(locale);

    // Add albums page
    paths.push({
      params: { path: `${locale}/${routes.albums}` },
      props: { locale, page: 'albums' },
    });

    // Add dynamic album pages
    for (const { slug } of pages) {
      paths.push({
        params: { path: `${locale}/${routes.albums}/${slug?.current}` },
        props: { locale, page: 'album', slug: slug?.current },
      });
    }
  }
  return paths;
};

const generateLocalizedTrackPages = async () => {
  const pages = await getTracks();
  const paths = [];

  // Add localized paths
  for (const locale of getLocalesWithout(defaultLocale)) {
    const routes = await getRouteTranslations(locale);

    // Add tracks page
    paths.push({
      params: { path: `${locale}/${routes.tracks}` },
      props: { locale, page: 'tracks' },
    });

    // Add dynamic track pages
    for (const { slug } of pages) {
      paths.push({
        params: { path: `${locale}/${routes.tracks}/${slug?.current}` },
        props: { locale, page: 'track', slug: slug?.current },
      });
    }
  }
  return paths;
};

export {
  generateLocalizedHomePage,
  generateLocalizedAlbumPages,
  generateLocalizedTrackPages,
};
