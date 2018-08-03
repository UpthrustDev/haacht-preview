const setPostalcode = postalCode => {
  if (typeof sessionStorage !== 'undefined') {
    sessionStorage.setItem('postalCode', postalCode);
  }
};

const getPostalcode = () => {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem('postalCode') || '';
  }
  return '';
};

export { setPostalcode, getPostalcode };
