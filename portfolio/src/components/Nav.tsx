import { useState, useEffect } from "react";
import "../styles/Nav.css";

const sections = [
  { id: "about-me", label: "About" },
  { id: "work", label: "My Work" },
  { id: "crafts", label: "My Process" },
  { id: "contact", label: "Contact Me" },
];

interface NavProps {
  onBack?: () => void;
}

export default function Nav({ onBack }: NavProps) {
  const [active, setActive] = useState("");

  useEffect(() => {
    if (onBack) return;
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.05, rootMargin: "0px 0px -20% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [onBack]);

  const handleClick = (id: string) => {
    if (onBack) {
      onBack();
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="nav">
      <span className="nav__logo">PV</span>
      <div className="nav__items">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            className={`nav__item ${active === id ? "nav__item--active" : ""}`}
            onClick={() => handleClick(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
