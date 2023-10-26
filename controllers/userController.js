const User = require('../models/User');
const { errorResponse, successResponse } = require('../responses/response');
const userService = require('../services/userService');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const { secretKey } = require('../config/config');

module.exports = {
  viewUser: (req, res) => {
    res.status(200).json({ error: 'message' });
  },

  async registerUser(req, res) {
    const userData = req.body;

    try {
      const existingUser = await User.findOne({ email: userData.email });

      if (existingUser) {
        return errorResponse(res, 'Email is already in use', 400);
      }

      const user = await userService.registerUser(userData);

      user.password = undefined;

      return successResponse(res, user, 'Registered successfuly', 201);
    } catch (error) {
      return errorResponse(res, 'Registration failed', 500);
    }
  },

  async loginUser(req, res) {
    const { email, password } = req.body;

    try {
      const user = await userService.loginUser(email, password);

      const token = jwt.sign(
        { sub: user._id, username: user.username },
        secretKey,
        {
          expiresIn: '1h',
        }
      );

      return successResponse(res, { user, token }, 'Login Successfuly');
    } catch (error) {
      return errorResponse(res, 'Login failed', 401);
    }
  },
};
