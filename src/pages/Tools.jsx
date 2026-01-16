import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Megaphone,
  PenTool,
  GitBranch,
  BarChart3,
  Video,
  Users,
} from "lucide-react";

export default function Tools() {
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
          Tools, Stack & Workflow
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          The tools I use are chosen intentionally to support collaboration,
          scalability, performance, and clarity—from development to delivery.
        </p>
      </motion.div>

      {/* Tool Groups */}
      <div className="mt-16 grid gap-12">
        <ToolGroup
          icon={<Code2 size={28} />}
          title="Software Development"
          description="Building scalable, maintainable, and team-friendly applications."
          tools={[
            "JavaScript (ES6+)",
            "React / Vite",
            "Node.js & Express",
            "REST APIs",
            "Tailwind CSS",
          ]}
        />

        <ToolGroup
          icon={<Server size={28} />}
          title="Backend, DevOps & Data"
          description="Reliable systems, integrations, and production readiness."
          tools={[
            "MongoDB / SQL Databases",
            "Authentication & Authorization",
            "Cloud Deployment",
            "Performance Optimization",
          ]}
        />

        <ToolGroup
          icon={<GitBranch size={28} />}
          title="Collaboration & Delivery"
          description="Working effectively within teams and shipping with confidence."
          tools={[
            "Git & GitHub",
            "Code Reviews",
            "Agile / Sprint-based Workflow",
            "Documentation & Knowledge Sharing",
          ]}
        />

        <ToolGroup
          icon={<Megaphone size={28} />}
          title="Digital Marketing & Growth"
          description="Ensuring products are discoverable, measurable, and scalable."
          tools={[
            "SEO & Search Console",
            "Google Analytics",
            "Conversion Funnels",
            "Landing Page Optimization",
          ]}
        />

        <ToolGroup
          icon={<PenTool size={28} />}
          title="Content Creation & Education"
          description="Communicating complex ideas with clarity and structure."
          tools={[
            "Technical Writing",
            "Educational Tutorials",
            "Content Planning",
            "Developer-Focused Storytelling",
          ]}
        />

        <ToolGroup
          icon={<Users size={28} />}
          title="Product & Communication"
          description="Bridging the gap between users, teams, and business goals."
          tools={[
            "Requirement Analysis",
            "User-Centered Thinking",
            "Clear Documentation",
            "Stakeholder Communication",
          ]}
        />
      </div>
    </section>
  );
}

function ToolGroup({ icon, title, description, tools }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="text-indigo-400">{icon}</div>
        <div>
          <h2 className="text-2xl font-semibold mb-1">{title}</h2>
          <p className="text-slate-400">{description}</p>
        </div>
      </div>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-slate-300">
        {tools.map((tool) => (
          <li key={tool} className="px-4 py-2 rounded-xl bg-slate-800">
            {tool}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
