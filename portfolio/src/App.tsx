import { useState, useEffect } from "react";

const PINK = "#FF69B4";
const CREAM = "#F5F0E8";
const DARK = "#1a1a1a";

const projects = [
  {
    title: "Bloom",
    type: "Mobile App",
    role: "Lead UX Designer",
    tools: ["Figma", "Maze", "FigJam"],
    desc: "A mental wellness app focused on habit-building for Gen Z. Redesigned onboarding flow, reducing drop-off by 42%.",
    color: "#c8b4a8",
    tag: "Case Study",
    year: "2025",
  },
  {
    title: "Reframe",
    type: "Web Platform",
    role: "UX / UI Designer",
    tools: ["Figma", "Notion", "Lottie"],
    desc: "B2B dashboard for content agencies. Designed a component system and information architecture from scratch.",
    color: "#9ca8b4",
    tag: "System Design",
    year: "2024",
  },
  {
    title: "Folio",
    type: "Design System",
    role: "Design Systems Lead",
    tools: ["Figma", "Storybook", "Zeroheight"],
    desc: "End-to-end design system for a fintech startup. 120+ components, token library, and full documentation.",
    color: "#b4c8b0",
    tag: "Design System",
    year: "2024",
  },
  {
    title: "Waypoint",
    type: "Travel App",
    role: "UX Researcher + Designer",
    tools: ["Figma", "Dovetail", "Protopie"],
    desc: "User research-led redesign of a travel planning app. Conducted 18 interviews, affinity mapping, and 3 iteration rounds.",
    color: "#c4b8d4",
    tag: "Research",
    year: "2023",
  },
];

const process = [
  {
    num: "01",
    label: "Discover",
    desc: "User interviews, competitive audits, heuristic evals",
  },
  {
    num: "02",
    label: "Define",
    desc: "Personas, journey maps, problem framing",
  },
  {
    num: "03",
    label: "Design",
    desc: "Wireframes, prototypes, component systems",
  },
  {
    num: "04",
    label: "Deliver",
    desc: "Handoff, testing, iteration, documentation",
  },
];

const skills = [
  "Figma",
  "FigJam",
  "Protopie",
  "Maze",
  "Dovetail",
  "Miro",
  "Notion",
  "Framer",
];

const services = [
  { title: "UX Audit", desc: "Heuristic evaluation + actionable report" },
  {
    title: "Product Design",
    desc: "End-to-end design from research to handoff",
  },
  {
    title: "Design Systems",
    desc: "Scalable components, tokens, documentation",
  },
  { title: "UX Research", desc: "Interviews, usability tests, synthesis" },
];

const stats = [
  { num: "12+", label: "projects shipped" },
  { num: "3yrs", label: "experience" },
  { num: "98%", label: "client satisfaction" },
];

const contactItems = [
  { icon: "✉", label: "alex@portfolio.com" },
  { icon: "◎", label: "@alexrivera.ux" },
  { icon: "▷", label: "read.cv/alexrivera" },
];

