var express = require('express');
var router = express.Router();
const checkIsLoggedIn = require('../middleware/authMiddleware');
const excerciseController = require('../controllers/excerciseController');
const {
  validateExerciseData,
  validate,
} = require('../validation/exerciseValidation');

router.get('/', checkIsLoggedIn, excerciseController.getAllExerciseData);
router.post(
  '/add',
  checkIsLoggedIn,
  validateExerciseData,
  validate,
  excerciseController.addExercise
);

module.exports = router;
