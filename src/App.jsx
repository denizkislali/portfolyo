import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import bgVideo from "./assets/bg-video.mp4"; 

function App() {
  return (
    <div className="App">
      {}
      <video className="app-bg-video" autoPlay muted loop playsInline>
        <source src={bgVideo} type="video/mp4" />
      </video>

      {}
      <div className="content-wrapper">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
