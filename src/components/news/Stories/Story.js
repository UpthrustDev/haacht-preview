import React from 'react';
import Inview from '../../shared/Inview';
import cx from 'classnames';
import _get from 'lodash/get';
import Link from '../../shared/Link';
import { getPartOfUrl } from '../../../helpers/navigationUrl';

class Story extends React.Component {
  state = {
    isVisible: false,
  };

  handleInview = () => {
    this.setState({ isVisible: true });
  };

  render() {
    const { story, storyLink, location } = this.props;
    const classNames = cx({
      'is-visible': this.state.isVisible,
    });

    return (
      <Inview onInview={this.handleInview}>
        <div className={`story u-display--flex u-flex-wrap--wrap u-align--center ${classNames}`}>
          <div className="story__image">
            <Link
              to={`${getPartOfUrl(location, 1)}/${storyLink.slug}/${story.node.slug}`}
              className="u-block-ratio u-block-ratio--100"
            >
              <div className="story__number" />
              <img
                className="lazy u-object-fit u-full"
                alt="Image description"
                sizes="100vw"
                data-src={story.node.featuredImage ? story.node.featuredImage.file.url : null}
                data-object-fit
              />
            </Link>
          </div>
          <div className="story__content">
            <div className="story__cat">{this.props.storyText}</div>
            <h2 className="story__title">
              {storyLink && (
                <Link to={`${getPartOfUrl(location, 1)}/${storyLink.slug}/${story.node.slug}`}>
                  {story.node.title}
                </Link>
              )}
            </h2>
            <p>{_get(story.node.shortDescription, 'childMarkdownRemark.internal.content')}</p>
            {storyLink && (
              <Link
                to={`${getPartOfUrl(location, 1)}/${storyLink.slug}/${story.node.slug}`}
                className="c-button c-button--primary c-button--green u-radius--pill"
              >
                {this.props.btnText}
              </Link>
            )}
          </div>
        </div>
      </Inview>
    );
  }
}
export default Story;
