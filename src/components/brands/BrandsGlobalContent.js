import React from 'react';
import BrandsHeader from './BrandsHeader';
import BrandsFilters from './BrandsFilters';
import PropTypes from 'prop-types';
import BrandsFamilies from './BrandsFamilies';
import _get from 'lodash/get';
import _sortBy from 'lodash/sortBy';
import _each from 'lodash/each';
import _find from 'lodash/find';
require('ie-array-find-polyfill');

class BrandsGlobalContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategoryFilter: 0,
      edges: props.brandCategories.edges,
    };
  }

  componentWillMount() {
    const pathItems = this.props.location.pathname;
    const { brandCategories } = this.props;
    //required specific merge between two items
    const sortedBrandCategories = _sortBy(brandCategories.edges, edge => edge.node.index);
    let mergedBrandCategories = [];
    _each(sortedBrandCategories, category => {
      const existing = _find(
        mergedBrandCategories,
        edge => edge.node.index === category.node.index
      );
      // Merge if we added a category with the same index already
      if (existing) {
        const existingIndex = mergedBrandCategories.indexOf(existing);

        if (existing.merged) {
          throw new Error('Combining more than 2 items is not implemented.');
        }
        const sorted = _sortBy([existing, category], 'subIndex');
        const combinedCategory = {
          node: {
            title: `${sorted[0].node.title} & ${sorted[1].node.title}`,
            slug: sorted[0].node.slug,
            index: existing.node.index,
            merged: [existing, category],
            video: sorted[0].node.video,
          },
        };

        mergedBrandCategories[existingIndex] = combinedCategory;
      } else {
        mergedBrandCategories.push(category);
      }
    });
    const currentPage = pathItems.match(/([a-zA-Z\-]*)\/?$/)[1];

    const currentBrand = mergedBrandCategories.find(
      edge => edge.node.slug.toLowerCase() === currentPage
    );

    const currentBrandIndex = _get(currentBrand, 'node.index') - 1;

    this.setState({
      edges: mergedBrandCategories,
      activeCategoryFilter: currentBrandIndex,
    });
  }
  render() {
    const {
      brandCategories,
      brandFamilies,
      brandFamiliesItems,
      sortBrandsDropDown,
      location,
      sellingpointContent,
    } = this.props;
    const { activeCategoryFilter, edges } = this.state;
    const pathItems = location.pathname;
    const currentPage = pathItems.match(/([a-zA-Z\-]*)\/?$/)[1];
    const currentBrand = edges.find(edge => edge.node.slug.toLowerCase() === currentPage);
    if (!currentBrand) {
      return <div>server</div>;
    }
    return (
      <div>
        <BrandsHeader currentBrand={currentBrand} />
        <BrandsFilters
          edges={edges}
          activeCategoryFilter={activeCategoryFilter}
          currentBrand={currentBrand}
          brandCategories={brandCategories}
          brandFamilies={brandFamilies}
          brandFamiliesItems={brandFamiliesItems}
          sortBrandsDropDown={sortBrandsDropDown}
          location={location}
          sellingPointContent={sellingpointContent}
        />
        <BrandsFamilies
          location={location}
          brandFamilies={brandFamilies}
          brandCategories={brandCategories}
          sortedBrandCategories={edges}
          activeCategoryFilter={activeCategoryFilter}
          brandFamiliesItems={brandFamiliesItems}
          sortBrandsDropDown={sortBrandsDropDown}
          sellingpointContent={sellingpointContent}
        />
      </div>
    );
  }
}

BrandsGlobalContent.propTypes = {
  brandCategories: PropTypes.object,
  brandFamilies: PropTypes.object,
  brandFamiliesItems: PropTypes.object,
  location: PropTypes.object,
};

export default BrandsGlobalContent;
