import content from './content.md';
import assessmentCriteria from './assessment-criteria.md';
import template from './template.html?raw';
import solution from './solution.html?raw';
import test01 from './tests/01';
import test02 from './tests/02';
import Jolka_jpg from './assets/Jolka.jpg';
import Krzysiek_jpg from './assets/Krzysiek.jpg';

const data = () => ({
  content,
  tests: [test01, test02],
  assets: {
    'Jolka.jpg': Jolka_jpg,
    'Krzysiek.jpg': Krzysiek_jpg,
  },
  template,
  solution,
  assessmentCriteria,
});

export default data;
