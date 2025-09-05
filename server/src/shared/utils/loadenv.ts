// this file loads environment variables from a .env file and provides a function to get them with type safety  and default values

import dotenv from "dotenv";
dotenv.config();

export const getEnv = (key: string, defaultValue?: string): string => {
  const value = process.env[key] || defaultValue;
  if (value === undefined) {
    throw new Error(`Environment variable ${key} is not set`);
  }
  return value;
};
