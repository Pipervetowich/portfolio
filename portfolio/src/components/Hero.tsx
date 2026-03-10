import "../styles/Hero.css";

interface HeroProps {
  loaded: boolean;
  piperPhoto: string;
}

export default function Hero({ loaded, piperPhoto }: HeroProps) {
  return (
    <section id="about" className="hero">
      <div className="hero__inner">
        <div className="hero__topbar">
          <p className="section-label">UX Designer / Product Designer</p>
          <p className="section-label">Colorado, USA</p>
        </div>

        <p className="handwriting">Hi. Glad you're here.</p>
        <p className="handwriting" style={{ textAlign: "right" }}>
          Let me show you my work ✦
        </p>

        <div style={{ position: "relative", marginBottom: 20 }}>
          <h1 className={`hero__title ${loaded ? "visible" : ""}`}>PIPER</h1>

          <div className="hero__photo-wrapper">
            <img
              src={piperPhoto}
              alt="Portrait of Piper Vetowich"
              className="hero__photo"
            />
          </div>

          <h1
            className={`hero__title hero__title--delayed ${loaded ? "visible" : ""}`}
          >
            VETOWICH
          </h1>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <p className="section-label" style={{ opacity: 0.6 }}>
          Scroll to explore
        </p>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
