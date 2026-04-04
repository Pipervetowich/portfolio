import "../styles/Contact.css";
import { contactItems } from "../Constants";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <h1 className="contact__heading">
          <br />
          that's
          <br />a wrap.
        </h1>

        <h2 className="contact__divider">✦✦✦</h2>

        <div className="envelope">
          <blockquote className="envelope__quote">
            "Thank you for exploring my portfolio!
          </blockquote>

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
      </div>
    </section>
  );
}
