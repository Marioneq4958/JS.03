import type { Problem } from '../../../types';

const E14WeddingCostProblem: Problem = {
  title: 'Koszt wesela (E.14-05-18.06)',
  tags: ['Typ: Kalkulator', 'Kliknięcie elementu', 'Odczytywanie wartości pól', 'Wstawianie tekstu do elementu'],
  difficulty: 'easy',
  data: () => import('./data').then(m => m.default()),
};

export default E14WeddingCostProblem;
