import { useEffect } from "react";
import "../styles/Casestudydenverzoo.css";

interface Props {
  image: string;
  onBack: () => void;
}

export default function CaseStudyDenverZoo({ image, onBack }: Props) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="dz">
      <button className="cs-back" onClick={onBack}>
        ← Back to work
      </button>

      <header className="dz__hero">
        <div className="dz__hero-text">
          <p className="dz__kicker">UX/UI Design · 2024</p>
          <h1 className="dz__title">
            Denver Zoo
            <br />
            <span>Redesign</span>
          </h1>
          <p className="dz__role">Role: UX/UI Designer</p>
          <div className="dz__tools-row">
            {["Figma", "User Testing", "User Flows"].map((t) => (
              <span key={t} className="dz__tool-chip">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="dz__hero-img-wrap">
          <img src={image} alt="Denver Zoo" className="dz__hero-img" />
        </div>
      </header>

      <div className="dz__intro-strip">
        <p className="dz__intro-text">
          How do you help 2 million annual visitors find their way — online and
          in the zoo?
        </p>
      </div>

      <main className="dz__body">
        <section className="dz__two-col">
          <div>
            <p className="dz__label">The Challenge</p>
            <p className="dz__body-text">
              The Denver Zoo's existing website buried critical visitor
              information under confusing navigation. Ticket purchases had a
              high abandonment rate due to a convoluted checkout flow and
              unclear pricing.
            </p>
          </div>
          <div>
            <p className="dz__label">My Approach</p>
            <p className="dz__body-text">
              I led a full UX redesign grounded in user research — starting with
              interviews and a competitive audit, working through personas and
              journey maps, and delivering an interactive Figma prototype.
            </p>
          </div>
        </section>

        <div className="dz__metrics">
          {[
            { n: "40%", l: "Faster ticket purchase" },
            { n: "60%", l: "Faster info retrieval" },
            { n: "8", l: "User interviews" },
            { n: "3", l: "Design iterations" },
          ].map(({ n, l }) => (
            <div key={l} className="dz__metric">
              <p className="dz__metric-n">{n}</p>
              <p className="dz__metric-l">{l}</p>
            </div>
          ))}
        </div>

        <section className="dz__section">
          <p className="dz__label">Process</p>
          <div className="dz__timeline">
            {[
              {
                num: "01",
                phase: "Discover",
                items: [
                  "8 user interviews with zoo visitors",
                  "Competitive audit of 5 similar zoo websites",
                  "Heuristic evaluation (Nielsen's 10 principles)",
                  "Journey mapping: homepage → ticket confirmation",
                ],
              },
              {
                num: "02",
                phase: "Define",
                items: [
                  "Affinity mapping from interview transcripts",
                  "3 primary user personas developed",
                  "Pain points: confusing nav, unclear pricing, slow checkout",
                  "Feature prioritization for redesign scope",
                ],
              },
              {
                num: "03",
                phase: "Design",
                items: [
                  "12 screens wireframed (lo-fi → hi-fi)",
                  "Interactive Figma prototype with revised nav",
                  "Simplified ticket flow: 7 steps → 4",
                  "Improved visual hierarchy and CTA placement",
                ],
              },
              {
                num: "04",
                phase: "Test",
                items: [
                  "Usability tests with 6 participants",
                  "3 rounds of iteration based on feedback",
                  "Task completion rate measurements",
                  "Stakeholder presentation of final recommendations",
                ],
              },
            ].map(({ num, phase, items }) => (
              <div key={num} className="dz__timeline-item">
                <div className="dz__timeline-num">{num}</div>
                <div className="dz__timeline-content">
                  <p className="dz__timeline-phase">{phase}</p>
                  <ul className="dz__timeline-list">
                    {items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="dz__outcome">
          <p className="dz__label">Outcome</p>
          <p className="dz__outcome-text">
            The redesigned prototype reduced ticket purchase task time by 40% in
            usability testing. Navigation restructuring helped users find
            exhibit information 60% faster. Presented as a comprehensive UX case
            study at CU Boulder's design showcase.
          </p>
        </section>
      </main>
    </div>
  );
}
