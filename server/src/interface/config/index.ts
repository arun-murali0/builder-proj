import { getEnv } from "../../shared/utils/loadenv";

const CONFIG = {
  PORT: getEnv("PORT", "3000"),
  NODE_ENV: getEnv("NODE_ENV", "production"),
  SUPABASE_URL: getEnv("SUPABASE_URL"),
  SUPABASE_KEY: getEnv("SUPABASE_KEY"),
  COOKIE_DOMAIN: getEnv("COOKIE_DOMAIN", "localhost"),
  COOKIE_SECURE: getEnv("COOKIE_SECURE", "false") === "true",
  ORIGIN: getEnv("ORIGIN", "http://localhost:3000"),
};

export { CONFIG };
