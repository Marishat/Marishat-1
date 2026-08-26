import ContactForm from "./ContactForm";
import { P, EMAIL, PHONE, LOCATION, LINKEDIN, GITHUB, CV_PATH, CV_DOWNLOAD_NAME } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" style={{ paddingBottom: 0 }}>
      <div className="wrap reveal">
        <div className="contact-shell">
          <div className="contact-grid">
            <div className="contact-copy">
              <span className="sec-label">
                <i style={{ background: P.blush }} /> Say hello
              </span>
              <h2 className="serif">
                Let&apos;s build something <em>reliable</em> together.
              </h2>
              <p>
                Whether it&apos;s a QA role, a research collaboration, or a teaching opportunity — drop me a
                message right here and it lands straight in my inbox.
              </p>
              <div className="contact-list">
                <a href={`mailto:${EMAIL}`}>✉️ {EMAIL}</a>
                <a href={`tel:${PHONE}`}>📞 {PHONE}</a>
                <span style={{ display: "inline-flex", gap: 10 }}>📍 {LOCATION}</span>
              </div>
              <div className="socials">
                <a className="ghost-btn" href={LINKEDIN} target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>
                <a className="ghost-btn" href={GITHUB} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
                <a className="ghost-btn" href={CV_PATH} download={CV_DOWNLOAD_NAME}>
                  ↓ CV
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
