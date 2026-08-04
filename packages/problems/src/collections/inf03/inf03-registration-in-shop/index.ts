import type { Problem } from '../../../types';

const INF03RegistrationInShopProblem: Problem = {
  title: 'Rejestracja w sklepie (INF.03-08-24.06-SG)',
  tags: [
    'Typ: Formularz + Ukryte sekcje',
    'Kliknięcie elementu',
    'Ukrywanie/pokazywanie elementu',
    'Focus/utrata focusu na elemencie',
    'Ustawianie styli dla elementów',
    'Wypisywanie informacji do konsoli',
  ],
  difficulty: 'hard',
  data: () => import('./data').then((m) => m.default()),
};

export default INF03RegistrationInShopProblem;
