import { useEffect, useState } from "react";
import { Images, Copy, Trash2, Check } from "lucide-react";
import { api, assetUrl, type MediaFile } from "../api/client";
import styles from "./MediaLibrary.module.css";

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function MediaLibrary() {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedName, setCopiedName] = useState<string | null>(null);

  useEffect(() => {
    api
      .get<{ files: MediaFile[] }>("/admin/media")
      .then((res) => setFiles(res.files))
      .finally(() => setLoading(false));
  }, []);

  async function copyUrl(file: MediaFile) {
    await navigator.clipboard.writeText(assetUrl(file.url));
    setCopiedName(file.name);
    setTimeout(() => setCopiedName(null), 1500);
  }

  async function remove(file: MediaFile) {
    if (!confirm("Delete this image? This cannot be undone.")) return;
    await api.delete(`/admin/media/${encodeURIComponent(file.name)}`);
    setFiles((prev) => prev.filter((f) => f.name !== file.name));
  }

  return (
    <div>
      <div className={styles.header}>
        <header>
          <h1>Media Library</h1>
          <p className={styles.subtitle}>Images uploaded for blog posts.</p>
        </header>
        {!loading && <span className={styles.count}>{files.length} file{files.length === 1 ? "" : "s"}</span>}
      </div>

      {loading ? (
        <div className={styles.skeletonGrid}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div className={styles.skeletonCard} key={i} />
          ))}
        </div>
      ) : files.length === 0 ? (
        <div className={styles.empty}>
          <Images size={28} strokeWidth={1.5} />
          <p>No uploaded images yet.</p>
          <span>Images you upload as blog cover images will appear here.</span>
        </div>
      ) : (
        <div className={styles.grid}>
          {files.map((file) => (
            <div className={styles.card} key={file.name}>
              <img className={styles.thumb} src={assetUrl(file.url)} alt="" />
              <div className={styles.cardBody}>
                <p className={styles.fileSize}>{formatSize(file.size)}</p>
                <div className={styles.cardActions}>
                  <button className={styles.copyBtn} onClick={() => copyUrl(file)}>
                    {copiedName === file.name ? (
                      <Check size={13} strokeWidth={2} />
                    ) : (
                      <Copy size={13} strokeWidth={2} />
                    )}
                    {copiedName === file.name ? "Copied" : "Copy URL"}
                  </button>
                  <button className={styles.deleteBtn} onClick={() => remove(file)}>
                    <Trash2 size={13} strokeWidth={2} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
