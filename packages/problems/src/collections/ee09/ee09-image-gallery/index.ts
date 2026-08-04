import type { Problem } from '../../../types';

const EE09ImageGalleryProblem: Problem = {
  title: 'Galeria obrazów (EE.09-02-23.01-SG)',
  tags: ['Typ: Galeria', 'Kliknięcie elementu', 'Ustawianie źródła obrazu'],
  difficulty: 'medium',
  data: () => import('./data').then((m) => m.default()),
};

export default EE09ImageGalleryProblem;
