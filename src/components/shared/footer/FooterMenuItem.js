import React from 'react';
import Link from '../../shared/Link';

class FooterMenuItem extends React.Component {
  state = {
    active: false,
  };

  handleToggle = () => {
    this.setState(prevState => ({
      active: !prevState.active,
    }));
  };

  render() {
    const { item, location, locale } = this.props;

    const currentLanguage = "";

    return (
      <div
        className={`l-col l-col--12 l-sm-col--6 l-lg-col--3 ${
          this.state.active ? 'is-active' : ''
        }`}
      >
        <h6 className="global-footer__title">
          {item.title}
          <button type="button" className="c-button toggle-nav" onClick={this.handleToggle} />
        </h6>
        <ul className="global-footer__list">
          {item.links &&
            item.links.map((linkItem, linkIndex) => (
              <li key={linkIndex}>
                {linkItem.slug && (
                  <Link to={`${currentLanguage}/${linkItem.slug.slug}`}>{linkItem.title}</Link>
                )}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default FooterMenuItem;
