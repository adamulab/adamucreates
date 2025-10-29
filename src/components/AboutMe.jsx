import React from "react";
import { motion } from "framer-motion";
import AboutImage from "../assets/adamu-cat.jpg";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="mt-12 bg-white rounded-2xl p-6 shadow-sm border"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
      >
        <div className="md:col-span-1 flex items-center justify-center">
          <div className="w-full max-w-xs rounded-lg overflow-hidden">
            <img
              src={AboutImage}
              alt="Adamu"
              className="w-full h-56 object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold text-emerald-800">About Me</h2>
          <p className="mt-4 text-slate-700">
            I’m <strong>Adamu Abubakar</strong>, a passionate{" "}
            <strong>Software Developer</strong>,{" "}
            <strong>Digital Content Creator</strong>, and{" "}
            <strong>Marketing Strategist</strong>. I specialize in building
            clean, modern web applications with JavaScript and React, crafting
            engaging tech tutorials, and designing content strategies that drive
            brand visibility and growth. My mission is to create digital
            experiences that inspire, educate, and connect people across
            industries.
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
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 text-white shadow"
            >
              Work with me
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border"
            >
              Download resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
