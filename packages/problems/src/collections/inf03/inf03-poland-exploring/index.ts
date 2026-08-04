import type { Problem } from '../../../types';

const INF03PolandExploring: Problem = {
  title: 'Zwiedzamy Polskę (INF.03-09-24.06-SG)',
  tags: ['Typ: Galeria', 'Kliknięcie elementu', 'Ustawianie źródła obrazu'],
  difficulty: 'easy',
  data: () => import('./data').then((m) => m.default()),
};

export default INF03PolandExploring;
