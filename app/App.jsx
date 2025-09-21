import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects/Projects";
import Services from "./sections/Services";
import Documentation from "./sections/Documentation";
import Certification from "./sections/Certification";
const App = () => {
  return (
    <div className="relative max-w-screen h-full overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Documentation />
      <Certification />
    </div>
  )
}

export default App