import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Global Stallion Integrated Services Nig. Ltd.",
    text: "Adamu delivered an excellent website that elevated our company’s brand image.",
  },
  {
    name: "Janiba Ginger",
    text: "Professional, responsive, and creative — the project exceeded expectations.",
  },
  {
    name: "Five Star College of Health Technology",
    text: "Our online presence transformed — everything works perfectly!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold text-center"
      >
        Testimonials
      </motion.h2>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <p className="italic text-slate-700 mb-4">“{t.text}”</p>
            <h4 className="font-semibold text-emerald-800">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
