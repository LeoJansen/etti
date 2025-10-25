"use client";

import dynamic from "next/dynamic";
import React from "react";
import AboutDesktop from "./AboutDesktop";

const AboutMobile = dynamic(() => import("./mobile/AboutMobile"), { ssr: false });

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}

const About = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <AboutMobile />;
  }

  return <AboutDesktop />;
};

export default About;