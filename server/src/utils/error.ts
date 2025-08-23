import { HTTPCONFIG } from "../config/httpConfig";

class AppError extends Error {
  statusCode: number;
  status: string;
  isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

class ValidationError extends AppError {
  constructor(message: string) {
    super(message, HTTPCONFIG.BAD_REQUEST);
    this.name = "ValidationError";
  }
}

class DatabaseError extends AppError {
  constructor(message: string) {
    super(message, HTTPCONFIG.INTERNAL_SERVER_ERROR);
    this.name = "DatabaseError";
  }
}

class NotFoundError extends AppError {
  constructor(message: string) {
    super(message, HTTPCONFIG.NOT_FOUND);
    this.name = "NotFoundError";
  }
}

class UnauthorizedError extends AppError {
  constructor(message: string) {
    super(message, HTTPCONFIG.UNAUTHORIZED);
    this.name = "UnauthorizedError";
  }
}

class ForbiddenError extends AppError {
  constructor(message: string) {
    super(message, HTTPCONFIG.FORBIDDEN);
    this.name = "ForbiddenError";
  }
}

export {
  AppError,
  ValidationError,
  DatabaseError,
  NotFoundError,
  UnauthorizedError,
  ForbiddenError,
};
