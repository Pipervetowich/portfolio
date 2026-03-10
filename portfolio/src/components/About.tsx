import "../styles/About.css";
import { stats, loveItems } from "../Constants";

interface AboutProps {
  piperPhoto2: string;
}

export default function About({ piperPhoto2 }: AboutProps) {
  return (
    <section id="about-me" className="about">
      <div className="about__inner">
        <p className="section-label" style={{ marginBottom: 40 }}>
          About Me
        </p>

        <div className="about__grid">
          <div>
            <h2 className="about__heading">
              Hello, I am
              <br />
              <span>Piper.</span>
            </h2>

            <p className="body-text" style={{ marginBottom: 20 }}>
              I'm a 4th-year student at the University of Colorado, Boulder,
              completing my B.S. in Creative Technology and Design in May 2026.
              Throughout my studies, I've developed a strong foundation in
              design thinking, user experience, front-end development, and
              creative problem-solving. My experience spans designing intuitive
              digital experiences, building responsive interfaces, and iterating
              solutions based on user feedback. Beyond technical skills, I value
              collaboration, adaptability, and attention to detail.
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
                alt="Piper Vetowich"
                className="about__photo"
              />
            </div>

            <div className="about__stats">
              {stats.map(({ num, label }, i) => (
                <div
                  key={i}
                  className={`about__stat ${i === 1 ? "about__stat--highlight" : ""}`}
                >
                  <p className="about__stat-num">{num}</p>
                  <p
                    className="section-label"
                    style={{ marginTop: 6, fontSize: 9 }}
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
  );
}
