import type { Problem } from '../../../types';

const INF03ArtisticPhotographyProblem: Problem = {
  title: 'Fotografia artystyczna (INF.03-05-25.06-SG)',
  tags: [
    'Typ: Formularz',
    'Kliknięcie elementu',
    'Odczytywanie wartości pól',
    'Wstawianie elementów',
    'Wczytywanie plików',
  ],
  difficulty: 'medium',
  data: () => import('./data').then((m) => m.default()),
};

export default INF03ArtisticPhotographyProblem;
