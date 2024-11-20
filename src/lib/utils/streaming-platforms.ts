import type { Platform } from '../types';

type StreamingPlatformSpecs = {
  label: string;
  background: string;
  foreground: string;
};

export const getStreamingPlatformSpecs = (
  platform: Platform,
): StreamingPlatformSpecs => {
  switch (platform) {
    case 'spotify':
      return {
        label: 'Spotify',
        background: '#1DB954',
        foreground: '#000000',
      };
    case 'apple':
      return {
        label: 'Apple Music',
        background: '#000000',
        foreground: '#FFFFFF',
      };
    case 'youtube':
      return {
        label: 'YouTube',
        background: '#FF0000',
        foreground: '#FFFFFF',
      };
    case 'soundcloud':
      return {
        label: 'SoundCloud',
        background: '#FF5500',
        foreground: '#FFFFFF',
      };
    case 'bandcamp':
      return {
        label: 'Bandcamp',
        background: '#629AA9',
        foreground: '#FFFFFF',
      };
    case 'tidal':
      return {
        label: 'Tidal',
        background: '#000000',
        foreground: '#FFFFFF',
      };
  }
};
