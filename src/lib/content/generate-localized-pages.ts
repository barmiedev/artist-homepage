import {
  defaultLocale,
  getLocalesWithout,
  getRouteTranslations,
} from '@/lib/utils/i18n';
import { getAlbums } from './get-albums';
import { getAnnouncements } from './get-announcements';
import { getArticles } from './get-articles';
import { getGigs } from './get-gigs';
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
    for (const page of pages) {
      paths.push({
        params: { path: `${locale}/${routes.albums}/${page?.slug.current}` },
        props: { locale, page: 'album', slug: page?.slug.current },
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
        params: { path: `${locale}/${routes.tracks}/${slug.current}` },
        props: { locale, page: 'track', slug: slug.current },
      });
    }
  }
  return paths;
};

const generateLocalizedGigPages = async () => {
  const pages = await getGigs();
  const paths = [];

  // Add localized paths
  for (const locale of getLocalesWithout(defaultLocale)) {
    const routes = await getRouteTranslations(locale);

    // Add gigs page
    paths.push({
      params: { path: `${locale}/${routes.gigs}` },
      props: { locale, page: 'gigs' },
    });

    // Add dynamic gig pages
    for (const page of pages) {
      if (!page) continue;
      paths.push({
        params: { path: `${locale}/${routes.gigs}/${page.slug.current}` },
        props: { locale, page: 'gig', slug: page.slug.current },
      });
    }
  }
  return paths;
};

const generateLocalizedArticlePages = async () => {
  const pages = await getArticles();
  const paths = [];

  // Add localized paths
  for (const locale of getLocalesWithout(defaultLocale)) {
    const routes = await getRouteTranslations(locale);

    // Add blog page
    paths.push({
      params: { path: `${locale}/${routes.blog}` },
      props: { locale, page: 'blog' },
    });

    // Add dynamic article pages
    for (const page of pages) {
      paths.push({
        params: { path: `${locale}/${routes.blog}/${page?.slug.current}` },
        props: { locale, page: 'article', slug: page?.slug.current },
      });
    }
  }
  return paths;
};

const generateLocalizedAnnouncementPages = async () => {
  const pages = await getAnnouncements();
  const paths = [];

  // Add localized paths
  for (const locale of getLocalesWithout(defaultLocale)) {
    const routes = await getRouteTranslations(locale);

    // Add dynamic announcement pages
    for (const page of pages) {
      if (!page) continue;
      paths.push({
        params: {
          path: `${locale}/${routes.announcements}/${page.slug.current}`,
        },
        props: { locale, page: 'announcement', slug: page.slug.current },
      });
    }
  }
  return paths;
};

const generateLocalizedDocPage = async () => {
  const paths = [];

  // Add localized paths
  for (const locale of getLocalesWithout(defaultLocale)) {
    const routes = await getRouteTranslations(locale);

    // Add docs page
    paths.push({
      params: { path: `${locale}/${routes.docs}` },
      props: { locale, page: 'docs' },
    });
  }
  return paths;
};

const generateLocalizedContactPage = async () => {
  const paths = [];

  // Add localized paths
  for (const locale of getLocalesWithout(defaultLocale)) {
    const routes = await getRouteTranslations(locale);

    // Add contact page
    paths.push({
      params: { path: `${locale}/${routes.contact}` },
      props: { locale, page: 'contact' },
    });
  }
  return paths;
};

export {
  generateLocalizedHomePage,
  generateLocalizedAlbumPages,
  generateLocalizedTrackPages,
  generateLocalizedGigPages,
  generateLocalizedArticlePages,
  generateLocalizedAnnouncementPages,
  generateLocalizedDocPage,
  generateLocalizedContactPage,
};
