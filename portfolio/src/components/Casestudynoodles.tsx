import { useEffect } from "react";
import "../styles/Casestudynoodles.css";

interface Props {
  image: string;
  onBack: () => void;
}

export default function CaseStudyNoodles({ image: _image, onBack }: Props) {
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
          <div className="nd__wip-badge">🚧 Work in Progress</div>
          <p className="nd__kicker">Brand Identity & Design Systems · 2026</p>
          <h1 className="nd__title">
            Bangkok
            <br />
            <span>Olympic Identity</span>
          </h1>
          <p className="nd__desc">
            A visual identity system for Bangkok as a host city of the Olympic
            Games — rooted in Thai cultural heritage, architectural history, and
            the city's layered urban energy.
          </p>
          <div className="nd__meta">
            <div>
              <span className="nd__meta-label">Role</span>
              <span className="nd__meta-val">Brand & Systems Designer</span>
            </div>
            <div>
              <span className="nd__meta-label">Tools</span>
              <span className="nd__meta-val">
                Figma · Adobe Illustrator · Design Systems
              </span>
            </div>
            <div>
              <span className="nd__meta-label">Team</span>
              <span className="nd__meta-val">
                Emme Novak, Piper Vetowich, Aidan Youell
              </span>
            </div>
            <div>
              <span className="nd__meta-label">Course</span>
              <span className="nd__meta-val">ATLS 4519 — Design Project 2</span>
            </div>
          </div>
        </div>
        <div className="nd__hero-img-wrap nd__hero-color-block" />
      </header>

      <div className="nd__strip">
        <p className="nd__strip-text">
          "An identity that feels vibrant, layered, and alive — reflecting deep
          cultural roots while embracing modern creativity."
        </p>
      </div>

      <main className="nd__body">
        <div className="nd__wip-notice">
          <span className="nd__wip-icon">🚧</span>
          <div>
            <p className="nd__wip-title">
              This project is currently in progress.
            </p>
            <p className="nd__wip-text">
              Research and initial directions are complete. Full design system
              and final deliverables are in development — check back soon.
            </p>
          </div>
        </div>

        {/* City Context */}
        <section className="nd__two-col">
          <div>
            <p className="nd__label">City Context</p>
            <p className="nd__body-text">
              Bangkok has been the capital of Thailand since 1782, founded by
              King Rama I during the Rattanakosin era. Built along the Chao
              Phraya River with a historic canal network known as "klongs," the
              city's ceremonial name — Krung Thep Maha Nakon — reflects its deep
              royal and spiritual heritage. The city experienced rapid urban
              growth in the late 20th century, creating a striking juxtaposition
              of ancient temples and modern high-rises.
            </p>
          </div>
          <div className="nd__challenge-box">
            <p className="nd__challenge-head">The Design Challenge</p>
            <p className="nd__challenge-text">
              Olympic branding must balance two identities: Bangkok's rich
              cultural character and the universal visual language of the Games.
              The identity needs to scale from a phone screen to a stadium
              banner — and feel cohesive, respectful, and exciting across all of
              it.
            </p>
          </div>
        </section>

        <div className="nd__stats">
          {[
            { n: "1782", l: "Founded" },
            { n: "3", l: "Design Directions" },
            { n: "5", l: "Key Characteristics" },
            { n: "WIP", l: "In Development" },
          ].map(({ n, l }) => (
            <div key={l} className="nd__stat">
              <span className="nd__stat-n">{n}</span>
              <span className="nd__stat-l">{l}</span>
            </div>
          ))}
        </div>

        {/* Cultural Identity */}
        <section className="nd__section">
          <p className="nd__label">Cultural Identity</p>
          <div className="nd__process">
            <div className="nd__phase">
              <div className="nd__phase-head">
                <span className="nd__phase-num">01</span>
                <span className="nd__phase-name">Religion</span>
              </div>
              <p className="nd__phase-body">
                Strong influences from Buddhism shape Bangkok's visual language
                — from the geometry of temple spires to the gold and jewel tones
                found throughout the city's sacred architecture.
              </p>
            </div>
            <div className="nd__phase">
              <div className="nd__phase-head">
                <span className="nd__phase-num">02</span>
                <span className="nd__phase-name">Street Life</span>
              </div>
              <p className="nd__phase-body">
                Bangkok is known for its vibrant street culture — neon-lit night
                markets, tuk-tuks, and dense energy that contrast with its
                serene temple courtyards.
              </p>
            </div>
            <div className="nd__phase">
              <div className="nd__phase-head">
                <span className="nd__phase-num">03</span>
                <span className="nd__phase-name">Traditional Architecture</span>
              </div>
              <p className="nd__phase-body">
                Temples with multi-tiered roofs and intricate ornamentation are
                a defining visual feature — geometric, symmetrical, and rich
                with meaning.
              </p>
            </div>
            <div className="nd__phase">
              <div className="nd__phase-head">
                <span className="nd__phase-num">04</span>
                <span className="nd__phase-name">Urban Contrast</span>
              </div>
              <p className="nd__phase-body">
                Ancient temples sit directly beside modern high-rises — a
                layered urbanism that defines Bangkok's identity and serves as a
                core tension to explore in the design system.
              </p>
            </div>
          </div>
        </section>

        {/* Key Characteristics */}
        <section className="nd__section">
          <p className="nd__label">Key Characteristics</p>
          <div className="nd__characteristics">
            {[
              {
                num: "1",
                title: "Layered Urbanism",
                desc: "Historic temples + modern highways + rail systems coexisting in the same frame.",
              },
              {
                num: "2",
                title: "Ornamental Precision",
                desc: "Geometric, symmetrical temple detailing that rewards close inspection.",
              },
              {
                num: "3",
                title: "Fluid Movement",
                desc: "River systems, traffic flow, and canal history give the city a sense of constant motion.",
              },
              {
                num: "4",
                title: "Luminous Contrast",
                desc: "Gold temples against neon nightlife — a duality that defines the city's energy.",
              },
              {
                num: "5",
                title: "Dense Energy",
                desc: "One of the most visited cities in the world, Bangkok pulses with intensity and life.",
              },
            ].map(({ num, title, desc }) => (
              <div key={num} className="nd__characteristic">
                <span className="nd__characteristic-num">{num}</span>
                <div>
                  <p className="nd__characteristic-title">{title}</p>
                  <p className="nd__characteristic-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design Directions */}
        <section className="nd__section">
          <p className="nd__label">Initial Design Directions</p>
          <div className="nd__process">
            <div className="nd__phase">
              <div className="nd__phase-head">
                <span className="nd__phase-num">01</span>
                <span className="nd__phase-name">Vibrant</span>
              </div>
              <p className="nd__phase-body">
                Inspired by Bangkok's street signage and neighborhoods like
                Talat Noi. Uses the Sao Chingcha typeface alongside a bold
                palette of deep greens, yellow, blue, and hot pink — capturing
                the city's electric energy.
              </p>
            </div>
            <div className="nd__phase">
              <div className="nd__phase-head">
                <span className="nd__phase-num">02</span>
                <span className="nd__phase-name">National Icons Reframed</span>
              </div>
              <p className="nd__phase-body">
                Abstracted temple silhouettes, elephant forms reduced to
                geometric symbols, and Buddha represented through symmetry and
                halo geometry. Uses Thai flag colors — red, white, blue — in a
                contemporary, simplified style.
              </p>
            </div>
            <div className="nd__phase">
              <div className="nd__phase-head">
                <span className="nd__phase-num">03</span>
                <span className="nd__phase-name">Typography-Led</span>
              </div>
              <p className="nd__phase-body">
                Explores the visual richness of the Thai script alongside
                ornamental Latin letterforms. Draws from the curves and
                structure of Thai consonants to create a distinctive,
                culturally-rooted typographic identity.
              </p>
            </div>
          </div>
        </section>

        <section className="nd__outcome">
          <p className="nd__label">Next Steps</p>
          <p className="nd__outcome-text">
            With research and initial directions complete, the next phase
            focuses on refining a chosen direction into a full design system —
            including a logo suite, color and typography system, iconography,
            wayfinding, digital UI components, and application mockups across
            physical and ceremonial touchpoints for the Games.
          </p>
        </section>
      </main>
    </div>
  );
}
