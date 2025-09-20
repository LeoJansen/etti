import About from "./sections/About";
import Hero from "./sections/Hero";
import Services from "./sections/Services";

const App = () => {
  return (
    <div className="relative max-w-screen h-full overflow-hidden">
      <Hero />
      <About />
      <Services />
    </div>
  )
}

export default App