import React from 'react';
import _get from 'lodash/get';
import _filter from 'lodash/filter';
const PressArticles = ({ press, title, news_available }) => {
  var newsavailable;
  if (_filter(press, 'node.title').length == 0) {
    newsavailable = news_available;
  }
  return (
    <div className="press-articles" id="persartikels">
      <div className="l-container">
        <div className="press-articles__header u-text--center l-row u-justify--center">
          <div className="l-col l-col--12 l-md-col--10">
            <h2>{title}</h2>
          </div>
        </div>
        <div className="l-row">
          <h4 className={_filter(press, 'node.title').length == 0 ? 'post__cat card-cat' : ''}>
            {newsavailable}
          </h4>
          {_filter(press, 'node.title').map((item, index) => (
            <div key={index} className="l-col l-col--12 l-md-col--6 l-lg-col--4">
              <div className="press-article u-radius">
                <div className="press-article__cat">{_get(item, 'node.pressCategory.title')}</div>
                <h5 className="press-article__title">{item.node.title}</h5>
                <div className="press-article__link">
                  <a href={_get(item.node.pdfDocument, 'file.url')} target="_blank">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                      >
                        <g fill="#263A32">
                          <path d="M2.66362253,25 L22.3363775,25 C23.8203957,25 25,23.8291367 25,22.3561151 L25,6.64388489 C25,5.17086331 23.8203957,4 22.3363775,4 L17.4277017,4 L17.4277017,6.26618705 L22.2983257,6.26618705 C22.5266362,6.26618705 22.6788432,6.41726619 22.6788432,6.64388489 L22.6788432,22.3938849 C22.6788432,22.6205036 22.5266362,22.7715827 22.2983257,22.7715827 L2.66362253,22.7715827 C2.43531202,22.7715827 2.28310502,22.6205036 2.28310502,22.3938849 L2.28310502,6.64388489 C2.28310502,6.41726619 2.43531202,6.26618705 2.66362253,6.26618705 L7.53424658,6.26618705 L7.53424658,4 L2.66362253,4 C1.17960426,4 0,5.17086331 0,6.64388489 L0,22.3938849 C0,23.8291367 1.17960426,25 2.66362253,25 Z" />
                          <path
                            className="download-arrow"
                            d="M7.352,11.599278 L6,13.0938628 L11.7893333,17.7725632 C11.9973333,17.9350181 12.24,18 12.4826667,18 C12.7253333,18 12.968,17.9350181 13.176,17.7725632 L19,13.0938628 L17.6133333,11.599278 L13.5226667,14.8808664 L13.5226667,0 L11.4426667,0 L11.4426667,14.8808664 L7.352,11.599278 Z"
                          />
                        </g>
                      </svg>
                    </div>
                    <div>{item.node.articleReference}</div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PressArticles;
