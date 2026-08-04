import type { Problem } from '../../../types';

const E14StrongPassword: Problem = {
  title: 'Weryfikacja jakości hasła (E.14-02-16.08)',
  tags: [
    'Typ: Kalkulator',
    'Kliknięcie elementu',
    'Odczytywanie wartości pól',
    'Wstawianie tekstu do elementu',
    'Ustawianie styli dla elementów',
    'Metody i właściwości String',
  ],
  difficulty: 'medium',
  data: () => import('./data').then(m => m.default()),
};

export default E14StrongPassword;
