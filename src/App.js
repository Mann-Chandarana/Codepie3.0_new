import React from 'react'
import './App.css'
import { About } from './components/About';
import { Register } from './components/Register';
import { Faq } from './components/Faq';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Services } from './components/Services';
import { Teams } from './components/Teams';
import { Whyus } from './components/Whyus';

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <main id="main">
        <About />
        <Whyus />

        <Services />

        <Features />

        <Portfolio />

        <Teams />

        <Pricing />

       <Faq />

        <Register />
      </main>

      <Footer />
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

    </>
  );
}

export default App;
