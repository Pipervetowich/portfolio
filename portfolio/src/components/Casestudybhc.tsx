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
            {[
              "Figma",
              "Heuristic Eval",
              "Card Sorting",
              "Accessibility",
              "Journey Mapping",
            ].map((t) => (
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
              cooperative housing for low-income Boulder residents. Their
              website is a critical access point — but usability and
              accessibility issues were getting in the way of the people who
              needed it most.
            </p>
          </div>
          <div>
            <p className="bhc__label">My Role</p>
            <p className="bhc__body-text">
              I conducted a full UX audit covering the Home, People's Mansion,
              and Application pages — including heuristic evaluation, card
              sorting, journey mapping, cognitive bias analysis, and an
              accessibility review. Delivered a 30-page report and Figma
              redesign mockup.
            </p>
          </div>
        </section>

        <div className="bhc__findings">
          {[
            {
              severity: "Critical",
              count: "3",
              label: "WCAG contrast failures",
            },
            { severity: "High", count: "3", label: "Navigation failures" },
            {
              severity: "Medium",
              count: "2",
              label: "Missing labels & focus issues",
            },
            { severity: "Low", count: "4", label: "Content clarity & bias" },
          ].map(({ severity, count, label }) => (
            <div key={severity} className="bhc__finding">
              <span className="bhc__finding-severity">{severity}</span>
              <span className="bhc__finding-count">{count}</span>
              <span className="bhc__finding-label">{label}</span>
            </div>
          ))}
        </div>

        <section className="bhc__section">
          <p className="bhc__label">Persona</p>
          <div className="bhc__persona-card">
            <div className="bhc__persona-left">
              <p className="bhc__persona-name">Andrew McFergy</p>
              <p className="bhc__persona-meta">
                21 · CU Boulder Student · High tech comfort
              </p>
              <p className="bhc__persona-quote">
                "Trustworthy and ad-free, but the homepage is overwhelming."
              </p>
            </div>
            <div className="bhc__persona-right">
              <p className="bhc__label" style={{ marginBottom: 12 }}>
                Pain Points
              </p>
              <ul className="bhc__persona-list">
                <li>No back/home buttons during navigation</li>
                <li>Dense text blocks are hard to scan</li>
                <li>Inconsistent colors create visual clutter</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bhc__section">
          <p className="bhc__label">Heuristic Evaluation</p>
          <p className="bhc__body-text" style={{ marginBottom: 24 }}>
            Evaluated against Nielsen's 10 usability heuristics. Five of nine
            had notable failures.
          </p>
          <div className="bhc__heuristics">
            {[
              {
                pass: true,
                h: "Match Between System & Real World",
                note: "Familiar language, content matches housing needs.",
              },
              {
                pass: true,
                h: "Consistency & Standards",
                note: "Consistent headers, typography, and layout.",
              },
              {
                pass: true,
                h: "Recognition vs. Recall",
                note: "Persistent nav and clearly labeled links aid memory.",
              },
              {
                pass: false,
                h: "Visibility of System Status",
                note: "No loading indicators — users lack transition feedback.",
              },
              {
                pass: false,
                h: "User Control & Freedom",
                note: "Forms lack cancel/undo options.",
              },
              {
                pass: false,
                h: "Error Prevention",
                note: "No real-time validation or confirmation dialogs.",
              },
              {
                pass: false,
                h: "Aesthetic & Minimalist Design",
                note: "Excessive whitespace and dense text hurt readability.",
              },
              {
                pass: false,
                h: "Help & Documentation",
                note: "No FAQ page or help center — answers are buried.",
              },
            ].map(({ pass, h, note }) => (
              <div
                key={h}
                className={`bhc__heuristic-item ${pass ? "bhc__heuristic-item--pass" : "bhc__heuristic-item--fail"}`}
              >
                <span className="bhc__heuristic-status">
                  {pass ? "✔" : "✖"}
                </span>
                <div>
                  <p className="bhc__heuristic-title">{h}</p>
                  <p className="bhc__heuristic-note">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bhc__section">
          <p className="bhc__label">Information Architecture — Card Sorting</p>
          <p className="bhc__body-text" style={{ marginBottom: 24 }}>
            Open card sorting with two participants revealed users naturally
            collapse the site into fewer, broader categories than the current
            nav provides.
          </p>
          <div className="bhc__ia-grid">
            {[
              {
                num: "01",
                title: "Simplify Navigation",
                note: "Reduce dropdowns, merge similar links.",
              },
              {
                num: "02",
                title: "Introduce a Dashboard",
                note: "Centralize listings, applications, and resources.",
              },
              {
                num: "03",
                title: "Separate Media & Portal",
                note: "Users expect these to be architecturally distinct.",
              },
              {
                num: "04",
                title: "Rename House Categories",
                note: "Participants couldn't sort house names without more context.",
              },
            ].map(({ num, title, note }) => (
              <div key={num} className="bhc__ia-card">
                <span className="bhc__ia-num">{num}</span>
                <p className="bhc__ia-title">{title}</p>
                <p className="bhc__ia-note">{note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bhc__section">
          <p className="bhc__label">User Journey — Finding the FAQ</p>
          <div className="bhc__journey-wrap">
            <div className="bhc__journey-steps">
              {[
                "Navigate to BHC Homepage",
                'Click "Resources" in the main nav',
                'Scroll to "Income Qualification"',
                "Find FAQ buried at the bottom",
              ].map((step, i, arr) => (
                <div key={i} className="bhc__journey-step">
                  <span className="bhc__journey-num">0{i + 1}</span>
                  <span className="bhc__journey-text">{step}</span>
                  {i < arr.length - 1 && (
                    <span className="bhc__journey-arrow">→</span>
                  )}
                </div>
              ))}
            </div>
            <p className="bhc__journey-verdict">
              The FAQ is buried 4 steps deep with no search, no direct link, and
              no fallback. A dedicated FAQ page in the main nav would resolve
              this entirely.
            </p>
          </div>
        </section>

        <section className="bhc__section">
          <p className="bhc__label">Accessibility Evaluation</p>
          <div className="bhc__a11y-grid">
            {[
              {
                issue: "Low Button Contrast",
                rec: "Darken Apply, Donate, and newsletter buttons to meet WCAG AA.",
              },
              {
                issue: "Missing Form Labels",
                rec: "Add accessible labels to newsletter inputs for screen readers.",
              },
              {
                issue: "Ambiguous Link Text",
                rec: "Use descriptive, unique link text explaining each destination.",
              },
              {
                issue: "Faint Focus Indicator",
                rec: "Increase outline thickness and contrast for keyboard navigation.",
              },
            ].map(({ issue, rec }) => (
              <div key={issue} className="bhc__a11y-card">
                <p className="bhc__a11y-issue">{issue}</p>
                <p className="bhc__a11y-rec">→ {rec}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bhc__stats">
          {[
            { n: "24", l: "Issues documented" },
            { n: "8", l: "Heuristic violations" },
            { n: "4", l: "A11y failures" },
            { n: "30pg", l: "Audit report" },
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
            Delivered a 30-page audit covering five research methods — heuristic
            evaluation, card sorting, journey mapping, cognitive bias analysis,
            and accessibility testing. Findings were presented to BHC staff
            alongside a Figma redesign mockup, and used to guide their next
            development sprint.
          </p>
        </section>
      </main>
    </div>
  );
}
