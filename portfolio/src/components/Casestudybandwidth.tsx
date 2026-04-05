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
          <span className="bw__eyebrow">Capstone Project</span>
          <h1 className="bw__title">
            Band
            <br />
            <em>Width</em>
          </h1>
          <p className="bw__tagline">
            A mobile app connecting local bands, fans, and venue hosts — built
            in React Native with Expo over 11 weeks.
          </p>
          <div className="bw__chips">
            {[
              "React Native",
              "Figma",
              "Expo",
              "Adobe Illustrator",
              "User Testing",
            ].map((t) => (
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
          { n: "27+", l: "User Survey Responses" },
          { n: "3", l: "User Test Rounds" },
          { n: "4+", l: "Figma Designs" },
          { n: "11", l: "Weeks of Development" },
        ].map(({ n, l }) => (
          <div key={l} className="bw__stat">
            <span className="bw__stat-n">{n}</span>
            <span className="bw__stat-l">{l}</span>
          </div>
        ))}
      </div>

      <main className="bw__body">
        <section className="bw__section">
          <h2 className="bw__label">Overview</h2>
          <p className="bw__lead">
            Local music scenes are fragmented across Instagram DMs, Facebook
            Events, and word of mouth. BandWidth is a community-focused mobile
            app that unifies discovery, promotion, and event booking for bands,
            fans, and venue hosts — designed and built as a capstone project at
            CU Boulder with a team of three over 11 weeks.
          </p>
        </section>

        <section className="bw__callout">
          <h2 className="bw__label">The Problem</h2>
          <p className="bw__callout-text">
            "Bands can't reach audiences. Fans don't know what's happening
            locally. Hosts have no central booking tool."
          </p>
        </section>

        <section className="bw__section">
          <h2 className="bw__label">Process</h2>
          <div className="bw__process">
            {[
              {
                num: "01",
                phase: "Research & Setup",
                items: [
                  "Set up Expo so the live app could be viewed on phones while coding",
                  "Created Trello board to manage tasks across the team",
                  "Conducted stakeholder interviews: classmates, band members, and mentor Peter R.",
                  "A/B tested low-fidelity Figma screens with users to understand navigation preferences",
                ],
              },
              {
                num: "02",
                phase: "Define & Design",
                items: [
                  "Designed home, profile, discover, settings, and post screens in Figma",
                  "Built low- then mid-fidelity prototypes with placeholder content",
                  "Distributed Google Form survey — received 27+ responses from music communities on Reddit",
                  "Conducted affinity mapping to identify recurring pain points by screen",
                ],
              },
              {
                num: "03",
                phase: "Build & Iterate",
                items: [
                  "Grey boxed and then static coded the Figma designs into React Native",
                  "Built reusable components for home screen sections (carousels, event cards, notifications)",
                  "Added poster carousel, upcoming events, artist follow section, and notification center",
                  "Iterated on discover screen filters: toggle bar, genre carousel, advanced filtering, 16+ option",
                ],
              },
              {
                num: "04",
                phase: "Test & Refine",
                items: [
                  "Conducted 3 rounds of moderated user testing",
                  "Key findings: users wanted clearer tags, privacy transparency, and confirmation feedback",
                  "Standardized date/time formats, added headliner hierarchy, improved role labels",
                  "Refined notification center with mark-all-read, icon types, and unread indicators",
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

        <section className="bw__section">
          <h2 className="bw__label">Key Features Built</h2>
          <div className="bw__features">
            {[
              {
                title: "Home Screen",
                desc: "Poster carousel for upcoming shows, My Artists section with scrollable profile pics, Upcoming Events cards with date, type, and location, and a notification button with unread indicator.",
              },
              {
                title: "Discover Screen",
                desc: "Toggle bar for Bands, Shows, and Hosts. Genre carousel and time filters. Advanced filtering by genre, date, location, age (16+). Search bar at top for quick lookup.",
              },
              {
                title: "Notification Center",
                desc: "Show announcements, reminders, cancellations, and app updates. Unread notifications marked with black dot and shadow. Mark all read button. Icon types per notification category.",
              },
              {
                title: "Post & Looking For",
                desc: "Bands can post shows with title, location, date, time, type tag, and photos. Looking For page lets venues and bands post opportunities. Advanced filtering for booking discovery.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bw__feature-card">
                <span className="bw__feature-title">{title}</span>
                <p className="bw__feature-desc">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bw__section">
          <h2 className="bw__label">User Testing Insights</h2>
          <div className="bw__insights">
            {[
              {
                quote:
                  "Show tags felt too vague — users wanted genres and more detailed categorization to browse events.",
                name: "Kate",
              },
              {
                quote:
                  "Privacy visibility, headliner hierarchy, contact info on profiles, and a 16+ filter were all missing.",
                name: "Madi",
              },
              {
                quote:
                  "Band and host roles weren't immediately obvious. Confirmation feedback after actions was needed.",
                name: "Cecile",
              },
            ].map(({ quote, name }) => (
              <div key={name} className="bw__insight-card">
                <p className="bw__insight-quote">"{quote}"</p>
                <span className="bw__insight-name">— {name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bw__outcome">
          <h2 className="bw__label">Outcome</h2>
          <p className="bw__outcome-text">
            Delivered a fully interactive prototype, a reusable React Native
            component library, and a research-backed design system. The team
            iterated through 3 rounds of user testing, incorporating real
            feedback into every sprint. Branding, logo refinement, and a
            cohesive style guide were developed alongside the app to ensure a
            consistent identity across digital and physical touchpoints.
          </p>
        </section>
      </main>
    </div>
  );
}
