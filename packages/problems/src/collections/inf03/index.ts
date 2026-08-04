import INF03DecToBinProblem from './inf03-dec-to-bin';
import INF03OurTeamQuotesProblem from './inf03-our-team-quotes';
import INF03ConferenceRegistrationProblem from './inf03-conference-registration';
import INF03ComputerCoursesProblem from './inf03-computer-courses';
import type { Collection } from '../../types';
import INF03ImageEffectsProblem from './inf03-image-effects';
import INF03FloorPanelInstallationProblem from './inf03-floor-panel-installation';
import INF03PlaneFiguresAreasProblem from './inf03-plane-figures-areas';
import INF03MeetDragonsProblem from './inf03-meet-dragons';
import INF03TattooStudioProblem from './inf03-tattoo-studio';
import INF03PolandExploring from './inf03-poland-exploring';
import INF03DreamNailsIProblem from './inf03-dream-nails-1';
import INF03DreamNailsIIProblem from './inf03-dream-nails-2';
import INF03RegistrationInShopProblem from './inf03-registration-in-shop';
import INF03TasksProblem from './inf03-tasks';
import INF03ArtisticPhotographyProblem from './inf03-artistic-photography';
import INF03ChatProblem from './inf03-chat';
import INF03BeautySalonProblem from './inf03-beauty-salon';
import INF03HairSalonProblem from './inf03-hair-salon';

const INF03Collection: Collection = {
  name: 'Arkusze INF.03',
  description: 'Zadania na podstawie arkuszy INF.03 (podstawa programowa 2019)',
  problems: {
    /* January 2024 */
    'inf03-beauty-salon': INF03BeautySalonProblem, // 04
    'inf03-hair-salon': INF03HairSalonProblem, // 05

    /* June 2024 */
    chat: INF03ChatProblem, // 02
    'conference-registration': INF03ConferenceRegistrationProblem, // 06
    'registration-in-shop': INF03RegistrationInShopProblem, // 08
    'poland-exploring': INF03PolandExploring, // 09
    'our-team-quotes': INF03OurTeamQuotesProblem, // 10
    'image-effects': INF03ImageEffectsProblem, // 12

    /* January 2025 */
    'computer-courses': INF03ComputerCoursesProblem, // 01
    'floor-panel-installation': INF03FloorPanelInstallationProblem, // 02
    'dec-to-bin': INF03DecToBinProblem, // 06

    /* June 2025 */
    tasks: INF03TasksProblem, // 02
    'artistic-photography': INF03ArtisticPhotographyProblem, // 05
    'meet-dragons': INF03MeetDragonsProblem, // 09

    /* January 2026 */
    'plane-figures-areas': INF03PlaneFiguresAreasProblem, // 03
    'dream-nails-1': INF03DreamNailsIProblem, // 09
    'dream-nails-2': INF03DreamNailsIIProblem, // 09
    'tattoo-studio': INF03TattooStudioProblem, // 12
  },
};

export default INF03Collection;
