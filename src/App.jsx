import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.scss';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';

function App() {
  return (
    <Router>
      <Cursor />
      <Routes>
        <Route path='/' element={
          <div>
            <section id="Homepage">
              <Navbar />
              <Hero />
            </section>
            <section id="Services"><Parallax type="services" /></section>
            <section id="Work-Service"><Services /></section>
            <section id="Portfolio"><Parallax type="portfolio" /></section>
            <Portfolio />
            <section id="Contact">
              <Contact />
            </section>
            <section className='footer'>
              <Footer/>
            </section>
          </div>
        } />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
