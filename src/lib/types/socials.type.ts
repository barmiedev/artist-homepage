export const socialTypes = [
  'instagram',
  'twitter',
  'facebook',
  'spotify',
  'appleMusic',
  'youtube',
  'soundcloud',
  'bandcamp',
  'email',
] as const;
export type SocialType = (typeof socialTypes)[number];

export type Social = {
  name: SocialType;
  href: string;
};
