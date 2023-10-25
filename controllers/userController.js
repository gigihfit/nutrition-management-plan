const User = require('../models/User');
const { errorResponse, successResponse } = require('../responses/response');
const userService = require('../services/userService');

module.exports = {
  viewUser: (req, res) => {
    res.status(200).json({ error: 'message' });
  },

  async registerUser(req, res) {
    const userData = req.body;

    try {
      const existingUser = await User.findOne({ email: userData.email });

      if (existingUser) {
        return res.status(400).json({ message: 'Email is already in use' });
      }

      const user = await userService.registerUser(userData);

      user.password = undefined;
      return successResponse(res, user, 'Registered successfuly');
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Registration failed', error: error });
    }
  },

  async loginUser(req, res) {
    const { email, password } = req.body;

    try {
      const user = await userService.loginUser(email, password);

      return res.status(200).json(user);
    } catch (error) {
      return res.status(401).json({ message: 'Login failed' });
    }
  },
};
