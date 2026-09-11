import styles from "./TechSpecs.module.css";

const highlights = [
  "Minimum Order: 1 × 20ft Container",
  "Quarterly & Annual Contracts",
  "Manufacturing-backed Capacity",
  "Full Export Documentation",
];

const orderTypes: [string, string, string][] = [
  ["Trial Order", "18–20 MT", "2–3 Weeks"],
  ["Bulk Order", "50–200 MT", "3–5 Weeks"],
  ["Standing Contract", "200+ MT", "Scheduled Dispatch"],
];

export default function TechSpecs() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Built for Bulk Buyers — Not One-Off Orders</h2>

        <ul className={styles.highlights}>
          {highlights.map((point) => (
            <li key={point} className={styles.highlightItem}>
              <span className={styles.checkmark}>&#10003;</span>
              {point}
            </li>
          ))}
        </ul>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Order Type</th>
                <th className={styles.th}>Volume</th>
                <th className={styles.th}>Lead Time</th>
              </tr>
            </thead>
            <tbody>
              {orderTypes.map(([type, volume, leadTime]) => (
                <tr key={type}>
                  <td className={styles.labelCell}>{type}</td>
                  <td className={styles.valueCell}>{volume}</td>
                  <td className={styles.valueCell}>{leadTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
