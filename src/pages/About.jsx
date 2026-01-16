// src/pages/About.jsx
import { motion } from "framer-motion";
import { Code2, Megaphone, PenTool, Users } from "lucide-react";

export default function About() {
  return (
    <section className="container mx-auto px-6 py-20">
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Building products with purpose, clarity, and scale
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          I’m a software developer, digital marketer, and content creator who
          thrives at the intersection of technology, communication, and
          business. Over the years, I’ve collaborated with teams to design and
          build enterprise applications, growth-focused platforms, and learning
          systems that solve real problems.
        </p>
      </motion.div>

      {/* Story */}
      <div className="mt-16 grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">My approach</h2>
          <p className="text-slate-400 leading-relaxed">
            I don’t just write code or run campaigns. I focus on understanding
            the problem, the users, and the business goals. This mindset allows
            me to work effectively within cross‑functional teams and contribute
            to solutions that are scalable, maintainable, and measurable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h2 className="text-2xl font-semibold mb-4">How I add value</h2>
          <p className="text-slate-400 leading-relaxed">
            By combining software development with marketing insight and content
            creation, I help teams build products that don’t just work—but are
            discoverable, understandable, and positioned for growth.
          </p>
        </motion.div>
      </div>

      {/* Skills */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold mb-10">Skills & Focus Areas</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard
            icon={<Code2 size={28} />}
            title="Software Development"
            items={[
              "React & Modern JS",
              "Node.js APIs",
              "Enterprise Web Apps",
              "Team Collaboration",
            ]}
          />
          <SkillCard
            icon={<Megaphone size={28} />}
            title="Digital Marketing"
            items={[
              "SEO & Analytics",
              "Funnels & Landing Pages",
              "Content Strategy",
              "Growth Systems",
            ]}
          />
          <SkillCard
            icon={<PenTool size={28} />}
            title="Content Creation"
            items={[
              "Technical Writing",
              "Educational Content",
              "Developer Tutorials",
              "Brand Storytelling",
            ]}
          />
          <SkillCard
            icon={<Users size={28} />}
            title="Team & Process"
            items={[
              "Agile Collaboration",
              "Code Reviews",
              "Product Thinking",
              "Clear Communication",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ icon, title, items }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6"
    >
      <div className="text-indigo-400 mb-4">{icon}</div>
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      <ul className="text-sm text-slate-400 space-y-2">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
