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
  const [loading, setLoading] = useState(false);
  const [loaderDone, setLoaderDone] = useState(false);

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
    setLoaderDone(false);
    setLoading(true);

    setTimeout(() => {
      if (next === "home") {
        window.history.pushState({}, "", window.location.pathname);
      } else {
        window.history.pushState({}, "", `#${next}`);
      }
      setPage(next);
      setLoading(false);
      setLoaderDone(true);

      // Reset done state after fade-out completes
      setTimeout(() => setLoaderDone(false), 400);
    }, 400);
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
    setLoaderDone(false);
    setLoading(true);

    setTimeout(() => {
      window.history.back();
      setLoading(false);
      setLoaderDone(true);
      setTimeout(() => setLoaderDone(false), 400);
    }, 400);
  };

  const loaderClass = loading
    ? "page-loader loading"
    : loaderDone
      ? "page-loader done"
      : "page-loader";

  if (page === "bandwidth")
    return (
      <>
        <div className={loaderClass} />
        <CaseStudyBandWidth image={images.bandwidthLogo} onBack={handleBack} />
      </>
    );
  if (page === "denver-zoo")
    return (
      <>
        <div className={loaderClass} />
        <CaseStudyDenverZoo image={images.denverZoo} onBack={handleBack} />
      </>
    );
  if (page === "ymca")
    return (
      <>
        <div className={loaderClass} />
        <CaseStudyYMCA image={images.ymcaPhoto} onBack={handleBack} />
      </>
    );
  if (page === "bhc")
    return (
      <>
        <div className={loaderClass} />
        <CaseStudyBHC image={images.bhcPhoto} onBack={handleBack} />
      </>
    );
  if (page === "noodles")
    return (
      <>
        <div className={loaderClass} />
        <CaseStudyNoodles image={images.noodlesPhoto} onBack={handleBack} />
      </>
    );

  return (
    <div>
      <div className={loaderClass} />
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
