const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const { errorResponse } = require('../responses/response');
const { secretKey } = require('../config/config');

const checkIsLoggedIn = (req, res, next) => {
  const token =
    req.headers.authorization || req.query.token || req.cookies.token;

  if (!token) {
    return errorResponse(res, 'Unauthorized', 401);
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return errorResponse(res, 'Unauthorized', 401);
    }

    req.user = decoded;
    next();
  });
};

module.exports = checkIsLoggedIn;
