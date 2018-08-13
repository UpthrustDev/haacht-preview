import React from 'react';
import _get from 'lodash/get';
import _filter from 'lodash/filter';
import Link from '../../shared/Link';
import { getPartOfUrl, location } from '../../helpers/navigationUrl';

const Awards = ({ awards, location, linkToBrands }) => {
  for (var i = 0; i < awards.length; i++) {
    awards[i].node.awards = _filter(awards[i].node.awards, function(o) {
      return o.title != null && o.title != '';
    });
  }
  awards = _filter(awards, function(o) {
    return o.node.awards.length != 0 && o.node.title;
  });

  console.log(awards);
  return (
    <div className="l-container awards">
      <div className="l-row">
        <div className="l-col--12">
          {awards.map((award, index) => (
            <div key={index} className="award">
              <div className="award__image u-text--center">
                <Link
                  to={`${getPartOfUrl(location, 1)}/${linkToBrands.slug}/${_get(
                    award,
                    'node.category.slug'
                  )}/${award.node.slug}`}
                >
                  <img
                    className="lazy u-imgresp"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw"
                    alt="Image description"
                    sizes="100vw"
                    data-src={_get(award.node.packshot, 'file.url')}
                  />
                </Link>
              </div>
              <div className="award__content">
                <h3>
                  <Link
                    to={`${getPartOfUrl(location, 1)}/${linkToBrands.slug}/${_get(
                      award,
                      'node.category.slug'
                    )}/${award.node.slug}`}
                  >
                    {`${_get(award.node, 'family.title', '')} ${_get(award.node, 'title', '')}`}
                  </Link>
                </h3>
                <ul>{award.node.awards.map((item, index) => <li key={index}>{item.title}</li>)}</ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Awards;
