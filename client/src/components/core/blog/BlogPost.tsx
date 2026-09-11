"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { marked } from "marked";
import { fetchBlogBySlug, coverImageUrl, type Blog } from "@/lib/api";
import styles from "./BlogPost.module.css";

export default function BlogPost() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") ?? "";

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }
    fetchBlogBySlug(slug)
      .then(setBlog)
      .finally(() => setLoading(false));
  }, [slug]);

  useEffect(() => {
    if (!blog) return;
    document.title = `${blog.metaTitle || blog.title} | Yasashvi Ecogreen`;
    const description = blog.metaDescription || blog.excerpt;
    if (description) {
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", description);
    }
  }, [blog]);

  if (loading) return null;

  if (!blog) {
    return (
      <div className={styles.container}>
        <p className={styles.notFound}>
          This article could not be found.
          <br />
          <Link href="/blog" className={styles.backLink}>
            ← Back to Insights & Updates
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link href="/blog" className={styles.backLink}>
        ← Back to Insights & Updates
      </Link>

      {blog.coverImage && (
        <div
          className={styles.cover}
          style={{
            backgroundImage: `url(${coverImageUrl(blog.coverImage)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      <h1 className={styles.title}>{blog.title}</h1>
      <p className={styles.meta}>
        {blog.author}
        {blog.publishedAt &&
          ` · ${new Date(blog.publishedAt).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}`}
      </p>

      {blog.tags.length > 0 && (
        <div className={styles.tags}>
          {blog.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: marked.parse(blog.content) as string }}
      />
    </div>
  );
}
