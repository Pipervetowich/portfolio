import "../styles/Crafts.css";
import { skills, process } from "../Constants";

export default function Crafts() {
  return (
    <section id="crafts" className="crafts">
      <div className="crafts__inner">
        <p
          className="section-label"
          style={{ color: "#aaa", marginBottom: 60 }}
        >
          My Process
        </p>

        <div className="crafts__grid">
          <div>
            <h2 className="crafts__heading">
              Tools
              <br />&<br />
              Process
            </h2>
            <div style={{ marginBottom: 32 }}>
              {skills.map((s) => (
                <span key={s} className="skill-tag">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p
              className="section-label"
              style={{ color: "#aaa", marginBottom: 24 }}
            >
              How I Design
            </p>
            {process.map(({ num, label, desc }) => (
              <div key={num} className="process-step">
                <p className="process-step__num">{num}</p>
                <p className="process-step__label">{label}</p>
                <p
                  className="body-text"
                  style={{ color: "#777", fontSize: 11 }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
