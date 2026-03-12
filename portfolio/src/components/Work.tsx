import "../styles/Work.css";
import { projects } from "../Constants";

interface WorkProps {
  onOpenCaseStudy: (id: number | "featured") => void;
  images: Record<string, string>;
}

export default function Work({ onOpenCaseStudy, images }: WorkProps) {
  return (
    <section id="work" className="work">
      <div className="work__inner">
        <div className="work__header">
          <h2 className="work__heading">
            My
            <br />
            <span>Work.</span>
          </h2>
        </div>

        {/* Featured */}
        <div
          className="project-card featured-card"
          onClick={() => onOpenCaseStudy("featured")}
        >
          <div className="featured-card__image-pane">
            <img
              src={images.bandwidthLogo}
              alt="Bandwidth App Preview"
              className="featured-card__img"
            />
            <span className="project-card__badge featured-card__badge-tl">
              Mobile App
            </span>
            <span className="project-card__badge featured-card__badge-tr">
              Current
            </span>
          </div>

          <div className="featured-card__body">
            <p
              className="section-label"
              style={{ color: "#555", marginBottom: 12 }}
            >
              Capstone Project · Mobile App
            </p>
            <p className="featured-card__title">Band Width</p>
            <p
              className="body-text"
              style={{ color: "#666", marginBottom: 20, fontSize: 12 }}
            >
              Bandwidth is a mobile app designed to make local music discovery
              easy and community-focused. We make discovering, promoting, and
              organizing local music easy for bands, fans, and hosts. All on one
              platform.
            </p>

            <div style={{ marginBottom: 24 }}>
              {["React Native", "Figma", "Expo", "Adobe Illustrator"].map(
                (t) => (
                  <span key={t} className="tool-chip">
                    {t}
                  </span>
                ),
              )}
            </div>

            <div className="featured-card__metrics">
              {[
                { label: "30+", sub: "interviews" },
                { label: "3", sub: "iterations" },
                { label: "58%", sub: "friction drop" },
              ].map(({ label, sub }) => (
                <div key={sub} style={{ textAlign: "center" }}>
                  <p className="featured-card__metric-num">{label}</p>
                  <p
                    className="section-label"
                    style={{ color: "#555", marginTop: 4, fontSize: 9 }}
                  >
                    {sub}
                  </p>
                </div>
              ))}
            </div>

            <span className="project-card__cta">view case study →</span>
          </div>
        </div>

        {/* Grid */}
        <div className="project-grid">
          {projects.map((p, i) => (
            <div
              key={i}
              className="project-card project-item"
              onClick={() => onOpenCaseStudy(i)}
            >
              <div
                className="project-item__thumb"
                style={{ background: p.color }}
              >
                <div className="project-item__thumb-overlay" />
                <img
                  src={images[p.image]}
                  alt={p.title}
                  className="project-item__thumb-img"
                />
                <span className="project-card__badge project-item__badge-tl">
                  {p.tag}
                </span>
                <span className="project-card__badge project-item__badge-tr">
                  {p.year}
                </span>
              </div>

              <div className="project-item__body">
                <div className="project-item__header">
                  <div>
                    <p className="project-item__title">{p.title}</p>
                    <p
                      className="section-label"
                      style={{ marginTop: 4, color: "#666" }}
                    >
                      {p.type}
                    </p>
                  </div>
                  <span className="project-item__role">{p.role}</span>
                </div>

                <p
                  className="body-text"
                  style={{ fontSize: 11, marginBottom: 12, color: "#666" }}
                >
                  {p.desc}
                </p>

                <div>
                  {p.tools.map((t) => (
                    <span key={t} className="tool-chip">
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: 16 }}>
                  <span className="project-card__cta">view case study →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
