import { AppError } from "../../utils/error";
import { CUSTOMCONFIG, HTTPCONFIG } from "../../config/httpConfig";

class FORBIDDENERROR extends AppError {
  constructor(message: string = "Forbidden") {
    super(CUSTOMCONFIG.FORBIDDEN, HTTPCONFIG.FORBIDDEN);
    this.name = "FORBIDDENERROR";
  }
}

class UNAUTHORIZEDERROR extends AppError {
  constructor(message: string = "Unauthorized") {
    super(CUSTOMCONFIG.UNAUTHORIZED, HTTPCONFIG.UNAUTHORIZED);
    this.name = "UNAUTHORIZEDERROR";
  }
}
class BADREQUESTERROR extends AppError {
  constructor(message: string = "Bad Request") {
    super(CUSTOMCONFIG.BAD_REQUEST, HTTPCONFIG.BAD_REQUEST);
    this.name = "BADREQUESTERROR";
  }
}

class NOTFOUNDEXCEPTION extends AppError {
  constructor(message: string = "Not Found") {
    super(CUSTOMCONFIG.NOT_FOUND, HTTPCONFIG.NOT_FOUND);
    this.name = "NOTFOUNDEXCEPTION";
  }
}

class INTERNALSERVEREROR extends AppError {
  constructor(message: string = "Internal Server Error") {
    super(CUSTOMCONFIG.INTERNAL_SERVER_ERROR, HTTPCONFIG.INTERNAL_SERVER_ERROR);
    this.name = "INTERNALSERVEREROR";
  }
}

export {
  FORBIDDENERROR,
  UNAUTHORIZEDERROR,
  BADREQUESTERROR,
  NOTFOUNDEXCEPTION,
  INTERNALSERVEREROR,
};
