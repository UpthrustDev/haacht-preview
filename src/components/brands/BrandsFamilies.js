import React from 'react';
import BrandsFamiliesItems from './BrandsFamiliesItems';
import BrandsStoreLocator from './BrandsStoreLocator';
import sortBy from 'lodash/sortBy';
import filter from 'lodash/filter';
import PropTypes from 'prop-types';
import SortBrandsDropDown from './SortBrandsDropDown';
import _split from 'lodash/split';

class BrandsFamilies extends React.Component {
  state = {
    selectedFamily: 'allItems',
    selectedSortValue: 1,
    toggleDropDown: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeCategoryFilter !== this.props.activeCategoryFilter) {
      this.setState({
        selectedFamily: 'allItems',
        selectedSortValue: 1,
      });
    }
  }
  onItemClick = (i, currentCategoryFamilies) => e => {
    e.preventDefault();
    if (i === -1) {
      this.setState({
        selectedFamily: 'allItems',
        selectedSortValue: 1,
      });
    } else {
      this.setState({
        selectedFamily: currentCategoryFamilies[i].node.title,
        selectedSortValue: 1,
      });
    }
  };

  toggleDropDown = () => {
    this.setState({
      toggleDropDown: !this.state.toggleDropDown,
    });
  };

  handleSelectSortMethod = i => {
    this.setState({ selectedSortValue: i });
  };

  render() {
    const {
      brandFamilies,
      sortedBrandCategories,
      activeCategoryFilter,
      sortBrandsDropDown,
      brandFamiliesItems,
      location,
      sellingpointContent,
    } = this.props;

    const brandFamiliesSorted = sortBy(brandFamilies.edges, edge => edge.node.index);
    const activeFilterCategory = sortedBrandCategories[activeCategoryFilter].node.title;

    var currentCategoryFamilies = filter(brandFamiliesSorted, edge => {
      if (edge.node.brand) {
        if (edge.node.brand.toLowerCase() === activeFilterCategory.toLowerCase()) {
          return true;
        }
      }
      return false;
    });
    const selectedFamily = this.state.selectedFamily;
    const brandFamiliesItemsOrdered = {};
    brandFamiliesItemsOrdered['edges'] = sortBy(brandFamiliesItems.edges, edge => edge.node.order);
    currentCategoryFamilies = sortBy(currentCategoryFamilies, item => item.node.title);
    var brandFamiliesEdgesItems = currentCategoryFamilies.map((item, i) => (
      <li
        className={selectedFamily === item.node.title && 'active'}
        onClick={this.onItemClick(i, currentCategoryFamilies)}
        key={i}
      >
        <a href="#">
          <span className="link-up">{item.node.title}</span>{' '}
          <span className="link-down">{item.node.title}</span>
        </a>
      </li>
    ));

    const dropDownBrandFamiliesEdges = (
      <div
        className={`c-filter ${this.state.toggleDropDown && 'is-active'}`}
        onClick={this.toggleDropDown}
      >
        <button className="c-button c-button--filter js-filter-button">
          {selectedFamily === 'allItems'
            ? sortBrandsDropDown.allCategoryItemsText + ' ' + activeFilterCategory
            : selectedFamily}
          <i className="button-icon button-icon--dropdown">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="11" viewBox="0 0 8 11">
              <path
                fill="#C2A572"
                fillRule="evenodd"
                d="M6.90685425,33.6568542 L8.65685425,33.6568542 L8.65685425,26.6568542 L1.65685425,26.6568542 L1.65685425,28.4068542 L6.90685425,28.4068542 L6.90685425,33.6568542 Z"
                transform="rotate(45 33.835 14.036)"
              />
            </svg>
          </i>
        </button>
        {currentCategoryFamilies.length !== 0 && (
          <div className="c-filter__nav">
            <ul>
              <li
                className={selectedFamily === 'allItems' && 'active'}
                onClick={this.onItemClick(-1)}
              >
                {sortBrandsDropDown.allCategoryItemsText} {activeFilterCategory}
              </li>
              {currentCategoryFamilies.map((item, i) => (
                <li
                  className={selectedFamily === item.node.title && 'active'}
                  key={i}
                  onClick={this.onItemClick(i, currentCategoryFamilies)}
                >
                  {item.node.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
    return (
      <div>
        <div className="brands-title">
          <div className="l-container">
            <div className="l-row">
              <div className="l-col l-col--12">
                <h2>
                  {sortBrandsDropDown.allCategoryItemsText} {activeFilterCategory}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="brands-families">
          <div className="l-container">
            <div className="l-row">
              <div className="l-col l-col--12 l-md-col--6 l-lg-col--8 brands-filter-family">
                <ul className="brands-families__list">
                  {currentCategoryFamilies.length !== 0 && (
                    <li
                      className={selectedFamily === 'allItems' && 'active'}
                      onClick={this.onItemClick(-1)}
                    >
                      <a href="#">
                        <span className="link-up">
                          {sortBrandsDropDown.allCategoryItemsText} {activeFilterCategory}
                        </span>
                        <span className="link-down">
                          {sortBrandsDropDown.allCategoryItemsText} {activeFilterCategory}
                        </span>
                      </a>
                    </li>
                  )}
                  {brandFamiliesEdgesItems}
                </ul>
                {currentCategoryFamilies.length !== 0 && dropDownBrandFamiliesEdges}
              </div>
              <SortBrandsDropDown
                sortBrandsDropDown={sortBrandsDropDown}
                selectedFilter={selectedFamily}
                onSelectSortMethod={this.handleSelectSortMethod}
                selectedSortValue={this.state.selectedSortValue}
              />
            </div>
          </div>
        </div>
        <BrandsFamiliesItems
          location={location}
          activeCategoryFilter={activeCategoryFilter}
          activeFilterCategory={activeFilterCategory}
          brandFamiliesItems={brandFamiliesItemsOrdered}
          selectedFamily={selectedFamily}
          selectedSortValue={this.state.selectedSortValue}
        />
        <BrandsStoreLocator location={location} sellingpointContent={sellingpointContent} />
      </div>
    );
  }
}

BrandsFamilies.propTypes = {
  brandFamilies: PropTypes.object,
  sortedBrandCategories: PropTypes.array,
  activeFilter: PropTypes.number,
};

export default BrandsFamilies;
