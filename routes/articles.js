var express = require('express');
var router = express.Router();
const checkIsLoggedIn = require('../middleware/authMiddleware');
const articleController = require('../controllers/articleController');

router.get('/', checkIsLoggedIn, articleController.getAllArticleData);
router.post('/add', checkIsLoggedIn, articleController.addArticle);

module.exports = router;
