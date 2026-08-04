import type { Problem } from '../../../types';

const EE09PetrolStationProblem: Problem = {
  title: 'Kalkulator zużycia paliwa (EE.09-02-20.01-SG)',
  tags: ['Typ: Kalkulator', 'Kliknięcie elementu', 'Odczytywanie wartości pól', 'Wstawianie tekstu do elementu'],
  difficulty: 'easy',
  data: () => import('./data').then((m) => m.default()),
};

export default EE09PetrolStationProblem;
