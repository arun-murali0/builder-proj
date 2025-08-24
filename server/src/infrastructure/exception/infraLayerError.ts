import { AppError } from "../../utils/error";

import { CUSTOMCONFIG, HTTPCONFIG } from "../../config/httpConfig";

class DatabaseConnectionError extends AppError {
  constructor(message: string = "Database connection error") {
    super(CUSTOMCONFIG.INTERNAL_SERVER_ERROR, HTTPCONFIG.INTERNAL_SERVER_ERROR);
    this.name = "DatabaseConnectionError";
  }
}

class ConnectionError extends AppError {
  constructor(message: string = "Connection error") {
    super(CUSTOMCONFIG.INTERNAL_SERVER_ERROR, HTTPCONFIG.INTERNAL_SERVER_ERROR);
    this.name = "ConnectionError";
  }
}

class ExternalApiError extends AppError {
  constructor(message: string = "External API error") {
    super(CUSTOMCONFIG.SERVICE_UNAVAILABLE, HTTPCONFIG.THIRD_PARTY_ERROR);
    this.name = "ExternalApiError";
  }
}

class TimeoutError extends AppError {
  constructor(message: string = "Timeout error") {
    super(CUSTOMCONFIG.GATEWAY_TIMEOUT, HTTPCONFIG.GATEWAY_TIMEOUT);
    this.name = "TimeoutError";
  }
}

class CacheError extends AppError {
  constructor(message: string = "Cache error") {
    super(CUSTOMCONFIG.INTERNAL_SERVER_ERROR, HTTPCONFIG.INTERNAL_SERVER_ERROR);
    this.name = "CacheError";
  }
}

class UniqueConstraintError extends AppError {
  constructor(message: string = "Unique constraint violation") {
    super(CUSTOMCONFIG.CONFLICT, HTTPCONFIG.CONFLICT);
    this.name = "UniqueConstraintError";
  }
}

export {
  DatabaseConnectionError,
  ConnectionError,
  ExternalApiError,
  TimeoutError,
  CacheError,
  UniqueConstraintError,
};
