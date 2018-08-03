import React from 'react';
import _split from 'lodash/split';
import _find from 'lodash/find';
import { getPartOfUrl } from '../helpers/navigationUrl';

class NavSecondary extends React.Component {
  state = {
    languageIsOpen: false,
  };
  render() {
    const { footerMenu, location, handleLanguageSelection } = this.props;
    const languages = footerMenu.languages || [];
    const shopReference = footerMenu.shopReference || {};

    const currentLanguage = getPartOfUrl(location, 1).toLowerCase();
    const language =
      _find(languages, item => item.slug.slug.toLowerCase() === currentLanguage) || {};
    //console.log(this)
    return (
      <div className="nav-secondary">
        <ul className="secondary-nav u-inline-list">
          <li className="link-shop">
            <a href={shopReference.linkSlug} target="_blank">
              <div className="u-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19">
                  <path
                    fill="#FFF"
                    d="M16,4.45 C16,4.2 15.75,4 15.5,4 L12.95,4 C12.7,1.75 10.7995,0 8.5,0 C6.2,0 4.3,1.75 4.05,4 L1.5,4 C1.25,4 1,4.2 1,4.45 L0,18.45 C0,18.7205 0.1965,19 0.5,19 L16.5,19 C16.782,19 17,18.77 17,18.45 L16,4.45 Z M8.5,1 C10.25,1 11.7,2.3 11.95,4 L5.05,4 C5.3,2.3 6.75,1 8.5,1 Z M1.95,5 L4,5 L4,7.5 C4,7.8 4.2,8 4.5,8 C4.8,8 5,7.8 5,7.5 L5,5 L12,5 L12,7.5 C12,7.8 12.2,8 12.5,8 C12.8,8 13,7.8 13,7.5 L13,5 L15.05,5 L15.75,14.5 L1.3,14.5 L1.95,5 Z M1.05,18 L1.25,15.5 L15.8,15.5 L16,18 L1.05,18 Z"
                  />
                </svg>
              </div>
              {shopReference.title}
            </a>
          </li>
          <li onClick={handleLanguageSelection} className="language-selection">
            <a>
              {language.title}
              <div className="u-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8">
                  <path
                    fill="#C2A572"
                    fillRule="evenodd"
                    d="M52.0252348,11.9372096 L53.38674,13.2987148 L58.7987148,7.88674003 L53.38674,2.47476522 L52.0252348,3.83627047 L56.0757043,7.88674003 L52.0252348,11.9372096 Z"
                    transform="rotate(90 32.412 -19.113)"
                  />
                </svg>
              </div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavSecondary;
