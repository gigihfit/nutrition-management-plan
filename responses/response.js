const successResponse = (res, data, message = 'Success', statusCode = 200) => {
  return res.status(statusCode).json({
    message,
    data,
  });
};

const errorResponse = (
  res,
  message = 'Internal Server Error',
  statusCode = 500
) => {
  return res.status(statusCode).json({
    message,
  });
};

module.exports = { successResponse, errorResponse };
