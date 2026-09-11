import { Router } from "express";
import bcrypt from "bcryptjs";
import { AdminUserModel } from "../../models/AdminUser.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { requireAdminAuth, type AuthedRequest } from "../../middleware/requireAdminAuth.js";

export const adminUsersRouter = Router();
adminUsersRouter.use(requireAdminAuth);

adminUsersRouter.get(
  "/",
  asyncHandler(async (_req, res) => {
    const users = await AdminUserModel.find().select("email createdAt").sort({ createdAt: 1 }).lean();
    res.json({ users });
  })
);

adminUsersRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body as { email?: string; password?: string };

    if (!email || !password || password.length < 8) {
      res.status(400).json({ error: "Email and a password (min 8 characters) are required" });
      return;
    }

    const normalizedEmail = email.toLowerCase().trim();
    const existing = await AdminUserModel.findOne({ email: normalizedEmail });
    if (existing) {
      res.status(409).json({ error: "An admin with this email already exists" });
      return;
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await AdminUserModel.create({ email: normalizedEmail, passwordHash });

    res.status(201).json({ user: { _id: user.id, email: user.email, createdAt: user.createdAt } });
  })
);

adminUsersRouter.delete(
  "/:id",
  asyncHandler(async (req: AuthedRequest, res) => {
    if (req.params.id === req.adminId) {
      res.status(400).json({ error: "You cannot remove your own account" });
      return;
    }

    const total = await AdminUserModel.countDocuments();
    if (total <= 1) {
      res.status(400).json({ error: "Cannot remove the last remaining admin" });
      return;
    }

    await AdminUserModel.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  })
);
