import styles from "./ManifestCard.module.css";

const details: [string, string][] = [
  ["Origin", "UAE — METCYCLE Facility"],
  ["Purity Grade", "88% SiC min."],
  ["HS Code", "2849.21"],
  ["Compliance", "Full export documentation"],
  ["Contract Type", "Standing supply, quarterly"],
];

export default function ManifestCard() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <p className={styles.manifestNo}>Trade Manifest &middot; No. YE-2026-114</p>
          <h3 className={styles.product}>Silicon Carbide — Metallurgical Grade</h3>
        </div>
        <span className={styles.stamp}>
          <span className={styles.stampDot} />
          Verified
        </span>
      </div>

      <dl className={styles.details}>
        {details.map(([label, value]) => (
          <div key={label} className={styles.row}>
            <dt className={styles.key}>{label}</dt>
            <dd className={styles.value}>{value}</dd>
          </div>
        ))}
      </dl>

      <div className={styles.footer}>
        <span className={styles.footNote}>
          Route: Dubai &rarr; <b>Your Port</b>
        </span>
        <span className={styles.footNote}>
          Status: <b className={styles.statusValue}>Cleared</b>
        </span>
      </div>
    </div>
  );
}
