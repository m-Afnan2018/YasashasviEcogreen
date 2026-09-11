"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchBlogs, coverImageUrl, type Blog } from "@/lib/api";
import styles from "./BlogList.module.css";

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs()
      .then(setBlogs)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Insights & Updates</h1>

      {!loading && blogs.length === 0 ? (
        <p className={styles.empty}>No articles published yet. Check back soon.</p>
      ) : (
        <div className={styles.grid}>
          {blogs.map((blog) => (
            <Link
              key={blog._id}
              href={`/blog/post/?slug=${encodeURIComponent(blog.slug)}`}
              className={styles.card}
            >
              <div className={styles.cardImage}>
                {blog.coverImage && (
                  <Image
                    src={coverImageUrl(blog.coverImage)}
                    alt={blog.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{blog.title}</h3>
                {blog.excerpt && <p className={styles.cardExcerpt}>{blog.excerpt}</p>}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
