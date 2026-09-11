import { Router } from "express";
import { LeadModel } from "../../models/Lead.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { requireAdminAuth } from "../../middleware/requireAdminAuth.js";

export const adminLeadsRouter = Router();
adminLeadsRouter.use(requireAdminAuth);

const STATUSES = ["new", "contacted", "closed"];

function csvEscape(value: unknown): string {
  const str = String(value ?? "");
  if (/[",\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

// NOTE: /export.csv and /bulk must be registered before the /:id routes,
// otherwise Express matches them as an :id value.
adminLeadsRouter.get(
  "/export.csv",
  asyncHandler(async (req, res) => {
    const status = typeof req.query.status === "string" ? req.query.status : undefined;
    const filter: Record<string, unknown> = {};
    if (status && status !== "all") filter.status = status;

    const leads = await LeadModel.find(filter).sort({ createdAt: -1 }).lean();

    const header = [
      "Name",
      "Email",
      "Phone",
      "Company",
      "Country",
      "Product",
      "Quantity",
      "Message",
      "Source",
      "Status",
      "Notes",
      "Received",
    ];
    const rows = leads.map((lead) =>
      [
        lead.name,
        lead.email,
        lead.phone,
        lead.company,
        lead.country,
        lead.product,
        lead.quantity,
        lead.message,
        lead.source,
        lead.status,
        lead.notes,
        lead.createdAt?.toISOString(),
      ]
        .map(csvEscape)
        .join(",")
    );
    const csv = [header.join(","), ...rows].join("\n");

    res.setHeader("Content-Type", "text/csv; charset=utf-8");
    res.setHeader("Content-Disposition", `attachment; filename="leads-${Date.now()}.csv"`);
    res.send(csv);
  })
);

adminLeadsRouter.patch(
  "/bulk",
  asyncHandler(async (req, res) => {
    const { ids, status } = req.body as { ids?: string[]; status?: string };
    if (!Array.isArray(ids) || ids.length === 0 || !status || !STATUSES.includes(status)) {
      res.status(400).json({ error: "ids array and a valid status are required" });
      return;
    }

    await LeadModel.updateMany({ _id: { $in: ids } }, { status });
    res.json({ ok: true, updated: ids.length });
  })
);

adminLeadsRouter.delete(
  "/bulk",
  asyncHandler(async (req, res) => {
    const { ids } = req.body as { ids?: string[] };
    if (!Array.isArray(ids) || ids.length === 0) {
      res.status(400).json({ error: "ids array is required" });
      return;
    }

    await LeadModel.deleteMany({ _id: { $in: ids } });
    res.json({ ok: true, deleted: ids.length });
  })
);

adminLeadsRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const status = typeof req.query.status === "string" ? req.query.status : undefined;
    const filter: Record<string, unknown> = {};
    if (status && status !== "all") filter.status = status;

    const leads = await LeadModel.find(filter).sort({ createdAt: -1 }).lean();
    res.json({ leads });
  })
);

adminLeadsRouter.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const lead = await LeadModel.findById(req.params.id).lean();
    if (!lead) {
      res.status(404).json({ error: "Lead not found" });
      return;
    }
    res.json({ lead });
  })
);

adminLeadsRouter.patch(
  "/:id",
  asyncHandler(async (req, res) => {
    const { status, notes } = req.body as { status?: string; notes?: string };

    const update: Record<string, unknown> = {};
    if (status !== undefined) {
      if (!STATUSES.includes(status)) {
        res.status(400).json({ error: "Invalid status" });
        return;
      }
      update.status = status;
    }
    if (notes !== undefined) {
      update.notes = notes;
    }

    if (Object.keys(update).length === 0) {
      res.status(400).json({ error: "Nothing to update" });
      return;
    }

    const lead = await LeadModel.findByIdAndUpdate(req.params.id, update, { new: true }).lean();

    if (!lead) {
      res.status(404).json({ error: "Lead not found" });
      return;
    }
    res.json({ lead });
  })
);

adminLeadsRouter.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    await LeadModel.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  })
);
