const Exercise = require('../models/Exercise');

module.exports = {
  async getAllExerciseData() {
    try {
      const exerciseData = await Exercise.find();

      return exerciseData;
    } catch (error) {
      throw error;
    }
  },
  async addExercise(exerciseData) {
    try {
      const exercise = new Exercise({
        name: exerciseData.name,
        description: exerciseData.description,
        level: exerciseData.level,
      });

      await exercise.save();

      return exercise;
    } catch (error) {
      throw error;
    }
  },
  async updateExercise(id, exerciseData) {
    try {
      const exercise = await Exercise.findById(id);

      if (!exercise) {
        
      }
    } catch (error) {
      throw error;
    }
  },
};
