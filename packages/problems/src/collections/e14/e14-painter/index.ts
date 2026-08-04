import type { Problem } from '../../../types';

const E14PainterProblem: Problem = {
  title: 'Malarz (E.14-01-20.06-SG)',
  tags: [
    'Typ: Kalkulator',
    'Kliknięcie elementu',
    'Odczytywanie wartości pól',
    'Wstawianie tekstu do elementu',
    'Obiekt Math',
  ],
  difficulty: 'easy',
  data: () => import('./data').then(m => m.default()),
};

export default E14PainterProblem;