const loveItems = [
  "designing for people, not screens",
  "research-driven decisions",
  "systems thinking with an eye for detail",
];

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Georgia', serif",
        background: CREAM,
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(80px, 18vw, 220px);
          font-weight: 900;
          color: ${PINK};
          line-height: 0.85;
          letter-spacing: -4px;
          text-transform: uppercase;
          opacity: 0;
          transform: translateY(60px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-title.visible { opacity: 1; transform: translateY(0); }
        .handwriting { font-family: 'Georgia', serif; font-style: italic; font-size: clamp(14px, 2.5vw, 22px); color: ${DARK}; }
        .section-label { font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: #888; }
        .body-text { font-family: 'Space Mono', monospace; font-size: 12px; line-height: 1.9; color: #444; }
        .skill-tag { display: inline-block; border: 1.5px solid ${DARK}; padding: 6px 14px; font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; margin: 4px; transition: all 0.2s; cursor: default; }
        .skill-tag:hover { background: ${PINK}; border-color: ${PINK}; color: white; }
        .sticker { display: inline-block; background: ${PINK}; color: white; font-family: 'Playfair Display', serif; font-style: italic; font-weight: 700; padding: 8px 16px; transform: rotate(-3deg); font-size: 13px; }
        .sticker-outline { display: inline-block; border: 2.5px solid ${DARK}; color: ${DARK}; font-family: 'Playfair Display', serif; font-style: italic; font-weight: 700; padding: 8px 16px; transform: rotate(2deg); font-size: 13px; }
        .project-card { cursor: pointer; transition: transform 0.3s cubic-bezier(0.16,1,0.3,1); }
        .project-card:hover { transform: translateY(-6px); }
        .tool-chip { display: inline-block; background: rgba(255,105,180,0.12); border: 1px solid rgba(255,105,180,0.3); color: ${PINK}; font-family: 'Space Mono', monospace; font-size: 9px; letter-spacing: 1px; padding: 3px 8px; margin: 2px; }
        .process-step { border-left: 2px solid ${PINK}; padding-left: 20px; margin-bottom: 32px; }
        .wrap-section { background: ${PINK}; padding: 80px 40px; text-align: center; position: relative; overflow: hidden; }
        .wrap-section::before { content: ''; position: absolute; top: -60px; right: -60px; width: 200px; height: 200px; border-radius: 50%; background: rgba(255,255,255,0.15); }
        .envelope { background: white; padding: 30px; max-width: 400px; margin: 0 auto; position: relative; box-shadow: 8px 8px 0 rgba(0,0,0,0.15); transform: rotate(-1deg); }
        .envelope::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: repeating-linear-gradient(90deg, ${PINK} 0, ${PINK} 10px, white 10px, white 20px); }
        .bar-chart-bar { background: ${PINK}; transition: height 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .grain-overlay { position: fixed; inset: 0; pointer-events: none; opacity: 0.03; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E"); z-index: 9999; }
        .service-card { border: 1.5px solid #ddd; padding: 24px; transition: all 0.2s; }
        .service-card:hover { border-color: ${PINK}; background: rgba(255,105,180,0.04); }
        .big-quote { font-family: 'Playfair Display', serif; font-size: clamp(28px, 5vw, 56px); font-weight: 900; line-height: 1.1; color: white; }
        .pink-text { color: ${PINK}; font-family: 'Playfair Display', serif; font-style: italic; }
      `}</style>

      <div className="grain-overlay" />

      {/* HERO / ABOUT ME */}
      <section
        id="about"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 40px 40px",
          position: "relative",
          background: CREAM,
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 40,
            }}
          >
            <p className="section-label">UX Designer / Product Designer</p>
            <p className="handwriting" style={{ fontSize: 13 }}>
              By Alex Rivera
            </p>
          </div>

          <p
            className="handwriting"
            style={{ fontSize: "clamp(14px, 2vw, 20px)", marginBottom: 8 }}
          >
            Hi. Since you're new here.
          </p>
          <p
            className="handwriting"
            style={{
              fontSize: "clamp(12px, 1.5vw, 16px)",
              marginBottom: 16,
              marginLeft: "auto",
              maxWidth: 300,
              textAlign: "right",
            }}
          >
            let me show you my work ✦
          </p>

          <div style={{ position: "relative", marginBottom: 20 }}>
            <p
              className="handwriting"
              style={{
                position: "absolute",
                top: 0,
                left: "clamp(80px, 15vw, 180px)",
                zIndex: 2,
                fontSize: "clamp(13px, 1.8vw, 18px)",
              }}
            >
              This is
            </p>
            <div style={{ position: "relative" }}>
              <h1
                className={`hero-title ${loaded ? "visible" : ""}`}
                style={{
                  transition: "all 1s 0.1s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                ALEX
              </h1>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -60%)",
                  width: "clamp(120px, 20vw, 220px)",
                  height: "clamp(160px, 28vw, 300px)",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#c8c0b4",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <span
                    style={{
                      fontSize: 9,
                      letterSpacing: 2,
                      color: "#999",
                      fontFamily: "Space Mono",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    PHOTO
                  </span>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(135deg, rgba(255,105,180,0.2), transparent)",
                    }}
                  />
                </div>
              </div>
              <h1
                className={`hero-title ${loaded ? "visible" : ""}`}
                style={{
                  transition: "all 1s 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  textAlign: "right",
                }}
              >
                RIVERA
              </h1>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <p className="body-text" style={{ maxWidth: 320 }}>
              Designing digital experiences that feel
              <br />
              <em>intuitive, intentional, and a little beautiful.</em>
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              <span className="sticker">ux ✦</span>
              <span className="sticker-outline">product</span>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 30,
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
          }}
        >
          <p className="section-label" style={{ marginBottom: 8 }}>
            scroll to explore
          </p>
          <div
            style={{ width: 1, height: 40, background: PINK, margin: "0 auto" }}
          />
        </div>
      </section>

      {/* ABOUT ME */}
      <section
        id="about-me"
        style={{ background: "#EEE8DC", padding: "80px 40px" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p className="section-label" style={{ marginBottom: 40 }}>
            — 00 / about me
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
              alignItems: "center",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "clamp(36px, 6vw, 64px)",
                  fontWeight: 900,
                  color: DARK,
                  lineHeight: 1.05,
                  marginBottom: 24,
                }}
              >
                I design things
                <br />
                people{" "}
                <span style={{ color: PINK, fontStyle: "italic" }}>
                  actually
                </span>
                <br />
                want to use.
              </h2>
              <p className="body-text" style={{ marginBottom: 20 }}>
                Based in New York. Currently obsessed with turning complex
                problems into clean, human-centered interfaces. I work across
                the full design spectrum — from messy whiteboard sessions to
                polished, pixel-perfect handoffs.
              </p>
              <p className="body-text" style={{ marginBottom: 28 }}>
                Previously at Studio Vyne and Halo Digital. Now freelancing and
                open to the right full-time role.
              </p>
              <div style={{ marginBottom: 16 }}>
                <p className="section-label" style={{ marginBottom: 12 }}>
                  I care about:
                </p>
                {loveItems.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 8,
                      marginBottom: 8,
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: PINK,
                        fontFamily: "Space Mono",
                        fontSize: 10,
                        marginTop: 2,
                      }}
                    >
                      ✦
                    </span>
                    <p className="body-text">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Photo placeholder */}
              <div
                style={{
                  height: 340,
                  background: "#c8c0b4",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(255,105,180,0.2), transparent)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "Space Mono",
                    fontSize: 10,
                    color: "#999",
                    letterSpacing: 2,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  PHOTO
                </span>
              </div>
              {/* Stats row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 2,
                }}
              >
                {stats.map(({ num, label }, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "20px 12px",
                      background: i === 1 ? PINK : CREAM,
                      textAlign: "center",
                      border: "1px solid #ddd",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Playfair Display, serif",
                        fontSize: "clamp(22px, 3vw, 32px)",
                        fontWeight: 900,
                        color: i === 1 ? "white" : PINK,
                        lineHeight: 1,
                      }}
                    >
                      {num}
                    </p>
                    <p
                      className="section-label"
                      style={{
                        color: i === 1 ? "rgba(255,255,255,0.8)" : "#888",
                        marginTop: 6,
                        fontSize: 9,
                      }}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section id="work" style={{ background: CREAM, padding: "80px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 48,
            }}
          >
            <p className="section-label">— 01 / selected works</p>
            <p className="handwriting" style={{ fontSize: 13, color: "#888" }}>
              4 projects ✦
            </p>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          >
            {projects.map((p, i) => (
              <div
                key={i}
                className="project-card"
                onClick={() => setActiveProject(activeProject === i ? null : i)}
                style={{ background: "#EEE8DC", overflow: "hidden" }}
              >
                <div
                  style={{
                    height: 200,
                    background: p.color,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(135deg, rgba(255,105,180,0.25), transparent)",
                    }}
                  />
                  <div style={{ position: "absolute", top: 12, left: 12 }}>
                    <span
                      style={{
                        background: PINK,
                        color: "white",
                        fontFamily: "Space Mono",
                        fontSize: 9,
                        letterSpacing: 2,
                        padding: "4px 10px",
                        textTransform: "uppercase",
                      }}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <div style={{ position: "absolute", top: 12, right: 12 }}>
                    <span
                      style={{
                        background: "rgba(0,0,0,0.3)",
                        color: "white",
                        fontFamily: "Space Mono",
                        fontSize: 9,
                        letterSpacing: 2,
                        padding: "4px 10px",
                      }}
                    >
                      {p.year}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "Space Mono",
                      fontSize: 10,
                      color: "rgba(255,255,255,0.5)",
                      letterSpacing: 2,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    PROJECT PREVIEW
                  </span>
                </div>

                <div style={{ padding: "20px 24px 24px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 8,
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontFamily: "Playfair Display, serif",
                          fontSize: 22,
                          fontWeight: 900,
                          color: DARK,
                          lineHeight: 1.1,
                        }}
                      >
                        {p.title}
                      </p>
                      <p className="section-label" style={{ marginTop: 4 }}>
                        {p.type}
                      </p>
                    </div>
                    <span
                      style={{
                        fontFamily: "Space Mono",
                        fontSize: 9,
                        color: "#888",
                        border: "1px solid #ddd",
                        padding: "4px 8px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {p.role}
                    </span>
                  </div>

                  <p
                    className="body-text"
                    style={{ fontSize: 11, marginBottom: 12, color: "#555" }}
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

                  <div
                    style={{
                      marginTop: 16,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Space Mono",
                        fontSize: 9,
                        letterSpacing: 2,
                        color: PINK,
                        textTransform: "uppercase",
                      }}
                    >
                      {activeProject === i ? "close ↑" : "view case study →"}
                    </span>
                  </div>

                  {activeProject === i && (
                    <div
                      style={{
                        marginTop: 16,
                        borderTop: "1px dashed #ddd",
                        paddingTop: 16,
                      }}
                    >
                      <p
                        className="body-text"
                        style={{
                          fontSize: 11,
                          color: "#666",
                          fontStyle: "italic",
                        }}
                      >
                        Full case study coming soon — reach out to see the full
                        process deck, research findings, and final designs.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MY CRAFTS */}
      <section
        id="crafts"
        style={{ background: DARK, padding: "80px 40px", color: "white" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            className="section-label"
            style={{ color: "#666", marginBottom: 60 }}
          >
            — 02 / my crafts
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
              alignItems: "start",
            }}
          >
            {/* Left — tools + process */}
            <div>
              <h2
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "clamp(40px, 7vw, 72px)",
                  fontWeight: 900,
                  color: PINK,
                  fontStyle: "italic",
                  lineHeight: 0.9,
                  marginBottom: 32,
                }}
              >
                tools
                <br />&<br />
                process
              </h2>
              <div style={{ marginBottom: 32 }}>
                {skills.map((s) => (
                  <span
                    key={s}
                    className="skill-tag"
                    style={{ borderColor: "#444", color: "#ccc" }}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p
                className="big-quote"
                style={{ fontSize: "clamp(22px, 3.5vw, 36px)", marginTop: 32 }}
              >
                design is just <span className="pink-text">empathy</span> with
                pixels.
              </p>
            </div>

            {/* Right — process steps + services */}
            <div>
              <p
                className="section-label"
                style={{ color: "#666", marginBottom: 24 }}
              >
                how i work
              </p>
              <div style={{ marginBottom: 48 }}>
                {process.map(({ num, label, desc }) => (
                  <div key={num} className="process-step">
                    <p
                      style={{
                        fontFamily: "Space Mono",
                        fontSize: 9,
                        color: PINK,
                        letterSpacing: 3,
                        marginBottom: 4,
                      }}
                    >
                      {num}
                    </p>
                    <p
                      style={{
                        fontFamily: "Playfair Display, serif",
                        fontSize: 18,
                        fontWeight: 700,
                        color: "white",
                        marginBottom: 4,
                      }}
                    >
                      {label}
                    </p>
                    <p
                      className="body-text"
                      style={{ color: "#666", fontSize: 11 }}
                    >
                      {desc}
                    </p>
                  </div>
                ))}
              </div>

              <p
                className="section-label"
                style={{ color: "#666", marginBottom: 16 }}
              >
                services
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {services.map(({ title, desc }) => (
                  <div
                    key={title}
                    style={{
                      borderLeft: "2px solid #333",
                      paddingLeft: 16,
                      paddingBottom: 8,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Playfair Display, serif",
                        fontSize: 15,
                        fontWeight: 700,
                        color: "white",
                        marginBottom: 2,
                      }}
                    >
                      {title}
                    </p>
                    <p
                      className="body-text"
                      style={{ color: "#666", fontSize: 10 }}
                    >
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="wrap-section">
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p
            className="section-label"
            style={{ color: "rgba(255,255,255,0.6)", marginBottom: 24 }}
          >
            — 03 / let's connect
          </p>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(48px, 10vw, 120px)",
              fontWeight: 900,
              color: "white",
              lineHeight: 0.9,
              marginBottom: 16,
              textTransform: "uppercase",
            }}
          >
            and
            <br />
            that's
            <br />a wrap.
          </h2>
          <p
            style={{
              fontFamily: "Playfair Display, serif",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.8)",
              fontSize: 18,
              marginBottom: 48,
            }}
          >
            ✦ open for freelance & full-time roles ✦
          </p>
          <div className="envelope">
            <p
              style={{
                fontFamily: "Playfair Display, serif",
                fontStyle: "italic",
                fontSize: 15,
                color: DARK,
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
              "Thank you for exploring my portfolio! I'm always looking for
              meaningful problems to solve and teams to grow with."
            </p>
            <p
              style={{
                fontFamily: "Playfair Display, serif",
                fontStyle: "italic",
                fontSize: 13,
                color: "#888",
                marginBottom: 16,
              }}
            >
              If you'd like to collaborate or just chat design, I'd love to hear
              from you.
            </p>
            <div
              style={{
                borderTop: "1px dashed #ddd",
                paddingTop: 16,
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              {contactItems.map(({ icon, label }, i) => (
                <p
                  key={i}
                  className="body-text"
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    color: DARK,
                  }}
                >
                  <span style={{ color: PINK }}>{icon}</span>
                  {label}
                </p>
              ))}
            </div>
          </div>
          <p
            className="section-label"
            style={{ color: "rgba(255,255,255,0.4)", marginTop: 48 }}
          >
            © 2026 Alex Rivera — All Rights Reserved
          </p>
        </div>
      </section>
    </div>
  );
}
