import { AppError } from "@/shared/utils/error";
import { CUSTOMCONFIG, HTTPCONFIG } from "@/interface/config/httpConfig";

export class UserNotFound extends AppError {
  constructor(
    message = CUSTOMCONFIG.NOT_FOUND,
    statusCode = HTTPCONFIG.NOT_FOUND,
  ) {
    super(message, statusCode);
  }
}

export class PasswordMismatch extends AppError {
  constructor(
    message = CUSTOMCONFIG.BAD_REQUEST,
    statusCode = HTTPCONFIG.BAD_REQUEST,
  ) {
    super(message, statusCode);
  }
}

export class UnAuthorized extends AppError {
  constructor(
    message = CUSTOMCONFIG.UNAUTHORIZED,
    statusCode = HTTPCONFIG.UNAUTHORIZED,
  ) {
    super(message, statusCode);
  }
}
