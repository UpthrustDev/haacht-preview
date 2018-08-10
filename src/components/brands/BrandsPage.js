import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../shared/PageWrapper';
import BrandsGlobalContent from './BrandsGlobalContent';
import _find from 'lodash/find';
import _get from 'lodash/get';

import { convertUrl } from '../../helpers/navigationUrl';

const BrandsPage = ({
  navigation,
  cfNavigation,
  locale,
  brandCategories,
  brandFamilies,
  brandFamiliesItems,
  sortBrandsDropDown,
  agePopup,
  cookiesPopup,
  location,
  footerMenu,
  sellingpointContent,
  slug_nl,
  slug_nl_be,
  slug_en,
  slug_fr,
  slug_fr_be,
}) => {
  const title = _get(
    _find(brandCategories.edges, edge => edge.node.slug === convertUrl(location.pathname)),
    'node.title'
  );

  return (
    <PageWrapper
      agePopup={agePopup}
      cookiesPopup={cookiesPopup}
      navigation={navigation}
      cfNavigation={cfNavigation}
      locale={locale}
      location={location}
      footerMenu={footerMenu}
      slug_nl={slug_nl}
      slug_nl_be={slug_nl_be}
      slug_en={slug_en}
      slug_fr={slug_fr}
      slug_fr_be={slug_fr_be}
      title={`${title} | Brouwerij Haacht` || ''}
    >
      <BrandsGlobalContent
        brandCategories={brandCategories}
        brandFamilies={brandFamilies}
        brandFamiliesItems={brandFamiliesItems}
        sortBrandsDropDown={sortBrandsDropDown}
        location={location}
        sellingpointContent={sellingpointContent}
      />
    </PageWrapper>
  );
};

BrandsPage.propTypes = {
  navigation: PropTypes.object,
  cfNavigation: PropTypes.object,
  locale: PropTypes.string,
  brandCategories: PropTypes.object,
  brandFamilies: PropTypes.object,
  brandFamiliesItems: PropTypes.object,
  sortBrandsDropDown: PropTypes.object,
  location: PropTypes.object,
};

export default BrandsPage;
