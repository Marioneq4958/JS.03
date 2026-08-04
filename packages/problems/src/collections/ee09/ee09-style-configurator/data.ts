import content from './content.md';
import assessmentCriteria from './assessment-criteria.md';
import template from './template.html?raw';
import solution from './solution.html?raw';
import test01 from './tests/01';
import test02 from './tests/02';
import gibraltar_jpg from './assets/gibraltar.jpg';

const data = () => ({
  content,
  tests: [test01, test02],
  assets: {
    'gibraltar.jpg': gibraltar_jpg,
  },
  template,
  solution,
  assessmentCriteria,
});

export default data;
