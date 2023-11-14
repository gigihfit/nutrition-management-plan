const { errorResponse, successResponse } = require('../responses/response');
const excerciseService = require('../services/excerciseService');

module.exports = {
  async getAllExerciseData(req, res) {
    try {
      const exerciseData = await excerciseService.getAllExerciseData();

      return successResponse(res, exerciseData, 200);
    } catch (error) {
      return errorResponse(res, 'Internal server error', 500);
    }
  },

  async addExercise(req, res) {
    const exerciseData = req.body;

    try {
      const addedExercise = await excerciseService.addExercise(exerciseData);

      return successResponse(
        res,
        addedExercise,
        'Exercise created successfully',
        201
      );
    } catch (error) {
      return errorResponse(res, 'Internal server error', 500);
    }
  },
};
