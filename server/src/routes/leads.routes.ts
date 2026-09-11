import { Router } from "express";
import { LeadModel } from "../models/Lead.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const leadsRouter = Router();

leadsRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const body = req.body as Record<string, string>;

    const name = body.name || body["Contact Person"] || "";
    const email = body.email || body["Email Address"] || "";

    if (!name || !email) {
      res.status(400).send("Name and email are required.");
      return;
    }

    await LeadModel.create({
      name,
      email,
      phone: body.phone || body["Phone Number"] || body.contact_number || "",
      company: body.company || body["Company Name"] || "",
      country: body.country || body["Country"] || "",
      product: body.product || body["Product"] || body.product_or_interest || "",
      quantity: body.quantity || body["quantity_requirement"] || "",
      message: body.message || "",
      source: body.source || "unknown",
    });

    // Leads are submitted via fetch() on the client, which follows redirects
    // under CORS - a 303 to the (CORS-header-less) /thank-you page would get
    // blocked by the browser. Return JSON instead and let the client redirect.
    res.status(201).json({ ok: true });
  })
);
