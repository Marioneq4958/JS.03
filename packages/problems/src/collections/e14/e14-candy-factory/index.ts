import type { Problem } from '../../../types';

const E14CandyFactoryProblem: Problem = {
  title: 'Fabryka żelków (E.14-02-20.01-SG)',
  tags: [
    'Typ: Formularz',
    'Kliknięcie elementu',
    'Odczytywanie wartości pól',
    'Wstawianie tekstu do elementu',
    'Ustawianie styli dla elementów',
  ],
  difficulty: 'easy',
  data: () => import('./data').then(m => m.default()),
};

export default E14CandyFactoryProblem;
