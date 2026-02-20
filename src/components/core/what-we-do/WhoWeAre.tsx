import Image from "next/image";
import styles from "./WhoWeAre.module.css";
import doOne from "@/assets/images/whatWeDo/do-one.webp";
import doTwo from "@/assets/images/whatWeDo/do-two.webp";

export default function WhoWeAre() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {/* ROW 1 */}
        <div className={styles.row}>
          <div className={styles.textBlock}>
            <h5 className={styles.category}>WHO WE ARE</h5>
            <h2 className={styles.title}>
              Recycling-Led Import & Export <br /> Operations
            </h2>

            <p className={styles.description}>
              We manage international trade of recycled and processed
              metallurgical materials, ensuring compliance, documentation
              accuracy, and efficient logistics across global markets.
            </p>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src={doTwo}
              alt="Global recycling supply chain"
              fill
              className={styles.image}
            />
          </div>
        </div>

        {/* ROW 2 */}
        <div className={`${styles.row} ${styles.reverse}`}>
          <div className={styles.imageWrapper}>
            <Image
              src={doOne}
              alt="Circular economy"
              fill
              className={styles.image}
            />
          </div>

          <div className={styles.textBlock}>
            <h2 className={styles.subTitle}>Circular Supply Coordination</h2>
            <p className={styles.text}>
              We act as a single coordination partner between:
            </p>

            <ul className={styles.list}>
              <li>Industrial recyclers</li>
              <li>Processing facilities</li>
              <li>Manufacturing buyers</li>
            </ul>

            <p className={styles.text}>
              This reduces supply chain complexity while supporting closed-loop
              material cycles.
            </p>

            <h2 className={styles.subTitle}>Sustainable Trade Structuring</h2>
            <p className={styles.text}>
              Our commercial models are designed to support:
            </p>

            <ul className={styles.list}>
              <li>Long-term recycling contracts</li>
              <li>Predictable recycled material supply</li>
              <li>Responsible financial and logistical planning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
