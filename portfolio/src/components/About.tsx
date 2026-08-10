import "../styles/About.css";
import { stats, loveItems } from "../Constants";

interface AboutProps {
  piperPhoto2: string;
  outdoorPhotos: string[];
}

const interests = [
  {
    title: "Climbing",
    emoji: "🧗",
    description:
      "I love climbing! Whether I'm bouldering at the gym or sport climbing in Boulder Canyon, I keep pushing myself. There's always another problem to crack.",
    detail: "Sport · Bouldering",
  },
  {
    title: "Hiking",
    emoji: "⛰️",
    description:
      "There's nothing better than a long trail, a good view, and a well-earned trail snack. Hiking keeps me outside and inspired.",
    detail: "Front Range · Backcountry",
  },
  {
    title: "Snowboarding",
    emoji: "🏂",
    description:
      "Winter in Colorado means shredding on the mountain. When it's not climbing season, I'm hitting the slopes and making the most of every run.",
    detail: "Winter Park · Copper · Eldora",
  },
  {
    title: "Reading",
    emoji: "📖",
    description:
      "I'm drawn to fiction that makes me think differently. Reading keeps my ideas fresh and reminds me that good storytelling is everything.",
    detail: "For Fun",
  },
];

export default function About({ piperPhoto2, outdoorPhotos }: AboutProps) {
  return (
    <section id="about-me" className="about">
      <div className="about__inner">
        <div className="about__grid">
          <div>
            <h1 className="about__heading">
              Hello, I am
              <br />
              <span>Piper,</span>
            </h1>

            <p className="body-text" style={{ marginBottom: 20 }}>
              I'm a recent graduate of the University of Colorado, Boulder,
              where I earned my B.S. in Creative Technology and Design in May
              2026. Throughout my studies, I developed a strong foundation in
              design thinking, user experience, front-end development, and
              creative problem-solving. My experience spans designing intuitive
              digital experiences, building responsive interfaces, and iterating
              solutions based on user feedback. Beyond technical skills, I value
              collaboration, adaptability, and attention to detail.
            </p>

            <p className="body-text" style={{ marginBottom: 28 }}>
              I'm actively seeking entry-level opportunities where I can
              continue learning, apply my skills to real-world projects, and
              contribute meaningfully to a team. I'm especially excited to
              innovate and create engaging experiences for users.
            </p>

            <div style={{ marginBottom: 16 }}>
              <h2 className="section-label" style={{ marginBottom: 12 }}>
                I care about:
              </h2>
              {loveItems.map((item, i) => (
                <div key={i} className="about__love-item">
                  <span className="about__love-bullet">✦</span>
                  <p className="body-text">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about__media">
            <div className="about__photo-frame">
              <img
                src={piperPhoto2}
                alt="Portrait of Piper Vetowich, UX designer based in Colorado"
                className="about__photo"
              />
            </div>

            <div className="about__stats">
              {stats.map(({ num, label }, i) => (
                <div
                  key={i}
                  className={`about__stat ${i === 1 ? "about__stat--highlight" : ""}`}
                >
                  <h2 className="about__stat-num">{num}</h2>
                  <p
                    className="section-label"
                    style={{ marginTop: 6, fontSize: 12 }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="about__interests">
          <h2 className="section-label" style={{ marginBottom: 24 }}>
            Outside Work:
          </h2>
          <div className="about__interests-grid">
            {interests.map((interest) => (
              <div key={interest.title} className="about__interest-card">
                <div className="about__interest-emoji">{interest.emoji}</div>
                <div className="about__interest-body">
                  <h3 className="about__interest-title">{interest.title}</h3>
                  <p className="about__interest-detail">{interest.detail}</p>
                  <p className="about__interest-desc">{interest.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Polaroid string */}
        <div className="about__string-wrap">
          <div className="about__string-line" />
          {[
            {
              rotation: -4,
              caption: "Zion National Park",
              photo: outdoorPhotos[2],
            },
            {
              rotation: 3,
              caption: "Multipitch Climb",
              photo: outdoorPhotos[0],
            },
            { rotation: -2, caption: "Lake Hike", photo: outdoorPhotos[3] },
            { rotation: 5, caption: "Moab, UT", photo: outdoorPhotos[1] },
            { rotation: -3, caption: "Shredding", photo: outdoorPhotos[4] },
          ].map((p, i) => (
            <div
              key={i}
              className="about__polaroid-hang"
              style={{ "--rot": `${p.rotation}deg` } as React.CSSProperties}
            >
              <div className="about__string-clip" />
              <div className="about__polaroid">
                <div className="about__polaroid-img-wrap">
                  {p.photo ? (
                    <img
                      src={p.photo}
                      alt={`Polaroid photo of Piper — ${p.caption}`}
                    />
                  ) : (
                    <div className="about__polaroid-placeholder">
                      <span>+</span>
                    </div>
                  )}
                </div>
                <p className="about__polaroid-caption">{p.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
