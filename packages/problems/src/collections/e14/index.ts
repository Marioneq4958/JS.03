import E14Formatting from './e14-formatting';
import E14PizzaDeliveryProblem from './e14-pizza-delivery';
import E14AnimalsPhotographs from './e14-animal-photographs';
import E14WeddingCostProblem from './e14-wedding-cost';
import type { Collection } from '../../types';
import E14ComputerRepairServiceProblem from './e14-computer-repair-service';
import E14PainterProblem from './e14-painter';
import E14CoffeeWholesalerProblem from './e14-coffee-wholesaler';
import E14OrnamentShopProblem from './e14-ornaments-shop';
import E14CandyFactoryProblem from './e14-candy-factory';
import E14StrongPassword from './e14-strong-password';
import E14LowestGradeAverageProblem from './e14-lowest-grade-average';
import E14AdvertCostProblem from './e14-advert-cost';

const E14Collection: Collection = {
  name: 'Arkusze E.14',
  description: 'Zadania na podstawie arkuszy E.14 (podstawa programowa 2012)',
  problems: {
    /* August 2016 */
    'strong-password': E14StrongPassword,

    /* January 2018 */
    'advert-cost': E14AdvertCostProblem, // 05 - 06
    'lowest-grade-average': E14LowestGradeAverageProblem, // 07 - 09

    /* June 2018 */
    'wedding-cost': E14WeddingCostProblem, // 05
    'pizza-delivery': E14PizzaDeliveryProblem, // 06

    /* January 2019 */
    formatting: E14Formatting, // 02
    'coffee-wholesaler': E14CoffeeWholesalerProblem, // 04
    'animals-photographs': E14AnimalsPhotographs, // 11

    /* June 2019 */
    'computer-repair-service': E14ComputerRepairServiceProblem, // 06

    /* January 2020 */
    'candy-factory': E14CandyFactoryProblem, // 02

    /* June 2020 */
    painter: E14PainterProblem, // 01
    'ornaments-shop': E14OrnamentShopProblem, // 04
  },
};

export default E14Collection;
