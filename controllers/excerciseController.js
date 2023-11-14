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

  async updateExercise(req, res) {
    const { id } = req.params;
    const exerciseData = req.body;

    try {
      const updatedExercise = await excerciseService.updateExercise(
        id,
        exerciseData
      );

      if (!updatedExercise) {
        return errorResponse(res, 'Exercise data not found', 404);
      }

      return successResponse(
        res,
        updatedExercise,
        'Exercise updated successfuly',
        200
      );
    } catch (error) {
      return errorResponse(res, 'Internal server error, 500');
    }
  },
};
