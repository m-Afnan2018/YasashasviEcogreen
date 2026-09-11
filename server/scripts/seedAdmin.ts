import bcrypt from "bcryptjs";
import { env } from "../src/config/env.js";
import { connectDb } from "../src/config/db.js";
import { AdminUserModel } from "../src/models/AdminUser.js";
import mongoose from "mongoose";

async function seed() {
  if (!env.adminEmail || !env.adminPassword) {
    throw new Error("Set ADMIN_EMAIL and ADMIN_PASSWORD in .env before seeding.");
  }

  await connectDb();

  const passwordHash = await bcrypt.hash(env.adminPassword, 10);
  const email = env.adminEmail.toLowerCase().trim();

  await AdminUserModel.findOneAndUpdate(
    { email },
    { email, passwordHash },
    { upsert: true, new: true }
  );

  console.log(`[seed] Admin user ready: ${email}`);
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
