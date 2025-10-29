import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Discover",
    desc: "Understand client goals, target users, and problems to solve.",
  },
  {
    title: "Design",
    desc: "Create a clean, modern, and responsive UI with a focus on usability.",
  },
  {
    title: "Develop",
    desc: "Build robust, scalable solutions using modern web technologies.",
  },
  {
    title: "Deliver",
    desc: "Launch, optimize, and continuously improve performance.",
  },
];

export default function HowIWork() {
  return (
    <section id="how-i-work" className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold text-center"
      >
        How I Work
      </motion.h2>

      <div className="mt-10 grid md:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="bg-white rounded-2xl p-6 shadow-md"
          >
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
