import content from './content.md';
import assessmentCriteria from './assessment-criteria.md';
import template from './template.html?raw';
import solution from './solution.html?raw';
import test01 from './tests/01';
import test02 from './tests/02';
import angel_png from './assets/angel.png';
import celtic_png from './assets/celtic.png';
import delfin_png from './assets/delfin.png';
import koliber_png from './assets/koliber.png';
import kwiat_png from './assets/kwiat.png';
import kwiaty_png from './assets/kwiaty.png';
import rozeta_png from './assets/rozeta.png';
import smok_png from './assets/smok.png';
import tygrys_png from './assets/tygrys.png';
import waz_png from './assets/waz.png';

const data = () => ({
  content,
  tests: [test01, test02],
  assets: {
    'angel.png': angel_png,
    'celtic.png': celtic_png,
    'delfin.png': delfin_png,
    'koliber.png': koliber_png,
    'kwiat.png': kwiat_png,
    'kwiaty.png': kwiaty_png,
    'rozeta.png': rozeta_png,
    'smok.png': smok_png,
    'tygrys.png': tygrys_png,
    'waz.png': waz_png,
  },
  template,
  solution,
  assessmentCriteria,
});

export default data;
