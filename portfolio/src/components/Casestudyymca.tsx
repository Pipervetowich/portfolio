import { useEffect } from "react";
import "../styles/Casestudyymca.css";

interface Props {
  image: string;
  onBack: () => void;
}

export default function CaseStudyYMCA({ image, onBack }: Props) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="ymca">
      <button className="cs-back" onClick={onBack}>
        ← Back to work
      </button>

      <header className="ymca__hero">
        <div className="ymca__hero-left">
          <img src={image} alt="YMCA Rebrand" className="ymca__hero-img" />
        </div>
        <div className="ymca__hero-right">
          <span className="ymca__tag">Identity & Branding · 2026</span>
          <h1 className="ymca__title">
            YMCA
            <br />
            <span>Rebrand</span>
          </h1>
          <p className="ymca__desc">
            A full visual identity overhaul — unifying the YMCA's brand across
            digital platforms, print materials, and physical spaces.
          </p>
          <div className="ymca__meta">
            <div>
              <span className="ymca__meta-label">Role</span>
              <span className="ymca__meta-val">Graphic Designer</span>
            </div>
            <div>
              <span className="ymca__meta-label">Tools</span>
              <span className="ymca__meta-val">
                Adobe Illustrator · Brand Identity · Marketing
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="ymca__body">
        <section className="ymca__problem">
          <p className="ymca__label">The Problem</p>
          <p className="ymca__problem-text">
            The YMCA's visual identity was fragmented — different locations used
            different colors, font weights, and logo lockups. The result was a
            brand that felt scattered and dated, undermining trust and
            recognition in local communities.
          </p>
        </section>

        <div className="ymca__stats">
          {[
            { n: "3", l: "Logo Variants" },
            { n: "5+", l: "Brand Applications" },
            { n: "AA", l: "WCAG Contrast" },
            { n: "1", l: "Cohesive System" },
          ].map(({ n, l }) => (
            <div key={l} className="ymca__stat">
              <span className="ymca__stat-n">{n}</span>
              <span className="ymca__stat-l">{l}</span>
            </div>
          ))}
        </div>

        <section className="ymca__section">
          <p className="ymca__label">Process</p>
          <div className="ymca__steps">
            {[
              {
                num: "01",
                phase: "Brand Audit",
                items: [
                  "Audited materials across print & digital",
                  "Competitor research: fitness & community orgs",
                  "Community member perception interviews",
                  "Mapped inconsistencies across 4 brand dimensions",
                ],
              },
              {
                num: "02",
                phase: "Brand Strategy",
                items: [
                  "Defined brand pillars: community, energy, accessibility, trust",
                  "Created mood boards for 3 identity directions",
                  "Segmented target audiences",
                  "Selected direction via stakeholder vote",
                ],
              },
              {
                num: "03",
                phase: "Identity System",
                items: [
                  "Redesigned primary logo with cleaner geometry",
                  "Built accessible color palette (WCAG AA)",
                  "Paired modern display font with legible body font",
                  "Designed 5 application mockups: apparel, signage, digital",
                ],
              },
              {
                num: "04",
                phase: "Review & Refine",
                items: [
                  "Staff & community member review sessions",
                  "Legibility testing at xs–xl sizes",
                  "Color contrast compliance verification",
                  "Final brand guidelines document delivered",
                ],
              },
            ].map(({ num, phase, items }) => (
              <div key={num} className="ymca__step">
                <div className="ymca__step-head">
                  <span className="ymca__step-num">{num}</span>
                  <span className="ymca__step-phase">{phase}</span>
                </div>
                <ul className="ymca__step-list">
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="ymca__outcome">
          <p className="ymca__label">Outcome</p>
          <p className="ymca__outcome-text">
            Delivered a complete brand identity package: logo suite, color
            system, typography guide, and application mockups across physical
            and digital touchpoints. The refreshed identity tested as more
            modern and approachable with community focus groups.
          </p>
        </section>

        <div className="ymca__cta">
          <a href="mailto:pipervetowich@gmail.com" className="cs-cta-btn">
            See the full brand deck →
          </a>
        </div>
      </main>
    </div>
  );
}
