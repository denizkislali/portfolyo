import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import bgVideo from "./assets/bg-video.mp4"; // 🎥 Video buraya

function App() {
  return (
    <div className="App">
      {/* 🎥 Video her şeyin arkasında */}
      <video className="app-bg-video" autoPlay muted loop playsInline>
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Sayfa içeriği */}
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
