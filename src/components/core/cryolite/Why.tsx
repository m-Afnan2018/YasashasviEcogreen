import styles from './Why.module.css'

export default function Why() {
    return <section className={styles.Why}>
        <div className={styles.left}>
            <h2>Why Cryolite Matters</h2>
            <p>
                Cryolite is indispensable to the Hall–Héroult process, the global
                standard for aluminium production since 1886. Without cryolite,
                extracting aluminium from its ore would be economically unfeasible.
                By dissolving alumina (Al<sub>2</sub>O<sub>3</sub>) and reducing its effective melting point
                from over 2,000°C to approximately 950°C, cryolite enables cost-effective
            </p>
            <h2>Physical Characteristics</h2>
            <ul>
                <li>Non-toxic and environmentally safe in industrial handling</li>
                <li>Highly soluble in molten alumina</li>
                <li>Forms protective layers at high temperatures</li>
                <li>Excellent thermal stability</li>
            </ul>
        </div>
        <div className={styles.right}>
            <div className={styles.tableHeader}>
                Chemical Properties
            </div>
            <table className={styles.propertiesTable}>
                <tbody>
                    <tr>
                        <td className={styles.labelCell}>Chemical Formula</td>
                        <td className={styles.valueCell}>
                            Na<sub>3</sub>AlF<sub>6</sub>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.labelCell}>Molecular Weight</td>
                        <td className={styles.valueCell}>209.94 g/mol</td>
                    </tr>
                    <tr>
                        <td className={styles.labelCell}>Appearance</td>
                        <td className={styles.valueCell}>
                            White to colorless, glassy crystals or powder
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.labelCell}>Crystal System</td>
                        <td className={styles.valueCell}>
                            Monoclinic with pseudocubic aspect
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.labelCell}>Melting Point</td>
                        <td className={styles.valueCell}>1,291°C</td>
                    </tr>
                    <tr>
                        <td className={styles.labelCell}>Density</td>
                        <td className={styles.valueCell}>
                            2.95–3.0 g/cm<sup>3</sup>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.labelCell}>Refractive Index</td>
                        <td className={styles.valueCell}>
                            ~1.34 (nearly identical to water; crystalline form becomes nearly invisible when submerged in water)
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.labelCell}>Hardness</td>
                        <td className={styles.valueCell}>
                            : 2.5–3 on the Mohs scale (soft, easily powdered)
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
}