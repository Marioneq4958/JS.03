import type { Problem } from '../../../types';

const E14CoffeeWholesalerProblem: Problem = {
  title: 'Hurtownia kawy (E.14-04-19.01)',
  tags: ['Typ: Formularz', 'Kliknięcie elementu', 'Odczytywanie wartości pól', 'Wstawianie tekstu do elementu'],
  difficulty: 'easy',
  data: () => import('./data').then(m => m.default()),
};

export default E14CoffeeWholesalerProblem;
