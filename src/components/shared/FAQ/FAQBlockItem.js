import React from 'react';
import cx from 'classnames';
import _get from 'lodash/get';
import ReactMarkdown from 'react-markdown';

class FAQBlockItem extends React.Component {
  state = {
    isOpen: false,
  };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;
    const { FAQ } = this.props;
    const className = cx({
      'is-active': isOpen,
    });
    //
    return (
      <div className={`${className} c-toggle-block js-toggle-block`}>
        <div onClick={this.handleClick} className="c-toggle-block__header js-toggle-block-header">
          {FAQ && FAQ.question}
          <div className="c-toggle-block__plus" />
        </div>
        <div className="c-toggle-block__content">
          <ReactMarkdown
            className="content-styles"
            source={FAQ && _get(FAQ.answer, 'childMarkdownRemark.internal.content')}
          />
        </div>
      </div>
    );
  }
}

export default FAQBlockItem;
