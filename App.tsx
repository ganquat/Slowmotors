import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Gallery } from './components/Gallery';
import { Services } from './components/Services';
import { Routes } from './components/Routes';
import { Stories } from './components/Stories';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Gallery />
        <Services />
        <Routes />
        <Stories />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;