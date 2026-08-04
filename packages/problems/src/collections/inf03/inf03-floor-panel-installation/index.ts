import type { Problem } from '../../../types';

const INF03FloorPanelInstallationProblem: Problem = {
  title: 'Koszt montażu paneli podłogowych (INF.03-02-25.01-SG)',
  tags: ['Typ: Kalkulator', 'Kliknięcie elementu', 'Odczytywanie wartości pól', 'Wstawianie tekstu do elementu'],
  difficulty: 'easy',
  data: () => import('./data').then(m => m.default()),
};

export default INF03FloorPanelInstallationProblem;
