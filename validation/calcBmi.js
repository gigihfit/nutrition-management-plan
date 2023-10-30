const { body, validationResult } = require('express-validator');
const { errorResponse } = require('../responses/response');

const validateUserData = [
  body('height').not().isEmpty().withMessage('Height is required'),
  body('weight').not().isEmpty().withMessage('Weight is required'),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  return errorResponse(res, errors, 400);
};

module.exports = {
  validateUserData,
  validate,
};
