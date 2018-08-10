import React from 'react';
import _filter from 'lodash/filter';
import _sortBy from 'lodash/sortBy';
import PropTypes from 'prop-types';
import _map from 'lodash/map';
import _get from 'lodash/get';
import _uniq from 'lodash/uniq';
import _replace from 'lodash/replace';
import _orderBy from 'lodash/orderBy';
import Link from '../shared/Link';
import { getPartOfUrl } from '../../helpers/navigationUrl';
import cx from 'classnames';

class BrandsFamiliesItems extends React.Component {
  filterItems = (items, types) => {
    const brandTypes = _uniq(_map(items, item => item.node.type.title));
    const allBrandItemsOfAType = _map(brandTypes, item =>
      _filter(items, type => _get(type.node, 'type.title') === item)
    );
    if (types) {
      return brandTypes;
    }
    return allBrandItemsOfAType;
  };

  render() {
    const {
      brandFamiliesItems,
      selectedFamily,
      selectedSortValue,
      activeFilterCategory,
      location,
      activeCategoryFilter,
    } = this.props;
    let familyItems = {};
    let brandsOverview;
    //console.log('ITEMS', brandFamiliesItems);
    //console.log('ITEMS', _filter(brandFamiliesItems.edges, 'node.title'));
    var brandFamiliesItemsFiltered = { edges: _filter(brandFamiliesItems.edges, 'node.title') };
    var brandFamiliesItemsFiltered = {
      edges: _filter(brandFamiliesItems.edges, 'node.category.title'),
    };
    //var brandFamiliesItemsFiltered = { edges: brandFamiliesItems.edges };
    const className = cx({
      'brand-card l-col l-col--12 l-md-col--6 l-lg-col--4': true,
      beer: activeCategoryFilter === 0,
      soda: activeCategoryFilter === 1,
      wine: activeCategoryFilter === 2,
      coffee: activeCategoryFilter === 3,
    });

    const firstArgPath = location.pathname.split('/');
    const currentPath = _replace(location.pathname, '/' + firstArgPath[1], '');
    const selectedCategoryFamilyItems = {};
    selectedCategoryFamilyItems['edges'] = _filter(brandFamiliesItemsFiltered.edges, edge => {
      console.log(_get(edge, 'node.category.title'));
      if (_get(edge, 'node.category.title') != undefined) {
        if (_get(edge, 'node.category.title') === activeFilterCategory) {
          return true;
        }
      }
      return false;
    });

    if (!selectedCategoryFamilyItems.edges.length) {
      selectedCategoryFamilyItems['edges'] = _filter(
        brandFamiliesItemsFiltered.edges,
        edge => _get(edge, 'node.category.subIndex') !== null
      );
    }
    if (selectedFamily === 'allItems') {
      if (selectedSortValue === 1) {
        familyItems['edges'] = _sortBy(
          selectedCategoryFamilyItems.edges,
          edge => [
            _get(edge.node, 'family.title') ? edge.node.family.title : 'ZZZ',
            edge.node.title,
          ],
          'asc'
        );
        console.log(familyItems);
      } else if (selectedSortValue === 2) {
        familyItems['edges'] = _sortBy(
          selectedCategoryFamilyItems.edges,
          edge => [edge.node.title],
          'asc'
        );
      } else if (selectedSortValue === 3) {
        var brandTypes = _filter(
          selectedCategoryFamilyItems.edges,
          edge => edge.node.type && edge.node.type.title
        );
        console.log(brandTypes);
        brandTypes = _sortBy(brandTypes, edge => [edge.node.type.title], 'asc');

        brandsOverview = this.filterItems(brandTypes, true).map((typeItem, typeIndex) => (
          <div className="brands-overview" key={typeIndex}>
            <div className="l-container brands-cards">
              <div className="l-row u-flex-wrap--wrap">
                <div className="brands-subtitle l-col l-col--12 l-md-col--12 l-lg-col--12">
                  {typeItem}
                </div>
                {this.filterItems(brandTypes, false)[typeIndex].map((brandItem, brandIndex) => (
                  <div className={className} key={brandIndex}>
                    <div className="brand-card__inner">
                      <Link
                        to={`${location.pathname}/${brandItem.node.slug}`}
                        className="brand-card__wrap u-full"
                      >
                        <div className="brand-card__image u-full">
                          <div className="brand-card__holder u-text--center">
                            <div className="brand-card__thumb">
                              <img
                                className="lazy"
                                src={
                                  brandItem.node.packshot ? brandItem.node.packshot.file.url : ''
                                }
                                data-src={
                                  brandItem.node.packshot ? brandItem.node.packshot.file.url : ''
                                }
                                alt={brandItem.node.title}
                              />
                            </div>
                          </div>
                          <div className="brand-card__label u-display--flex u-align--center u-justify--center">
                            <div className="label-inner">
                              {brandItem.node.family &&
                                brandItem.node.family.title &&
                                activeCategoryFilter !== 2 && (
                                  <span className="label-family">
                                    {brandItem.node.family.title}
                                  </span>
                                )}
                              <span className="label-brand">{brandItem.node.title}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ));
      }
    } else {
      familyItems['edges'] = _filter(
        selectedCategoryFamilyItems.edges,
        edge => edge.node.family && edge.node.family.title === selectedFamily
      );
    }
    if (selectedSortValue !== 3) {
      brandsOverview = (
        <div className="brands-overview">
          <div className="l-container brands-cards">
            <div className="l-row u-flex-wrap--wrap">
              {familyItems.edges.map((item, index) => (
                <div className={`${className}`} key={index}>
                  <div className="brand-card__inner">
                    <Link
                      to={`${location.pathname}/${item.node.slug}`}
                      className="brand-card__wrap u-full"
                    >
                      <div className="brand-card__image u-full">
                        <div className="brand-card__holder u-text--center">
                          <div className="brand-card__thumb">
                            <img
                              className="lazy"
                              src={item.node.packshot ? _get(item.node.packshot, 'file.url') : ''}
                              data-src={
                                item.node.packshot ? _get(item.node.packshot, 'file.url') : ''
                              }
                              alt={item.node.title}
                            />
                          </div>
                        </div>
                        <div className="brand-card__label u-display--flex u-align--center u-justify--center">
                          <div className="label-inner">
                            {item.node.family &&
                              item.node.family.title &&
                              activeCategoryFilter !== 2 && (
                                <span className="label-family">{item.node.family.title}</span>
                              )}
                            <span className="label-brand">{item.node.title}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return <div>{brandsOverview}</div>;
  }
}

BrandsFamiliesItems.propTypes = {
  brandFamiliesItems: PropTypes.object,
  selectedFamily: PropTypes.string,
};
export default BrandsFamiliesItems;
