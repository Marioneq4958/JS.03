import type { Problem } from '../../../types';

const E14ComputerRepairServiceProblem: Problem = {
  title: 'Pogotowie komputerowe (arkusz E.14-06-19.06)',
  tags: [
    'Typ: Formularz',
    'Kliknięcie elementu',
    'Odczytywanie wartości pól',
    'Wstawianie tekstu do elementu',
    'Metody i właściwości String',
  ],
  difficulty: 'easy',
  data: () => import('./data').then(m => m.default()),
};

export default E14ComputerRepairServiceProblem;
