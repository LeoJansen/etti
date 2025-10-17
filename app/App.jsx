import About from "./sections/About/About";
import Hero from "./sections/Hero";
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

const App = () => {
   return (
      <div className="relative w-full h-full overflow-hidden">
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
         <Contact />
      </div>
   )
}

export default App