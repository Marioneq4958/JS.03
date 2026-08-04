import type { Problem } from '../../../types';

const INF03DecToBinProblem: Problem = {
  title: 'Konwerter dziesiętnego na binarny (INF.03-06-25.01-SG)',
  tags: [
    'Typ: Algorytm',
    'Kliknięcie elementu',
    'Odczytywanie wartości pól',
    'Wstawianie tekstu do elementu',
    'Obiekt Math',
    'Pętla',
  ],
  difficulty: 'hard',
  data: () => import('./data').then(m => m.default()),
};

export default INF03DecToBinProblem;
