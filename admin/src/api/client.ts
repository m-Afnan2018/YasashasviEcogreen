export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000";
const API_BASE = `${API_URL}/api`;

export function assetUrl(path?: string): string {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${API_URL}${path}`;
}

export class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    credentials: "include",
    headers:
      options.body && !(options.body instanceof FormData)
        ? { "Content-Type": "application/json", ...options.headers }
        : options.headers,
    ...options,
  });

  const isJson = res.headers.get("content-type")?.includes("application/json");
  const data = isJson ? await res.json() : undefined;

  if (!res.ok) {
    throw new ApiError(res.status, data?.error ?? res.statusText);
  }

  return data as T;
}

export const api = {
  get: <T>(path: string) => request<T>(path),
  post: <T>(path: string, body?: unknown) =>
    request<T>(path, {
      method: "POST",
      body: body instanceof FormData ? body : JSON.stringify(body ?? {}),
    }),
  put: <T>(path: string, body?: unknown) =>
    request<T>(path, { method: "PUT", body: JSON.stringify(body ?? {}) }),
  patch: <T>(path: string, body?: unknown) =>
    request<T>(path, { method: "PATCH", body: JSON.stringify(body ?? {}) }),
  delete: <T>(path: string, body?: unknown) =>
    request<T>(path, {
      method: "DELETE",
      ...(body ? { body: JSON.stringify(body) } : {}),
    }),
};

export interface Lead {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  country?: string;
  product?: string;
  quantity?: string;
  message?: string;
  source?: string;
  notes?: string;
  status: "new" | "contacted" | "closed";
  createdAt: string;
}

export interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  coverImage?: string;
  tags: string[];
  author: string;
  status: "draft" | "scheduled" | "published";
  publishedAt?: string;
  metaTitle?: string;
  metaDescription?: string;
  createdAt: string;
}

export interface DashboardStats {
  totalLeads: number;
  newLeads: number;
  totalBlogs: number;
  publishedBlogs: number;
}

export interface AdminUserSummary {
  _id: string;
  email: string;
  createdAt: string;
}

export interface MediaFile {
  name: string;
  url: string;
  size: number;
  modifiedAt: string;
}
