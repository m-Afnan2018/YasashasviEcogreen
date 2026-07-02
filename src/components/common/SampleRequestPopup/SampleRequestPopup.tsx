"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./SampleRequestPopup.module.css";

interface SampleRequestPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void; // called after successful form submission
  productName?: string;
  formSubmitEmail?: string; // your formsubmit.co target email
}

const SampleRequestPopup: React.FC<SampleRequestPopupProps> = ({
  isOpen,
  onClose,
  onSuccess,
  productName = "Product",
  formSubmitEmail = "your@email.com", // replace with your actual email
}) => {
  const router = useRouter();
  const [isClosing, setIsClosing] = useState(false);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);

    fetch(`https://formsubmit.co/${formSubmitEmail}`, {
      method: "POST",
      body: formData,
    })
      .then(() => {
        onSuccess?.();
        router.push("/thank-you");
      })
      .catch(() => {
        // Even on network error, treat as delivered (formsubmit may block CORS but still deliver)
        onSuccess?.();
        router.push("/thank-you");
      });
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
          <form className={styles.form} onSubmit={handleSubmit}>
              {/* Hidden formsubmit config fields */}
              <input
                type="hidden"
                name="_captcha"
                value="false"
              />
              <input
                type="hidden"
                name="_subject"
                value={`Sample Request: ${productName}`}
              />
              <input
                type="hidden"
                name="_template"
                value="table"
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

              <button type="submit" className={styles.submitBtn}>
                {/*<svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>*/}
                Submit Request
              </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SampleRequestPopup;
