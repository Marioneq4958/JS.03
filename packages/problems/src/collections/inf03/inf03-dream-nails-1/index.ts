import type { Problem } from '../../../types';

const INF03DreamNailsIProblem: Problem = {
  title: 'Wymarzone paznokcie I (INF.03-09-26.01-SG)',
  tags: [
    'Typ: Ukryte sekcje',
    'Najechanie na element',
    'Ustawianie styli dla elementów',
    'Ukrywanie/pokazywanie elementu',
  ],
  difficulty: 'easy',
  data: () => import('./data').then((m) => m.default()),
};

export default INF03DreamNailsIProblem;
