import content from './content.md';
import assessmentCriteria from './assessment-criteria.md';
import template from './template.html?raw';
import solution from './solution.html?raw';
import test01 from './tests/01';
import test02 from './tests/02';
import test03 from './tests/03';
import choinka_jpg from './assets/choinka.jpg';
import mikolaj_jpg from './assets/mikolaj.jpg';
import renifer_jpg from './assets/renifer.jpg';

const data = () => ({
  content,
  tests: [test01, test02, test03],
  assets: {
    'choinka.jpg': choinka_jpg,
    'mikolaj.jpg': mikolaj_jpg,
    'renifer.jpg': renifer_jpg,
  },
  template,
  solution,
  assessmentCriteria,
});

export default data;
