import React from 'react';

const Link = ({ children, href }) => {
  if (href.includes('haacht.com')) {
    return <a href={href}>{children}</a>;
  }
  return (
    <a target="_blank" href={href}>
      {children}
    </a>
  );
};
export default Link;
