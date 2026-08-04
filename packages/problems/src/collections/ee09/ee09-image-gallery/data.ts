import content from './content.md';
import assessmentCriteria from './assessment-criteria.md';
import template from './template.html?raw';
import solution from './solution.html?raw';
import test01 from './tests/01';
import test02 from './tests/02';
import test03 from './tests/03';
import img_1 from './assets/1.jpg';
import img_2 from './assets/2.jpg';
import img_3 from './assets/3.jpg';
import img_4 from './assets/4.jpg';
import img_5 from './assets/5.jpg';

const data = () => ({
  content,
  tests: [test01, test02, test03],
  assets: {
    '1.jpg': img_1,
    '2.jpg': img_2,
    '3.jpg': img_3,
    '4.jpg': img_4,
    '5.jpg': img_5,
  },
  template,
  solution,
  assessmentCriteria,
});

export default data;
