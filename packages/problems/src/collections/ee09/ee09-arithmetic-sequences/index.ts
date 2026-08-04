import type { Problem } from '../../../types';

const EE09ArithmeticSequenceProblem: Problem = {
  title: 'Generowanie ciągu arytmetycznego (EE.09-05-19.06)',
  tags: [
    'Typ: Kalkulator',
    'Kliknięcie elementu',
    'Odczytywanie wartości pól',
    'Wstawianie tekstu do elementu',
    'Pętla',
  ],
  difficulty: 'medium',
  data: () => import('./data').then((m) => m.default()),
};

export default EE09ArithmeticSequenceProblem;
