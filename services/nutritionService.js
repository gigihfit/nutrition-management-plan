const Nutrition = require('../models/Nutrition');

module.exports = {
  async getAllNutritionData() {
    try {
      const nutritionData = await Nutrition.find();

      return nutritionData;
    } catch (error) {
      throw error;
    }
  },

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

  async updateNutritionData(id, nutritionData) {
    try {
      const updatedNutrition = await Nutrition.findByIdAndUpdate(
        id,
        nutritionData,
        { new: true }
      );

      return updatedNutrition;
    } catch (error) {
      throw error;
    }
  },
};
