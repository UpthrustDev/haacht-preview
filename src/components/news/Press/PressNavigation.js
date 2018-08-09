import React from 'react';
import _get from 'lodash/get';
// this is pretty hardcoded atm

const PressNavigation = ({ navigation }) => {
  return (
    <div className="c-page-anchors">
      <ul>
        <li className="active">
          <a href="#persberichten">{_get(navigation, '[0].titleMultiple')}</a>
        </li>
        <li>
          <a href="#persartikels">{_get(navigation, '[1].titleMultiple')}</a>
        </li>
      </ul>
    </div>
  );
};
export default PressNavigation;
