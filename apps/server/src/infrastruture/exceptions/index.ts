import { AppError } from "@/shared/utils/error";
import { CUSTOMCONFIG, HTTPCONFIG } from "@/interface/config/httpConfig";

export class DataBaseError extends AppError {
  constructor(message = CUSTOMCONFIG.INTERNAL_SERVER_ERROR) {
    super(message, HTTPCONFIG.INTERNAL_SERVER_ERROR);
  }
}

export class ServerTimeOut extends AppError {
  constructor(message = CUSTOMCONFIG.GATEWAY_TIMEOUT) {
    super(message, HTTPCONFIG.GATEWAY_TIMEOUT);
  }
}
