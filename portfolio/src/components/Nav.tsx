// Nav.tsx
import { useState, useEffect } from "react";
import "../styles/Nav.css";

const sections = [
  { id: "about-me", label: "About" },
  { id: "work", label: "My Work" },
  { id: "crafts", label: "My Process" },
  { id: "contact", label: "Contact Me" },
];

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.2, rootMargin: "0px 0px -40% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="nav">
      {sections.map(({ id, label }, i) => (
        <>
          {i > 0 && <span key={`dot-${id}`} className="nav__dot" />}
          <button
            key={id}
            className={`nav__item ${active === id ? "nav__item--active" : ""}`}
            onClick={() => scrollTo(id)}
          >
            {label}
          </button>
        </>
      ))}
    </nav>
  );
}
