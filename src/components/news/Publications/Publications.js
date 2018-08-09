import React from 'react';
import _map from 'lodash/map';
import _get from 'lodash/get';

const Publications = ({
  publications,
  subscriptionForm,
  handleSubscription,
  handleSelectSubscription,
}) => {
  return (
    <div className="publications">
      <div className="l-container">
        <div className="l-row">
          {_map(publications.edges, (publication, index) => (
            <div key={index} className="l-col l-col--12 l-md-col--6">
              <div className="publication u-radius">
                <h3>{publication.node.title}</h3>
                <div className="publication__image">
                  <img
                    className="lazy u-full"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw"
                    alt="Image description"
                    data-src={_get(publication, 'node.coverImage.file.url')}
                  />
                </div>
                <p>{_get(publication, 'node.description.childMarkdownRemark.internal.content')}</p>
                <div className="publication__triggers">
                  <a
                    href={_get(publication, 'node.pdf.file.url')}
                    target="_blank"
                    className="c-button c-button--primary c-button--white u-radius--pill"
                  >
                    {publication.node.buttonView}
                  </a>
                  <button
                    onClick={() => {
                      handleSubscription();
                      handleSelectSubscription(
                        publication.node.title,
                        publication.node.formDescription.formDescription,
                        publication.node.type
                      );
                    }}
                    className="c-button c-button--primary c-button--white u-radius--pill"
                  >
                    {publication.node.buttonRequest}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Publications;
