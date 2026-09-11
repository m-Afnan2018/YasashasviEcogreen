import Image from "next/image";
import styles from "./TrustSection.module.css";
import abigail from "@/assets/images/avatars/abigail.png";
import elizabeth from "@/assets/images/avatars/elizabeth.png";
import anthony from "@/assets/images/avatars/anthony.png";

const stats = [
  { value: "15+", label: "Trade Network Partners" },
  { value: "5", label: "Core Product Lines" },
  { value: "4", label: "Regions Served" },
  { value: "1", label: "Manufacturing Partner (METCYCLE)" },
];

const testimonials = [
  {
    quote:
      "A reliable trading partner delivering transparent, compliant, and consistent global trade solutions.",
    name: "Abigail",
    role: "Engineer, Steel Plant",
    avatar: abigail,
  },
  {
    quote:
      "Trusted for manufacturing-backed supply, clear documentation, and dependable execution.",
    name: "Elizabeth",
    role: "Procurement Manager",
    avatar: elizabeth,
  },
  {
    quote: "Yasashvi Ecogreen simplifies global trade with professionalism and integrity.",
    name: "Anthony",
    role: "Plant Manager, Ceramics",
    avatar: anthony,
  },
];

export default function TrustSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Trusted By Buyers Who Can&apos;t Afford Supply Chain Surprises
      </h2>
      <p className={styles.description}>
        15+ active trade relationships across ferrous, non-ferrous, and mining
        materials — built on transparent documentation and manufacturing-backed
        delivery.
      </p>

      <div className={styles.statsRow}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.statCard}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.testimonials}>
        {testimonials.map((t) => (
          <div key={t.name} className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
            <div className={styles.profile}>
              <div className={styles.avatar}>
                <Image src={t.avatar} alt={t.name} width={44} height={44} />
              </div>
              <div>
                <p className={styles.name}>{t.name}</p>
                <p className={styles.role}>{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
