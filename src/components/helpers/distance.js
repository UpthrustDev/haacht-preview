import _slice from 'lodash/slice';
import _get from 'lodash/get';
import _inRange from 'lodash/inRange';
import _filter from 'lodash/filter';
import _concat from 'lodash/concat';

let distanceArray = [];
let i = 0;
const addToArray = response => {
  for (let i = 0; i < response.rows[0].elements.length; i++) {
    distanceArray.push(_get(response.rows[0].elements[i], 'distance.text'));
  }
};

const distance = (address, locations, callback4) => {
  getDistance(address, _slice(locations, i, i + 25), () => {
    i += 25;
    if (i < locations.length) {
      if (i % 100 === 0) {
        console.log('wait a second');
        setTimeout(distance, 7000, address, locations, callback4);
      } else {
        setTimeout(distance, 250, address, locations, callback4);
      }
    }
    if (distanceArray.length === locations.length) {
      callback4(distanceArray);
      distanceArray = [];
      i = 0;
    }
  });
};

const getDistance = (location, destinations, callback) => {
  const matrix = new google.maps.DistanceMatrixService();
  matrix.getDistanceMatrix(
    {
      origins: [location],
      destinations: destinations,
      travelMode: 'DRIVING',
    },
    (response, status) => {
      if (status === 'OK') {
        addToArray(response);
      }
      callback();
    }
  );
};

export const FilterStoresInRange = (stores, lat, lng) => {
  let range = 0.1;
  let filterArray = [];

  while (filterArray.length < 10 && range <= 1) {
    filterArray = _concat(
      filterArray,
      _filter(stores, store => {
        return (
          !filterArray.includes(store) &&
          _inRange(store.location.lat, lat - range, lat + range) &&
          _inRange(store.location.lng, lng - range, lng + range)
        );
      })
    );
    range += 0.05;
  }

  return filterArray;
};

export default distance;
