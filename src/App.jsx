import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import HowIWork from "./components/HowIWork";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";

export default function App() {
  return (
    <div className="min-h-screen bg-emerald-50 text-gray-900 antialiased">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
        <HowIWork />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
