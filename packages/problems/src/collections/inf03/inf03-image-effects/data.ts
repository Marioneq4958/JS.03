import content from './content.md';
import assessmentCriteria from './assessment-criteria.md';
import template from './template.html?raw';
import solution from './solution.html?raw';
import test01 from './tests/01';
import test02 from './tests/02';
import test03 from './tests/03';
import test04 from './tests/04';
import owoce_jpg from './assets/owoce.jpg';
import pomarancza_jpg from './assets/pomarancza.jpg';
import pszczola_jpg from './assets/pszczola.jpg';
import zolw_jpg from './assets/zolw.jpg';

const data = () => ({
  content,
  tests: [test01, test02, test03, test04],
  assets: {
    'owoce.jpg': owoce_jpg,
    'pomarancza.jpg': pomarancza_jpg,
    'pszczola.jpg': pszczola_jpg,
    'zolw.jpg': zolw_jpg,
  },
  template,
  solution,
  assessmentCriteria,
});

export default data;
