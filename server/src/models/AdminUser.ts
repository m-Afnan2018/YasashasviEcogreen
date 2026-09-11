import { Schema, model, type InferSchemaType } from "mongoose";

const adminUserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    passwordHash: { type: String, required: true },
  },
  { timestamps: true }
);

export type AdminUser = InferSchemaType<typeof adminUserSchema>;
export const AdminUserModel = model("AdminUser", adminUserSchema);
