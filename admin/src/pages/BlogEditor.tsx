import { useEffect, useState, type ChangeEvent, type ClipboardEvent, type FormEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { ArrowLeft, ImagePlus, AlertCircle, X, Copy, ChevronDown, ChevronUp } from "lucide-react";
import { api, assetUrl, type Blog } from "../api/client";
import { markdownFromClipboard } from "../utils/wordPaste";
import styles from "./BlogEditor.module.css";

const emptyForm = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  coverImage: "",
  tags: "",
  status: "draft" as "draft" | "scheduled" | "published",
  publishedAt: "",
  metaTitle: "",
  metaDescription: "",
};

function toDatetimeLocal(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default function BlogEditor() {
  const { id } = useParams();
  const isNew = !id || id === "new";
  const navigate = useNavigate();

  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [duplicating, setDuplicating] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [seoOpen, setSeoOpen] = useState(false);

  useEffect(() => {
    if (isNew) return;
    api.get<{ blog: Blog }>(`/admin/blogs/${id}`).then(({ blog }) => {
      setForm({
        title: blog.title,
        slug: blog.slug,
        excerpt: blog.excerpt ?? "",
        content: blog.content,
        coverImage: blog.coverImage ?? "",
        tags: blog.tags.join(", "),
        status: blog.status,
        publishedAt: toDatetimeLocal(blog.publishedAt),
        metaTitle: blog.metaTitle ?? "",
        metaDescription: blog.metaDescription ?? "",
      });
      if (blog.metaTitle || blog.metaDescription) setSeoOpen(true);
    });
  }, [id, isNew]);

  function update<K extends keyof typeof emptyForm>(key: K, value: (typeof emptyForm)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleImageUpload(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const body = new FormData();
      body.append("image", file);
      const { url } = await api.post<{ url: string }>("/admin/uploads", body);
      update("coverImage", url);
    } catch {
      setError("Image upload failed.");
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e: FormEvent, forceStatus?: "draft" | "published") {
    e.preventDefault();

    if (forceStatus === undefined && form.status === "scheduled" && !form.publishedAt) {
      setError("Pick a date and time to schedule this post for.");
      return;
    }

    setSaving(true);
    setError("");

    const payload = {
      ...form,
      status: forceStatus ?? form.status,
      publishedAt: form.publishedAt ? new Date(form.publishedAt).toISOString() : undefined,
    };

    try {
      if (isNew) {
        await api.post("/admin/blogs", payload);
      } else {
        await api.put(`/admin/blogs/${id}`, payload);
      }
      navigate("/blogs");
    } catch {
      setError("Could not save this post. Check the required fields.");
    } finally {
      setSaving(false);
    }
  }

  function handleContentPaste(e: ClipboardEvent<HTMLTextAreaElement>) {
    const markdown = markdownFromClipboard(e.clipboardData);
    if (!markdown) return; // no HTML flavor on the clipboard, let the default plain-text paste happen

    e.preventDefault();
    const textarea = e.target as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const next = form.content.slice(0, start) + markdown + form.content.slice(end);
    update("content", next);

    const cursor = start + markdown.length;
    requestAnimationFrame(() => {
      textarea.selectionStart = textarea.selectionEnd = cursor;
    });
  }

  async function handleDuplicate() {
    if (isNew) return;
    setDuplicating(true);
    try {
      const { blog } = await api.post<{ blog: Blog }>(`/admin/blogs/${id}/duplicate`);
      navigate(`/blogs/${blog._id}`);
    } finally {
      setDuplicating(false);
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.header}>
        <div>
          <Link to="/blogs" className={styles.backLink}>
            <ArrowLeft size={15} strokeWidth={2} />
            Back to blogs
          </Link>
          <h1>{isNew ? "New blog post" : "Edit blog post"}</h1>
        </div>
        <div className={styles.headerActions}>
          {!isNew && (
            <button
              type="button"
              className={styles.draftBtn}
              disabled={duplicating}
              onClick={handleDuplicate}
            >
              <Copy size={14} strokeWidth={2} />
              {duplicating ? "Duplicating…" : "Duplicate"}
            </button>
          )}
          <button
            type="button"
            className={styles.draftBtn}
            disabled={saving}
            onClick={(e) => handleSubmit(e, "draft")}
          >
            Save draft
          </button>
          <button
            type="button"
            className={styles.publishBtn}
            disabled={saving}
            onClick={(e) => handleSubmit(e, "published")}
          >
            {saving ? "Saving…" : "Publish now"}
          </button>
        </div>
      </div>

      {error && (
        <div className={styles.error} role="alert">
          <AlertCircle size={16} strokeWidth={2} />
          {error}
        </div>
      )}

      <div className={styles.card}>
        <div className={styles.metaGrid}>
          <div className={styles.field}>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              placeholder="A clear, descriptive title"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="slug">Slug</label>
            <input
              id="slug"
              value={form.slug}
              onChange={(e) => update("slug", e.target.value)}
              placeholder="auto-generated from title if left blank"
            />
          </div>

          <div className={`${styles.field} ${styles.full}`}>
            <label htmlFor="excerpt">Excerpt</label>
            <input
              id="excerpt"
              value={form.excerpt}
              onChange={(e) => update("excerpt", e.target.value)}
              placeholder="One or two sentences shown on the blog listing"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="tags">Tags</label>
            <input
              id="tags"
              value={form.tags}
              onChange={(e) => update("tags", e.target.value)}
              placeholder="comma, separated, tags"
            />
          </div>

          <div className={styles.field}>
            <label>Cover image</label>
            {form.coverImage ? (
              <div className={styles.coverPreview}>
                <img src={assetUrl(form.coverImage)} alt="" />
                <button
                  type="button"
                  className={styles.coverRemove}
                  onClick={() => update("coverImage", "")}
                  aria-label="Remove cover image"
                >
                  <X size={14} strokeWidth={2.5} />
                </button>
              </div>
            ) : (
              <label className={styles.uploadDropzone}>
                <ImagePlus size={20} strokeWidth={1.5} />
                <span>{uploading ? "Uploading…" : "Click to upload an image"}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  hidden
                />
              </label>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="status">Status</label>
            <select
              id="status"
              value={form.status}
              onChange={(e) => update("status", e.target.value as typeof form.status)}
            >
              <option value="draft">Draft</option>
              <option value="scheduled">Scheduled</option>
              <option value="published">Published</option>
            </select>
          </div>

          {form.status === "scheduled" && (
            <div className={styles.field}>
              <label htmlFor="publishedAt">Publish at</label>
              <input
                id="publishedAt"
                type="datetime-local"
                value={form.publishedAt}
                onChange={(e) => update("publishedAt", e.target.value)}
              />
            </div>
          )}
        </div>

        <button
          type="button"
          className={styles.seoToggle}
          onClick={() => setSeoOpen((v) => !v)}
        >
          {seoOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          SEO settings (optional)
        </button>

        {seoOpen && (
          <div className={styles.metaGrid}>
            <div className={styles.field}>
              <label htmlFor="metaTitle">Meta title</label>
              <input
                id="metaTitle"
                value={form.metaTitle}
                onChange={(e) => update("metaTitle", e.target.value)}
                placeholder={form.title || "Falls back to the post title"}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="metaDescription">Meta description</label>
              <input
                id="metaDescription"
                value={form.metaDescription}
                onChange={(e) => update("metaDescription", e.target.value)}
                placeholder={form.excerpt || "Falls back to the excerpt"}
              />
            </div>
          </div>
        )}
      </div>

      <div className={styles.field}>
        <label>Content</label>
        <div data-color-mode="light" className={styles.editorWrap}>
          <MDEditor
            value={form.content}
            onChange={(value) => update("content", value ?? "")}
            height={480}
            preview="live"
            textareaProps={{ onPaste: handleContentPaste }}
          />
        </div>
      </div>
    </form>
  );
}
