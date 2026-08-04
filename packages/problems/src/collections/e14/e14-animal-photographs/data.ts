import content from './content.md';
import assessmentCriteria from './assessment-criteria.md';
import template from './template.html?raw';
import solution from './solution.html?raw';
import test01 from './tests/01';
import test02 from './tests/02';
import pies1_jpg from './assets/pies1.jpg';
import pies1_odbicie_jpg from './assets/pies1-odbicie.jpg';
import pies2_jpg from './assets/pies2.jpg';
import pies2_odbicie_jpg from './assets/pies2-odbicie.jpg';
import pies3_jpg from './assets/pies3.jpg';
import pies3_odbicie_jpg from './assets/pies3-odbicie.jpg';

const data = () => ({
  content,
  tests: [test01, test02],
  assets: {
    'pies1.jpg': pies1_jpg,
    'pies1-odbicie.jpg': pies1_odbicie_jpg,
    'pies2.jpg': pies2_jpg,
    'pies2-odbicie.jpg': pies2_odbicie_jpg,
    'pies3.jpg': pies3_jpg,
    'pies3-odbicie.jpg': pies3_odbicie_jpg,
  },
  template,
  solution,
  assessmentCriteria,
});

export default data;
