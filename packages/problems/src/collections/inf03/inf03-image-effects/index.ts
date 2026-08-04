import type { Problem } from '../../../types';

const INF03ImageEffectsProblem: Problem = {
  title: 'Efekty na obrazach (INF.03-12-24.06-SG)',
  tags: ['Typ: Inny', 'Kliknięcie elementu', 'Odczytywanie wartości pól', 'Ustawianie styli dla elementów'],
  difficulty: 'medium',
  data: () => import('./data').then(m => m.default()),
};

export default INF03ImageEffectsProblem;
