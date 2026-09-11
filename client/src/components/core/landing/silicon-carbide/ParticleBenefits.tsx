import styles from "./ParticleBenefits.module.css";

const trustPoints = [
  "Manufacturing-backed via METCYCLE",
  "Full compliance documentation",
  "24/7 trade support",
];

export default function ParticleBenefits() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Ready to Stop Guessing on Industrial Material Supply?
        </h2>
        <p className={styles.description}>
          Talk to our trade desk about sourcing, supply volume, and long-term
          contract terms — manufacturing-backed, fully compliant, from Dubai
          to your port.
        </p>
        <p className={styles.urgency}>
          We onboard a limited number of new long-term contracts each quarter
          to protect delivery reliability for existing partners.
        </p>

        <div className={styles.ctaGroup}>
          <a href="#quote-form" className={`${styles.cta} ${styles.ctaPrimary}`}>
            Request Your Trade Quote
          </a>
          <a href="/products" className={`${styles.cta} ${styles.ctaSecondary}`}>
            Explore All Markets
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
    </section>
  );
}
