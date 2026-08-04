import type { Problem } from '../../../types';

const INF03ComputerCoursesProblem: Problem = {
  title: 'Kursy komputerowe (INF.03-01-25.01-SG)',
  tags: ['Typ: Kalkulator', 'Kliknięcie elementu', 'Odczytywanie wartości pól', 'Wstawianie tekstu do elementu'],
  difficulty: 'easy',
  data: () => import('./data').then(m => m.default()),
};

export default INF03ComputerCoursesProblem;
