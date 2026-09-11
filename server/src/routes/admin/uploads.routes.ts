import { Router } from "express";
import multer from "multer";
import path from "node:path";
import { requireAdminAuth } from "../../middleware/requireAdminAuth.js";

// process.cwd() is always the server/ directory (see src/index.ts for why
// this is used instead of an __dirname-relative path).
const uploadsDir = path.join(process.cwd(), "uploads", "blogs");

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadsDir),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${unique}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
      cb(new Error("Only image uploads are allowed"));
      return;
    }
    cb(null, true);
  },
});

export const adminUploadsRouter = Router();
adminUploadsRouter.use(requireAdminAuth);

adminUploadsRouter.post("/", upload.single("image"), (req, res) => {
  if (!req.file) {
    res.status(400).json({ error: "No image uploaded" });
    return;
  }
  res.status(201).json({ url: `/uploads/blogs/${req.file.filename}` });
});
