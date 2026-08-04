import content from './content.md';
import assessmentCriteria from './assessment-criteria.md';
import template from './template.html?raw';
import solution from './solution.html?raw';
import test01 from './tests/01';
import test02 from './tests/02';
import test03 from './tests/03';
import bmp_1d from './assets/1d.bmp';
import bmp_1m from './assets/1m.bmp';
import bmp_2d from './assets/2d.bmp';
import bmp_2m from './assets/2m.bmp';

const data = () => ({
  content,
  tests: [test01, test02, test03],
  assets: {
    '1d.bmp': bmp_1d,
    '1m.bmp': bmp_1m,
    '2d.bmp': bmp_2d,
    '2m.bmp': bmp_2m,
  },
  template,
  solution,
  assessmentCriteria,
});

export default data;
