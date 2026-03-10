import { useState, useEffect } from "react";
import piperPhoto from "./assets/Piper_Vetowich.png";
import piperPhoto2 from "./assets/Piper_Vetowich.jpg";
import bandwidthLogo from "./assets/Band_Width_Logo.jpg";
import denverZoo from "./assets/Denver_Zoo.jpg";
import ymcaPhoto from "./assets/YMCA.jpg";
import bhcPhoto from "./assets/BHC.jpg";
import noodlesPhoto from "./assets/Noodles.jpg";

import "./styles/global.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Crafts from "./components/Crafts";
import Contact from "./components/Contact";

const images = {
  bandwidthLogo,
  denverZoo,
  ymcaPhoto,
  bhcPhoto,
  noodlesPhoto,
};

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [activeProject, setActiveProject] = useState<
    number | "featured" | null
  >(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleToggle = (id: number | "featured") =>
    setActiveProject((prev) => (prev === id ? null : id));

  return (
    <div>
      <div className="grain-overlay" />
      <Hero loaded={loaded} piperPhoto={piperPhoto} />
      <About piperPhoto2={piperPhoto2} />
      <Work
        activeProject={activeProject}
        onToggle={handleToggle}
        images={images}
      />
      <Crafts />
      <Contact />
    </div>
  );
}
