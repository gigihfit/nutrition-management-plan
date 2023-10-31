const { successResponse, errorResponse } = require('../responses/response');
const nutritionService = require('../services/nutritionService');

module.exports = {
  async addNutrition(req, res) {
    const nutritionData = req.body;

    try {
      const nutrition = await nutritionService.addNutrition(nutritionData);

      return successResponse(
        res,
        nutrition,
        'Nutrition Created Successfuly',
        201
      );
    } catch (error) {
      return errorResponse(res, 'Failed to add nutrition', 500);
    }
  },
};
