import About from "./components/About";
import Contact from "./components/Contact";
import Github from "./components/Github";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


function App() {
  return (
    <div>
      <Navbar />
      {document.title = "Aakarsh Patel"}
      <Home />
      <About />
      <Skills />
      <Github />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
