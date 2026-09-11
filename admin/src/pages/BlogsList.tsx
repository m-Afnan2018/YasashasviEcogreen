import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Newspaper, Pencil, Trash2, ImageOff } from "lucide-react";
import { api, assetUrl, type Blog } from "../api/client";
import styles from "./BlogsList.module.css";

const badgeClass: Record<Blog["status"], string> = {
  draft: styles.badgeDraft,
  scheduled: styles.badgeScheduled,
  published: styles.badgePublished,
};

export default function BlogsList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get<{ blogs: Blog[] }>("/admin/blogs")
      .then((res) => setBlogs(res.blogs))
      .finally(() => setLoading(false));
  }, []);

  async function remove(id: string) {
    if (!confirm("Delete this blog post? This cannot be undone.")) return;
    await api.delete(`/admin/blogs/${id}`);
    setBlogs((prev) => prev.filter((b) => b._id !== id));
  }

  return (
    <div>
      <div className={styles.toolbar}>
        <header>
          <h1>Blogs</h1>
          <p className={styles.subtitle}>Write and publish articles for the public site.</p>
        </header>
        <Link className={styles.newBtn} to="/blogs/new">
          <Plus size={16} strokeWidth={2.25} />
          New Post
        </Link>
      </div>

      <div className={styles.tableWrap}>
        {loading ? (
          <div className={styles.skeletonList}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div className={styles.skeletonRow} key={i} />
            ))}
          </div>
        ) : blogs.length === 0 ? (
          <div className={styles.empty}>
            <Newspaper size={28} strokeWidth={1.5} />
            <p>No blog posts yet.</p>
            <span>Create your first post to publish it on the public site.</span>
            <Link className={styles.newBtn} to="/blogs/new">
              <Plus size={16} strokeWidth={2.25} />
              New Post
            </Link>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Tags</th>
                <th>Status</th>
                <th>Updated</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id}>
                  <td>
                    {blog.coverImage ? (
                      <img className={styles.thumb} src={assetUrl(blog.coverImage)} alt="" />
                    ) : (
                      <div className={styles.thumbPlaceholder}>
                        <ImageOff size={16} strokeWidth={1.5} />
                      </div>
                    )}
                  </td>
                  <td>
                    <span className={styles.strong}>{blog.title}</span>
                    <br />
                    <span className={styles.muted}>/{blog.slug}</span>
                  </td>
                  <td className={styles.muted}>{blog.tags.join(", ") || "—"}</td>
                  <td>
                    <span className={`${styles.badge} ${badgeClass[blog.status]}`}>
                      {blog.status}
                    </span>
                    {blog.status === "scheduled" && blog.publishedAt && (
                      <div className={styles.scheduledDate}>
                        {new Date(blog.publishedAt).toLocaleString(undefined, {
                          month: "short",
                          day: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </div>
                    )}
                  </td>
                  <td className={styles.muted}>
                    {new Date(blog.createdAt).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                  <td>
                    <div className={styles.actions}>
                      <Link
                        to={`/blogs/${blog._id}`}
                        className={styles.editBtn}
                        aria-label={`Edit ${blog.title}`}
                      >
                        <Pencil size={16} strokeWidth={2} />
                      </Link>
                      <button
                        className={styles.deleteBtn}
                        onClick={() => remove(blog._id)}
                        aria-label={`Delete ${blog.title}`}
                      >
                        <Trash2 size={16} strokeWidth={2} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
