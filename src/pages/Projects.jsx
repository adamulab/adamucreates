import { motion } from "framer-motion";
import { Users, Layers, TrendingUp, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Enterprise Inventory & Payment System",
    context: "Team-based enterprise application",
    description:
      "Collaborated with a cross-functional team to build an enterprise-grade inventory and payment system for a growing business. The platform supports real-time stock tracking, secure payments, and role-based access.",
    highlights: [
      "Team collaboration & code reviews",
      "Scalable backend architecture",
      "Payment workflow integration",
      "Business-focused reporting",
    ],
    tags: ["Enterprise", "Team Project", "Production"],
  },
  {
    title: "Health Facility Locator Platform",
    context: "Collaborative product development",
    description:
      "Worked within a small product team to develop a location-based platform that helps users discover nearby health facilities. Focused on frontend architecture, API integration, and usability.",
    highlights: [
      "Geolocation & API integration",
      "Clean, accessible UI",
      "Collaboration with backend engineers",
      "Real-world user testing",
    ],
    tags: ["Product", "Team Project", "Public Service"],
  },
  {
    title: "Digital Marketing & Content Platform",
    context: "Growth & content-focused system",
    description:
      "Partnered with marketers and designers to build a content-driven platform optimized for SEO, analytics, and conversion. The system supports campaign tracking and performance insights.",
    highlights: [
      "SEO-first architecture",
      "Analytics & performance tracking",
      "Content workflow optimization",
      "Marketing team collaboration",
    ],
    tags: ["Marketing", "Content", "Growth"],
  },
  {
    title: "NaijaHomePro",
    context: "Real Estate Management System",
    description:
      "Developed a comprehensive property management platform helping clients manage listings, tenants, and payments efficiently.",
    highlights: [
      "Team-based development",
      "Property listing & management",
      "Agent, Landlord, & Tenant workflows",
      "Payment & reporting integration",
    ],
    tags: ["Enterprise", "Real Estate", "Team Project"],
    caseStudyLink: "#naijahomepro", // placeholder, can link to a real case study page
  },
  {
    title: "Janiba Ginger",
    context: "Agro-Allied Business Platform",
    description:
      "Worked on a platform for ginger processing and distribution, streamlining farm-to-market operations.",
    highlights: [
      "Supply chain tracking",
      "Production workflow automation",
      "Market & sales management",
      "Collaboration with production teams",
    ],
    tags: ["Agro-Allied", "Team Project", "Enterprise"],
    caseStudyLink: "#janibaginger",
  },
  {
    title: "Noon Capital and Finance",
    context: "Fund Management & Financial Planning",
    description:
      "Collaborated on a secure, scalable platform for investment tracking, fund management, and client financial planning.",
    highlights: [
      "Secure fund tracking",
      "Client portfolio management",
      "Team collaboration",
      "Reporting & analytics dashboards",
    ],
    tags: ["Finance", "Enterprise", "Team Project"],
    caseStudyLink: "#nooncapital",
  },
  {
    title: "Gidaje 360",
    context: "Property Management System",
    description:
      "Part of a team that developed a property management system for tracking assets, tenants, and real estate operations.",
    highlights: [
      "Enterprise-grade property management",
      "Tenant & lease tracking",
      "Collaboration with backend team",
      "Real-time reporting",
    ],
    tags: ["Real Estate", "Team Project", "Enterprise"],
    caseStudyLink: "#gidaje360",
  },
  {
    title: "Mobile Web School",
    context: "Online Learning System",
    description:
      "Built an e-learning platform supporting course management, assessments, and user progress tracking.",
    highlights: [
      "Course management & tracking",
      "Team collaboration",
      "Responsive and mobile-friendly",
      "Student progress analytics",
    ],
    tags: ["Education", "Team Project", "Enterprise"],
    caseStudyLink: "#mobilewebschool",
  },
];

export default function Projects() {
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
          Projects & Case Studies
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          A selection of real-world projects I built or collaborated with teams
          to create enterprise applications across diverse industries.
        </p>
      </motion.div>

      {/* Projects */}
      <div className="mt-16 space-y-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-sm text-indigo-400 mb-2">{project.context}</p>
          <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            {project.description}
          </p>

          <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-400">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Layers size={16} className="mt-1 text-indigo-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Meta */}
        <div className="flex flex-col gap-4 min-w-[220px]">
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <Users size={18} className="text-indigo-400" /> Team Collaboration
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <TrendingUp size={18} className="text-indigo-400" /> Business Impact
            Focused
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Fixed Case Study Link */}
          {project.caseStudyLink ? (
            <a
              href={project.caseStudyLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300"
            >
              View Case Study <ExternalLink size={14} />
            </a>
          ) : (
            <span className="mt-4 inline-flex items-center gap-2 text-sm text-indigo-400 opacity-50 cursor-not-allowed">
              Case Study Coming Soon <ExternalLink size={14} />
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
