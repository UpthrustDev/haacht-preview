import React from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';
import { getPartOfUrl } from '../../helpers/navigationUrl';
import Link from '../shared/Link';

class BrandsFilters extends React.Component {
  render() {
    const { edges, activeCategoryFilter, location, sellingPointContent } = this.props;

    const brandCategoriesItems = edges.map((key, i) => (
      <li
        key={i}
        className={activeCategoryFilter === i ? 'active' : ''}
        data-brand-type={key.node.slug}
      >
        <Link to={`${getPartOfUrl(location, 2)}/${key.node.slug}`} href="">
          <span className="link-up">{key.node.title}</span>
          <span className="link-down">{key.node.title}</span>
        </Link>
      </li>
    ));

    return (
      <div className="brands-categories">
        <div className="l-container u-height--100">
          <div className="l-row u-align--center u-height--100">
            <div className="l-col l-col--12 u-height--100">
              <ul className="brands-categories__list u-inline-list u-height--100">
                {brandCategoriesItems}
              </ul>
            </div>
          </div>
        </div>

        <div className="brands-categories__storelocator">
          <Link
            to={`${getPartOfUrl(location, 2)}/${sellingPointContent.slug}`}
            href="http://localhost:4000/merken/verkooppunten/"
            className="c-button"
          >
            {sellingPointContent.subTitle}
          </Link>
        </div>
      </div>
    );
  }
}

BrandsFilters.propTypes = {
  brandFamilies: PropTypes.object,
  brandCategories: PropTypes.object,
  brandFamiliesItems: PropTypes.object,
};

export default BrandsFilters;
