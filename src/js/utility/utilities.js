var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

module.exports = {

  validateEmail: function(email) {
    // eslint-disable-next-line
    const re = /^[A-z0-9_%+-]+.*[A-z0-9_%+-]+@(my.)?uno.edu$/;
    return re.test(email);
  },

  validatePhone: function(number) {
    try {
      return phoneUtil.parse(number, 'US');
    }
    catch (err) {
      return false;
    }
  }

}
