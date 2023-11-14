const { body, validationResult } = require('express-validator');
const { errorResponse } = require('../responses/response');

const validateExerciseData = [
  body('name').not().isEmpty().withMessage('Name is required'),
  body('description').not().isEmpty().withMessage('Description is required'),
  body('level').not().isEmpty().withMessage('Level is required'),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  return errorResponse(res, errors, 400);
};

module.exports = {
  validateExerciseData,
  validate,
};
