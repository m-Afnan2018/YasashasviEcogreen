import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export interface AuthedRequest extends Request {
  adminId?: string;
}

export function requireAdminAuth(
  req: AuthedRequest,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies?.admin_token;
  if (!token) {
    res.status(401).json({ error: "Not authenticated" });
    return;
  }

  try {
    const payload = jwt.verify(token, env.jwtSecret) as { sub: string };
    req.adminId = payload.sub;
    next();
  } catch {
    res.status(401).json({ error: "Invalid or expired session" });
  }
}
