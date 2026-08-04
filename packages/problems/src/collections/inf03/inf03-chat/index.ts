import type { Problem } from '../../../types';

const INF03ChatProblem: Problem = {
  title: 'Chat (INF.03-02-24.06-SG)',
  tags: [
    'Typ: Inny',
    'Kliknięcie elementu',
    'Odczytywanie wartości pól',
    'Wstawianie elementów',
    'Tablice',
    'Wartości losowe',
  ],
  difficulty: 'hard',
  data: () => import('./data').then(m => m.default()),
};

export default INF03ChatProblem;
