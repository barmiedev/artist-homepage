// Global i18n utils
export const locales = ['en', 'pl', 'de'] as const;
export const defaultLocale = 'en';
export type Locale = (typeof locales)[number];

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

export const getLocalesWithout = (locale: Locale) =>
  locales.filter((l) => l !== locale);

export function getLocaleFromUrl(url: URL): string {
  const [, segment] = url.pathname.split('/');
  if (segment && isLocale(segment)) {
    return segment;
  }
  return defaultLocale;
}

export async function getTranslations(locale: string, namespace: string) {
  try {
    const translations = await import(`../../i18n/${locale}/${namespace}.json`);
    return translations.default;
  } catch (error) {
    console.error(
      `Translation file not found for locale: ${locale}, namespace: ${namespace}`,
    );
    // Fallback to default locale if translation is missing
    try {
      const fallback = await import(
        `../../i18n/${defaultLocale}/${namespace}.json`
      );
      return fallback.default;
    } catch {
      return {};
    }
  }
}

export async function getRouteTranslations(locale: string) {
  return getTranslations(locale, 'routes');
}

export async function translatePath(path: string, locale: string) {
  if (locale === 'en') return path;

  const routes = await getRouteTranslations(locale);
  const segments = path.split('/').filter(Boolean);

  if (segments.length === 0) return `/${locale}`;

  const translatedSegments = segments.map((segment) => {
    return routes.pages[segment] || segment;
  });

  return `/${locale}/${translatedSegments.join('/')}`;
}
