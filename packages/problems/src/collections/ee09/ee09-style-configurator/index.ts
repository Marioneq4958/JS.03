import type { Problem } from '../../../types';

const EE09StyleConfiguratorProblem: Problem = {
  title: 'Konfigurator stylu (EE.09-06-22.01-SG)',
  tags: [
    'Typ: Formularz',
    'Kliknięcie elementu',
    'Odczytywanie wartości pól',
    'Ustawianie styli dla elementów',
    'Focus/utrata focusu na elemencie',
  ],
  difficulty: 'easy',
  data: () => import('./data').then((m) => m.default()),
};

export default EE09StyleConfiguratorProblem;
