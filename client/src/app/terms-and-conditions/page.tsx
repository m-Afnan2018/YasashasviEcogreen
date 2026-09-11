import type { Metadata } from "next";
import LegalHero from "@/components/core/legal/LegalHero";
import styles from "@/components/core/legal/LegalContent.module.css";

export const metadata: Metadata = {
    title: "Terms and Conditions",
    description:
        "Read the Terms and Conditions governing your use of the Yasashvi Ecogreen website and services.",
};

export default function TermsAndConditions() {
    return (
        <section>
            <LegalHero
                title="Terms and Conditions"
                subtitle="Please read these terms carefully before using the Yasashvi Ecogreen website or engaging with our services."
            />
            <div className={styles.wrapper}>
                <p className={styles.updated}>Last updated: July 15, 2026</p>

                <div className={styles.section}>
                    <h3>1. Acceptance of Terms</h3>
                    <p>
                        These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the website and
                        services provided by Yasashvi Ecogreen LLC (&quot;Yasashvi Ecogreen&quot;, &quot;we&quot;, &quot;us&quot;, or
                        &quot;our&quot;). By accessing or using our website, submitting an enquiry, or requesting a
                        sample or quotation, you agree to be bound by these Terms. If you do not agree, please
                        discontinue use of the website.
                    </p>
                </div>

                <div className={styles.section}>
                    <h3>2. Use of Website</h3>
                    <p>
                        You agree to use our website only for lawful purposes and in a manner that does not
                        infringe the rights of, or restrict or inhibit the use and enjoyment of, the website by any
                        third party. You must not misuse our website by knowingly introducing viruses, attempting
                        unauthorized access, or engaging in any activity that could damage, disable, or impair the
                        website.
                    </p>
                </div>

                <div className={styles.section}>
                    <h3>3. Intellectual Property</h3>
                    <p>
                        All content on this website, including text, graphics, logos, images, and product
                        information, is the property of Yasashvi Ecogreen or its licensors and is protected by
                        applicable intellectual property laws. You may not reproduce, distribute, modify, or create
                        derivative works from any content without our prior written consent.
                    </p>
                </div>

                <div className={styles.section}>
                    <h3>4. Products and Services</h3>
                    <p>
                        Product descriptions, specifications, and availability displayed on our website are provided
                        for general informational purposes and are subject to change without notice. Any commercial
                        terms, pricing, quantities, and specifications for products such as silicon carbide,
                        cryolite, iron and steel, aluminium ingots, or slag scrap will be confirmed separately
                        through a formal quotation or agreement between Yasashvi Ecogreen and the customer.
                    </p>
                </div>

                <div className={styles.section}>
                    <h3>5. Accuracy of Information</h3>
                    <p>
                        While we make reasonable efforts to ensure the information on our website is accurate and
                        up to date, we do not warrant that all content is complete, current, or error-free. We
                        reserve the right to correct any errors or omissions at any time without prior notice.
                    </p>
                </div>

                <div className={styles.section}>
                    <h3>6. Third-Party Links</h3>
                    <p>
                        Our website may contain links to third-party websites or services that are not owned or
                        controlled by Yasashvi Ecogreen. We have no control over, and assume no responsibility for,
                        the content, privacy policies, or practices of any third-party websites.
                    </p>
                </div>

                <div className={styles.section}>
                    <h3>7. Limitation of Liability</h3>
                    <p>
                        To the fullest extent permitted by applicable law, Yasashvi Ecogreen shall not be liable for
                        any indirect, incidental, special, or consequential damages arising out of or in connection
                        with your use of the website, or reliance on any information provided on it.
                    </p>
                </div>

                <div className={styles.section}>
                    <h3>8. Indemnification</h3>
                    <p>
                        You agree to indemnify and hold harmless Yasashvi Ecogreen, its officers, employees, and
                        affiliates from any claims, damages, liabilities, and expenses arising out of your use of
                        the website or violation of these Terms.
                    </p>
                </div>

                <div className={styles.section}>
                    <h3>9. Governing Law</h3>
                    <p>
                        These Terms shall be governed by and construed in accordance with the laws of the United
                        Arab Emirates, without regard to its conflict of law principles. Any disputes arising from
                        these Terms shall be subject to the exclusive jurisdiction of the courts of Dubai, United
                        Arab Emirates.
                    </p>
                </div>

                <div className={styles.section}>
                    <h3>10. Changes to These Terms</h3>
                    <p>
                        We may revise these Terms at any time by updating this page. Continued use of the website
                        after any changes constitutes your acceptance of the revised Terms. Please review this page
                        periodically for updates.
                    </p>
                </div>

                <div className={styles.section}>
                    <h3>11. Contact Us</h3>
                    <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
                    <div className={styles.contactBlock}>
                        <p><strong>Yasashvi Ecogreen LLC</strong></p>
                        <p>Office 405, 201 Mashreq, Al Suq Al Kabeer, Dubai, United Arab Emirates</p>
                        <p>Email: <a href="mailto:finance@yasashviecogreen.com">finance@yasashviecogreen.com</a></p>
                        <p>Phone: <a href="tel:+971585964345">+971 58 596 4345</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}
