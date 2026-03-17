import styles from "./Why.module.css";

export default function Why() {
  return (
    <section className={styles.Why}>
      <div className={styles.left}>
        <h2>Why Slag Scrap Supports Modern Industry</h2>
        <p>
          Slag scrap plays a critical role in sustainable industrial development
          by converting metallurgical by-products into valuable secondary raw
          materials. Its durability, chemical stability, and cost efficiency
          make it widely used across construction, cement manufacturing, and
          infrastructure applications.
          <br />
          <br />
          <br />
          By supporting circular resource utilization, slag scrap helps
          industries reduce waste, lower raw material consumption, and improve
          environmental performance. Its ability to enhance strength, improve
          durability, and support large-scale industrial reuse makes it an
          essential component in modern sustainable manufacturing and
          infrastructure development.
        </p>
        {/* <h2>Physical Characteristics</h2> */}
        {/* <ul>
                <li>Non-toxic and environmentally safe in industrial handling</li>
                <li>Highly soluble in molten alumina</li>
                <li>Forms protective layers at high temperatures</li>
                <li>Excellent thermal stability</li>
            </ul> */}
      </div>
      <div className={styles.right}>
        <div className={styles.tableHeader}>
          Chemical Properties – Slag Scrap
        </div>
        <table className={styles.propertiesTable}>
          <tbody>
            <tr>
              <td className={styles.labelCell}>Chemical Composition</td>
              <td className={styles.valueCell}>
                Primarily contains Calcium Oxide (CaO), Silicon Dioxide (SiO₂),
                Aluminium Oxide (Al₂O₃) and other metal oxides formed during
                metallurgical processing.
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>Crystal Structure</td>
              <td className={styles.valueCell}>
                Mostly amorphous or partially crystalline structure formed
                during rapid cooling of molten slag.
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>Appearance</td>
              <td className={styles.valueCell}>
                Dark gray to black granular or rock-like material depending on
                processing and cooling method.
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>Density</td>
              <td className={styles.valueCell}>
                Typically ranges between 2.8 – 3.6 g/cm³ depending on slag type
                and metal origin.
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>Thermal Conductivity</td>
              <td className={styles.valueCell}>
                Moderate thermal conductivity suitable for insulation and
                construction material applications.
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>Chemical Stability</td>
              <td className={styles.valueCell}>
                Highly stable under normal environmental conditions with low
                reactivity in construction and industrial use.
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>Corrosion Resistance</td>
              <td className={styles.valueCell}>
                Resistant to environmental degradation and chemical exposure,
                making it suitable for long-term infrastructure use.
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>Melting Point</td>
              <td className={styles.valueCell}>
                Generally ranges between 1,300°C – 1,600°C depending on
                composition and metal processing origin.
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>Environmental Compatibility</td>
              <td className={styles.valueCell}>
                Supports recycling and reuse in cement, construction, and road
                base applications, reducing industrial waste.
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>Recyclability</td>
              <td className={styles.valueCell}>
                Reusable in multiple industrial applications including cement
                manufacturing, aggregate production, and metallurgical recovery.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
