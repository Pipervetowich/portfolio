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

import CaseStudyBandWidth from "./components/Casestudybandwidth";
import CaseStudyDenverZoo from "./components/Casestudydenverzoo";
import CaseStudyYMCA from "./components/Casestudyymca";
import CaseStudyBHC from "./components/Casestudybhc";
import CaseStudyNoodles from "./components/Casestudynoodles";

const images: Record<string, string> = {
  bandwidthLogo,
  denverZoo,
  ymcaPhoto,
  bhcPhoto,
  noodlesPhoto,
};

type PageKey = "home" | "bandwidth" | "denver-zoo" | "ymca" | "bhc" | "noodles";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState<PageKey>("home");

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleOpenCaseStudy = (id: number | "featured") => {
    if (id === "featured") {
      setPage("bandwidth");
      return;
    }
    const keys: PageKey[] = ["denver-zoo", "ymca", "bhc", "noodles"];
    setPage(keys[id as number] ?? "home");
  };

  const handleBack = () => {
    setPage("home");
    setTimeout(() => {
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  if (page === "bandwidth")
    return (
      <CaseStudyBandWidth image={images.bandwidthLogo} onBack={handleBack} />
    );
  if (page === "denver-zoo")
    return <CaseStudyDenverZoo image={images.denverZoo} onBack={handleBack} />;
  if (page === "ymca")
    return <CaseStudyYMCA image={images.ymcaPhoto} onBack={handleBack} />;
  if (page === "bhc")
    return <CaseStudyBHC image={images.bhcPhoto} onBack={handleBack} />;
  if (page === "noodles")
    return <CaseStudyNoodles image={images.noodlesPhoto} onBack={handleBack} />;

  return (
    <div>
      <div className="grain-overlay" />
      <Hero loaded={loaded} piperPhoto={piperPhoto} />
      <About piperPhoto2={piperPhoto2} />
      <Work
        activeProject={null}
        onToggle={() => {}}
        onOpenCaseStudy={handleOpenCaseStudy}
        images={images}
      />
      <Crafts />
      <Contact />
    </div>
  );
}
