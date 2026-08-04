import type { Problem } from '../../../types';

const INF03OurTeamQuotesProblem: Problem = {
  title: 'Nasz zespół - cytaty (INF.03-10-24.06-SG)',
  tags: ['Typ: Ukryte sekcje', 'Kliknięcie elementu', 'Ukrywanie/pokazywanie elementu'],
  difficulty: 'easy',
  data: () => import('./data').then((m) => m.default()),
};

export default INF03OurTeamQuotesProblem;
