import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Services from "./sections/ServicesSection/Services";
import Documentation from "./sections/Documentation/Documentation";
import Certification from "./sections/Certification/Certification";
import Automation from "./sections/Automation/Automation";
import SystemsSection from "./sections/SystemsSection/SystemsSection";
import SystemsSectionMobile from "./sections/SystemsSection/mobile/SystemsSectionMobile";
import WhyEtti from "./sections/WhyEtti/WhyEtti";
import Contact from "./sections/Contact/Contact";
import ServicesCarouselMobile from "./sections/ServicesSection/mobile/ServicesMobile";
import SuperSection from "./sections/Contact/SuperSection";

const App = () => {
   return (
      <div id="app" className="relative w-full h-full overflow-hidden bg-black z-0">
         <Hero />
         <About />
         <Services />
         <ServicesCarouselMobile />
         <Projects />
         <Documentation />
         <Certification />
         <Automation />
         <SystemsSection />
         <SystemsSectionMobile />
         <WhyEtti />
         <SuperSection />
         <Contact />
      </div>
   )
}

export default App