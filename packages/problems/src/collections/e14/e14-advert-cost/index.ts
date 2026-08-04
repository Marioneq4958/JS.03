import type { Problem } from '../../../types';

const E14AdvertCostProblem: Problem = {
  title: 'Koszt ogłoszenia (E.14-06-18.01)',
  tags: ['Typ: Kalkulator', 'Kliknięcie elementu', 'Odczytywanie wartości pól', 'Wstawianie tekstu do elementu'],
  difficulty: 'easy',
  data: () => import('./data').then(m => m.default()),
};

export default E14AdvertCostProblem;
