import { useState, useEffect } from "react";
import piperPhoto from "./assets/Piper_Vetowich.png";
import piperPhoto2 from "./assets/Piper_Vetowich.jpg";
import bandwidthLogo from "./assets/Band_Width_Logo.jpg";
import denverZoo from "./assets/Denver_Zoo.jpg";
import ymcaPhoto from "./assets/YMCA.jpg";
import bhcPhoto from "./assets/BHC.jpg";
import noodlesPhoto from "./assets/Noodles.jpg";

import Nav from "./components/Nav.tsx";

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

function getPageFromHash(): PageKey {
  const hash = window.location.hash.replace("#", "") as PageKey;
  const valid: PageKey[] = [
    "bandwidth",
    "denver-zoo",
    "ymca",
    "bhc",
    "noodles",
  ];
  return valid.includes(hash) ? hash : "home";
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState<PageKey>(getPageFromHash);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onPop = () => {
      const next = getPageFromHash();
      setPage(next);
      if (next === "home") {
        setTimeout(() => {
          document
            .getElementById("work")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = (next: PageKey) => {
    if (next === "home") {
      window.history.pushState({}, "", window.location.pathname);
    } else {
      window.history.pushState({}, "", `#${next}`);
    }
    setPage(next);
  };

  const handleOpenCaseStudy = (id: number | "featured") => {
    if (id === "featured") {
      navigate("bandwidth");
      return;
    }
    const keys: PageKey[] = ["denver-zoo", "ymca", "bhc", "noodles"];
    navigate(keys[id as number] ?? "home");
  };

  const handleBack = () => {
    window.history.back();
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
      <Nav />
      <Hero loaded={loaded} piperPhoto={piperPhoto} />
      <About piperPhoto2={piperPhoto2} />
      <Work onOpenCaseStudy={handleOpenCaseStudy} images={images} />
      <Crafts />
      <Contact />
    </div>
  );
}
