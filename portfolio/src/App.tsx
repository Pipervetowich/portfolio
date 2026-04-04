import { useState, useEffect } from "react";
import piperPhoto from "./assets/Piper_Vetowich.png";
import piperPhoto2 from "./assets/Piper_Vetowich.jpg";
import bandwidthLogo from "./assets/Band_Width_Logo.jpg";
import denverZoo from "./assets/Denver_Zoo.jpg";
import ymcaPhoto from "./assets/YMCA.jpg";
import bhcPhoto from "./assets/BHC.jpg";
import noodlesPhoto from "./assets/Noodles.jpg";

import climber1 from "./assets/climber1.jpg";
import climber2 from "./assets/Climber2.jpg";
import hiker1 from "./assets/Hiker1.jpg";
import hiker2 from "./assets/Hiker2.jpg";
import snowboarder from "./assets/Snowboarder.jpg";

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

type PageKey =
  | "home"
  | "about-me"
  | "work"
  | "crafts"
  | "contact"
  | "bandwidth"
  | "denver-zoo"
  | "ymca"
  | "bhc"
  | "noodles";

const caseStudyKeys: PageKey[] = [
  "bandwidth",
  "denver-zoo",
  "ymca",
  "bhc",
  "noodles",
];
const mainPages: PageKey[] = ["home", "about-me", "work", "crafts", "contact"];

function getPageFromHash(): PageKey {
  const hash = window.location.hash.replace("#", "") as PageKey;
  return [...mainPages, ...caseStudyKeys].includes(hash) ? hash : "home";
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState<PageKey>(getPageFromHash);
  const [loading, setLoading] = useState(false);
  const [loaderDone, setLoaderDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onPop = () => setPage(getPageFromHash());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = (next: PageKey) => {
    setLoaderDone(false);
    setLoading(true);
    setTimeout(() => {
      window.history.pushState(
        {},
        "",
        next === "home" ? window.location.pathname : `#${next}`,
      );
      setPage(next);
      window.scrollTo({ top: 0 });
      setLoading(false);
      setLoaderDone(true);
      setTimeout(() => setLoaderDone(false), 400);
    }, 300);
  };

  const handleOpenCaseStudy = (id: number | "featured") => {
    if (id === "featured") {
      navigate("bandwidth");
      return;
    }
    const keys: PageKey[] = ["denver-zoo", "ymca", "bhc", "noodles"];
    navigate(keys[id as number] ?? "home");
  };

  const handleBack = () => navigate("work");

  const loaderClass = loading
    ? "page-loader loading"
    : loaderDone
      ? "page-loader done"
      : "page-loader";

  const isCaseStudy = caseStudyKeys.includes(page);
  const activeNavPage = isCaseStudy ? "work" : page;

  // Case study pages
  if (page === "bandwidth")
    return (
      <>
        <div className={loaderClass} />
        <Nav
          activePage={activeNavPage}
          onNavigate={(id) => navigate(id as PageKey)}
        />
        <CaseStudyBandWidth image={images.bandwidthLogo} onBack={handleBack} />
      </>
    );
  if (page === "denver-zoo")
    return (
      <>
        <div className={loaderClass} />
        <Nav
          activePage={activeNavPage}
          onNavigate={(id) => navigate(id as PageKey)}
        />
        <CaseStudyDenverZoo image={images.denverZoo} onBack={handleBack} />
      </>
    );
  if (page === "ymca")
    return (
      <>
        <div className={loaderClass} />
        <Nav
          activePage={activeNavPage}
          onNavigate={(id) => navigate(id as PageKey)}
        />
        <CaseStudyYMCA image={images.ymcaPhoto} onBack={handleBack} />
      </>
    );
  if (page === "bhc")
    return (
      <>
        <div className={loaderClass} />
        <Nav
          activePage={activeNavPage}
          onNavigate={(id) => navigate(id as PageKey)}
        />
        <CaseStudyBHC image={images.bhcPhoto} onBack={handleBack} />
      </>
    );
  if (page === "noodles")
    return (
      <>
        <div className={loaderClass} />
        <Nav
          activePage={activeNavPage}
          onNavigate={(id) => navigate(id as PageKey)}
        />
        <CaseStudyNoodles image={images.noodlesPhoto} onBack={handleBack} />
      </>
    );

  // Main section pages
  const renderPage = () => {
    switch (page) {
      case "about-me":
        return (
          <About
            piperPhoto2={piperPhoto2}
            outdoorPhotos={[climber1, climber2, hiker1, hiker2, snowboarder]}
          />
        );
      case "work":
        return <Work onOpenCaseStudy={handleOpenCaseStudy} images={images} />;
      case "crafts":
        return <Crafts />;
      case "contact":
        return <Contact />;
      default:
        return <Hero loaded={loaded} piperPhoto={piperPhoto} />;
    }
  };

  return (
    <div>
      <div className={loaderClass} />
      <div className="grain-overlay" />
      <Nav
        activePage={activeNavPage}
        onNavigate={(id) => navigate(id as PageKey)}
      />
      {renderPage()}
    </div>
  );
}
