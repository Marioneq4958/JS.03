import type { Problem } from '../../../types';

const INF03TasksProblem: Problem = {
  title: 'Moje zadania (INF.03-02-25.06-SG)',
  tags: ['Typ: Inny', 'Kliknięcie elementu', 'Ustawianie styli dla elementów', 'Odczytywanie wartości pól'],
  difficulty: 'medium',
  data: () => import('./data').then(m => m.default()),
};

export default INF03TasksProblem;
