/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
module.exports = (error, req, res, next) => {
  console.log(error);
  res.status(500).json({
    status: 'failed',
    message: 'internal server error',
  });
};
