import { useState, useEffect } from "react";
import piperPhoto from "./assets/Piper_Vetowich.png";
import piperPhoto2 from "./assets/Piper_Vetowich.jpg";
import bandwidthLogo from "./assets/Band_Width_Logo.jpg";
import denverZoo from "./assets/Denver_Zoo.jpg";
import ymcaPhoto from "./assets/YMCA.jpg";
import bhcPhoto from "./assets/BHC.jpg";
import noodlesPhoto from "./assets/Noodles.jpg";

const PINK = "#FF69B4";
const CREAM = "#F5F0E8";
const WARM_TAN = "#E8DDD0";
const DARK = "#1a1a1a";

const projects = [
  {
    title: "Denver Zoo Redesign",
    type: "UX/UI Design Project",
    role: "UX/UI Designer",
    tools: ["Figma", "User Testing", "User Flows"],
    desc: "Redesigned the Denver Zoo website to improve ticket purchasing and navigation flow.",
    tag: "UX/UI",
    year: "2024",
    color: "#b4c8b0",
    image: denverZoo,
  },
  {
    title: "YMCA Rebrand",
    type: "Logo & Brand Identity",
    role: "Graphic Designer",
    tools: ["Adobe Illustrator", "Marketing", "Brand Identity"],
    desc: "Revamped YMCA's visual identity, creating a cohesive brand identity for marketing and digital platforms.",
    color: "#121212",
    tag: "Identity & Branding",
    year: "2026",
    image: ymcaPhoto,
  },
  {
    title: "Boulder Housing Coalition UX Audit",
    type: "UX/UI Design Project",
    role: "UX Auditor",
    tools: ["Figma", "User Testing", "Accessibility"],
    desc: "Conducted a comprehensive UX audit for the Boulder Housing Coalition website, identifying pain points and accessibility issues. Created a mockup of redesign suggestions.",
    color: "#b4c8b0",
    tag: "UX/UI",
    year: "2025",
    image: bhcPhoto,
  },
  {
    title: "Food Product Packaging Design",
    type: "Physical Product Design",
    role: "Product Designer",
    tools: ["Sketching", "Prototyping", "Adobe Illustrator"],
    desc: "Designed packaging for a product, including branding, label layout, and mockup creation.",
    color: "#c4b8d4",
    tag: "Product Design",
    year: "2023",
    image: noodlesPhoto,
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
    desc: "Personas, journey maps, affinity mapping",
  },
  {
    num: "03",
    label: "Design",
    desc: "Wireframes, prototypes, accessibility",
  },
  {
    num: "04",
    label: "Test",
    desc: "User testing, iterate feedback, refine",
  },
];

const skills = [
  "Figma",
  "React",
  "HTML",
  "JavaScript",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Adobe InDesign",
  "3D Modeling",
];

const stats = [
  { num: "4th", label: "year student" },
  { num: "8+", label: "projects completed" },
  { num: "2026", label: "graduating" },
];

const contactItems = [
  { icon: "✉", label: "pipervetowich@gmail.com" },
  { icon: "LinkedIn", label: "www.linkedin.com/in/piper-vetowich" },
  { icon: "Phone", label: "720-289-3259" },
];

