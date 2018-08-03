import React from 'react';

const regex = /(?:\r\n|\r|\n)/g;

const multilineToDivs = string => {
  return string.split(regex).map((item, index) => <div key={index}>{item}</div>);
};

const multilineToParagraph = string => {
  if (string) {
    return string.split(regex).map((item, index) => (
      <p className="common-text" key={index}>
        {item}
      </p>
    ));
  }
};
const multilineToListItem = string => {
  return string.split(regex).map((item, index) => <li key={index}>{item}</li>);
};
const breakTitles = (string, className) => {
  const array = string.split(regex);
  return (
    <h2 className={className}>
      {array[0]}
      <br />
      {array[1]}
    </h2>
  );
};
export { multilineToDivs, multilineToParagraph, multilineToListItem, breakTitles };
