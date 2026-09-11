import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "node:path";
import { env } from "./config/env.js";
import { connectDb } from "./config/db.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { BlogModel } from "./models/Blog.js";
import { leadsRouter } from "./routes/leads.routes.js";
import { blogsRouter } from "./routes/blogs.routes.js";
import { adminAuthRouter } from "./routes/admin/auth.routes.js";
import { adminLeadsRouter } from "./routes/admin/leads.routes.js";
import { adminBlogsRouter } from "./routes/admin/blogs.routes.js";
import { adminUploadsRouter } from "./routes/admin/uploads.routes.js";
import { adminDashboardRouter } from "./routes/admin/dashboard.routes.js";
import { adminUsersRouter } from "./routes/admin/users.routes.js";
import { adminMediaRouter } from "./routes/admin/media.routes.js";

// Resolved from process.cwd() (always the server/ directory, both in dev via
// `tsx watch src/index.ts` and in production via `node dist/src/index.js`)
// rather than __dirname, since tsc's compiled output nests one level deeper
// (dist/src/...) than the source (src/...), which would otherwise throw off
// any __dirname-relative path by one directory in production.
const serverRoot = process.cwd();

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const publicCors = cors({
  origin: env.corsOrigins,
  credentials: false,
});

// Admin panel now runs as its own service on its own port (see admin/vite.config.ts),
// so calls from it to the API are cross-origin and need credentialed CORS.
const adminCors = cors({
  origin: env.adminOrigins,
  credentials: true,
});

app.use("/api/leads", publicCors, leadsRouter);
app.use("/api/blogs", publicCors, blogsRouter);

app.use("/api/admin/auth", adminCors, adminAuthRouter);
app.use("/api/admin/leads", adminCors, adminLeadsRouter);
app.use("/api/admin/blogs", adminCors, adminBlogsRouter);
app.use("/api/admin/uploads", adminCors, adminUploadsRouter);
app.use("/api/admin/dashboard", adminCors, adminDashboardRouter);
app.use("/api/admin/users", adminCors, adminUsersRouter);
app.use("/api/admin/media", adminCors, adminMediaRouter);

app.use("/uploads", cors({ origin: [...env.corsOrigins, ...env.adminOrigins] }), express.static(path.join(serverRoot, "uploads")));

app.get("/health", (_req, res) => res.json({ ok: true }));

app.use(errorHandler);

async function publishDueScheduledBlogs() {
  await BlogModel.updateMany(
    { status: "scheduled", publishedAt: { $lte: new Date() } },
    { status: "published" }
  );
}

async function start() {
  await connectDb();
  app.listen(env.port, () => {
    console.log(`[server] listening on http://localhost:${env.port}`);
  });

  await publishDueScheduledBlogs();
  setInterval(publishDueScheduledBlogs, 60_000);
}

start().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
