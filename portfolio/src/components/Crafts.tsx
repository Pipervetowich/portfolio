import "../styles/Crafts.css";
import { skills, process } from "../Constants";

export default function Crafts() {
  return (
    <section id="crafts" className="crafts">
      <div className="crafts__inner">
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
            <h3
              className="section-label"
              style={{ color: "#3d3d3d", marginBottom: 24 }}
            >
              How I Design
            </h3>
            {process.map(({ num, label, desc }) => (
              <div key={num} className="process-step">
                <p className="process-step__num">{num}</p>
                <h2 className="process-step__label">{label}</h2>
                <p className="body-text" style={{ color: "#3d3d3d" }}>
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
