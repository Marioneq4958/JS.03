import type { Problem } from '../../../types';

const EE09MathHelperProblem: Problem = {
  title: 'Pomocnik Matematyczny (EE.09-04-19.06)',
  tags: [
    'Typ: Kalkulator',
    'Kliknięcie elementu',
    'Odczytywanie wartości pól',
    'Wstawianie tekstu do elementu',
    'Obiekt Math',
  ],
  difficulty: 'medium',
  data: () => import('./data').then((m) => m.default()),
};

export default EE09MathHelperProblem;
