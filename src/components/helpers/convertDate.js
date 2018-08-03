import moment from 'moment';

const convertDate = (startDate, endDate) => {
  if (endDate) {
    if (moment(startDate).format('DD') !== moment(endDate).format('DD')) {
      return `${moment(startDate).format('DD')}-${moment(endDate).format('DD MMM YYYY')}`;
    }
    return moment(startDate).format('DD MMM YYYY');
  }
  return moment(startDate).format('DD MMM YYYY');
};

const getDay = date => {
  return moment(date, 'YYYY-MM-DD').date();
};

const getMonthYear = date => {
  return moment(date, 'YYYY-MM-DD').format('MMM YYYY');
};
const convertDateWithSlash = date => {
  return moment(date).format('DD/MM/YYYY');
};
const getFormattedMonthYearHourMinutes = date => {
  return moment(date).format('DD/MM/YYYY HH:mm');
};

export {
  convertDate,
  getDay,
  getMonthYear,
  getFormattedMonthYearHourMinutes,
  convertDateWithSlash,
};
