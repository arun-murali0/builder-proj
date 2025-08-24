import { AppError } from "../../utils/error";
import { CUSTOMCONFIG, HTTPCONFIG } from "../../config/httpConfig";

class UserNotFoundError extends AppError {
  constructor(message = "User not found") {
    super(CUSTOMCONFIG.NOT_FOUND, HTTPCONFIG.NOT_FOUND);
  }
}

class UserAlreadyExistsError extends AppError {
  constructor(message = "User already exists") {
    super(CUSTOMCONFIG.DUPLICATE_KEY, HTTPCONFIG.CONFLICT);
  }
}

class InvalidRoleError extends AppError {
  constructor(message = "Invalid role") {
    super(CUSTOMCONFIG.BAD_REQUEST, HTTPCONFIG.BAD_REQUEST);
  }
}

class UserNotVerifiedError extends AppError {
  constructor(message = "User not verified") {
    super(CUSTOMCONFIG.FORBIDDEN, HTTPCONFIG.FORBIDDEN);
  }
}

class PasswordMismatchError extends AppError {
  constructor(message = "Password does not match") {
    super(CUSTOMCONFIG.BAD_REQUEST, HTTPCONFIG.BAD_REQUEST);
  }
}

class PasswordTooWeak extends AppError {
  constructor(message: "password too weak") {
    super(CUSTOMCONFIG.BAD_REQUEST, HTTPCONFIG.BAD_REQUEST);
  }
}

class NotAdminError extends AppError {
  constructor(message: "you are not a Admin") {
    super(CUSTOMCONFIG.FORBIDDEN, HTTPCONFIG.FORBIDDEN);
  }
}

class MaxLoginAttemptsError extends AppError {
  constructor(message = "Maximum login attempts exceeded") {
    super(CUSTOMCONFIG.TOO_MANY_REQUESTS, HTTPCONFIG.TOO_MANY_REQUESTS);
  }
}

export {
  UserAlreadyExistsError,
  MaxLoginAttemptsError,
  NotAdminError,
  PasswordMismatchError,
  PasswordTooWeak,
  UserNotFoundError,
  UserNotVerifiedError,
  InvalidRoleError,
};
