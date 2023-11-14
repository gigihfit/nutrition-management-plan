const { errorResponse, successResponse } = require('../responses/response');
const articleService = require('../services/articleService');

module.exports = {
  async getAllArticleData(req, res) {
    try {
      const articles = await articleService.getAllArticle();

      return successResponse(res, articles, 'OK', 200);
    } catch (error) {
      return errorResponse(res, error, 500);
    }
  },

  async addArticle(req, res) {
    const articleData = req.body;
    try {
      const articles = await articleService.addArticle(articleData);

      return successResponse(res, articles, 'Article created successfuly', 201);
    } catch (error) {
      throw error;
    }
  },
};
