import type { Problem } from '../../../types';

const INF03HairSalonProblem: Problem = {
  title: 'Promocja (INF.03-08-24.01-SG)',
  tags: ['Typ: Kalkulator', 'Kliknięcie elementu', 'Odczytywanie wartości pól', 'Wstawianie tekstu do elementu'],
  difficulty: 'easy',
  data: () => import('./data').then((m) => m.default()),
};

export default INF03HairSalonProblem;
