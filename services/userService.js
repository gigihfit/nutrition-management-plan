const User = require('../models/User');
const bcrypt = require('bcryptjs');

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

  async loginUser(email, password) {
    try {
      const user = await User.findOne({ email: email });

      if (!user) {
        throw new Error('User not found');
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        throw new Error('Invalid Password');
      }

      return user;
    } catch (error) {
      throw error;
    }
  },
};
