"use client";

import { useState } from "react";
import styles from "./FAQAccordion.module.css";

const faqs = [
  {
    q: "What is your Minimum Order Quantity (MOQ)?",
    a: "We offer flexible MOQ starting from 1 FCL (Full Container Load, approximately 20-25 MT). For first-time buyers, we can arrange smaller trial orders. Contact us to discuss.",
  },
  {
    q: "How long does delivery to India take?",
    a: "Standard sea freight delivery is 15-30 days from UAE to major Indian ports: Mundra (Gujarat), Nhava Sheva (Maharashtra), Chennai (Tamil Nadu). Express air freight is available for urgent samples.",
  },
  {
    q: "Can I get a sample before placing a bulk order?",
    a: "Yes, we provide 1-5kg samples for qualified buyers. Sample cost is adjusted against your first bulk order. Request a sample through the form above.",
  },
  {
    q: "What certifications and documentation do you provide?",
    a: "Every shipment includes: ISO 9001 certificate, full Certificate of Analysis (COA), Material Safety Data Sheet (MSDS), packing list, commercial invoice, and Bill of Lading. Customs-compliant for Indian import.",
  },
  {
    q: "What are your payment terms?",
    a: "We accept Letter of Credit (LC at sight), Advance Telegraphic Transfer (T/T), and negotiated terms for long-term contracts. All transactions are transparent with no hidden fees.",
  },
  {
    q: "How do I know the quality is consistent?",
    a: "Our manufacturing partner METCYCLE follows strict batch traceability protocols. Every batch is tested and comes with a unique batch number and COA. You can verify quality before full shipment.",
  },
  {
    q: "Which grade do I need for my application?",
    a: "Our technical team will recommend the right grade based on your specific application, temperature requirements, and operating environment. Fill the form or call us for a free consultation.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.section}>
      <p className={styles.eyebrow}>FAQ</p>
      <h2 className={styles.heading}>Frequently Asked Questions</h2>

      <div className={styles.list}>
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={faq.q} className={styles.item}>
              <button
                className={styles.question}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span>{faq.q}</span>
                <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}>
                  &#9662;
                </span>
              </button>
              {isOpen && <p className={styles.answer}>{faq.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
