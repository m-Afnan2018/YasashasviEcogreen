"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { submitLead } from "@/lib/api";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
    <section className={styles.wrapper}>
      <div className={styles.left}>
        <h2>Get in Touch</h2>
        <p>
          Our team is available to support enquiries related to import & export,
          trading, supply coordination, and commercial discussions.
        </p>

        <div className={styles.info}>
          <p>
            <strong>Phone:</strong> +971-58-596-4345
          </p>
          <p>
            <strong>Email:</strong> finance@yasashviecogreen.com
          </p>
          <p>
            <strong>Business Hours:</strong>
          </p>
          <p>Mon – Fri: 9:00 AM – 6:00 PM (UAE)</p>
          <p>Sat – Sun: Closed</p>
        </div>
      </div>

      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="source" value="contact-page" />
        <input
          type="checkbox"
          name="botcheck"
          className={styles.honeypot}
          tabIndex={-1}
          autoComplete="off"
        />

        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="company" placeholder="Company Name" />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="contact_number" placeholder="Contact Number" />
        <input
          type="text"
          name="product_or_interest"
          placeholder="Product or Interest"
        />
        <input
          type="text"
          name="quantity_requirement"
          placeholder="Quantity / Requirement"
        />
        <textarea name="message" placeholder="Message" rows={4}></textarea>
        {error && <p className={styles.errorText}>Something went wrong. Please try again.</p>}
        <button type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit Now"}
        </button>
      </form>
    </section>
  );
}
