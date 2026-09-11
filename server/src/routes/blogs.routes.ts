import { Router } from "express";
import { BlogModel } from "../models/Blog.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const blogsRouter = Router();

blogsRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const tag = typeof req.query.tag === "string" ? req.query.tag : undefined;
    const filter: Record<string, unknown> = { status: "published" };
    if (tag) filter.tags = tag;

    const blogs = await BlogModel.find(filter)
      .sort({ publishedAt: -1 })
      .select("-content")
      .lean();

    res.json({ blogs });
  })
);

blogsRouter.get(
  "/:slug",
  asyncHandler(async (req, res) => {
    const blog = await BlogModel.findOne({
      slug: req.params.slug,
      status: "published",
    }).lean();

    if (!blog) {
      res.status(404).json({ error: "Blog post not found" });
      return;
    }

    res.json({ blog });
  })
);
