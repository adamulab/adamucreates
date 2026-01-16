import { motion } from "framer-motion";
import { Code2, Megaphone, PenTool, Layers, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HireMe() {
  return (
    <section className="container mx-auto px-6 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Let’s build something that works and scales
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          I work with startups, teams, and organizations to design, build, and
          improve digital products that are reliable, user-focused, and ready
          for real-world growth.
        </p>
      </motion.div>

      {/* Services */}
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        <ServiceCard
          icon={<Code2 size={28} />}
          title="Software Development"
          description="Designing and building modern web applications with scalability, performance, and maintainability in mind."
          points={[
            "Enterprise & internal tools",
            "Web applications & dashboards",
            "API integrations",
            "Team-based development",
          ]}
        />

        <ServiceCard
          icon={<Megaphone size={28} />}
          title="Digital Marketing Systems"
          description="Helping teams create platforms that are discoverable, measurable, and optimized for growth."
          points={[
            "SEO-first architecture",
            "Analytics & tracking setup",
            "Landing pages & funnels",
            "Performance optimization",
          ]}
        />

        <ServiceCard
          icon={<PenTool size={28} />}
          title="Content & Education"
          description="Creating technical and educational content that explains complex ideas clearly and effectively."
          points={[
            "Developer documentation",
            "Educational tutorials",
            "Technical writing",
            "Content strategy",
          ]}
        />
      </div>

      {/* How I Work */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold mb-10">How I work</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProcessStep
            icon={<Layers size={24} />}
            title="Understand"
            text="I start by understanding the problem, users, and business goals."
          />
          <ProcessStep
            icon={<Code2 size={24} />}
            title="Build"
            text="I collaborate with teams to design and implement reliable solutions."
          />
          <ProcessStep
            icon={<Megaphone size={24} />}
            title="Optimize"
            text="I ensure products are discoverable, usable, and performance-driven."
          />
          <ProcessStep
            icon={<PenTool size={24} />}
            title="Support"
            text="I document, refine, and support systems for long-term success."
          />
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mt-24 bg-slate-900/70 border border-slate-800 rounded-3xl p-10 text-center"
      >
        <h3 className="text-2xl font-semibold mb-4">Ready to collaborate?</h3>
        <p className="text-slate-400 max-w-xl mx-auto mb-8">
          Whether you’re building a new product, improving an existing system,
          or looking for a reliable team collaborator, I’d love to hear about
          your project.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-2xl transition"
        >
          Start a Conversation <ArrowRight size={18} />
        </Link>
      </motion.div>
    </section>
  );
}

function ServiceCard({ icon, title, description, points }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8"
    >
      <div className="text-indigo-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-400 mb-6">{description}</p>

      <ul className="text-sm text-slate-300 space-y-2">
        {points.map((point) => (
          <li key={point}>• {point}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function ProcessStep({ icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6"
    >
      <div className="text-indigo-400 mb-3">{icon}</div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-slate-400">{text}</p>
    </motion.div>
  );
}
