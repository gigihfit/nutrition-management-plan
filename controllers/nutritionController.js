const { successResponse, errorResponse } = require('../responses/response');
const nutritionService = require('../services/nutritionService');

module.exports = {
  async getAllNutritionData(req, res) {
    try {
      const nutritionData = await nutritionService.getAllNutritionData();

      return successResponse(res, nutritionData, 200);
    } catch (error) {
      return errorResponse(res, 'Internal server error', 500);
    }
  },

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

  async updateNutrition(req, res) {
    const { id } = req.params;
    const nutritionData = req.body;

    try {
      const updatedNutrition = await nutritionService.updateNutritionData(
        id,
        nutritionData
      );

      if (!updatedNutrition) {
        return errorResponse(res, 'Nutrition Data Not Found');
      }

      return successResponse(
        res,
        updatedNutrition,
        'Nutrition data updated successfuly',
        200
      );
    } catch (error) {
      return errorResponse(res, 'Error updating nutrition data', 500);
    }
  },
};
