import type { Gig } from '@/sanity/sanity.types';

export const getGigsTimeline = async (
  gigs: Gig[],
): Promise<{ upcoming: Gig[]; past: Gig[] }> => {
  const now = new Date().getTime();
  const upcoming = gigs.filter((gig) => new Date(gig.date).getTime() >= now);
  const past = gigs.filter((gig) => new Date(gig.date).getTime() < now);

  return { upcoming, past };
};
