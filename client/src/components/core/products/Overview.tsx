import Image from "next/image";
import styles from "./Overview.module.css";
import overviewImage from '@/assets/images/products/overview.jpg'

export default function Overview() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                {/* LEFT CONTENT */}
                <div className={styles.left}>
                    <h5>OVERVIEW</h5>

                    <p>
                        At Yasashvi Ecogreen L.L.C, we recycle, process, and supply
                        high-value industrial and metallurgical materials recovered from
                        industrial waste streams and secondary raw materials.
                    </p>

                    <p>
                        Our products support aluminium, steel, mining, and manufacturing
                        industries by delivering sustainable, specification-aligned
                        recycled resources that reduce environmental impact while
                        maintaining industrial performance.
                    </p>

                    <p>
                        Each material undergoes controlled recovery and processing to
                        ensure consistent quality, usability, and reliability for global
                        industrial applications.
                    </p>
                </div>

                {/* RIGHT IMAGE */}
                <div className={styles.right}>
                    <Image
                        src={overviewImage}
                        alt="Sustainable global network"
                        fill
                        className={styles.image}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
