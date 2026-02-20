import styles from "./Why.module.css";

export default function Why() {
  return (
    <section className={styles.Why}>
      <div className={styles.left}>
        <h2>Why Aluminum is Strategically Important</h2>
        <p>
          Second Most Utilized Metal Globally: After iron, aluminum is the
          world&apos;s most widely used non-ferrous metal Exceptional Properties:
          Lightweight (2.7 g/cm³), high strength-to-weight ratio, excellent
          electrical and thermal conductivity, superior corrosion resistance
          Recyclability: Infinitely recyclable without property degradation;
          recycled aluminum requires 95% less energy than primary production
          Versatility: Suitable for applications spanning aerospace to
          packaging, construction to consumer electronics Sustainability Focus:
          Growing emphasis on secondary aluminum (recycled) ingots aligns with
          global ESG commitments
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
          Chemical Properties – Aluminium Ingots
        </div>
        <table className={styles.propertiesTable}>
          <tbody>
            <tr>
              <td className={styles.labelCell}>Chemical Composition</td>
              <td className={styles.valueCell}>
                Aluminium (Al): 99.5% – 99.9% (depending on grade)
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>Crystal Structure</td>
              <td className={styles.valueCell}>
                Face-Centered Cubic (FCC) crystal structure enabling excellent
                ductility, formability, and conductivity
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>Appearance</td>
              <td className={styles.valueCell}>
                Silvery-white metallic solid with smooth and uniform surface
                finish
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>Density</td>
              <td className={styles.valueCell}>
                2.70 g/cm³ (lightweight metal with excellent strength-to-weight
                ratio)
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>Thermal Conductivity</td>
              <td className={styles.valueCell}>
                205 W/m·K (high heat transfer efficiency suitable for thermal
                applications)
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>Electrical Conductivity</td>
              <td className={styles.valueCell}>
                Approximately 61% IACS (International Annealed Copper Standard),
                widely used in electrical applications
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>
                Coefficient of Thermal Expansion
              </td>
              <td className={styles.valueCell}>
                23.1 × 10⁻⁶ /°C (moderate dimensional expansion under
                temperature variations)
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>Melting Point</td>
              <td className={styles.valueCell}>
                660.3°C (relatively low melting temperature supporting efficient
                casting and remelting processes)
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>Corrosion Resistance</td>
              <td className={styles.valueCell}>
                Forms natural aluminum oxide protective layer preventing
                environmental corrosion and oxidation
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>
                Mechanical Strength (Typical Range)
              </td>
              <td className={styles.valueCell}>
                Tensile Strength: 70 – 150 MPa <br />
                Yield Strength: 30 – 120 MPa
              </td>
            </tr>

            <tr>
              <td className={styles.labelCell}>Recyclability</td>
              <td className={styles.valueCell}>
                100% recyclable without loss of properties, supporting
                sustainable and circular industrial applications
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
