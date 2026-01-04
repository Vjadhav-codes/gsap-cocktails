import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import Navbar from "./components/Navbar";
import About from "./components/About";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About/>
    </main>
  );
};

export default App;
