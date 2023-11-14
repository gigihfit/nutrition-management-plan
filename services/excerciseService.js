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
      const updatedExercise = await Exercise.findByIdAndUpdate(
        id,
        exerciseData,
        {
          new: true,
        }
      );

      return updatedExercise;
    } catch (error) {
      throw error;
    }
  },
  async deleteExercise(id) {
    try {
      const deletedExercise = await Exercise.findByIdAndDelete(id);

      return deletedExercise;
    } catch (error) {
      throw error;
    }
  },
};
