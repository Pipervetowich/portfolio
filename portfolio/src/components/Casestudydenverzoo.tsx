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
          <p className="dz__role">Role: UX/UI Designer & Researcher</p>
          <div className="dz__tools-row">
            {[
              "Figma",
              "User Interviews",
              "Competitive Analysis",
              "Wireframing",
              "Prototyping",
            ].map((t) => (
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
          How do you simplify a ticket purchase without losing what makes the
          zoo experience special?
        </p>
      </div>

      <main className="dz__body">
        {/* Overview + Challenge */}
        <section className="dz__two-col">
          <div>
            <h2 className="dz__label">Overview</h2>
            <p className="dz__body-text">
              The Denver Zoo's existing website made buying tickets confusing
              and repetitive — too many pages, too much redundancy. I redesigned
              the ticket purchasing flow from the ground up to be simpler,
              faster, and less frustrating for visitors.
            </p>
          </div>
          <div>
            <h2 className="dz__label">The Challenge</h2>
            <p className="dz__body-text">
              Balancing real user needs against project constraints. Users
              unanimously wanted no account creation, but it was a project
              requirement. The goal was to honor that frustration while still
              delivering a flow that felt as frictionless as possible.
            </p>
          </div>
        </section>

        {/* Research findings */}
        <section className="dz__section">
          <h2 className="dz__label">Research — User Interviews</h2>
          <p className="dz__body-text" style={{ marginBottom: 24 }}>
            I interviewed multiple users on the existing Denver Zoo website.
            Three clear pain points surfaced across every single interview.
          </p>
          <div className="dz__insights">
            {[
              {
                num: "01",
                title: "Too Many Pages",
                note: "Every person interviewed complained about the number of pages they had to click through just to buy a ticket.",
              },
              {
                num: "02",
                title: "Account Creation Feels Useless",
                note: "Everyone found making a zoo account annoying. They preferred Apple Pay — all info auto-filled, no account needed.",
              },
              {
                num: "03",
                title: "Just Let Me Pay",
                note: "Users wanted to get to payment fast. Multiple screens that could be combined were creating unnecessary frustration.",
              },
            ].map(({ num, title, note }) => (
              <div key={num} className="dz__insight-card">
                <span className="dz__insight-num">{num}</span>
                <p className="dz__insight-title">{title}</p>
                <p className="dz__insight-note">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HMW + Competitive */}
        <section className="dz__two-col" style={{ paddingTop: 0 }}>
          <div>
            <h2 className="dz__label">Competitive Analysis</h2>
            <p className="dz__body-text">
              I analyzed three competitors — the Denver Aquarium, Cheyenne
              Mountain Zoo, and the Nature & Science Museum — to understand how
              similar organizations handle ticket flows and navigation
              structure.
            </p>
          </div>
          <div>
            <h2 className="dz__label">"How Might We" Statements</h2>
            <ul className="dz__hmw-list">
              <li>
                How might we make buying tickets more enjoyable without
                overwhelming the user?
              </li>
              <li>
                How might we provide comprehensive event details and ticket
                options effectively?
              </li>
              <li>
                How might we simplify navigation and reduce the number of pages?
              </li>
            </ul>
          </div>
        </section>

        {/* Metrics */}
        <div className="dz__metrics">
          {[
            { n: "3", l: "Competitors analyzed" },
            { n: "3", l: "Design iterations" },
            { n: "7→4", l: "Ticket steps reduced" },
            { n: "2", l: "Usability test rounds" },
          ].map(({ n, l }) => (
            <div key={l} className="dz__metric">
              <h1 className="dz__metric-n">{n}</h1>
              <h2 className="dz__metric-l">{l}</h2>
            </div>
          ))}
        </div>

        {/* Design process */}
        <section className="dz__section">
          <h2 className="dz__label">Design Process</h2>
          <div className="dz__timeline">
            {[
              {
                num: "01",
                phase: "User Flow",
                items: [
                  "Mapped a simplified flow cutting unnecessary pages",
                  "Removed the 'create account' screen based on user feedback",
                  "Prioritized the most direct path from browsing to confirmation",
                ],
              },
              {
                num: "02",
                phase: "Low Fidelity",
                items: [
                  "Sketched key screens based on the user flow",
                  "Focused on layout and information hierarchy",
                  "Header, footer, and core content blocked on every page",
                ],
              },
              {
                num: "03",
                phase: "Mid Fidelity",
                items: [
                  "Built directly from lo-fi in Figma",
                  "Applied 8pt grid for consistent spacing",
                  "More structured layout, ready for real content",
                ],
              },
              {
                num: "04",
                phase: "High Fidelity",
                items: [
                  "Added real Denver Zoo photos and brand colors",
                  "Designed a footer with logo and links",
                  "Used a legible font with character to match the brand",
                ],
              },
            ].map(({ num, phase, items }) => (
              <div key={num} className="dz__timeline-item">
                <div className="dz__timeline-num">{num}</div>
                <div className="dz__timeline-content">
                  <h2 className="dz__timeline-phase">{phase}</h2>
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

        {/* Feedback + Updates */}
        <section className="dz__two-col" style={{ paddingTop: 0 }}>
          <div>
            <h2 className="dz__label">Feedback</h2>
            <p className="dz__body-text">
              Most feedback centered on spacing — a harder challenge than
              expected when working in Figma for the first time on a full
              website. I also received notes on indentation in the purchase
              summary, which I agreed with and corrected. The feedback process
              was eye-opening: user input surfaces things you genuinely don't
              notice yourself.
            </p>
          </div>
          <div>
            <h2 className="dz__label">Iterations Made</h2>
            <ul className="dz__update-list">
              <li>
                Added "read more" buttons to news articles on the home page
              </li>
              <li>
                Made the calendar interactive with month navigation arrows
              </li>
              <li>Fixed indentation in the purchase summary</li>
              <li>Refined spacing across screens using 8pt increments</li>
            </ul>
          </div>
        </section>

        {/* Outcome */}
        <section className="dz__outcome">
          <h2 className="dz__label">Outcome</h2>
          <p className="dz__outcome-text">
            Delivered a fully interactive high-fidelity Figma prototype — lo-fi
            through hi-fi — with a simplified ticket flow, real Denver Zoo
            branding, and iterated improvements from two rounds of user
            feedback. The redesign cut the ticket purchase path from 7 steps to
            4 and removed friction points every interviewed user flagged.
          </p>
        </section>
      </main>
    </div>
  );
}
