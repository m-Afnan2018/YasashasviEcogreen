import { Router } from "express";
import fs from "node:fs/promises";
import path from "node:path";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { requireAdminAuth } from "../../middleware/requireAdminAuth.js";

// process.cwd() is always the server/ directory (see src/index.ts for why
// this is used instead of an __dirname-relative path).
const uploadsDir = path.join(process.cwd(), "uploads", "blogs");

export const adminMediaRouter = Router();
adminMediaRouter.use(requireAdminAuth);

adminMediaRouter.get(
  "/",
  asyncHandler(async (_req, res) => {
    let filenames: string[] = [];
    try {
      filenames = await fs.readdir(uploadsDir);
    } catch {
      filenames = [];
    }

    const files = await Promise.all(
      filenames.map(async (name) => {
        const stat = await fs.stat(path.join(uploadsDir, name));
        return {
          name,
          url: `/uploads/blogs/${name}`,
          size: stat.size,
          modifiedAt: stat.mtime,
        };
      })
    );

    files.sort((a, b) => b.modifiedAt.getTime() - a.modifiedAt.getTime());
    res.json({ files });
  })
);

adminMediaRouter.delete(
  "/:filename",
  asyncHandler(async (req, res) => {
    const { filename } = req.params;
    if (!filename || filename.includes("/") || filename.includes("..")) {
      res.status(400).json({ error: "Invalid filename" });
      return;
    }

    try {
      await fs.unlink(path.join(uploadsDir, filename));
    } catch {
      // already gone - treat as success either way
    }

    res.json({ ok: true });
  })
);
