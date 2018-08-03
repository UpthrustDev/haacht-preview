import React from 'react';

const localeToURLPart = locale => {
  // const parts = locale.split('-');
  return (locale[1] + locale[0]).toLowerCase();
};

class Nav extends React.Component {
  render() {
    const urlLocalePart = localeToURLPart(this.props.locale);

    return (
      <nav>
        <ul>
          {this.props.links.filter(({ id }) => !!id).map(link => (
            <li key={link.id}>
              <a href={`${urlLocalePart}/${link.slug === 'home' ? '' : link.slug}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Nav;
