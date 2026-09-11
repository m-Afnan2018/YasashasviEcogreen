export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export const LEADS_ENDPOINT = `${API_URL}/api/leads`;

// Submits a lead form via fetch instead of a native form POST, so the
// browser stays on this page (and we can redirect to /thank-you ourselves)
// instead of navigating to whatever the API URL returns.
export async function submitLead(form: HTMLFormElement): Promise<boolean> {
  const params = new URLSearchParams();
  new FormData(form).forEach((value, key) => {
    if (typeof value === "string") params.append(key, value);
  });

  try {
    const res = await fetch(LEADS_ENDPOINT, { method: "POST", body: params });
    return res.ok;
  } catch {
    return false;
  }
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
  publishedAt?: string;
  metaTitle?: string;
  metaDescription?: string;
  createdAt: string;
}

export async function fetchBlogs(): Promise<Blog[]> {
  const res = await fetch(`${API_URL}/api/blogs`, { cache: "no-store" });
  if (!res.ok) return [];
  const data = await res.json();
  return data.blogs as Blog[];
}

export async function fetchBlogBySlug(slug: string): Promise<Blog | null> {
  const res = await fetch(`${API_URL}/api/blogs/${encodeURIComponent(slug)}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.blog as Blog;
}

export function coverImageUrl(path?: string): string {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${API_URL}${path}`;
}
