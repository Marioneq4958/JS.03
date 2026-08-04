import type { Problem } from '../../../types';

const INF03DreamNailsIIProblem: Problem = {
  title: 'Wymarzone paznokcie II (INF.03-09-26.01-SG)',
  tags: ['Typ: Inny', 'Pętla', 'Wstawianie elementów'],
  difficulty: 'easy',
  data: () => import('./data').then((m) => m.default()),
};

export default INF03DreamNailsIIProblem;
