import { useEffect } from "react";
import "../styles/Casestudynoodles.css";

interface Props {
  image: string;
  onBack: () => void;
}

export default function CaseStudyNoodles({ image, onBack }: Props) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="nd">
      <button className="cs-back" onClick={onBack}>
        ← Back to work
      </button>

      <header className="nd__hero">
        <div className="nd__hero-text">
          <p className="nd__kicker">Product Design · 2023</p>
          <h1 className="nd__title">
            Happy
            <br />
            <span>Noodles</span>
          </h1>
          <p className="nd__desc">
            Packaging design for a clean-ingredient, no-MSG ramen brand.
          </p>
          <div className="nd__meta">
            <div>
              <span className="nd__meta-label">Role</span>
              <span className="nd__meta-val">Product Designer</span>
            </div>
            <div>
              <span className="nd__meta-label">Tools</span>
              <span className="nd__meta-val">
                Sketching · Prototyping · Adobe Illustrator
              </span>
            </div>
          </div>
        </div>
        <div className="nd__hero-img-wrap">
          <img
            src={image}
            alt="Happy Noodles Packaging"
            className="nd__hero-img"
          />
        </div>
      </header>

      <div className="nd__strip">
        <p className="nd__strip-text">
          Standing out on a crowded shelf while staying honest about what's
          inside.
        </p>
      </div>

      <main className="nd__body">
        <section className="nd__two-col">
          <div>
            <p className="nd__label">The Brief</p>
            <p className="nd__body-text">
              Design packaging for Happy Noodles — a health-conscious instant
              ramen brand emphasizing clean ingredients and no MSG. The
              packaging needed to stand out on crowded shelves while clearly
              communicating the brand's values.
            </p>
          </div>
          <div className="nd__challenge-box">
            <p className="nd__challenge-head">The Challenge</p>
            <p className="nd__challenge-text">
              The instant noodle category is dominated by loud, cluttered
              packaging. Happy Noodles needed bold shelf presence <em>and</em>{" "}
              honest, legible communication — a balance most competitors fail to
              strike.
            </p>
          </div>
        </section>

        <div className="nd__stats">
          {[
            { n: "5", l: "Concept sketches" },
            { n: "360°", l: "Label coverage" },
            { n: "FDA", l: "Compliant" },
            { n: "3D", l: "Cup mockup" },
          ].map(({ n, l }) => (
            <div key={l} className="nd__stat">
              <span className="nd__stat-n">{n}</span>
              <span className="nd__stat-l">{l}</span>
            </div>
          ))}
        </div>

        <section className="nd__section">
          <p className="nd__label">Process</p>
          <div className="nd__process">
            {[
              {
                num: "01",
                phase: "Market Research",
                items: [
                  "Analyzed 10+ competitors in the instant noodle category",
                  "Researched FDA labeling requirements for food packaging",
                  "Identified visual trends in health-forward food brands",
                  "Defined target consumer: health-conscious young adults",
                ],
              },
              {
                num: "02",
                phase: "Creative Brief",
                items: [
                  "Brand personality: playful, warm, honest",
                  "Color palette: warm gold and deep maroon",
                  "Typography: friendly yet highly legible",
                  "Required elements: nutrition facts, ingredients, UPC, net weight",
                ],
              },
              {
                num: "03",
                phase: "Label Design",
                items: [
                  "5 initial concept sketches exploring directions",
                  "Final design executed in Adobe Illustrator",
                  "Full nutrition facts panel per FDA standards",
                  "360° wrap: front panel, mission statement, instructions",
                ],
              },
              {
                num: "04",
                phase: "Mockup & Review",
                items: [
                  "3D cup mockup for real-world visualization",
                  "Legibility review at actual print dimensions",
                  "Nutrition label accuracy and compliance check",
                  "2 rounds of iteration based on design critique",
                ],
              },
            ].map(({ num, phase, items }) => (
              <div key={num} className="nd__phase">
                <div className="nd__phase-head">
                  <span className="nd__phase-num">{num}</span>
                  <span className="nd__phase-name">{phase}</span>
                </div>
                <ul className="nd__phase-list">
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="nd__outcome">
          <p className="nd__label">Outcome</p>
          <p className="nd__outcome-text">
            Delivered a production-ready packaging design including a full 360°
            wrap-around label, 3D cup mockup, and print-ready Illustrator files.
            The design balances bold shelf presence with clear, honest
            communication of Happy Noodles' clean-ingredient mission.
          </p>
        </section>

        <div className="nd__cta">
          <a href="mailto:pipervetowich@gmail.com" className="cs-cta-btn">
            See full project files →
          </a>
        </div>
      </main>
    </div>
  );
}
