import type { Problem } from '../../../types';

const INF03MeetDragonsProblem: Problem = {
  title: 'Poznaj smoki (INF.03-08-25.06-SG)',
  tags: [
    'Typ: Ukryte sekcje',
    'Kliknięcie elementu',
    'Ustawianie styli dla elementów',
    'Ukrywanie/pokazywanie elementu',
  ],
  difficulty: 'easy',
  data: () => import('./data').then((m) => m.default()),
};

export default INF03MeetDragonsProblem;
