import About from "./sections/About";
import Hero from "./sections/Hero";
import Services from "./sections/Services";

const App = () => {
  return (
    <div className="relative w-screen h-full overflow-hidden text-white">
      <Hero />
      <About />
      <Services />
    </div>
  )
}

export default App