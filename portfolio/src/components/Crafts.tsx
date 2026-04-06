import "../styles/Crafts.css";

const toolGroups = [
  {
    label: "Design",
    desc: "Wireframes, brand systems, print",
    tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
    variant: "design",
  },
  {
    label: "Code",
    desc: "Responsive interfaces, this portfolio",
    tools: ["React", "HTML", "JavaScript", "TypeScript"],
    variant: "code",
  },
  {
    label: "Research & Methods",
    desc: "Synthesis, accessibility, validation",
    tools: [
      "User Testing",
      "Heuristic Evals",
      "Accessibility",
      "User Flows",
      "3D Modeling",
    ],
    variant: "methods",
  },
];

export default function Crafts() {
  return (
    <section id="crafts" className="crafts">
      <div className="crafts__inner">
        <div className="crafts__header">
          <h1 className="crafts__heading">
            What I<br />
            Work With
          </h1>
          <p className="crafts__intro">
            I can prototype it, design it, and test it myself.
          </p>
        </div>

        <div className="crafts__groups">
          {toolGroups.map(({ label, desc, tools, variant }) => (
            <div
              key={label}
              className={`crafts__group crafts__group--${variant}`}
            >
              <div className="crafts__group-header">
                <h2 className="crafts__group-label">{label}</h2>
                <p className="crafts__group-desc">{desc}</p>
              </div>
              <div className="crafts__pills">
                {tools.map((t) => (
                  <span
                    key={t}
                    className={`crafts__pill crafts__pill--${variant}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="crafts__graphic">
          <svg
            width="100%"
            viewBox="0 0 680 220"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="40"
              y1="110"
              x2="640"
              y2="110"
              stroke="#f0e0ea"
              strokeWidth="0.5"
            />
            <line
              x1="340"
              y1="20"
              x2="340"
              y2="200"
              stroke="#f0e0ea"
              strokeWidth="0.5"
            />

            <circle
              cx="160"
              cy="110"
              r="72"
              fill="none"
              stroke="#c22d77"
              strokeWidth="0.75"
              opacity="0.18"
            />
            <circle
              cx="160"
              cy="110"
              r="48"
              fill="none"
              stroke="#c22d77"
              strokeWidth="0.5"
              opacity="0.12"
            />
            <circle
              cx="340"
              cy="110"
              r="90"
              fill="none"
              stroke="#c22d77"
              strokeWidth="0.75"
              opacity="0.1"
            />
            <circle
              cx="520"
              cy="110"
              r="60"
              fill="none"
              stroke="#c22d77"
              strokeWidth="0.75"
              opacity="0.18"
            />
            <circle
              cx="520"
              cy="110"
              r="36"
              fill="none"
              stroke="#c22d77"
              strokeWidth="0.5"
              opacity="0.12"
            />

            <rect
              x="96"
              y="46"
              width="128"
              height="128"
              fill="none"
              stroke="#c22d77"
              strokeWidth="0.5"
              opacity="0.2"
              transform="rotate(15 160 110)"
            />
            <rect
              x="460"
              y="58"
              width="120"
              height="104"
              fill="none"
              stroke="#c22d77"
              strokeWidth="0.5"
              opacity="0.2"
              transform="rotate(-12 520 110)"
            />

            <line
              x1="40"
              y1="50"
              x2="120"
              y2="170"
              stroke="#c22d77"
              strokeWidth="0.5"
              opacity="0.15"
            />
            <line
              x1="80"
              y1="40"
              x2="240"
              y2="180"
              stroke="#c22d77"
              strokeWidth="0.5"
              opacity="0.1"
            />
            <line
              x1="560"
              y1="40"
              x2="640"
              y2="160"
              stroke="#c22d77"
              strokeWidth="0.5"
              opacity="0.15"
            />
            <line
              x1="580"
              y1="180"
              x2="640"
              y2="50"
              stroke="#c22d77"
              strokeWidth="0.5"
              opacity="0.1"
            />

            <circle cx="160" cy="110" r="5" fill="#c22d77" opacity="0.7" />
            <circle cx="340" cy="110" r="5" fill="#c22d77" opacity="0.7" />
            <circle cx="520" cy="110" r="5" fill="#c22d77" opacity="0.7" />

            <line
              x1="165"
              y1="110"
              x2="335"
              y2="110"
              stroke="#c22d77"
              strokeWidth="0.75"
              opacity="0.35"
            />
            <line
              x1="345"
              y1="110"
              x2="515"
              y2="110"
              stroke="#c22d77"
              strokeWidth="0.75"
              opacity="0.35"
            />

            <text
              x="160"
              y="170"
              textAnchor="middle"
              fontFamily="'Playfair Display', serif"
              fontSize="10"
              fill="#c22d77"
              opacity="0.55"
              letterSpacing="2"
              fontStyle="italic"
            >
              Design
            </text>
            <text
              x="340"
              y="185"
              textAnchor="middle"
              fontFamily="'Playfair Display', serif"
              fontSize="10"
              fill="#c22d77"
              opacity="0.55"
              letterSpacing="2"
              fontStyle="italic"
            >
              Code
            </text>
            <text
              x="520"
              y="170"
              textAnchor="middle"
              fontFamily="'Playfair Display', serif"
              fontSize="10"
              fill="#c22d77"
              opacity="0.55"
              letterSpacing="2"
              fontStyle="italic"
            >
              Research
            </text>

            <text
              x="160"
              y="57"
              textAnchor="middle"
              fontFamily="'Playfair Display', serif"
              fontSize="9"
              fill="#c22d77"
              opacity="0.3"
            >
              ✦
            </text>
            <text
              x="520"
              y="57"
              textAnchor="middle"
              fontFamily="'Playfair Display', serif"
              fontSize="9"
              fill="#c22d77"
              opacity="0.3"
            >
              ✦
            </text>
            <text
              x="340"
              y="42"
              textAnchor="middle"
              fontFamily="'Playfair Display', serif"
              fontSize="9"
              fill="#c22d77"
              opacity="0.3"
            >
              ✦
            </text>

            <line
              x1="280"
              y1="200"
              x2="400"
              y2="200"
              stroke="#c22d77"
              strokeWidth="0.5"
              opacity="0.2"
            />
            <text
              x="340"
              y="213"
              textAnchor="middle"
              fontFamily="'Playfair Display', serif"
              fontSize="9"
              fill="#c22d77"
              opacity="0.35"
              letterSpacing="4"
              fontStyle="italic"
            >
              piper vetowich
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
