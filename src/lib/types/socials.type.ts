export const socialTypes = [
  'instagram',
  'facebook',
  'tiktok',
  'twitter',
  'spotify',
  'youtube',
  'tidal',
  'bandcamp',
  'appleMusic',
  'soundcloud',
  'email',
] as const;
export type SocialType = (typeof socialTypes)[number];

export type Social = {
  name: SocialType;
  href: string;
  label: string;
};
