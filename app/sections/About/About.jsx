"use client";

import dynamic from "next/dynamic";
import useIsMobile from "@/app/hooks/useIsMobile";

import AboutDesktop from "./AboutDesktop";

const AboutMobile = dynamic(() => import("./mobile/AboutMobile"), { ssr: false });

const About = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <AboutMobile />;
  }

  return <AboutDesktop />;
};

export default About;
