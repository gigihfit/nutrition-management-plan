const mongoose = require('mongoose');

const nutritionSchema = new mongoose.Schema({
  food: {
    type: String,
    required: true,
  },
  calorie: {
    type: Number,
    required: true,
  },
  carbohydrate: {
    type: Number,
    required: true,
  },
  protein: {
    type: Number,
    required: true,
  },
  fat: {
    type: Number,
    required: true,
  },
  fiber: {
    type: Number,
    required: true,
  },
  calcium: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Nutrition', nutritionSchema);
