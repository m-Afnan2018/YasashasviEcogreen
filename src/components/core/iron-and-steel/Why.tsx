import styles from "./Why.module.css";

export default function Why() {
  return (
    <section className={styles.Why}>
      <div className={styles.left}>
        <h2>Why Aluminum is Strategically Important</h2>
        <p>
          Iron and steel form the foundation of modern infrastructure and
          industrial manufacturing due to their strength, reliability, and
          versatility. Their ability to support heavy engineering, structural
          construction, and precision manufacturing makes them one of the most
          widely used industrial materials worldwide.
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
          Chemical Properties – Iron & Steel Products
        </div>
        <table className={styles.propertiesTable}>
          <tbody>
            <tr>
              <td className={styles.labelCell}>Chemical Composition</td>
              <td className={styles.valueCell}>
                Iron (Fe): 97% – 99.5% (base element)
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>Crystal Structure</td>
              <td className={styles.valueCell}>
                Body-Centered Cubic (BCC) at room temperature, transforming to
                Face-Centered Cubic (FCC) at higher temperatures
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>Appearance</td>
              <td className={styles.valueCell}>
                Gray to silver metallic surface with matte or scale finish
                depending on processing and surface treatment
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>Density</td>
              <td className={styles.valueCell}>
                7.75 – 7.90 g/cm³ (high-density structural metal providing
                excellent load-bearing capability)
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>Thermal Conductivity</td>
              <td className={styles.valueCell}>
                45 – 60 W/m·K (efficient heat transfer suitable for industrial
                and structural applications)
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>Electrical Conductivity</td>
              <td className={styles.valueCell}>
                Approximately 3% – 15% IACS depending on alloy composition and
                processing
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>
                Coefficient of Thermal Expansion
              </td>
              <td className={styles.valueCell}>
                11 – 13 × 10⁻⁶ /°C (stable dimensional performance under
                temperature variation)
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>Melting Point</td>
              <td className={styles.valueCell}>
                1,370°C – 1,540°C depending on carbon content and alloy
                composition
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>Corrosion Resistance</td>
              <td className={styles.valueCell}>
                Moderate corrosion resistance; enhanced through coatings,
                galvanization, or alloying elements such as chromium and nickel
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>
                Mechanical Strength (Typical Range)
              </td>
              <td className={styles.valueCell}>
                Tensile Strength: 400 – 700 MPa
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>Recyclability</td>
              <td className={styles.valueCell}>
                Highly recyclable metal with minimal loss of mechanical
                properties, supporting sustainable steel production and circular
                resource utilization
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
