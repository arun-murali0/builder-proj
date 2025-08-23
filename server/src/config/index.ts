import { getEnv } from "../utils/loadenv";

const CONFIG = {
  PORT: getEnv("PORT", "3000"),
  NODE_ENV: getEnv("NODE_ENV", "development"),
};

export { CONFIG };
