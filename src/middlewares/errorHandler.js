import isHttpError from "http-errors";

export const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof isHttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.name,
      data: err,
    });
    return;
  }

  res.status(500).json({
    status: 500,
    message: "Something went wrong",
    data: err.message,
  });
};