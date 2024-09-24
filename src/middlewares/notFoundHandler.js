import isHttpError from "http-errors";

export const notFoundHandlerMiddleware = (req, res, next) => {
  throw isHttpError(404, "Route not found");
};