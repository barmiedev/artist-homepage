import type { SchemaTypeDefinition } from 'sanity';
import { albumType } from './album';
import { announcementType } from './announcement';
import { articleType } from './article';
import { blockContentType } from './block-content';
import { creditType } from './credit';
import { gigType } from './gig';
import { globalsType } from './globals';
import { listenType } from './listen';
import { lyricsType } from './lyrics';
import { personType } from './person';
import { trackType } from './track';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    announcementType,
    articleType,
    albumType,
    creditType,
    listenType,
    lyricsType,
    personType,
    trackType,
    gigType,
    globalsType
  ],
};
