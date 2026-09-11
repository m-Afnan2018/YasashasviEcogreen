import { Schema, model, type InferSchemaType } from "mongoose";

const blogSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
    excerpt: { type: String, trim: true },
    content: { type: String, required: true },
    coverImage: { type: String, trim: true },
    tags: { type: [String], default: [] },
    author: { type: String, trim: true, default: "Yasashvi Ecogreen Team" },
    status: {
      type: String,
      enum: ["draft", "scheduled", "published"],
      default: "draft",
    },
    publishedAt: { type: Date },
    metaTitle: { type: String, trim: true },
    metaDescription: { type: String, trim: true },
  },
  { timestamps: true }
);

export type Blog = InferSchemaType<typeof blogSchema>;
export const BlogModel = model("Blog", blogSchema);
