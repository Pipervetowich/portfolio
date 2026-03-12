import { useEffect } from "react";
import "../styles/Casestudybhc.css";

interface Props {
  image: string;
  onBack: () => void;
}

export default function CaseStudyBHC({ image, onBack }: Props) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="bhc">
      <button className="cs-back" onClick={onBack}>
        ← Back to work
      </button>

      <header className="bhc__hero">
        <div className="bhc__hero-img-wrap">
          <img
            src={image}
            alt="Boulder Housing Coalition"
            className="bhc__hero-img"
          />
          <div className="bhc__hero-overlay" />
        </div>
        <div className="bhc__hero-text">
          <p className="bhc__kicker">UX Audit · 2025</p>
          <h1 className="bhc__title">
            Boulder
            <br />
            Housing
            <br />
            <span>Coalition</span>
          </h1>
          <p className="bhc__subtitle">UX Audit & Redesign Recommendations</p>
          <div className="bhc__tools-row">
            {["Figma", "User Testing", "Accessibility"].map((t) => (
              <span key={t} className="bhc__tool-chip">
                {t}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="bhc__banner">
        <p>
          When the most vulnerable users can't access affordable housing
          resources online, design failures become equity failures.
        </p>
      </div>

      <main className="bhc__body">
        <section className="bhc__two-col">
          <div>
            <p className="bhc__label">Overview</p>
            <p className="bhc__body-text">
              The Boulder Housing Coalition provides permanently affordable
              cooperative housing for low-income residents. Their website is a
              critical access point — but usability and accessibility issues
              were preventing the people who needed it most from using it
              effectively.
            </p>
          </div>
          <div>
            <p className="bhc__label">My Role</p>
            <p className="bhc__body-text">
              I conducted a comprehensive expert UX audit, documenting 24 issues
              across the site with severity ratings, identifying WCAG 2.1
              violations, and delivering both a written report and a Figma
              redesign mockup.
            </p>
          </div>
        </section>

        <div className="bhc__findings">
          {[
            {
              id: "01",
              severity: "Critical",
              count: "9",
              label: "WCAG 2.1 accessibility violations",
            },
            {
              id: "02",
              severity: "High",
              count: "8",
              label: "Navigation & flow failures",
            },
            {
              id: "03",
              severity: "Medium",
              count: "5",
              label: "Content clarity issues",
            },
            {
              id: "04",
              severity: "Low",
              count: "2",
              label: "Visual inconsistencies",
            },
          ].map(({ id, severity, count, label }) => (
            <div key={id} className="bhc__finding">
              <span className="bhc__finding-severity">{severity}</span>
              <span className="bhc__finding-count">{count}</span>
              <span className="bhc__finding-label">{label}</span>
            </div>
          ))}
        </div>

        <section className="bhc__section">
          <p className="bhc__label">Process</p>
          <div className="bhc__process">
            {[
              {
                num: "01",
                phase: "Heuristic Evaluation",
                detail:
                  "Evaluated all key pages against Nielsen's 10 usability heuristics. Documented 24 distinct issues with severity ratings 1–4. Flagged 9 WCAG 2.1 violations affecting screen reader users, low-vision visitors, and keyboard navigators.",
              },
              {
                num: "02",
                phase: "Journey Mapping",
                detail:
                  "Mapped 2 critical user journeys: finding available housing resources and completing an application. Identified 3 critical path failures — places where users couldn't complete their goal regardless of effort.",
              },
              {
                num: "03",
                phase: "Redesign Mockup",
                detail:
                  "Wireframed key page redesigns in Figma. Improved information architecture, simplified navigation, and redesigned the application flow. Added accessible color contrast and enlarged tap targets throughout.",
              },
              {
                num: "04",
                phase: "Stakeholder Delivery",
                detail:
                  "Walked BHC staff through audit findings with annotated screenshots. Presented the Figma redesign mockup with rationale for each change. Delivered a 30-page report and Figma file for the development team.",
              },
            ].map(({ num, phase, detail }) => (
              <div key={num} className="bhc__process-item">
                <div className="bhc__process-num">{num}</div>
                <div className="bhc__process-content">
                  <p className="bhc__process-phase">{phase}</p>
                  <p className="bhc__process-detail">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bhc__stats">
          {[
            { n: "24", l: "Total issues" },
            { n: "9", l: "A11y violations" },
            { n: "30pg", l: "Audit report" },
            { n: "2", l: "Journeys mapped" },
          ].map(({ n, l }) => (
            <div key={l} className="bhc__stat">
              <span className="bhc__stat-n">{n}</span>
              <span className="bhc__stat-l">{l}</span>
            </div>
          ))}
        </div>

        <section className="bhc__outcome">
          <p className="bhc__label">Outcome</p>
          <p className="bhc__outcome-text">
            Delivered a 30-page UX audit report identifying 24 usability issues
            — including 9 WCAG accessibility violations — alongside a Figma
            redesign mockup. The BHC team used the findings to guide their next
            development sprint.
          </p>
        </section>

        <div className="bhc__cta">
          <a href="mailto:pipervetowich@gmail.com" className="cs-cta-btn">
            Request the full audit report ✦
          </a>
        </div>
      </main>
    </div>
  );
}