const loveItems = [
  "Designing for people, not screens.",
  "Learning by doing.",
  "Turning small projects into big impacts.",
];

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [activeProject, setActiveProject] = useState<
    number | "featured" | null
  >(null);

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
        .wrap-section { background: ${PINK}; padding: 100px 60px; text-align: center; position: relative; overflow: hidden; }
        .wrap-section::before { content: ''; position: absolute; top: -60px; right: -60px; width: 200px; height: 200px; border-radius: 50%; background: rgba(255,255,255,0.15); }
        .envelope { background: white; padding: 30px; max-width: 400px; margin: 0 auto; position: relative; box-shadow: 8px 8px 0 rgba(0,0,0,0.15); transform: rotate(-1deg); }
        .envelope::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: repeating-linear-gradient(90deg, ${PINK} 0, ${PINK} 10px, white 10px, white 20px); }
        .grain-overlay { position: fixed; inset: 0; pointer-events: none; opacity: 0.03; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E"); z-index: 9999; }
        .big-quote { font-family: 'Playfair Display', serif; font-size: clamp(28px, 5vw, 56px); font-weight: 900; line-height: 1.1; color: white; }
        .pink-text { color: ${PINK}; font-family: 'Playfair Display', serif; font-style: italic; }
      `}</style>

      <div className="grain-overlay" />

      {/* HERO */}
      <section
        id="about"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 60px 60px",
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
              marginBottom: 48,
            }}
          >
            <p className="section-label">UX Designer / Product Designer</p>
            <p className="section-label">Colorado, USA</p>
          </div>

          <p
            className="handwriting"
            style={{ fontSize: "clamp(14px, 2vw, 20px)" }}
          >
            Hi. Glad you're here.
          </p>
          <p
            className="handwriting"
            style={{
              fontSize: "clamp(14px, 2vw, 20px)",
              textAlign: "right",
            }}
          >
            Let me show you my work ✦
          </p>

          <div style={{ position: "relative", marginBottom: 20 }}>
            <div style={{ position: "relative" }}>
              <h1
                className={`hero-title ${loaded ? "visible" : ""}`}
                style={{
                  transition: "all 1s 0.1s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                PIPER
              </h1>
              <div
                style={{
                  position: "absolute",
                  top: "42%",
                  left: "63.5%",
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
                    borderRadius: 2,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={piperPhoto}
                    alt="Portrait of Piper Vetowich"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 0%",
                      zIndex: 2,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                    }}
                  />
                </div>
              </div>
              <h1
                className={`hero-title ${loaded ? "visible" : ""}`}
                style={{
                  transition: "all 1s 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  textAlign: "right",
                  position: "relative",
                  zIndex: 3,
                }}
              >
                VETOWICH
              </h1>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          <p
            className="section-label"
            style={{ marginBottom: 10, opacity: 0.6 }}
          >
            Scroll to explore
          </p>

          <div
            style={{ width: 1, height: 40, background: PINK, margin: "0 auto" }}
          />
        </div>
      </section>

      {/* ABOUT ME */}
      <section
        id="about-me"
        style={{ background: WARM_TAN, padding: "100px 60px" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p className="section-label" style={{ marginBottom: 40 }}>
            About Me
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
                Hello, I am
                <br />
                <span style={{ color: PINK, fontStyle: "italic" }}>Piper.</span>
              </h2>
              <p className="body-text" style={{ marginBottom: 20 }}>
                I'm a 4th-year student at the University of Colorado, Boulder,
                completing my B.S. in Creative Technology and Design in May
                2026. Throughout my studies, I've developed a strong foundation
                in design thinking, user experience, front-end development, and
                creative problem-solving. My experience spans designing
                intuitive digital experiences, building responsive interfaces,
                and iterating solutions based on user feedback. Beyond technical
                skills, I value collaboration, adaptability, and attention to
                detail.
              </p>
              <p className="body-text" style={{ marginBottom: 28 }}>
                I'm actively seeking internships and entry-level opportunities
                where I can continue learning, apply my skills to real-world
                projects, and contribute meaningfully to a team. I'm especially
                excited to innovate and create engaging experiences for users.
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
                <img
                  src={piperPhoto2}
                  alt="Piper Vetowich"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "relative",
                    objectPosition: "center 35%",
                    zIndex: 1,
                  }}
                />
              </div>
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
                      border: "1px solid #d4c8b8",
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
      <section id="work" style={{ background: DARK, padding: "100px 60px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 60 }}>
            <p className="section-label">Selected Work</p>
            <h2
              style={{
                fontFamily: "Playfair Display",
                fontSize: "clamp(32px, 4vw, 48px)",
                marginTop: 8,
                color: DARK,
              }}
            >
              Projects I've Designed
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 64,
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "clamp(48px, 8vw, 96px)",
                  fontWeight: 900,
                  color: "white",
                  lineHeight: 0.9,
                  letterSpacing: "-2px",
                }}
              >
                My
                <br />
                <span style={{ color: PINK, fontStyle: "italic" }}>
                  Projects.
                </span>
              </h2>
            </div>
          </div>

          {/* FEATURED PROJECT */}
          <div
            className="project-card"
            onClick={() =>
              setActiveProject(activeProject === "featured" ? null : "featured")
            }
            style={{
              background: "#242424",
              border: "1px solid #333",
              overflow: "hidden",
              marginBottom: 24,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <div
              style={{
                background: "#b07090",
                position: "relative",
                minHeight: 340,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={bandwidthLogo}
                alt="Bandwidth App Preview"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div style={{ position: "absolute", top: 16, left: 16 }}>
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
                  Mobile App
                </span>
              </div>
              <div style={{ position: "absolute", top: 16, right: 16 }}>
                <span
                  style={{
                    background: "rgba(0,0,0,0.4)",
                    color: "white",
                    fontFamily: "Space Mono",
                    fontSize: 9,
                    letterSpacing: 2,
                    padding: "4px 10px",
                  }}
                >
                  Current
                </span>
              </div>
            </div>

            <div style={{ padding: "40px" }}>
              <p
                className="section-label"
                style={{ color: "#555", marginBottom: 12 }}
              >
                Capstone Project · Mobile App
              </p>
              <p
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 900,
                  color: "white",
                  lineHeight: 1.05,
                  marginBottom: 16,
                }}
              >
                Band Width
              </p>
              <p
                className="body-text"
                style={{ color: "#aaa", marginBottom: 20, fontSize: 12 }}
              >
                Bandwidth is a mobile app designed to make local music discovery
                easy and community-focused. We make discovering, promoting, and
                organizing local music easy for bands, fans, and hosts. All on
                one platform.
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
              <div
                style={{
                  display: "flex",
                  gap: 24,
                  flexWrap: "wrap",
                  marginBottom: 24,
                }}
              >
                {[
                  { label: "30+", sub: "interviews" },
                  { label: "3", sub: "iterations" },
                  { label: "58%", sub: "friction drop" },
                ].map(({ label, sub }) => (
                  <div key={sub} style={{ textAlign: "center" }}>
                    <p
                      style={{
                        fontFamily: "Playfair Display, serif",
                        fontSize: 28,
                        fontWeight: 900,
                        color: PINK,
                        lineHeight: 1,
                      }}
                    >
                      {label}
                    </p>
                    <p
                      className="section-label"
                      style={{ color: "#555", marginTop: 4, fontSize: 9 }}
                    >
                      {sub}
                    </p>
                  </div>
                ))}
              </div>
              <span
                style={{
                  fontFamily: "Space Mono",
                  fontSize: 9,
                  letterSpacing: 2,
                  color: PINK,
                  textTransform: "uppercase",
                }}
              >
                {activeProject === "featured" ? "close ↑" : "view case study →"}
              </span>
              {activeProject === "featured" && (
                <div
                  style={{
                    marginTop: 16,
                    borderTop: "1px dashed #333",
                    paddingTop: 16,
                  }}
                >
                  <p
                    className="body-text"
                    style={{ fontSize: 11, color: "#666", fontStyle: "italic" }}
                  >
                    Full case study coming soon — reach out to see the complete
                    process deck, research synthesis, and final prototype.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* SMALL PROJECT GRID */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          >
            {projects.map((p, i) => (
              <div
                key={i}
                className="project-card"
                onClick={() => setActiveProject(activeProject === i ? null : i)}
                style={{
                  background: "#242424",
                  border: "1px solid #333",
                  overflow: "hidden",
                }}
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
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "absolute",
                      inset: 0,
                    }}
                  />
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
                          color: "white",
                          lineHeight: 1.1,
                        }}
                      >
                        {p.title}
                      </p>
                      <p
                        className="section-label"
                        style={{ marginTop: 4, color: "#666" }}
                      >
                        {p.type}
                      </p>
                    </div>
                    <span
                      style={{
                        fontFamily: "Space Mono",
                        fontSize: 9,
                        color: "#666",
                        border: "1px solid #333",
                        padding: "4px 8px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {p.role}
                    </span>
                  </div>
                  <p
                    className="body-text"
                    style={{ fontSize: 11, marginBottom: 12, color: "#888" }}
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
                        borderTop: "1px dashed #333",
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
        style={{ background: CREAM, padding: "100px 60px", color: DARK }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            className="section-label"
            style={{ color: "#aaa", marginBottom: 60 }}
          >
            My Process
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
              alignItems: "start",
            }}
          >
            {/* Left */}
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
                Tools
                <br />&<br />
                Process
              </h2>
              <div style={{ marginBottom: 32 }}>
                {skills.map((s) => (
                  <span
                    key={s}
                    className="skill-tag"
                    style={{ borderColor: "#ccc", color: DARK }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — process only */}
            <div>
              <p
                className="section-label"
                style={{ color: "#aaa", marginBottom: 24 }}
              >
                How I Design
              </p>
              <div>
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
                        color: DARK,
                        marginBottom: 4,
                      }}
                    >
                      {label}
                    </p>
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
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="wrap-section">
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p
            className="section-label"
            style={{ color: "rgba(255,255,255,0.6)", marginBottom: 24 }}
          >
            Contact
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
            ✦✦✦
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
              "Thank you for exploring my portfolio!
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
              If you'd like to chat design, I'd love to hear from you.
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
            © 2026 Piper Vetowich — All Rights Reserved
          </p>
        </div>
      </section>
    </div>
  );
}
