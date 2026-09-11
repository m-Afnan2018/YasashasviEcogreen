import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AdminUserModel } from "../../models/AdminUser.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { env } from "../../config/env.js";
import { requireAdminAuth, type AuthedRequest } from "../../middleware/requireAdminAuth.js";

export const adminAuthRouter = Router();

const COOKIE_NAME = "admin_token";
const COOKIE_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;

adminAuthRouter.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body as { email?: string; password?: string };

    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required" });
      return;
    }

    const user = await AdminUserModel.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    const token = jwt.sign({ sub: user.id }, env.jwtSecret, {
      expiresIn: env.jwtExpiresIn as jwt.SignOptions["expiresIn"],
    });

    res.cookie(COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: "lax",
      secure: env.isProduction,
      maxAge: COOKIE_MAX_AGE_MS,
    });

    res.json({ _id: user.id, email: user.email });
  })
);

adminAuthRouter.post("/logout", (_req, res) => {
  res.clearCookie(COOKIE_NAME);
  res.json({ ok: true });
});

adminAuthRouter.get(
  "/me",
  requireAdminAuth,
  asyncHandler(async (req: AuthedRequest, res) => {
    const user = await AdminUserModel.findById(req.adminId).lean();
    if (!user) {
      res.status(401).json({ error: "Not authenticated" });
      return;
    }
    res.json({ _id: user._id, email: user.email });
  })
);

adminAuthRouter.patch(
  "/password",
  requireAdminAuth,
  asyncHandler(async (req: AuthedRequest, res) => {
    const { currentPassword, newPassword } = req.body as {
      currentPassword?: string;
      newPassword?: string;
    };

    if (!currentPassword || !newPassword || newPassword.length < 8) {
      res.status(400).json({
        error: "Current password and a new password (min 8 characters) are required",
      });
      return;
    }

    const user = await AdminUserModel.findById(req.adminId);
    if (!user) {
      res.status(401).json({ error: "Not authenticated" });
      return;
    }

    const valid = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!valid) {
      res.status(400).json({ error: "Current password is incorrect" });
      return;
    }

    user.passwordHash = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.json({ ok: true });
  })
);
