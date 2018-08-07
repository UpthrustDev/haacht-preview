import React from 'react';


const Link = ({ context, to, ...props }) => (
  <a to="#" {...props} >{props.children}</a>
);

export default Link;
