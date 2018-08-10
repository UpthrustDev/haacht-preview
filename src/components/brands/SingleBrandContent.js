import React from 'react';
import SingleBrandHeader from './SingleBrandHeader';
import SingleBrandTabs from './SingleBrandTabs';
import SingleBrandTabsContent from './SingleBrandTabsContent';
import SingleBrandRitual from './SingleBrandRitual';
import SingleBrandFamily from './SingleBrandFamily';
import PageWrapper from '../shared/PageWrapper';
import _camelCase from 'lodash/camelCase';
import _filter from 'lodash/filter';
import _map from 'lodash/map';
import _get from 'lodash/get';

class SingleBrandContent extends React.Component {
  state = {
    selectedTab: 0,
    selectedTabName: '',
  };
  getTabs = () => {
    console.log(this.props.singleBrandPageData);
    console.log(this.props.brand);
    _map(this.props.singleBrandPageData.tabs, item => {
      console.log(_camelCase(item.key));
    });
    return _filter(this.props.singleBrandPageData.tabs, item => {
      if (_camelCase(item.key) == 'description' && !this.props.brand.node.shortDescription) {
        return false;
      }
      return !!this.props.brand.node[_camelCase(item.key)];
    });
  };
  componentDidMount() {
    const pathItems = typeof window === 'undefined' ? '' : window.location.pathname;
    const currentPage = pathItems.match(/([a-zA-Z0-9\-]*)\/?$/)[0];

    this.setState({
      selectedTabName: this.getTabs()[0],
    });
  }

  onTabSelect = (i, tabName) => () => {
    this.setState({ selectedTab: i, selectedTabName: tabName });
  };

  render() {
    const {
      allBrands,
      singleBrandPageData,
      sellingPointIntro,
      cookiesPopup,
      cfNavigation,
      agePopup,
      brand,
      locale,
      location,
      navigation,
      footerMenu,
      allFamilies,
      slug_nl,
      slug_nl_be,
      slug_en,
      slug_fr,
      slug_fr_be,
    } = this.props;

    return (
      <PageWrapper
        cookiesPopup={cookiesPopup}
        cfNavigation={cfNavigation}
        locale={locale}
        navigation={navigation}
        agePopup={agePopup}
        location={location}
        footerMenu={footerMenu}
        white
        title={
          _get(brand.node, 'family.title')
            ? _get(brand.node, 'family.title') + ' ' + brand.node.title + ' | Brouwerij Haacht'
            : brand.node.title + ' | Brouwerij Haacht'
        }
        description={brand.node.shortDescription}
        slug_nl={slug_nl}
        slug_nl_be={slug_nl_be}
        slug_en={slug_en}
        slug_fr={slug_fr}
        slug_fr_be={slug_fr_be}
      >
        <SingleBrandHeader
          currentBrandItem={brand}
          singleBrandPageData={singleBrandPageData}
          location={location}
          awards={brand.node.awards}
        />
        <SingleBrandTabs
          singleBrandPageData={this.getTabs()}
          onTabSelect={this.onTabSelect}
          selectedTab={this.state.selectedTab}
          currentBrand={brand}
        />
        <SingleBrandTabsContent
          location={location}
          currentBrandItem={brand}
          selectedTabName={this.state.selectedTabName}
          singleBrandPageData={singleBrandPageData}
          sellingPointIntro={sellingPointIntro}
        />
        <SingleBrandRitual currentBrand={brand} singleBrandPageData={singleBrandPageData} />
        <SingleBrandFamily
          currentBrand={brand}
          location={location}
          singleBrandPageData={singleBrandPageData}
          allFamilies={allFamilies}
        />
      </PageWrapper>
    );
  }
}

export default SingleBrandContent;
