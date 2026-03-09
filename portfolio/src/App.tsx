import { useState, useEffect } from "react";

const NAV_ITEMS = ["about", "story", "work", "skills", "contact"] as const;
type Section = (typeof NAV_ITEMS)[number];

const PINK = "#FF69B4";
const CREAM = "#F5F0E8";
const DARK = "#1a1a1a";

interface StatItem {
  num: string;
  label: string;
}

interface ContactItem {
  icon: string;
  label: string;
}

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("about");
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats: StatItem[] = [
    { num: "2000+", label: "subscribers" },
    { num: "500K+", label: "total views" },
    { num: "7yrs", label: "creating" },
  ];

  const skills: string[] = [
    "Premiere Pro",
    "After Effects",
    "Photoshop",
    "Canva",
    "Lightroom",
    "CapCut",
    "Figma",
    "Notion",
  ];

  const loveItems: string[] = [
    "lifestyle, and hobbies that reflect intentional living",
    "self growth, and",
    "an eye for aesthetic",
  ];

  const doItems: string[] = [
    "Video scripting",
    "Video editing",
    "Social media post",
    "Branding",
  ];

  const contactItems: ContactItem[] = [
    { icon: "✉", label: "alex@portfolio.com" },
    { icon: "◎", label: "@alexrivera" },
    { icon: "▷", label: "alexrivera.portfolio" },
  ];

  const palette: string[] = [
    PINK,
    "#FF9EC4",
    "#FFCCE0",
    CREAM,
    DARK,
    "#9A8A7A",
  ];
  const barHeights: number[] = [40, 65, 80, 55, 90, 70, 85];
  const photoColors: string[] = ["#6a8a9a", "#9a8a6a", "#8a9a6a"];
  const gridColors: string[] = ["#9ca8b4", "#c8b4a8", "#b4c8b0", "#b4b4b4"];
  const gridLabels: string[] = [
    "city scape",
    "portrait",
    "lifestyle",
    "details",
  ];

  const scrollTo = (id: Section): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

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
        .photo-placeholder { background: #ddd; display: flex; align-items: center; justify-content: center; color: #999; font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 2px; overflow: hidden; position: relative; }
        .photo-placeholder::after { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(255,105,180,0.2), transparent); }
        .skill-tag { display: inline-block; border: 1.5px solid ${DARK}; padding: 6px 14px; font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; margin: 4px; transition: all 0.2s; cursor: default; }
        .skill-tag:hover { background: ${PINK}; border-color: ${PINK}; color: white; }
        .grid-photo { aspect-ratio: 1; overflow: hidden; position: relative; }
        .sticker { display: inline-block; background: ${PINK}; color: white; font-family: 'Playfair Display', serif; font-style: italic; font-weight: 700; padding: 8px 16px; transform: rotate(-3deg); font-size: 13px; }
        .sticker-outline { display: inline-block; border: 2.5px solid ${DARK}; color: ${DARK}; font-family: 'Playfair Display', serif; font-style: italic; font-weight: 700; padding: 8px 16px; transform: rotate(2deg); font-size: 13px; }
        .big-quote { font-family: 'Playfair Display', serif; font-size: clamp(28px, 5vw, 56px); font-weight: 900; line-height: 1.1; color: white; }
        .pink-text { color: ${PINK}; font-family: 'Playfair Display', serif; font-style: italic; }
        .wrap-section { background: ${PINK}; padding: 80px 40px; text-align: center; position: relative; overflow: hidden; }
        .wrap-section::before { content: ''; position: absolute; top: -60px; right: -60px; width: 200px; height: 200px; border-radius: 50%; background: rgba(255,255,255,0.15); }
        .envelope { background: white; padding: 30px; max-width: 400px; margin: 0 auto; position: relative; box-shadow: 8px 8px 0 rgba(0,0,0,0.15); transform: rotate(-1deg); }
        .envelope::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: repeating-linear-gradient(90deg, ${PINK} 0, ${PINK} 10px, white 10px, white 20px); }
        .bar-chart-bar { background: ${PINK}; transition: height 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .grain-overlay { position: fixed; inset: 0; pointer-events: none; opacity: 0.03; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E"); z-index: 9999; }
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
            <p className="section-label">Graphic Designer / Video Editor</p>
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
            let me be ya tour guide ✦
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
                  className="photo-placeholder"
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#c8c0b4",
                    borderRadius: 2,
                  }}
                >
                  <span
                    style={{
                      fontSize: 9,
                      letterSpacing: 2,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    PHOTO
                  </span>
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
              Creative who lives at the intersection of
              <br />
              <em>visuals, storytelling, and aesthetic chaos.</em>
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              <span className="sticker">design ✦</span>
              <span className="sticker-outline">video</span>
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

      {/* STORY */}
      <section
        id="story"
        style={{ background: "#EEE8DC", padding: "80px 40px" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p className="section-label" style={{ marginBottom: 32 }}>
            — 01 / origin story
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
              alignItems: "start",
            }}
          >
            <div>
              <p className="body-text" style={{ marginBottom: 20 }}>
                Tiny, curious, and low-key destined for the media world (though
                she didn't know it yet). By the time she hit 11, she had a whole
                YouTube channel up and running.
              </p>
              <div style={{ margin: "30px 0" }}>
                <svg
                  width="100%"
                  height="60"
                  viewBox="0 0 300 60"
                  style={{ overflow: "visible" }}
                >
                  <path
                    d="M 20 30 Q 80 10 140 30 Q 200 50 260 30"
                    stroke={PINK}
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="4 2"
                  />
                  <circle cx="20" cy="30" r="5" fill={PINK} />
                  <circle cx="140" cy="30" r="5" fill={PINK} />
                  <circle cx="260" cy="30" r="5" fill={PINK} />
                  <text
                    x="10"
                    y="52"
                    style={{
                      fontFamily: "Space Mono",
                      fontSize: "8px",
                      fill: "#888",
                    }}
                  >
                    age 11
                  </text>
                  <text
                    x="120"
                    y="52"
                    style={{
                      fontFamily: "Space Mono",
                      fontSize: "8px",
                      fill: "#888",
                    }}
                  >
                    800 subs
                  </text>
                  <text
                    x="240"
                    y="52"
                    style={{
                      fontFamily: "Space Mono",
                      fontSize: "8px",
                      fill: "#888",
                    }}
                  >
                    now
                  </text>
                </svg>
              </div>
              <p className="body-text" style={{ marginBottom: 16 }}>
                After realizing her videos earned more audience with a little
                aesthetic flair, she proudly hit 800 followers and probably
                thought she was famous.
              </p>
              <p
                className="body-text"
                style={{ fontWeight: 700, color: DARK, fontStyle: "italic" }}
              >
                That's when it clicked: people are suckers for pretty visuals.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 8,
              }}
            >
              {gridLabels.map((label, i) => (
                <div
                  key={i}
                  className="grid-photo"
                  style={{
                    height: i % 2 === 0 ? 140 : 100,
                    background: gridColors[i],
                  }}
                >
                  <div
                    className="photo-placeholder"
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "transparent",
                    }}
                  >
                    <span style={{ position: "relative", zIndex: 1 }}>
                      {label}
                    </span>
                  </div>
                </div>
              ))}
              <div style={{ gridColumn: "1 / -1", paddingTop: 8 }}>
                <p
                  className="body-text"
                  style={{ fontSize: 10, textAlign: "right", color: "#888" }}
                >
                  Seven years later, she's basically a pro at grabbing
                  attention.
                  <br />
                  <em>it's on Stacey, she's behind it ✦</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section
        id="work"
        style={{ background: DARK, padding: "80px 40px", color: "white" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            className="section-label"
            style={{ color: "#666", marginBottom: 60 }}
          >
            — 02 / philosophy
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
              <p className="big-quote" style={{ marginBottom: 24 }}>
                it's not just editing,
                <br />
                it's <span className="pink-text">vibing</span>
                <br />
                with visuals.
              </p>
              <p
                className="body-text"
                style={{ color: "#aaa", marginBottom: 24 }}
              >
                Here to set the tempo as slow burn: multi-channel, multi-medium,
                and always deliberate. Born to capture the perfect look that
                feels one millisecond from perfect.
              </p>
              <p className="body-text" style={{ color: "#666", fontSize: 10 }}>
                My content primarily resonates with Gen Z,
                <br />
                and 41% of my audience aged 18-25.
              </p>
            </div>

            <div>
              <div style={{ marginBottom: 24 }}>
                <p
                  className="section-label"
                  style={{ color: "#666", marginBottom: 12 }}
                >
                  content performance
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 8,
                    height: 80,
                  }}
                >
                  {barHeights.map((h, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div
                        className="bar-chart-bar"
                        style={{
                          width: "100%",
                          height: `${h}%`,
                          opacity: 0.7 + i * 0.04,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                {photoColors.map((bg, i) => (
                  <div
                    key={i}
                    style={{
                      flex: i === 1 ? 2 : 1,
                      height: 120,
                      background: bg,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      className="photo-placeholder"
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "transparent",
                      }}
                    >
                      <span
                        style={{
                          position: "relative",
                          zIndex: 1,
                          color: "rgba(255,255,255,0.5)",
                        }}
                      >
                        img
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 60,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 2,
            }}
          >
            {stats.map(({ num, label }, i) => (
              <div
                key={i}
                style={{
                  padding: "30px 20px",
                  background: i === 1 ? PINK : "#222",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "clamp(32px, 5vw, 52px)",
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
                    color: i === 1 ? "rgba(255,255,255,0.7)" : "#666",
                    marginTop: 8,
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ background: CREAM, padding: "80px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p className="section-label" style={{ marginBottom: 40 }}>
            — 03 / skills & wants
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
              alignItems: "start",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "clamp(40px, 8vw, 80px)",
                  fontWeight: 900,
                  color: PINK,
                  fontStyle: "italic",
                  lineHeight: 0.9,
                  marginBottom: 32,
                }}
              >
                skills
                <br />&<br />
                wants
              </h2>
              <div style={{ marginBottom: 24 }}>
                <p className="section-label" style={{ marginBottom: 12 }}>
                  I love sharing snippets of:
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
                      ·
                    </span>
                    <p className="body-text">{item}</p>
                  </div>
                ))}
              </div>
              <div>
                <p className="section-label" style={{ marginBottom: 12 }}>
                  I do:
                </p>
                {doItems.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 8,
                      marginBottom: 6,
                      alignItems: "center",
                    }}
                  >
                    <span style={{ color: PINK, fontSize: 8 }}>✦</span>
                    <p className="body-text">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{ marginBottom: 32 }}>
                {skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
              <div style={{ marginBottom: 24 }}>
                <p className="section-label" style={{ marginBottom: 12 }}>
                  signature palette
                </p>
                <div style={{ display: "flex", gap: 8 }}>
                  {palette.map((c) => (
                    <div
                      key={c}
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: c,
                        border: "1px solid rgba(0,0,0,0.1)",
                      }}
                    />
                  ))}
                </div>
              </div>
              <div style={{ border: "1px solid #ddd", padding: 20 }}>
                <p className="section-label" style={{ marginBottom: 12 }}>
                  typefaces
                </p>
                <p
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: 28,
                    fontWeight: 900,
                    color: DARK,
                    marginBottom: 4,
                  }}
                >
                  Playfair Display
                </p>
                <p
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: 11,
                    color: "#888",
                    letterSpacing: 1,
                  }}
                >
                  SPACE MONO — for captions
                </p>
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
            — 04 / let's connect
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
            ✦ open for collabs & freelance ✦
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
              "Thank you so much for taking the time to learn about my
              portfolio! I always appreciate an opportunity to learn and grow."
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
              If you're interested in working together, I'd love to hear from
              you.
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
