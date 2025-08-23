import { ErrorRequestHandler } from "express";
import { AppError } from "../../../utils/error";

const errorHandler: ErrorRequestHandler = (error, req, res, next): any => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: error.status,
      message: error.message,
    });
  }

  if (process.env.NODE_ENV === "development") {
    console.error("ERROR 💥", error);
    return res.status(500).json({
      status: "error",
      message: error.message,
      stack: error.stack,
    });
  }
};

export default errorHandler;
