import styles from "./ContactSection.module.css";

export default function ContactSection() {
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
        action="https://formsubmit.co/finance@yasashviecogreen.com"
        method="POST"
      >
        {/* FormSubmit configuration fields */}
        <input
          type="hidden"
          name="_subject"
          value="New Enquiry – Yasashvi Ecogreen"
        />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

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
        <button type="submit">Submit Now</button>
      </form>
    </section>
  );
}
