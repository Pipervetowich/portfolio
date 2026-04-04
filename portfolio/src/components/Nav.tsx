import "../styles/Nav.css";

const sections = [
  { id: "home", label: "Home" },
  { id: "about-me", label: "About" },
  { id: "work", label: "My Work" },
  { id: "crafts", label: "My Process" },
  { id: "contact", label: "Contact" },
];

interface NavProps {
  activePage?: string;
  onNavigate?: (id: string) => void;
}

export default function Nav({ activePage, onNavigate }: NavProps) {
  return (
    <nav className="nav">
      <span
        className="nav__logo"
        onClick={() => onNavigate?.("home")}
        style={{ cursor: "pointer" }}
      >
        PV
      </span>
      <div className="nav__items">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            className={`nav__item ${activePage === id ? "nav__item--active" : ""}`}
            onClick={() => onNavigate?.(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
