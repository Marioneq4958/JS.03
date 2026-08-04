import type { Problem } from '../../../types';

const INF03ConferenceRegistrationProblem: Problem = {
  title: 'Formularz rejestracyjny konferencji "Nasze Kwiaty" (INF.03-06-24.06-SG)',
  tags: [
    'Typ: Formularz + Ukryte sekcje',
    'Kliknięcie elementu',
    'Odczytywanie wartości pól',
    'Ukrywanie/pokazywanie elementu',
    'Okna dialogowe (alert/prompt/confirm)',
    'Wypisywanie informacji do konsoli',
  ],
  difficulty: 'hard',
  data: () => import('./data').then(m => m.default()),
};

export default INF03ConferenceRegistrationProblem;
