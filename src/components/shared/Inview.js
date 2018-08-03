import React from 'react';
import Inview from 'react-inview';
import _isEmpty from 'lodash/isEmpty';

const Div = () => <div />;

export default (_isEmpty(Inview) ? Div : Inview);
