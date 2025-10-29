import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="contact"
      className="mt-12 bg-gradient-to-r from-emerald-600 to-emerald-400 text-white rounded-2xl p-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ scale: 0.98 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-semibold"
        >
          Want to build something together?
        </motion.h2>
        <p className="mt-2 text-slate-100/90">
          I’m available for freelance work and full-time opportunities. Let’s
          create something impactful.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:you@example.com?subject=Hire%20Adamu"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-emerald-700 font-semibold"
          >
            Hire me
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30"
          >
            Download resume
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 text-white/90">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
          <a href="mailto:you@example.com">Email</a>
        </div>
      </div>
    </section>
  );
}
