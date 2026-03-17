import styles from './Why.module.css'

export default function Why() {
    return <section className={styles.Why}>
        <div className={styles.left}>
            <h2>Why Aluminium is Strategically Important</h2>
            <p>
                Iron and steel form the foundation of modern infrastructure and industrial manufacturing due to their strength, reliability, and versatility. Their ability to support heavy engineering, structural construction, and precision manufacturing makes them one of the most widely used industrial materials worldwide.
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
                Chemical Properties
            </div>
            <table className={styles.propertiesTable}>
                <tbody>
                    <tr>
                        <td className={styles.labelCell}>Chemical Composition</td>
                        <td className={styles.valueCell}>
                            {/* Na<sub>3</sub>AlF<sub>6</sub> */}
                            Silicon (50.08%) + Carbon (49.92%)
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.labelCell}>Crystal Structure</td>
                        <td className={styles.valueCell}> Tetrahedral bonding of carbon and silicon atoms (creates exceptional strength)</td>
                    </tr>
                    <tr>
                        <td className={styles.labelCell}>Appearance</td>
                        <td className={styles.valueCell}>
                            Black to dark gray crystalline powder or blocks (depending on grade)

                        </td>
                    </tr>
                    <tr>
                        <td className={styles.labelCell}>Hardness</td>
                        <td className={styles.valueCell}>
                            32 GPa (second only to diamond, cubic boron nitride, and boron carbide)

                        </td>
                    </tr>
                    <tr>
                        <td className={styles.labelCell}>Young's Modulus</td>
                        <td className={styles.valueCell}>440 GPa (exceptional rigidity and strength-to-weight ratio)</td>
                    </tr>
                    <tr>
                        <td className={styles.labelCell}>Thermal Conductivity</td>
                        <td className={styles.valueCell}>
                            120 W/m•K (excellent heat dissipation)
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.labelCell}>Coefficient of Thermal Expansion</td>
                        <td className={styles.valueCell}>
                            4.0 × 10⁻⁶/°C (minimal dimensional change under temperature fluctuations)

                        </td>
                    </tr>
                    <tr>
                        <td className={styles.labelCell}>Melting Point</td>
                        <td className={styles.valueCell}>
                            2,700°C (maintains structural integrity at extreme temperatures)
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.labelCell}>Maximum Operating Temperature</td>
                        <td className={styles.valueCell}>
                            Up to 1,600°C in air (forms protective silicon oxide coating at 1,200°C)

                        </td>
                    </tr>
                    <tr>
                        <td className={styles.labelCell}>Fracture Toughness</td>
                        <td className={styles.valueCell}>
                            6.8 MPa m⁰·⁵
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.labelCell}>Melting Point</td>
                        <td className={styles.valueCell}>
                             2,700°C (maintains structural integrity at extreme temperatures)
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
}