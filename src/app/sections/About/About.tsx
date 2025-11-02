"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import AboutDesktop from "./AboutDesktop";

const AboutMobile = dynamic(() => import("./mobile/AboutMobile"), {
  ssr: false,
});

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);

    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  return isMobile;
};

const About = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <AboutMobile />;
  }

  return <AboutDesktop />;
};

export default About;
