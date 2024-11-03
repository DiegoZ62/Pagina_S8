import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Jordan1 from './images/Jordan1.png';
const link = document.createElement("link");
link.href = "https://fonts.googleapis.com/css2?family=Bona+Nova+SC:ital,wght@0,400;0,700;1,400&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

function App() {
  
  function Home() {
    return <h2>Página de Inicio</h2>;
  }
  function About() {
    return <h2>Sobre Nosotros</h2>;
  }
  function Contact() {
    return <h2>Página de Contacto</h2>;
  }

  return (
    <Router>
      <div>
        <div className="top-bar">
          <p>Cualquier inquietud puedes contactarnos</p>
        </div>  
      </div>
      <div>
        <nav>
          <ul>
            <li className="brand-name">
              <Link to="/">Zakadi</Link>
            </li>
            <li>
              <Link to="Home">Home</Link>
            </li>
            <li>
              <Link to="About">About Us</Link>
            </li>
            <li>
              <Link to="Contact">Classic</Link>
            </li>
            <li>
              <Link to="Contact">Streetwear</Link>
            </li>
            <li>
              <Link to="Contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <div className="left-column">
            <h2>Jordan 1 Retro High OG SP</h2>
            <p>New</p>
          </div>
          <div className="right-column">
            <img src={Jordan1} alt="Descripción de la imagen" className="mi-imagen" />
          </div>
        </div>
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
