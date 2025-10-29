import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind", "Framer Motion"],
  },
  { title: "Backend", items: ["Node.js", "Express", "MongoDB", "Postgres"] },
  { title: "Content", items: ["Video Scripts", "Shorts", "Tutorials", "SEO"] },
  {
    title: "Marketing",
    items: ["Content Strategy", "Email", "Social Ads", "Analytics"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mt-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold"
      >
        Skills & Services
      </motion.h2>
      <p className="mt-2 text-slate-600">
        Full-stack development, content production for social, and data-driven
        digital marketing. I ship products and attention.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="p-4 bg-white rounded-lg border"
          >
            <div className="font-medium text-emerald-800">{s.title}</div>
            <ul className="mt-2 text-sm text-slate-600 space-y-1">
              {s.items.map((it, j) => (
                <li key={j}>• {it}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
