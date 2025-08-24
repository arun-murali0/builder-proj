import { AppError } from "../../utils/error";

import { CUSTOMCONFIG, HTTPCONFIG } from "../../config/httpConfig";

class ValidationError extends AppError {
  constructor(message = "Validation Error") {
    super(CUSTOMCONFIG.VALIDATION_ERROR, HTTPCONFIG.BAD_REQUEST);
  }
}

class ForbiddenError extends AppError {
  constructor(message = "Forbidden") {
    super(CUSTOMCONFIG.FORBIDDEN, HTTPCONFIG.FORBIDDEN);
  }
}

class ConflictError extends AppError {
  constructor(message = "Conflict Error") {
    super(CUSTOMCONFIG.CONFLICT, HTTPCONFIG.CONFLICT);
  }
}

class DependencyFailureError extends AppError {
  constructor(message = "Dependency Failure") {
    super(CUSTOMCONFIG.SERVICE_UNAVAILABLE, HTTPCONFIG.THIRD_PARTY_ERROR);
  }
}

class UsecaseExcutionError extends AppError {
  constructor(message = "Usecase Execution Error") {
    super(CUSTOMCONFIG.INTERNAL_SERVER_ERROR, HTTPCONFIG.INTERNAL_SERVER_ERROR);
  }
}

export {
  UsecaseExcutionError,
  ValidationError,
  ForbiddenError,
  ConflictError,
  DependencyFailureError,
};
