const validator = require('validator');

module.exports = {

  validateEmail: function(email) {
    // eslint-disable-next-line
    const re = /^[A-z0-9_%+-]+.*[A-z0-9_%+-]+@(my.)?uno.edu$/;
    return re.test(email);
  },

  validatePhone: function(number) {
    try {
      const stripped = validator.blacklist(number, '-(). ');
      return validator.isMobilePhone(stripped, 'en-US');
    }
    catch (err) {
      return false;
    }
  }

}
