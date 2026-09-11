import { Router } from "express";
import { LeadModel } from "../../models/Lead.js";
import { BlogModel } from "../../models/Blog.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { requireAdminAuth } from "../../middleware/requireAdminAuth.js";

export const adminDashboardRouter = Router();
adminDashboardRouter.use(requireAdminAuth);

adminDashboardRouter.get(
  "/stats",
  asyncHandler(async (_req, res) => {
    const [totalLeads, newLeads, totalBlogs, publishedBlogs] = await Promise.all([
      LeadModel.countDocuments(),
      LeadModel.countDocuments({ status: "new" }),
      BlogModel.countDocuments(),
      BlogModel.countDocuments({ status: "published" }),
    ]);

    res.json({ totalLeads, newLeads, totalBlogs, publishedBlogs });
  })
);
