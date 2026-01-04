<<<<<<< HEAD
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import Navbar from "./components/Navbar";
import About from "./components/About";
=======
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
gsap.registerPlugin(ScrollTrigger, SplitText)
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cocktails from "./components/Cocktails"
>>>>>>> a06ce23f840b8e66215a52af18512f0fe0e691d5

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

<<<<<<< HEAD
export default App;
=======
export default App
>>>>>>> a06ce23f840b8e66215a52af18512f0fe0e691d5
