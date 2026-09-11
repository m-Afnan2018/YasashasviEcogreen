"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { submitLead } from "@/lib/api";
import styles from "./GlassContactCard.module.css";

interface GlassContactCardProps {
  productName?: string;
  title?: string;
  subtitle?: string;
}

const GlassContactCard: React.FC<GlassContactCardProps> = ({
  productName = "Product",
  title = "Get In Touch",
  subtitle = "Ask us about pricing, availability or a sample.",
}) => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    const ok = await submitLead(e.currentTarget);
    setSubmitting(false);
    if (ok) {
      router.push("/thank-you");
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles.card} role="form" aria-label={`Contact us about ${productName}`}>
      <div className={styles.header}>
        <span className={styles.label}>Contact Us</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="hidden" name="source" value={`glass-card: ${productName}`} />
        <input type="checkbox" name="botcheck" className={styles.honeypot} tabIndex={-1} autoComplete="off" />
        <input type="hidden" name="Product" value={productName} />

        <div className={styles.field}>
          <label className={styles.fieldLabel} htmlFor="gc-name">
            Contact Person <span className={styles.required}>*</span>
          </label>
          <input
            id="gc-name"
            name="Contact Person"
            type="text"
            className={styles.input}
            placeholder="Full name"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.fieldLabel} htmlFor="gc-phone">
            Phone Number <span className={styles.required}>*</span>
          </label>
          <input
            id="gc-phone"
            name="Phone Number"
            type="tel"
            className={styles.input}
            placeholder="+1 (000) 000-0000"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.fieldLabel} htmlFor="gc-email">
            Email Address <span className={styles.required}>*</span>
          </label>
          <input
            id="gc-email"
            name="Email Address"
            type="email"
            className={styles.input}
            placeholder="you@company.com"
            required
          />
        </div>

        {error && <p className={styles.errorText}>Something went wrong. Please try again.</p>}

        <button type="submit" className={styles.submitBtn} disabled={submitting}>
          {submitting ? "Sending..." : "Send Enquiry"}
        </button>
      </form>
    </div>
  );
};

export default GlassContactCard;
