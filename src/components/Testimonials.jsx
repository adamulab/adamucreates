// src/components/Testimonials.jsx
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Enterprise Product Team",
    role: "Engineering Lead",
    quote:
      "He integrated seamlessly into our team and consistently delivered scalable enterprise features with clarity and strong ownership.",
  },
  {
    name: "Janiba Ginger Ltd",
    role: "Agro-Allied Business Client",
    quote:
      "Our business needs were translated into a practical digital solution that significantly improved our distribution and customer order workflow.",
  },
  {
    name: "Noon Capital and Finance Ltd",
    role: "Financial Services Client",
    quote:
      "The website delivered was reliable, professional, and clearly communicates our financial services with great attention to detail.",
  },
  {
    name: "Global Stallion Integrated Services Nigeria Ltd",
    role: "Business Solutions Client",
    quote:
      "The website clearly communicates our operational goals and business offerings in a simple and professional way.",
  },
];

export default function Testimonials() {
  return (
    <section className="container mx-auto px-6 py-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trusted by Teams & Clients
        </h2>
        <p className="text-slate-400 text-lg">
          Feedback from professionals I’ve collaborated with across enterprise
          and growing businesses.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative bg-slate-900/70 border border-slate-800 rounded-3xl p-8"
          >
            <Quote
              size={28}
              className="absolute top-6 right-6 text-indigo-400 opacity-20"
            />

            <p className="text-slate-300 leading-relaxed mb-6">
              “{item.quote}”
            </p>

            <div className="border-t border-slate-800 pt-4">
              <p className="font-semibold text-white text-sm">{item.name}</p>
              <p className="text-xs text-slate-400">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
