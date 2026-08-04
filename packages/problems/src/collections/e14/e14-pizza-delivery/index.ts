import type { Problem } from '../../../types';

const E14PizzaDeliveryProblem: Problem = {
  title: 'Dostawa pizzy (E.14-06-18.06)',
  tags: ['Typ: Kalkulator', 'Kliknięcie elementu', 'Odczytywanie wartości pól', 'Wstawianie tekstu do elementu'],
  difficulty: 'easy',
  data: () => import('./data').then(m => m.default()),
};

export default E14PizzaDeliveryProblem;
