import React from 'react'
import './App.css'
import { Register } from './components/Register';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Gallery } from './components/Gallery';
import { Pricing } from './components/Pricing';
import { Services } from './components/Services';
import { Rules } from './components/Rules';
import { Teams } from './components/Teams';

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <main style={{ marginTop: "-80px" }} id="main">


        <Services />

        <Features />
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
