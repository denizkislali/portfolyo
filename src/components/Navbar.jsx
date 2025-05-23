import "./Navbar.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-left">
          <button className="hamburger" onClick={handleToggle}>
            <i className={`bi ${menuOpen ? "bi-x" : "bi-list"}`}></i>
          </button>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Ana Sayfa
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              Ben Kimim?
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Neler Yapabilirim?
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>
              Portfolyo
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              İletişim
            </a>
          </li>
        </ul>

        <button className="theme-toggle-btn" onClick={toggleTheme}>
          <i
            className={`bi ${
              theme === "dark" ? "bi-sun-fill" : "bi-moon-fill"
            }`}
          ></i>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
