import "../styles/Contact.css";
import { contactItems } from "../Constants";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <h2 className="contact__heading">
          and
          <br />
          that's
          <br />a wrap.
        </h2>

        <p className="contact__divider">✦✦✦</p>

        <div className="envelope">
          <p className="envelope__quote">
            "Thank you for exploring my portfolio!
          </p>
          <p className="envelope__sub">
            If you'd like to chat design, I'd love to hear from you.
          </p>

          <div className="envelope__contacts">
            {contactItems.map(({ icon, label, href }, i) => (
              <p key={i} className="body-text envelope__contact-item">
                <span className="envelope__contact-icon">{icon}</span>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "underline" }}
                >
                  {label}
                </a>
              </p>
            ))}
          </div>
        </div>

        <p className="section-label contact__footer">
          © 2026 Piper Vetowich — All Rights Reserved
        </p>
      </div>
    </section>
  );
}
