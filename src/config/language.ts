export const languageCookieName = 'artist-homepage-language';
export const languageCookieExpires = 60 * 60 * 24 * 365; // 1 year

// UTC string for 1 year from now
export const getLanguageCookieExpiresFromNow = () => {
  return new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
};

export const getLanguageCookie = (locale?: string) => {
  if (!locale) return '';
  const expires = getLanguageCookieExpiresFromNow();
  return `${languageCookieName}=${locale}; expires=${expires}; path=/`;
};
