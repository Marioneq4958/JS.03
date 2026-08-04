import type { Problem } from '../../../types';

const EE09WholesaleOrdersProblem: Problem = {
  title: 'Zamówienia hurtowe (EE.09-04-22.06-SG)',
  tags: [
    'Typ: Inny',
    'Kliknięcie elementu',
    'Odczytywanie wartości pól',
    'Wstawianie tekstu do elementu',
    'Ustawianie styli dla elementów',
    'Okna dialogowe (alert/prompt/confirm)',
  ],
  difficulty: 'hard',
  data: () => import('./data').then((m) => m.default()),
};

export default EE09WholesaleOrdersProblem;
