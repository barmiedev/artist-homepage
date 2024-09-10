import type { SchemaTypeDefinition } from 'sanity';
import { albumType } from './album';
import { blockContentType } from './block-content';
import { creditType } from './credit';
import { listenType } from './listen';
import { lyricsType } from './lyrics';
import { personType } from './person';
import { trackType } from './track';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    albumType,
    creditType,
    listenType,
    lyricsType,
    personType,
    trackType,
  ],
};
