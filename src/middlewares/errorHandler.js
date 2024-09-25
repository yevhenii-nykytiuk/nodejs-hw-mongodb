export const errorHandlerMiddleware = (err, req, res, next) => {
  const statusCode = err.status || 500;

  res.status(statusCode).json({
    status: statusCode,
    message: err.message || "Something went wrong",

    // ...(process.env.NODE_ENV === 'development' && {
    //   stack: err.stack
    // }),
    
  });
};