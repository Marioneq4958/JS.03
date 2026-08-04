import content from './content.md';
import assessmentCriteria from './assessment-criteria.md';
import template from './template.html?raw';
import solution from './solution.html?raw';
import test01 from './tests/01';
import img_1 from './assets/1.jpg';
import img_2 from './assets/2.jpg';
import img_3 from './assets/3.jpg';
import img_4 from './assets/4.jpg';
import img_5 from './assets/5.jpg';
import img_6 from './assets/6.jpg';
import img_7 from './assets/7.jpg';
import img_8 from './assets/8.jpg';
import img_9 from './assets/9.jpg';
import img_10 from './assets/10.jpg';

const data = () => ({
  content,
  tests: [test01],
  assets: {
    '1.jpg': img_1,
    '2.jpg': img_2,
    '3.jpg': img_3,
    '4.jpg': img_4,
    '5.jpg': img_5,
    '6.jpg': img_6,
    '7.jpg': img_7,
    '8.jpg': img_8,
    '9.jpg': img_9,
    '10.jpg': img_10,
  },
  template,
  solution,
  assessmentCriteria,
});

export default data;
