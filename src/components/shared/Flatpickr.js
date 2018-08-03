import Flatpickr from 'react-flatpickr';
import isEmpty from 'lodash/isEmpty';

export default (isEmpty(Flatpickr) ? 'div' : Flatpickr);
