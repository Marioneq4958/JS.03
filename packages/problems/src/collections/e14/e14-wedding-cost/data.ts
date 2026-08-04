import content from './content.md';
import assessmentCriteria from './assessment-criteria.md';
import template from './template.html?raw';
import solution from './solution.html?raw';
import test01 from './tests/01';
import test02 from './tests/02';

const data = () => ({
  content,
  tests: [test01, test02],
  template,
  solution,
  assessmentCriteria,
});

export default data;
