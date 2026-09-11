import { Router } from "express";
import { BlogModel } from "../../models/Blog.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { requireAdminAuth } from "../../middleware/requireAdminAuth.js";
import { slugify } from "../../utils/slugify.js";

export const adminBlogsRouter = Router();
adminBlogsRouter.use(requireAdminAuth);

adminBlogsRouter.get(
  "/",
  asyncHandler(async (_req, res) => {
    const blogs = await BlogModel.find().sort({ createdAt: -1 }).lean();
    res.json({ blogs });
  })
);

adminBlogsRouter.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const blog = await BlogModel.findById(req.params.id).lean();
    if (!blog) {
      res.status(404).json({ error: "Blog not found" });
      return;
    }
    res.json({ blog });
  })
);

interface BlogPayload {
  title?: string;
  slug?: string;
  excerpt?: string;
  content?: string;
  coverImage?: string;
  tags?: string[] | string;
  author?: string;
  status?: "draft" | "scheduled" | "published";
  publishedAt?: string;
  metaTitle?: string;
  metaDescription?: string;
}

function normalizeTags(tags: BlogPayload["tags"]): string[] {
  if (Array.isArray(tags)) return tags.map((t) => t.trim()).filter(Boolean);
  if (typeof tags === "string") {
    return tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
  }
  return [];
}

async function uniqueSlug(base: string, excludeId?: string): Promise<string> {
  let slug = base;
  let n = 2;
  while (
    await BlogModel.exists({ slug, ...(excludeId ? { _id: { $ne: excludeId } } : {}) })
  ) {
    slug = `${base}-${n}`;
    n += 1;
  }
  return slug;
}

adminBlogsRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const body = req.body as BlogPayload;

    if (!body.title || !body.content) {
      res.status(400).json({ error: "Title and content are required" });
      return;
    }

    const baseSlug = body.slug ? slugify(body.slug) : slugify(body.title);
    const slug = await uniqueSlug(baseSlug);
    const status = body.status === "published" || body.status === "scheduled" ? body.status : "draft";

    let publishedAt: Date | undefined;
    if (status === "published") publishedAt = new Date();
    if (status === "scheduled" && body.publishedAt) publishedAt = new Date(body.publishedAt);

    const blog = await BlogModel.create({
      title: body.title,
      slug,
      excerpt: body.excerpt ?? "",
      content: body.content,
      coverImage: body.coverImage ?? "",
      tags: normalizeTags(body.tags),
      author: body.author || "Yasashvi Ecogreen Team",
      status,
      publishedAt,
      metaTitle: body.metaTitle ?? "",
      metaDescription: body.metaDescription ?? "",
    });

    res.status(201).json({ blog });
  })
);

adminBlogsRouter.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const body = req.body as BlogPayload;
    const existing = await BlogModel.findById(req.params.id);
    if (!existing) {
      res.status(404).json({ error: "Blog not found" });
      return;
    }

    if (body.title !== undefined) existing.title = body.title;
    if (body.slug !== undefined) existing.slug = await uniqueSlug(slugify(body.slug), existing.id);
    if (body.excerpt !== undefined) existing.excerpt = body.excerpt;
    if (body.content !== undefined) existing.content = body.content;
    if (body.coverImage !== undefined) existing.coverImage = body.coverImage;
    if (body.tags !== undefined) existing.tags = normalizeTags(body.tags);
    if (body.author !== undefined) existing.author = body.author;
    if (body.metaTitle !== undefined) existing.metaTitle = body.metaTitle;
    if (body.metaDescription !== undefined) existing.metaDescription = body.metaDescription;

    if (body.status && body.status !== existing.status) {
      existing.status = body.status;
      if (body.status === "published" && !existing.publishedAt) {
        existing.publishedAt = new Date();
      }
      if (body.status === "scheduled" && body.publishedAt) {
        existing.publishedAt = new Date(body.publishedAt);
      }
    } else if (body.status === "scheduled" && body.publishedAt) {
      existing.publishedAt = new Date(body.publishedAt);
    }

    await existing.save();
    res.json({ blog: existing });
  })
);

adminBlogsRouter.post(
  "/:id/duplicate",
  asyncHandler(async (req, res) => {
    const original = await BlogModel.findById(req.params.id).lean();
    if (!original) {
      res.status(404).json({ error: "Blog not found" });
      return;
    }

    const slug = await uniqueSlug(slugify(`${original.title}-copy`));

    const copy = await BlogModel.create({
      title: `${original.title} (Copy)`,
      slug,
      excerpt: original.excerpt,
      content: original.content,
      coverImage: original.coverImage,
      tags: original.tags,
      author: original.author,
      status: "draft",
      metaTitle: original.metaTitle,
      metaDescription: original.metaDescription,
    });

    res.status(201).json({ blog: copy });
  })
);

adminBlogsRouter.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    await BlogModel.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  })
);
