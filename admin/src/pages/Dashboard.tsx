import { useEffect, useState } from "react";
import { Users, Inbox, Newspaper, CheckCircle2 } from "lucide-react";
import { api, type DashboardStats } from "../api/client";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);

  useEffect(() => {
    api.get<DashboardStats>("/admin/dashboard/stats").then(setStats);
  }, []);

  const cards = [
    { label: "Total leads", value: stats?.totalLeads, icon: Users, tone: "accent" as const },
    { label: "New leads", value: stats?.newLeads, icon: Inbox, tone: "warning" as const },
    { label: "Total blog posts", value: stats?.totalBlogs, icon: Newspaper, tone: "accent" as const },
    { label: "Published posts", value: stats?.publishedBlogs, icon: CheckCircle2, tone: "success" as const },
  ];

  return (
    <div>
      <header className={styles.header}>
        <h1>Dashboard</h1>
        <p className={styles.subtitle}>An overview of your leads and blog activity.</p>
      </header>

      <div className={styles.grid}>
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div className={styles.card} key={card.label}>
              <div className={`${styles.iconBox} ${styles[card.tone]}`}>
                <Icon size={18} strokeWidth={2} />
              </div>
              <div>
                <p className={styles.value}>
                  {card.value === undefined ? <span className={styles.skeleton} /> : card.value}
                </p>
                <p className={styles.label}>{card.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
