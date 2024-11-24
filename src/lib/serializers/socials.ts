import { type Social, socialTypes } from '@/lib/types/socials.type';
import type { GlobalsQueryResult } from '@/sanity/sanity.types';

export const serializeSocials = (globals: GlobalsQueryResult): Social[] => {
  if (!globals) return [];
  // Filter out socials that are not defined in the schema
  const socials = socialTypes.filter((type) => globals[type]);
  return socials.map((type) => ({
    name: type,
    href: globals[type] as string,
    label: type.charAt(0).toUpperCase() + type.slice(1),
  }));
};
