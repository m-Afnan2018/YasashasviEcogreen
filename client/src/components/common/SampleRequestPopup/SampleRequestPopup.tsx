"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { submitLead } from "@/lib/api";
import styles from "./SampleRequestPopup.module.css";

interface SampleRequestPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void; // called after successful form submission
  productName?: string;
}

const SampleRequestPopup: React.FC<SampleRequestPopupProps> = ({
  isOpen,
  onClose,
  onSuccess,
  productName = "Product",
}) => {
  const router = useRouter();
  const [isClosing, setIsClosing] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  // Lock body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsClosing(false);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 250);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) handleClose();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    const ok = await submitLead(e.currentTarget);
    setSubmitting(false);
    if (ok) {
      onSuccess?.();
      router.push("/thank-you");
    } else {
      setError(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`${styles.backdrop} ${isClosing ? styles.backdropClosing : ""}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Request a sample for ${productName}`}
    >
      <div
        className={`${styles.modal} ${isClosing ? styles.modalClosing : ""}`}
      >
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerText}>
            <span className={styles.label}>Sample Request</span>
            <h2 className={styles.title}>{productName}</h2>
          </div>
          <button
            className={styles.closeBtn}
            onClick={handleClose}
            aria-label="Close popup"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className={styles.body}>
          <form
            className={styles.form}
            onSubmit={handleSubmit}
          >
              <input type="hidden" name="source" value={`sample-popup: ${productName}`} />
              <input
                type="checkbox"
                name="botcheck"
                className={styles.honeypot}
                tabIndex={-1}
                autoComplete="off"
              />
              <input
                type="hidden"
                name="Product"
                value={productName}
              />

              <div className={styles.fieldGroup}>
                <div className={styles.field}>
                  <label
                    className={styles.fieldLabel}
                    htmlFor="contactPerson"
                  >
                    Contact Person{" "}
                    <span className={styles.required}>
                      *
                    </span>
                  </label>
                  <input
                    id="contactPerson"
                    name="Contact Person"
                    type="text"
                    className={styles.input}
                    placeholder="Full name"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label
                    className={styles.fieldLabel}
                    htmlFor="phoneNumber"
                  >
                    Phone Number{" "}
                    <span className={styles.required}>
                      *
                    </span>
                  </label>
                  <input
                    id="phoneNumber"
                    name="Phone Number"
                    type="tel"
                    className={styles.input}
                    placeholder="+1 (000) 000-0000"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label
                    className={styles.fieldLabel}
                    htmlFor="emailAddress"
                  >
                    Email Address{" "}
                    <span className={styles.required}>
                      *
                    </span>
                  </label>
                  <input
                    id="emailAddress"
                    name="Email Address"
                    type="email"
                    className={styles.input}
                    placeholder="you@company.com"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label
                    className={styles.fieldLabel}
                    htmlFor="companyName"
                  >
                    Company Name{" "}
                    <span className={styles.required}>
                      *
                    </span>
                  </label>
                  <input
                    id="companyName"
                    name="Company Name"
                    type="text"
                    className={styles.input}
                    placeholder="Your company"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label
                    className={styles.fieldLabel}
                    htmlFor="country"
                  >
                    Country{" "}
                    <span className={styles.required}>
                      *
                    </span>
                  </label>
                  <div className={styles.selectWrapper}>
                    <select
                      id="country"
                      name="Country"
                      className={styles.select}
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select your country
                      </option>
                      <option>Afghanistan</option>
                      <option>Albania</option>
                      <option>Algeria</option>
                      <option>Argentina</option>
                      <option>Australia</option>
                      <option>Austria</option>
                      <option>Bangladesh</option>
                      <option>Belgium</option>
                      <option>Brazil</option>
                      <option>Canada</option>
                      <option>Chile</option>
                      <option>China</option>
                      <option>Colombia</option>
                      <option>Czech Republic</option>
                      <option>Denmark</option>
                      <option>Egypt</option>
                      <option>Finland</option>
                      <option>France</option>
                      <option>Germany</option>
                      <option>Ghana</option>
                      <option>Greece</option>
                      <option>Hong Kong</option>
                      <option>Hungary</option>
                      <option>India</option>
                      <option>Indonesia</option>
                      <option>Iran</option>
                      <option>Iraq</option>
                      <option>Ireland</option>
                      <option>Israel</option>
                      <option>Italy</option>
                      <option>Japan</option>
                      <option>Jordan</option>
                      <option>Kenya</option>
                      <option>Kuwait</option>
                      <option>Malaysia</option>
                      <option>Mexico</option>
                      <option>Morocco</option>
                      <option>Netherlands</option>
                      <option>New Zealand</option>
                      <option>Nigeria</option>
                      <option>Norway</option>
                      <option>Pakistan</option>
                      <option>Philippines</option>
                      <option>Poland</option>
                      <option>Portugal</option>
                      <option>Qatar</option>
                      <option>Romania</option>
                      <option>Russia</option>
                      <option>Saudi Arabia</option>
                      <option>Singapore</option>
                      <option>South Africa</option>
                      <option>South Korea</option>
                      <option>Spain</option>
                      <option>Sri Lanka</option>
                      <option>Sweden</option>
                      <option>Switzerland</option>
                      <option>Taiwan</option>
                      <option>Thailand</option>
                      <option>Turkey</option>
                      <option>Ukraine</option>
                      <option>
                        United Arab Emirates
                      </option>
                      <option>United Kingdom</option>
                      <option>United States</option>
                      <option>Vietnam</option>
                      <option>Other</option>
                    </select>
                    <span className={styles.selectArrow}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {error && (
                <p className={styles.errorText}>
                  Something went wrong. Please try again.
                </p>
              )}

              <button type="submit" className={styles.submitBtn} disabled={submitting}>
                {submitting ? "Submitting..." : "Submit Request"}
              </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SampleRequestPopup;
