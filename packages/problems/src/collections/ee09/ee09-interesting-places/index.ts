import type { Problem } from '../../../types';

const EE09InterestingPlaces: Problem = {
  title: 'Galeria ciekawych miejsc (EE.09-07-22.01-SG)',
  tags: ['Typ: Galeria', 'Kliknięcie elementu', 'Ustawianie źródła obrazu'],
  difficulty: 'easy',
  data: () => import('./data').then((m) => m.default()),
};

export default EE09InterestingPlaces;
