import React from 'react';
import AllBrandsSection from './AllBrandsSection';
import PageWrapper from '../shared/PageWrapper';
import SellingPointIntro from './SellingPointIntro';
import PropTypes from 'prop-types';

const AllBrandsPage = ({
  navigation,
  cfNavigation,
  locale,
  allBrandsData,
  sellingPointIntro,
  footerMenu,
  agePopup,
  cookiesPopup,
  location,
  slug_nl_be,
  slug_nl,
  slug_en,
  slug_fr,
  slug_fr_be,
}) => {
  const currentPage = 'merken';
  return (
    <PageWrapper
      agePopup={agePopup}
      cookiesPopup={cookiesPopup}
      navigation={navigation}
      cfNavigation={cfNavigation}
      locale={locale}
      location={location}
      footerMenu={footerMenu}
      slug_nl_be={slug_nl_be}
      slug_nl={slug_nl}
      slug_en={slug_en}
      slug_fr={slug_fr}
      slug_fr_be={slug_fr_be}
    >
      <AllBrandsSection location={location} allBrandsData={allBrandsData} />
      <SellingPointIntro
        location={location}
        sellingPointIntro={sellingPointIntro}
        currentPage={currentPage}
      />
    </PageWrapper>
  );
};

AllBrandsPage.propTypes = {
  navigation: PropTypes.object,
  cfNavigation: PropTypes.object,
  locale: PropTypes.string,
  allBrandsData: PropTypes.object,
  sellingPointIntro: PropTypes.object,
};

export default AllBrandsPage;
