import type { Problem } from '../../../types';

const EE09GazetaProblem: Problem = {
  title: 'Gazeta (EE.09-03-23.01-SG)',
  tags: ['Typ: Ukryte sekcje', 'Kliknięcie elementu', 'Ukrywanie/pokazywanie elementu'],
  difficulty: 'easy',
  data: () => import('./data').then((m) => m.default()),
};

export default EE09GazetaProblem;
