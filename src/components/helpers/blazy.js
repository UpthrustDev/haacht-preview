import Blazy from 'blazy';

let blazy = null;

const initBlazy = () => {
  if (blazy) {
    return;
  }
  blazy = new Blazy({
    selector: '.lazy',
    successClass: 'is-loaded',
  });
};
export { initBlazy, blazy };
