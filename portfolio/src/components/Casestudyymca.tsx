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
            A full visual identity overhaul rooted in community, wellness, and
            human connection — redesigning the YMCA logo to feel welcoming,
            modern, and versatile across all brand touchpoints.
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
        {/* Problem */}
        <section className="ymca__problem">
          <h2 className="ymca__label">The Problem</h2>
          <p className="ymca__problem-text">
            The current YMCA logo feels outdated, and the existing color
            selections don't reflect the organization's core values of openness,
            youth, and community. The identity needed to feel more welcoming,
            human, and versatile — while still being immediately recognizable.
          </p>
        </section>

        {/* Stats */}
        <div className="ymca__stats">
          {[
            { n: "3", l: "Concept Directions" },
            { n: "4", l: "Refinement Iterations" },
            { n: "1", l: "Final Logo System" },
            { n: "∞", l: "Merch & Signage Ready" },
          ].map(({ n, l }) => (
            <div key={l} className="ymca__stat">
              <span className="ymca__stat-n">{n}</span>
              <span className="ymca__stat-l">{l}</span>
            </div>
          ))}
        </div>

        {/* Initial Explorations */}
        <section className="ymca__section">
          <h2 className="ymca__label">Initial Explorations</h2>
          <p className="ymca__body-text">
            I started by researching the existing YMCA logo and looking at
            comparable organizations for inspiration. I explored community
            recreation centers and people-centered logos to understand what
            visual language communicates warmth and accessibility. I was drawn
            to logos that radiate community while remaining professional, with
            colors that feel welcoming rather than loud and vibrant. A recurring
            theme in my research was the use of a person or human figure — since
            community is central to the YMCA's mission, a person felt like a
            universal sign for life and wellness.
          </p>
        </section>

        {/* Concept Directions */}
        <section className="ymca__section">
          <h2 className="ymca__label">Concept Directions</h2>
          <div className="ymca__directions">
            <div className="ymca__direction-card">
              <span className="ymca__direction-label">Direction A</span>
              <p className="ymca__direction-text">
                This direction keeps the original Y but adds the full "YMCA"
                lettering, since most people refer to the organization by its
                full name rather than just "The Y." I experimented with sharp
                edges, but they didn't give the same friendly vibe — curved
                edges felt more approachable. I tried to maintain a playful
                small-and-large letter dynamic using the same original YMCA
                colors, though I wasn't fully satisfied with how the palette
                translated to this form.
              </p>
            </div>

            <div className="ymca__direction-card">
              <span className="ymca__direction-label">Direction B</span>
              <p className="ymca__direction-text">
                This direction uses a person as the Y, giving the logo more
                character and personality. The figure's arms are raised as if
                happy — portraying a welcoming, energetic identity. The YMCA is
                all about community and family, and a human figure communicates
                that immediately. I used the existing YMCA colors as a starting
                point but planned to revisit the palette in refinement.
              </p>
            </div>

            <div className="ymca__direction-card">
              <span className="ymca__direction-label">Direction C</span>
              <p className="ymca__direction-text">
                A more experimental letterform mark — modern, simple, and
                minimal. I kept all letters curved and fun to reflect openness
                and inclusivity. While it leaned into current design trends, the
                quirky "y" gave it a unique identity. This design would
                translate easily to merch and promotional materials, but
                ultimately felt less aligned with the YMCA's community-centered
                values than Direction B.
              </p>
            </div>
          </div>
        </section>

        {/* Rationale */}
        <section className="ymca__section">
          <h2 className="ymca__label">Rationale for Final Direction</h2>
          <p className="ymca__body-text">
            I chose to move forward with the person-as-Y concept from Direction
            B. The blocky lettering of Direction A felt too catered to a kids'
            center or dynamic gym — not the stable, community-centered feel of
            the YMCA. Direction C, while modern, read more corporate than
            communal. The human figure best embodies the YMCA's values: it
            emphasizes wellness, human connection, and inclusivity at a glance.
            It's also highly versatile — easy to place on signs, merch,
            documents, and digital platforms while remaining instantly
            recognizable.
          </p>
        </section>

        {/* Refinement Process */}
        <section className="ymca__section">
          <h2 className="ymca__label">Refinement</h2>
          <div className="ymca__steps">
            {[
              {
                num: "01",
                phase: "Iteration 1",
                items: [
                  "Refined and polished the original sketch into a cleaner digital form",
                  "Legs felt slightly too thin — planned to match arm weight",
                  "Used original YMCA colors as a placeholder palette",
                  "Felt a little aggressive with the red; needed to soften the tone",
                ],
              },
              {
                num: "02",
                phase: "Iteration 2",
                items: [
                  "Tried different colors and a new font to reduce boldness",
                  "Flipped the Y design to better match how people read and write lowercase y's",
                  "Repositioned 'The' to fit more naturally in the curves of the figure",
                  "Identified asymmetry in the right arm — flagged for next iteration",
                ],
              },
              {
                num: "03",
                phase: "Iteration 3",
                items: [
                  "Experimented with halved color sections rather than a single accent",
                  "The split color approach felt too choppy — reverted to accent style",
                  "Tested symmetrical legs vs. dynamic short/long leg — both evaluated",
                  "Font still undecided; continued exploring options",
                ],
              },
              {
                num: "04",
                phase: "Final Design",
                items: [
                  "Adjusted legs to be slightly different but less extreme than early drafts",
                  "Simplified letterforms to complement the figure without competing",
                  "Shifted to a blue palette — friendly, open, and less aggressive than red",
                  "Final design radiates wellness and human connection while maintaining the Y",
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

        {/* Outcome */}
        <section className="ymca__outcome">
          <h2 className="ymca__label">Outcome</h2>
          <p className="ymca__outcome-text">
            The final logo uses a human figure as the Y — arms raised, conveying
            energy and welcome — paired with simplified lettering and a calmer
            blue palette. It pays homage to the original YMCA identity while
            giving it more personality and purpose. The design is versatile
            enough for signage, apparel, digital platforms, and print materials,
            and it communicates the YMCA's core values of community, wellness,
            and human connection at a glance.
          </p>
        </section>
      </main>
    </div>
  );
}
