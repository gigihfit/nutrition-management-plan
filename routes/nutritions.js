var express = require('express');
var router = express.Router();
const checkIsLoggedIn = require('../middleware/authMiddleware');
const nutritionController = require('../controllers/nutritionController');

/* GET users listing. */
router.get('/', checkIsLoggedIn, nutritionController.getAllNutritionData);
router.post('/add', checkIsLoggedIn, nutritionController.addNutrition);
router.put('/update/:id', checkIsLoggedIn, nutritionController.updateNutrition);

module.exports = router;
