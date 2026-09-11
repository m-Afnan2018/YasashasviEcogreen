"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./QuoteForm.module.css";
import { LEADS_ENDPOINT } from "@/lib/api";

const materials = [
  "Silicon Carbide",
  "Aluminium Ingots",
  "Cryolite",
  "Iron & Steel",
  "Slag & Industrial By-Products",
];

const trustPoints = [
  "No obligation",
  "Response within 48 hours",
  "Data kept confidential",
];

export default function QuoteForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const phoneLocal = (formData.get("phoneLocal") as string) || "";
    const notes = (formData.get("notes") as string) || "";

    const params = new URLSearchParams();
    params.append("Contact Person", (formData.get("Contact Person") as string) || "");
    params.append("Company Name", (formData.get("Company Name") as string) || "");
    params.append("Phone Number", phoneLocal ? `+91 ${phoneLocal}` : "");
    params.append("Email Address", (formData.get("Email Address") as string) || "");
    params.append("Product", (formData.get("material") as string) || "");
    params.append("quantity", (formData.get("monthlyVolume") as string) || "");
    params.append("message", notes);
    params.append("source", "landing: silicon-carbide-0-5mm");

    try {
      const res = await fetch(LEADS_ENDPOINT, { method: "POST", body: params });
      if (res.ok) {
        router.push("/thank-you");
        return;
      }
      setError(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="quote-form" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textColumn}>
          <p className={styles.eyebrow}>Instant Trade Quote</p>
          <h2 className={styles.heading}>Get Your Material Quote in Under 48 Hours</h2>
          <p className={styles.description}>
            No sales calls, no generic RFQ forms. Tell us what you need — our
            trade desk responds with pricing, grade certification, and a
            realistic delivery timeline.
          </p>

          <ul className={styles.trustRow}>
            {trustPoints.map((point) => (
              <li key={point} className={styles.trustItem}>
                <span className={styles.checkmark}>&#10003;</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.formColumn}>
          <div className={styles.card}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input type="checkbox" name="botcheck" className={styles.honeypot} tabIndex={-1} autoComplete="off" />

              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="qf-name">
                    Full Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    id="qf-name"
                    name="Contact Person"
                    type="text"
                    className={styles.input}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="qf-company">
                    Company <span className={styles.required}>*</span>
                  </label>
                  <input
                    id="qf-company"
                    name="Company Name"
                    type="text"
                    className={styles.input}
                    placeholder="Company name"
                    required
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="qf-email">
                    Work Email <span className={styles.required}>*</span>
                  </label>
                  <input
                    id="qf-email"
                    name="Email Address"
                    type="email"
                    className={styles.input}
                    placeholder="you@company.com"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="qf-phone">
                    Phone / WhatsApp <span className={styles.required}>*</span>
                  </label>
                  <div className={styles.phoneRow}>
                    <span className={styles.phonePrefix}>+91</span>
                    <input
                      id="qf-phone"
                      name="phoneLocal"
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      className={styles.phoneInput}
                      placeholder="00000 00000"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="qf-material">
                    Material <span className={styles.required}>*</span>
                  </label>
                  <div className={styles.selectWrapper}>
                    <select id="qf-material" name="material" className={styles.select} defaultValue="" required>
                      <option value="" disabled>Select a material</option>
                      {materials.map((material) => (
                        <option key={material} value={material}>
                          {material}
                        </option>
                      ))}
                    </select>
                    <span className={styles.selectArrow}>&#9662;</span>
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="qf-volume">
                    Monthly Volume <span className={styles.required}>*</span>
                  </label>
                  <div className={styles.selectWrapper}>
                    <select id="qf-volume" name="monthlyVolume" className={styles.select} defaultValue="" required>
                      <option value="" disabled>Select volume</option>
                      <option value="Under 20 MT">Under 20 MT</option>
                      <option value="20-50 MT">20-50 MT</option>
                      <option value="50-200 MT">50-200 MT</option>
                      <option value="200+ MT">200+ MT</option>
                    </select>
                    <span className={styles.selectArrow}>&#9662;</span>
                  </div>
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="qf-notes">
                  Anything else we should know?
                </label>
                <textarea
                  id="qf-notes"
                  name="notes"
                  className={styles.textarea}
                  rows={2}
                  placeholder="Destination port, target grade, timeline..."
                />
              </div>

              {error && <p className={styles.errorText}>Something went wrong. Please try again.</p>}

              <button type="submit" className={styles.submitBtn} disabled={submitting}>
                <span className={styles.submitMain}>
                  {submitting ? "Submitting..." : "Get My Instant Quote →"}
                </span>
              </button>

              <p className={styles.note}>
                We&apos;ll reach out within 48 hours with pricing and documentation.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
