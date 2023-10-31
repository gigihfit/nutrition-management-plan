var express = require('express');
var router = express.Router();
const checkIsLoggedIn = require('../middleware/authMiddleware');
const nutritionController = require('../controllers/nutritionController');

/* GET users listing. */
router.post('/add', checkIsLoggedIn, nutritionController.addNutrition);

module.exports = router;
