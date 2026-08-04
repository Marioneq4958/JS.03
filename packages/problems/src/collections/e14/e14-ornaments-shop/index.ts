import type { Problem } from '../../../types';

const E14OrnamentShopProblem: Problem = {
  title: 'Ozdoby - sklep (E.14-04-20.06-SG)',
  tags: ['Typ: Inny', 'Najechanie na element', 'Wstawianie tekstu do elementu'],
  difficulty: 'easy',
  data: () => import('./data').then(m => m.default()),
};

export default E14OrnamentShopProblem;
