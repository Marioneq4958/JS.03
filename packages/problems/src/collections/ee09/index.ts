import EE09FuelCalculatorProblem from './ee09-fuel-calculator';
import EE09NewspaperProblem from './ee09-newspaper';
import EE09CssHelperProblem from './ee09-css-helper';
import type { Collection } from '../../types';
import EE09ArithmeticSequenceProblem from './ee09-arithmetic-sequences';
import EE09WholesaleOrdersProblem from './ee09-wholesale-orders';
import EE09MathHelperProblem from './ee09-math-helper';
import EE09ImageGalleryProblem from './ee09-image-gallery';
import EE09PetrolStationProblem from './ee09-petrol-station';
import EE09InterestingPlaces from './ee09-interesting-places';
import EE09StyleConfiguratorProblem from './ee09-style-configurator';

const EE09Collection: Collection = {
  name: 'Arkusze EE.09',
  description: 'Zadania na podstawie arkuszy EE.09 (podstawa programowa 2017)',
  problems: {
    /* June 2019 */
    'petrol-station': EE09PetrolStationProblem, // 02
    'math-helper': EE09MathHelperProblem, // 04
    'arithmetic-sequence': EE09ArithmeticSequenceProblem, // 05

    /* January 2020 */
    'fuel-calculator': EE09FuelCalculatorProblem, // 02

    /* January 2022 */
    'style-configurator': EE09StyleConfiguratorProblem, // 06
    'interesting-places': EE09InterestingPlaces, // 07

    /* July 2022 */
    'css-helper': EE09CssHelperProblem, // 02
    'wholesale-orders': EE09WholesaleOrdersProblem, // 04

    /* January 2023 */
    newspaper: EE09NewspaperProblem,
    'image-gallery': EE09ImageGalleryProblem,
  },
};

export default EE09Collection;
