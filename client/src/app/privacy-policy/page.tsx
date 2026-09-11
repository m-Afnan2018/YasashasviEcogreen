import type { Metadata } from "next";
import LegalHero from "@/components/core/legal/LegalHero";
import styles from "@/components/core/legal/LegalContent.module.css";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Read Yasashvi Ecogreen's Privacy Policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
    return (
        <section>
            <LegalHero
                title="Privacy Policy"
                subtitle="Your trust matters to us. This policy explains how Yasashvi Ecogreen collects, uses, and safeguards your information."
            />
            <div className={styles.wrapper}>
                <p className={styles.updated}>Last updated: July 15, 2026</p>

                <div className={styles.section}>
                    <h3>1. Introduction</h3>
                    <p>
                        Yasashvi Ecogreen LLC (&quot;Yasashvi Ecogreen&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy
                        and is committed to protecting the personal information you share with us. This Privacy
                        Policy explains how we collect, use, disclose, and safeguard information when you visit our
                        website, contact us, or request a sample or quotation through our online forms.
                    </p>
                    <p>
                        By using our website, you agree to the collection and use of information in accordance with
                        this policy. If you do not agree with the terms of this policy, please do not access the
                        website.
                    </p>
                </div>

                <div className={styles.section}>
                    <h3>2. Information We Collect</h3>
                    <p>We may collect the following types of information when you interact with our website:</p>
                    <ul>
                        <li>
                            <strong>Contact details</strong> — such as your name, company name, email address, phone
                            number, and country, when you submit an enquiry, request a sample, or contact us.
                        </li>
                        <li>
                            <strong>Business information</strong> — such as the products, quantities, or trade
                            requirements you share with us to process your enquiry.
                        </li>
                        <li>
                            <strong>Technical data</strong> — such as your IP address, browser type, device
                            information, pages visited, and time spent on our website, collected automatically
                            through cookies and similar technologies.
                        </li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h3>3. How We Use Your Information</h3>
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>Respond to your enquiries, quotation requests, and sample requests.</li>
                        <li>Provide, operate, and improve our website and services.</li>
                        <li>Communicate with you about our products, updates, or trade opportunities.</li>
                        <li>Comply with legal, regulatory, and contractual obligations.</li>
                        <li>Detect, prevent, and address fraud, security, or technical issues.</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h3>4. Cookies and Tracking Technologies</h3>
                    <p>
                        Our website uses cookies and similar tracking technologies, including Google Tag Manager, to
                        analyze website traffic, understand visitor behavior, and improve our services. You can
                        control or disable cookies through your browser settings; however, doing so may affect the
                        functionality of certain parts of our website.
                    </p>
                </div>

                <div className={styles.section}>
                    <h3>5. Data Sharing and Disclosure</h3>
                    <p>
                        We do not sell, rent, or trade your personal information to third parties. We may share your
                        information with trusted service providers who assist us in operating our website and
                        conducting our business, or where required to comply with applicable law, regulation, legal
                        process, or governmental request.
                    </p>
                </div>

                <div className={styles.section}>
                    <h3>6. Data Security</h3>
                    <p>
                        We implement reasonable administrative, technical, and physical safeguards designed to
                        protect your personal information from unauthorized access, disclosure, alteration, or
                        destruction. However, no method of transmission over the internet is completely secure, and
                        we cannot guarantee absolute security.
                    </p>
                </div>

                <div className={styles.section}>
                    <h3>7. Your Rights and Choices</h3>
                    <p>
                        Depending on your location, you may have the right to access, correct, update, or request
                        deletion of your personal information. To exercise any of these rights, please contact us
                        using the details below.
                    </p>
                </div>

                <div className={styles.section}>
                    <h3>8. Third-Party Links</h3>
                    <p>
                        Our website may contain links to third-party websites, including social media platforms. We
                        are not responsible for the privacy practices or content of these third-party sites and
                        encourage you to review their respective privacy policies.
                    </p>
                </div>

                <div className={styles.section}>
                    <h3>9. Children&apos;s Privacy</h3>
                    <p>
                        Our website and services are intended for business use and are not directed at individuals
                        under the age of 18. We do not knowingly collect personal information from children.
                    </p>
                </div>

                <div className={styles.section}>
                    <h3>10. Changes to This Policy</h3>
                    <p>
                        We may update this Privacy Policy from time to time to reflect changes in our practices or
                        for legal or operational reasons. The updated version will be indicated by a revised
                        &quot;Last updated&quot; date at the top of this page.
                    </p>
                </div>

                <div className={styles.section}>
                    <h3>11. Contact Us</h3>
                    <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
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
