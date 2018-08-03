import _filter from 'lodash/filter';

//filter based on locale since Contentful sends back empty objects
const filterBasedOnLocale = (array, condition = 'title') => {
  return _filter(array.edges, edge => {
    return !!edge.node[condition];
  });
};

export { filterBasedOnLocale };
