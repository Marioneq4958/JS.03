import type { Problem } from '../../../types';

const EE09CssHelperProblem: Problem = {
  title: 'Pomocnik CSS (EE.09-02-22.06-SG)',
  tags: ['Typ: Kalkulator', 'Kliknięcie elementu', 'Odczytywanie wartości pól', 'Ustawianie styli dla elementów'],
  difficulty: 'easy',
  data: () => import('./data').then((m) => m.default()),
};

export default EE09CssHelperProblem;
