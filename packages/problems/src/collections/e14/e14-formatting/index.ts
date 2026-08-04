import type { Problem } from '../../../types';

const E14Formatting: Problem = {
  title: 'Formatowanie dokumentów HTML (E.14-02-19.01)',
  tags: ['Typ: Formularz', 'Kliknięcie elementu', 'Odczytywanie wartości pól', 'Ustawianie styli dla elementów'],
  difficulty: 'easy',
  data: () => import('./data').then(m => m.default()),
};

export default E14Formatting;
