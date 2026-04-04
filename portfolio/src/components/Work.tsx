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
          <h1 className="work__heading">
            My
            <br />
            <span>Work.</span>
          </h1>
        </div>

        {/* Featured */}
        <div
          className="project-card project-item featured-item"
          onClick={() => onOpenCaseStudy("featured")}
        >
          <div className="project-item__thumb">
            <div className="project-item__thumb-overlay" />
            <img
              src={images.bandwidthLogo}
              alt="Band Width app logo — a mobile app connecting artists, venues, and fans in local music communities"
              className="project-item__thumb-img"
            />
          </div>

          <div className="project-item__body">
            <div className="project-item__header">
              <div>
                <h2 className="project-item__title">Band Width</h2>
                <p
                  className="section-label"
                  style={{ marginTop: 4, color: "#555", fontSize: 13 }}
                >
                  Capstone Project · Mobile App
                </p>
              </div>
              <span className="project-item__role">Front-End Developer</span>
            </div>

            <p
              className="body-text"
              style={{ fontSize: 15, marginBottom: 16, color: "#444" }}
            >
              A mobile app connecting artists, venues, and fans to strengthen
              local music communities and give emerging artists more visibility.
            </p>

            <div style={{ marginBottom: 20 }}>
              {["React Native", "Figma", "Expo", "Adobe Illustrator"].map(
                (t) => (
                  <span key={t} className="tool-chip">
                    {t}
                  </span>
                ),
              )}
            </div>

            <span className="project-card__cta">View case study →</span>
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
                {p.image && images[p.image] && (
                  <img
                    src={images[p.image]}
                    alt={`${p.title} — ${p.type}`}
                    className="project-item__thumb-img"
                  />
                )}
              </div>

              <div className="project-item__body">
                <div className="project-item__header">
                  <div>
                    <h2 className="project-item__title">{p.title}</h2>
                    <p
                      className="section-label"
                      style={{ marginTop: 4, color: "#333", fontSize: 12 }}
                    >
                      {p.type}
                    </p>
                  </div>
                  <span className="project-item__role">{p.role}</span>
                </div>

                <p
                  className="body-text"
                  style={{ fontSize: 13, marginBottom: 12, color: "#333" }}
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
