import type { Collection } from '../types';
import E14Collection from './e14';
import EE09Collection from './ee09';
import INF03Collection from './inf03';

const collections: Record<string, Collection> = {
  inf03: INF03Collection,
  ee09: EE09Collection,
  e14: E14Collection,
};

export default collections;
