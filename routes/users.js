var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const checkIsLoggedIn = require('../middleware/authMiddleware');

/* GET users listing. */
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/view', checkIsLoggedIn, userController.viewUser);

module.exports = router;
