const validator = (validation = {}) => {
  const { required, postCode, phoneNumber, email } = validation;

  return {
    isValid: function isValid(value) {
      if (required && !value) {
        return false;
      } else if (postCode && value && !value.match(/[0-9]{4}/)) {
        return false;
      } else if (phoneNumber && value && !value.match(/^\+?(?:[0-9] ?){6,14}[0-9]$/)) {
        return false;
      } else return !(email && value && !value.match(/^(\w[-._+\w]*\w@\w[-._\w]*\w\.\w{2,3})$/));
    },
  };
};

//old expression
///^(((\+|00)32\s?|0)4(60|[789]\d)(\s?\d{2}){3})$|^((\+|00)32\s?|0)(\d\s?\d{3}|\d{2}\s?\d{2})(\s?\d{2}){2}$/

export default validator;
