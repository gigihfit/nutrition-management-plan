var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const checkIsLoggedIn = require('../middleware/authMiddleware');
const { validateUserData, validate } = require('../validation/calcBmi');

/* GET users listing. */
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/view', checkIsLoggedIn, userController.viewUser);
router.post(
  '/bmi/calculation',
  checkIsLoggedIn,
  validateUserData,
  validate,
  userController.BMICalculation
);

module.exports = router;
