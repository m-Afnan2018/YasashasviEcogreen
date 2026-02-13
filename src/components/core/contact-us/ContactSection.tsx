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
                    <p><strong>Phone:</strong> +971 58 596 4345</p>
                    <p><strong>Email:</strong> finance@yashashviecogreen.com</p>
                    <p><strong>Business Hours:</strong></p>
                    <p>Mon – Fri: 9:00 AM – 6:00 PM (UAE)</p>
                    <p>Sat – Sun: Closed</p>
                </div>
            </div>

            <form className={styles.form}>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Company Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Contact Number" />
                <input type="text" placeholder="Product or Interest" />
                <input type="text" placeholder="Quantity / Requirement" />
                <textarea placeholder="Message" rows={4}></textarea>
                <button type="submit">Submit Now</button>
            </form>
        </section>
    );
}
