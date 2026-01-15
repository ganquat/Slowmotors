import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Routes } from './components/Routes';
import { Itinerary } from './components/Itinerary';
import { Bikes } from './components/Bikes';
import { Safety } from './components/Safety';
import { Accommodation } from './components/Accommodation';
import { Food } from './components/Food';
import { Culture } from './components/Culture';
import { FAQ } from './components/FAQ';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Routes />
        <Itinerary />
        <Bikes />
        <Safety />
        <Accommodation />
        <Food />
        <Culture />
        <FAQ />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;