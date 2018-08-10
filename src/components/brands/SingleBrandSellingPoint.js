import React from 'react';
import _get from 'lodash/get';

import { getPartOfUrl } from '../helpers/navigationUrl';
import { getPostalcode, setPostalcode } from '../helpers/sessionStorageHelper';

class SingleBrandSellingPoint extends React.Component {
  onButtonClick = () => {
    // Save data to sessionStorage
    setPostalcode(this.textInput.value);
  };

  render() {
    const postalCode = getPostalcode();
    return (
      <div>
        {this.props.currentBrandItem.node.afkorting && (
          <div className="storelocator__widget u-radius u-text--center">
            <h4>{this.props.singleBrandPageData.sellpointsTitle}</h4>
            <form>
              <input
                type="text"
                placeholder={this.props.singleBrandPageData.searchPostcode}
                defaultValue={postalCode}
                className="u-form-field"
                ref={input => {
                  this.textInput = input;
                }}
              />
              <button
                type="button"
                className="c-button c-button--primary c-button--green u-radius--pill"
                onClick={this.onButtonClick}
              >
                {this.props.singleBrandPageData.searchButton}
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

/*const SingleBrandSellingPoint = ({ singleBrandPageData, location, currentBrandItem }) => {

  const onButtonClick = () => {
    navigateTo(
      `${getPartOfUrl(location, 2)}/${singleBrandPageData.searchButtonSlug}/${_get(
        currentBrandItem,
        'node.afkorting.slug'
      )}?${this.input.value}`
    );
  };


  return (
    <div>
      {currentBrandItem.node.afkorting && (
        <div className="storelocator__widget u-radius u-text--center">
          <h4>{singleBrandPageData.sellpointsTitle}</h4>
          <form>
            <input
              type="text"
              placeholder={singleBrandPageData.searchPostcode}
              className="u-form-field"
            />
            <button
              type="button"
              className="c-button c-button--primary c-button--green u-radius--pill"
              onClick={onButtonClick}
            >
              {singleBrandPageData.searchButton}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};*/

export default SingleBrandSellingPoint;
