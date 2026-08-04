import type { Problem } from '../../../types';

const INF03TattooStudioProblem: Problem = {
  title: 'Studio tatuażu (INF.03-12-26.01-SG)',
  tags: [
    'Typ: Formularz',
    'Kliknięcie elementu',
    'Odczytywanie wartości pól',
    'Okna dialogowe (alert/prompt/confirm)',
    'Wstawianie elementów',
    'Wczytywanie plików',
  ],
  difficulty: 'medium',
  data: () => import('./data').then(m => m.default()),
};

export default INF03TattooStudioProblem;
