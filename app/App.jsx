import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects/Projects";
import Services from "./sections/ServicesSection/Services";
import Documentation from "./sections/Documentation/Documentation";
import Certification from "./sections/Certification";
import Automation from "./sections/Automation/Automation";
import SystemsSection from "./sections/SystemsSection/SystemsSection";
import WhyEtti from "./sections/WhyEtti";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <div className="relative max-w-screen w-screen h-full overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Documentation />
      <Certification />
      <Automation />
      <SystemsSection />
      <WhyEtti />
      <Contact />
    </div>
  )
}

export default App