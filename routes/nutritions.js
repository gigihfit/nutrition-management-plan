var express = require('express');
var router = express.Router();
const checkIsLoggedIn = require('../middleware/authMiddleware');
const nutritionController = require('../controllers/nutritionController');

/* GET users listing. */
router.get('/', checkIsLoggedIn, nutritionController.getAllNutritionData);
router.get('/:id', checkIsLoggedIn, nutritionController.getDetailNutrition);
router.post('/add', checkIsLoggedIn, nutritionController.addNutrition);
router.put('/update/:id', checkIsLoggedIn, nutritionController.updateNutrition);
router.delete(
  '/delete/:id',
  checkIsLoggedIn,
  nutritionController.updateNutrition
);

module.exports = router;
