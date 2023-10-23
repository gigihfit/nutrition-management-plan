const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const healthDataSchema = new mongoose.Schema({
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  BMI: {
    type: Number,
    required: true,
  },
  userId: {
    type: ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('HealthData', healthDataSchema);
