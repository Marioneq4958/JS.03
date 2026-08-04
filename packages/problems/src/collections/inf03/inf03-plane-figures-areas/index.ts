import type { Problem } from '../../../types';

const INF03PlaneFiguresAreasProblem: Problem = {
  title: 'Pola figur płaskich (INF.03-03-26.01-SG)',
  tags: [
    'Typ: Kalkulator',
    'Kliknięcie elementu',
    'Odczytywanie wartości pól',
    'Wstawianie tekstu do elementu',
    'Ustawianie źródła obrazu',
  ],
  difficulty: 'medium',
  data: () => import('./data').then((m) => m.default()),
};

export default INF03PlaneFiguresAreasProblem;
