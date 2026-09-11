import { Schema, model, type InferSchemaType } from "mongoose";

const leadSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    company: { type: String, trim: true },
    country: { type: String, trim: true },
    product: { type: String, trim: true },
    quantity: { type: String, trim: true },
    message: { type: String, trim: true },
    source: { type: String, trim: true },
    notes: { type: String, trim: true },
    status: {
      type: String,
      enum: ["new", "contacted", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

export type Lead = InferSchemaType<typeof leadSchema>;
export const LeadModel = model("Lead", leadSchema);
