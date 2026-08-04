import type { Problem } from '../../../types';

const E14AnimalPhotography: Problem = {
  title: 'Fotografie zwierząt (E.14-12-19.01)',
  tags: ['Typ: Galeria', 'Kliknięcie elementu', 'Najechanie na element', 'Ustawianie źródła obrazu'],
  difficulty: 'medium',
  data: () => import('./data').then(m => m.default()),
};

export default E14AnimalPhotography;
