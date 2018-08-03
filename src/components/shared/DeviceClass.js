import React from 'react';
import isEmpty from 'lodash/isEmpty';
import isMobile from 'ismobilejs';
import bowser from 'bowser';
import cx from 'classnames';
import { blazy, initBlazy } from '../helpers/blazy';
import { initMoment } from '../helpers/moment';

const className = isEmpty(isMobile)
  ? ''
  : cx({
      'is-mobile': isMobile.any,
      'is-phone': isMobile.phone,
      'is-tablet': isMobile.tablet,
      'is-desktop': !isMobile.phone || isMobile.tablet,
      'is-apple': isMobile.apple.device,
      'is-android': isMobile.android.device,
      'is-windows': isMobile.windows.device,
    });

const classNameBrowser = isEmpty(bowser)
  ? ''
  : cx({
      'is-ie': bowser.msie,
      'is-edge': bowser.msedge,
      'is-webkit': bowser.webkit,
      'is-blink': bowser.blink,
      'is-gecko': bowser.gecko,
    });

class DeviceClass extends React.PureComponent {
  componentDidMount() {
    initBlazy();
    if (this.props.locale) {
      initMoment(this.props.locale);
    }
    if (blazy) {
      blazy.revalidate();
    }
  }

  render() {
    const { classNames, children } = this.props;
    return <div className={`${className} ${classNameBrowser} ${classNames}`}>{children}</div>;
  }
}

export default DeviceClass;
