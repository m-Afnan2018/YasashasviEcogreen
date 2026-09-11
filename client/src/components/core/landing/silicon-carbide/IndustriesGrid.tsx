import styles from "./IndustriesGrid.module.css";

const products = [
  {
    icon: "🔥",
    name: "Silicon Carbide",
    headline:
      "Consistent-Grade Silicon Carbide That Keeps Your Furnace Output Predictable",
    description:
      "Manufacturing-backed supply means the grade you qualify on order one is the grade you receive on order twenty.",
  },
  {
    icon: "🔩",
    name: "Aluminium Ingots",
    headline: "Aluminium Ingots Sourced for Purity, Priced for Long-Term Contracts",
    description:
      "Direct access to processing capacity lets us hold pricing steady across standing supply agreements.",
  },
  {
    icon: "🧊",
    name: "Cryolite",
    headline: "Sodium Cryolite Supply That Doesn't Break When Demand Spikes",
    description:
      "Scalable manufacturing capability behind every shipment, so seasonal demand swings don't become your problem.",
  },
  {
    icon: "⚙️",
    name: "Iron & Steel",
    headline: "Ferrous Material Sourcing Backed by Transparent Documentation",
    description: "Every shipment travels with full commercial and customs documentation.",
  },
  {
    icon: "♻️",
    name: "Slag & Industrial By-Products",
    headline:
      "Turning Industrial By-Products Into a Dependable, Compliant Material Stream",
    description:
      "Processed and traded under the same compliance and quality standards as primary metallurgical products.",
  },
];

export default function IndustriesGrid() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>One Trade Partner. Five Critical Materials.</h2>
      <p className={styles.description}>
        Every product line is backed by our strategic association with
        METCYCLE Metal and Mineral Processing SP LLC — meaning supply doesn&apos;t
        disappear when demand spikes.
      </p>

      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.name} className={styles.card}>
            <div className={styles.icon}>{product.icon}</div>
            <h3 className={styles.name}>{product.headline}</h3>
            <p className={styles.cardDescription}>{product.description}</p>
            <a href="#quote-form" className={styles.link}>
              Get a Quote &#8594;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
