import styles from "./Hero.module.css";
import heroImage from "@/assets/images/product/silicon-carbide/hero-image.webp";
import ManifestCard from "./ManifestCard";

const socialProof = [
  "15+ Active Trade Partners",
  "4 Global Regions Served",
  "24/7 Trade Support",
];

const trustPoints = [
  "Manufacturing-backed via METCYCLE",
  "Full compliance documentation",
  "Transparent, contract-ready pricing",
];

export default function Hero() {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.textColumn}>
              <p className={styles.eyebrow}>
                UAE-Based · Manufacturing-Backed Trade Partner
              </p>

              <h1 className={styles.title}>
                Lock In Verified Industrial Material Supply — In Weeks, Not
                Months
              </h1>

              <p className={styles.subtitle}>
                Stop chasing unreliable suppliers and customs delays. Yasashvi
                Ecogreen delivers manufacturing-backed Silicon Carbide,
                Aluminium Ingots, Cryolite, Iron &amp; Steel and Slag Scrap —
                fully documented, fully compliant, every shipment.
              </p>

              <ul className={styles.socialProofRow}>
                {socialProof.map((item) => (
                  <li key={item} className={styles.socialProofItem}>
                    {item}
                  </li>
                ))}
              </ul>

              <div className={styles.ctaGroup}>
                <a href="#quote-form" className={`${styles.cta} ${styles.ctaPrimary}`}>
                  <span className={styles.ctaMain}>Request a Trade Quote</span>
                </a>
                <a
                  href="/files/yasashvi-ecogreen-company-profile.pdf"
                  download
                  className={`${styles.cta} ${styles.ctaSecondary}`}
                >
                  <span className={styles.ctaMain}>Download Company Profile</span>
                </a>
              </div>

              <ul className={styles.trustRow}>
                {trustPoints.map((point) => (
                  <li key={point} className={styles.trustItem}>
                    <span className={styles.checkmark}>&#10003;</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.formColumn}>
              <ManifestCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
