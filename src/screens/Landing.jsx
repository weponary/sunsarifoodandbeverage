import React, { useState } from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Projects from "../components/Sections/Projects";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import AboutUs from "../components/Sections/AboutUs";
import { useEffect } from "react";
import { AnimationLoader } from "../components/Animation/Animation";

export default function Landing() {
  const [svg, setSvgLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSvgLoader(false);
    }, 1800);
  }, []);
  return svg ? (
    <AnimationLoader />
  ) : (
    <>
      <TopNavbar />
      <Header />
      <AboutUs />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
