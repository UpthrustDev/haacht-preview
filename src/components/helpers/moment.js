import * as moment from 'moment';

let Moment = false;

const initMoment = language => {
  if (Moment) {
    return;
  }
  moment.locale(language.toLowerCase());
  Moment = true;
};
export { initMoment };
