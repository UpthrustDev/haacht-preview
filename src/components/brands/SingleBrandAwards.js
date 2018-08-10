import React from 'react';
import Flickity from 'flickity';
import ReactMarkdown from 'react-markdown';
import _get from 'lodash/get';
import Link from '../shared/ReactMarkDown/Link';

class SingleBrandAwards extends React.Component {
  componentDidMount() {
    const Flickity = require('flickity');
    const awardsSlider = document.querySelector('.js-awards-widget-slider');

    if (awardsSlider !== null) {
      let flkty = new Flickity(awardsSlider, {
        prevNextButtons: false,
        pageDots: true,
      });
    }
  }

  render() {
    const { awards } = this.props;
    return (
      <div className="awards-widget u-radius">
        <div className="awards-widget-slider js-awards-widget-slider">
          {awards &&
            awards.map((item, index) => (
              <div className="slide" key={index}>
                <div className="u-label u-label--gold">{item.fields.subTitle}</div>
                <h4 className="award-widget__title">{item.fields.title}</h4>
                <ReactMarkdown
                  source={_get(item.fields, 'awardsDescription')}
                  className={'content-styles'}
                  renderers={{
                    Link,
                  }}
                />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default SingleBrandAwards;
