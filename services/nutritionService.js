const Nutrition = require('../models/Nutrition');

module.exports = {
  async addNutrition(nutritionData) {
    try {
      const nutrition = new Nutrition({
        food: nutritionData.food,
        calorie: nutritionData.calorie,
        carbohydrate: nutritionData.carbohydrate,
        protein: nutritionData.protein,
        fat: nutritionData.fat,
        fiber: nutritionData.fiber,
        calcium: nutritionData.calcium,
      });

      await nutrition.save();
      return nutrition;
    } catch (error) {
      throw error;
    }
  },
};
