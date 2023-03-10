import React, { useEffect } from 'react';
import './App.css';
import { Register } from './components/Register';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Gallery } from './components/Gallery';
import { Pricing } from './components/Pricing';
import { Services } from './components/Services';
import { Rules } from './components/Rules';
import { Teams } from './components/Teams';

function App() {
  useEffect(() => {
    const handler = (ev) => {
      const scroll = window.scrollY;

      let selectHeader = document.querySelector('#header');
      let backtotop = document.querySelector('.back-to-top');
      if (scroll > 100) {
        selectHeader.classList.add('header-scrolled');
        backtotop.classList.add('active');
      } else {
        selectHeader.classList.remove('header-scrolled');
        backtotop.classList.remove('active');
      }
    };
    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return (
    <>
      <Navbar />

      <Hero />

      <main style={{ marginTop: "-80px" }} id="main">
        <Services />
        <Rules />

        <Gallery />
        <Teams />

        <Pricing />

        <Register />
      </main>

      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
      <Footer />

    </>
  );
}

export default App;
