import content from './content.md';
import assessmentCriteria from './assessment-criteria.md';
import template from './template.html?raw';
import solution from './solution.html?raw';
import test01 from './tests/01';
import test02 from './tests/02';
import icon_off_png from './assets/icon-off.png';
import icon_on_png from './assets/icon-on.png';
import lanzarotte_jpg from './assets/lanzarotte.jpg';
import pekin_jpg from './assets/pekin.jpg';
import serengeti_jpg from './assets/serengeti.jpg';
import tajlandia_jpg from './assets/tajlandia.jpg';
import wenecja_jpg from './assets/wenecja.jpg';

const data = () => ({
  content,
  tests: [test01, test02],
  assets: {
    'icon-off.png': icon_off_png,
    'icon-on.png': icon_on_png,
    'lanzarotte.jpg': lanzarotte_jpg,
    'pekin.jpg': pekin_jpg,
    'serengeti.jpg': serengeti_jpg,
    'tajlandia.jpg': tajlandia_jpg,
    'wenecja.jpg': wenecja_jpg,
  },
  template,
  solution,
  assessmentCriteria,
});

export default data;
