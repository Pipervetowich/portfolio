import { useEffect } from "react";
import "../styles/Casestudybandwidth.css";

interface Props {
  image: string;
  onBack: () => void;
}

export default function CaseStudyBandWidth({ image, onBack }: Props) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="bw">
      <button className="cs-back" onClick={onBack}>
        ← Back to work
      </button>

      <header className="bw__hero">
        <div className="bw__hero-content">
          <span className="bw__eyebrow">Capstone Project · 2025</span>
          <h1 className="bw__title">
            Band
            <br />
            <em>Width</em>
          </h1>
          <p className="bw__tagline">
            One platform for local music discovery, promotion & booking.
          </p>
          <div className="bw__chips">
            {["React Native", "Figma", "Expo", "Adobe Illustrator"].map((t) => (
              <span key={t} className="bw__chip">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="bw__hero-img-wrap">
          <img src={image} alt="Band Width Logo" className="bw__hero-img" />
        </div>
      </header>

      <div className="bw__stats">
        {[
          { n: "30+", l: "Interviews" },
          { n: "58%", l: "Friction Drop" },
          { n: "3", l: "Iterations" },
          { n: "40+", l: "Screens" },
        ].map(({ n, l }) => (
          <div key={l} className="bw__stat">
            <span className="bw__stat-n">{n}</span>
            <span className="bw__stat-l">{l}</span>
          </div>
        ))}
      </div>

      <main className="bw__body">
        <section className="bw__section">
          <p className="bw__label">Overview</p>
          <p className="bw__lead">
            Local music scenes are fragmented across Instagram DMs, Facebook
            Events, and word of mouth. Band Width unifies discovery, promotion,
            and event booking into one community-focused mobile app — built for
            bands, fans, and venue hosts alike.
          </p>
        </section>

        <section className="bw__callout">
          <p className="bw__label">The Problem</p>
          <p className="bw__callout-text">
            "Bands can't reach audiences. Fans don't know what's happening.
            Hosts have no central booking tool."
          </p>
        </section>

        <section className="bw__section">
          <p className="bw__label">Process</p>
          <div className="bw__process">
            {[
              {
                num: "01",
                phase: "Discover",
                items: [
                  "30+ interviews across bands, fans, and venue hosts",
                  "Competitive audit: Spotify, Bandsintown, Eventbrite",
                  "Identified fragmentation as the core pain point",
                  "Built 3 distinct user personas",
                ],
              },
              {
                num: "02",
                phase: "Define",
                items: [
                  "Affinity mapping of 200+ interview data points",
                  "Feature priority matrix across all 3 user types",
                  "User journey maps for discovery, booking, promotion",
                  "Defined MVP scope for capstone timeline",
                ],
              },
              {
                num: "03",
                phase: "Design",
                items: [
                  "Information architecture for 3-tab navigation",
                  "40+ wireframes across all user flows",
                  "High-fidelity Figma prototype with full design system",
                  "Branding: logo, typography, color, icon set",
                ],
              },
              {
                num: "04",
                phase: "Test",
                items: [
                  "3 rounds of moderated usability testing",
                  "58% reduction in onboarding friction",
                  "Iterated on event discovery and booking flows",
                  "Presented at CU Boulder capstone showcase",
                ],
              },
            ].map(({ num, phase, items }) => (
              <div key={num} className="bw__phase">
                <div className="bw__phase-head">
                  <span className="bw__phase-num">{num}</span>
                  <span className="bw__phase-name">{phase}</span>
                </div>
                <ul className="bw__phase-list">
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bw__outcome">
          <p className="bw__label">Outcome</p>
          <p className="bw__outcome-text">
            Delivered a fully interactive 40+ screen prototype, a complete
            design system, and a research synthesis deck. The final design
            reduced key friction by 58% and was recognized at CU Boulder's
            capstone design showcase.
          </p>
        </section>

        <div className="bw__cta">
          <a href="mailto:pipervetowich@gmail.com" className="cs-cta-btn">
            See the full prototype →
          </a>
        </div>
      </main>
    </div>
  );
}
