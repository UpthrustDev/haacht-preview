import React from 'react';
import sortBy from 'lodash/sortBy';
import _get from 'lodash/get';
import Link from '../shared/Link';
import { getLanguage } from '../../helpers/navigationUrl';
import _split from 'lodash/split';

const AllBrandsSections = props => {
  const navigationArray = _split(props.location.pathname, '/');
  const navigationItem = navigationArray[navigationArray.length - 1];

  const sortedBrands = sortBy(props.allBrandsData.allBrands, edge => edge.index);
  return (
    <div className="brand-categories">
      <div className="l-container l-container--full">
        <div className="l-row">
          {sortedBrands.map((item, index) => (
            <div
              className={`l-col l-col--12 l-lg-col--${index === 0 ? '7' : index === 1 ? '5' : '4'}`}
              key={index}
            >
              <div className="brand-category" data-brand={item.title}>
                <Link
                  to={`${getLanguage(props.location)}/${navigationItem}/${item.slug}`}
                  className="u-full brand-category__link"
                >
                  <div className="brand-category__overlay u-full u-display--flex u-align--center  u-justify--center">
                    <div className="brand-category__inner">
                      <div className="brand-category__title">{item.title}</div>
                      <div className="brand-category__subtitle">
                        {item.subTitle ? item.subTitle : ''}
                      </div>
                    </div>
                  </div>
                  <video
                    className="lazy u-object-fit u-full"
                    data-object-fit
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={_get(item, 'image.file.url')}
                  >
                    <source data-src={_get(item, 'videoWebm.file.url')} type="video/webm" />
                    <source data-src={_get(item, 'video.file.url')} type="video/mp4" />
                  </video>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBrandsSections;
