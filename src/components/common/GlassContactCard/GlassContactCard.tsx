"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./GlassContactCard.module.css";

interface GlassContactCardProps {
  productName?: string;
  formSubmitEmail?: string;
  title?: string;
  subtitle?: string;
}

const GlassContactCard: React.FC<GlassContactCardProps> = ({
  productName = "Product",
  formSubmitEmail = "finance@yasashviecogreen.com",
  title = "Get In Touch",
  subtitle = "Ask us about pricing, availability or a sample.",
}) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);

    fetch(`https://formsubmit.co/${formSubmitEmail}`, {
      method: "POST",
      body: formData,
    })
      .then(() => {
        router.push("/thank-you");
      })
      .catch(() => {
        // formsubmit may block CORS reads but still deliver the email
        router.push("/thank-you");
      });
  };

  return (
    <div className={styles.card} role="form" aria-label={`Contact us about ${productName}`}>
      <div className={styles.header}>
        <span className={styles.label}>Contact Us</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_subject"
          value={`Website Enquiry: ${productName}`}
        />
        <input type="hidden" name="_template" value="table" />
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

        <button
          type="submit"
          className={styles.submitBtn}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Enquiry"}
        </button>
      </form>
    </div>
  );
};

export default GlassContactCard;
