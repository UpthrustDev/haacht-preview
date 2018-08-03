import _split from 'lodash/split';
import _join from 'lodash/join';
import _slice from 'lodash/slice';

const convertUrl = location => {
  return location ? location.match(/[a-zA-Z0-9\-]*\/?$/)[0].replace('/', '') : '';
};
const getLanguage = location => {
  return _split(location.pathname, '/')[1];
};
const getPartOfUrl = (location, end, start = 0) => {
  return location ? _join(_slice(_split(location.pathname, '/'), start + 1, end + 1), '/') : '';
};

export { convertUrl, getLanguage, getPartOfUrl };
