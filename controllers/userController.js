const User = require('../models/User');
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

      return res.status(201).json(userData);
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Registration failed', error: error });
    }
  },
};
