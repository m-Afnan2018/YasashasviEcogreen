import styles from "./ProcessSteps.module.css";

const steps = [
  {
    number: "1",
    title: "Tell Us What You Need",
    description:
      "Share material specs, volume, and destination port directly — no generic intake forms.",
  },
  {
    number: "2",
    title: "Get a Transparent Quote in 48 Hours",
    description: "Pricing, grade certifications, and a realistic logistics timeline, upfront.",
  },
  {
    number: "3",
    title: "Lock In Compliant Contracts",
    description: "Full documentation, HS codes, and cross-border paperwork handled for you.",
  },
  {
    number: "4",
    title: "Track Shipment to Delivery",
    description:
      "Manufacturing-backed supply via METCYCLE keeps delivery timelines predictable.",
  },
  {
    number: "5",
    title: "Scale Into Long-Term Supply",
    description: "Move from a first order to a standing quarterly contract as trust builds.",
  },
];

export default function ProcessSteps() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <p className={styles.eyebrow}>How It Works</p>
        <h2 className={styles.heading}>From First Inquiry to Standing Supply Contract</h2>
        <p className={styles.description}>
          An engineered progression, not a generic RFQ form — each step is
          built to remove a specific point of sourcing friction.
        </p>
      </div>

      <div className={styles.steps}>
        {steps.map((step) => (
          <div key={step.number} className={styles.step}>
            <div className={styles.numberBadge}>{step.number}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
