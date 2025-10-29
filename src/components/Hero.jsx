import React from "react";
import { motion } from "framer-motion";
import HeroBanner from "../assets/banner.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-8"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-emerald-700 font-medium">Hi, I’m</p>
        <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight">
          Adamu Abubakar — Developer, Creator, Marketer
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          I build clean, fast, and accessible web experiences, create engaging
          tutorials and social-first videos, and drive growth with content-led
          digital marketing.
        </p>

        <div className="mt-6 flex gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-400 text-white shadow"
          >
            Hire me
          </a>
          <a
            href="#naijahomepro"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("naijahomepro")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border"
          >
            See my work
          </a>
        </div>
      </motion.div>

      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white rounded-2xl p-0 shadow-lg border overflow-hidden">
          {/* Rectangular banner-style image placeholder */}
          <img
            alt="Adamu banner"
            src={HeroBanner}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <div className="text-sm text-slate-500">Featured project</div>
            <div className="mt-1 font-medium text-emerald-800">
              NaijaHomePro — Real Estate Platform
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Modern, agent-centered design helping users find and list
              properties faster.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
