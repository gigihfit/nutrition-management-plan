const User = require('../models/User');

module.exports = {
  async registerUser(userData) {
    try {
      const user = new User({
        username: userData.username,
        password: userData.password,
        name: userData.name,
        email: userData.email,
        dob: userData.dob,
        gender: userData.gender,
        address: userData.address,
      });

      await user.save();
      return user;
    } catch (errror) {
      throw errror;
    }
  },
};
