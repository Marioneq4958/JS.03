import type { Problem } from '../../../types';

const EE09FuelCalculatorProblem: Problem = {
  title: 'Koszt paliwa (EE.09-02-19.06)',
  tags: ['Typ: Kalkulator', 'Kliknięcie elementu', 'Odczytywanie wartości pól', 'Wstawianie tekstu do elementu'],
  difficulty: 'easy',
  data: () => import('./data').then((m) => m.default()),
};

export default EE09FuelCalculatorProblem;
