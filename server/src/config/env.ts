import "dotenv/config";

function required(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const env = {
  port: Number(process.env.PORT ?? 5000),
  nodeEnv: process.env.NODE_ENV ?? "development",
  isProduction: process.env.NODE_ENV === "production",
  mongodbUri: required("MONGODB_URI", "mongodb://localhost:27017/ecogreen"),
  jwtSecret: required("JWT_SECRET", "dev_secret_change_me"),
  jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? "7d",
  adminEmail: process.env.ADMIN_EMAIL ?? "",
  adminPassword: process.env.ADMIN_PASSWORD ?? "",
  corsOrigins: (process.env.CORS_ORIGINS ?? "http://localhost:3000")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
  adminOrigins: (process.env.ADMIN_ORIGINS ?? "http://localhost:4000")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
  siteUrl: process.env.SITE_URL ?? "http://localhost:3000",
};
