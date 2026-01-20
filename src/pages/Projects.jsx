import { useState } from "react";
import { motion } from "framer-motion";
import { Users, User, Layers, TrendingUp, ExternalLink } from "lucide-react";
import CaseStudyModal from "../components/CaseStudyModal";
import { CASE_STUDY_STATUS } from "../data/caseStudyStatusConfig";

const projects = [
  /* =======================
     ENTERPRISE / TEAM WORK
  ======================= */
  {
    title: "Enterprise Inventory & Payment System",
    collaboration: "team",
    context: "Team-based enterprise application",
    status: "in-progress",
    caseStudyStatus: "testing",
    description:
      "Collaborated with a cross-functional team to build an enterprise-grade inventory and payment system.",
    highlights: [
      "Team collaboration & code reviews",
      "Payment workflow integration",
      "Scalable backend architecture",
      "Business-focused reporting",
    ],
    tags: ["Production", "Team Project", "Enterprise"],
  },
  {
    title: "NaijaHomePro",
    collaboration: "team",
    context: "Real Estate Management System (Team Project)",
    status: "in-progress",
    caseStudyStatus: "development",
    description:
      "Collaborated with a development team to build a real estate management system designed to support property listings.",
    highlights: [
      "Team-based development",
      "Property & agent workflows",
      "Admin oversight",
      "Enterprise system design",
    ],
    tags: ["Real Estate", "Team Project", "Enterprise"],
  },
  {
    title: "Patient Records Management System",
    collaboration: "team",
    context: "Healthcare Information System",
    status: "in-progress",
    caseStudyStatus: "requirements",
    description:
      "Developed a web-based system to help healthcare facilities manage patient records efficiently.",
    highlights: [
      "Patient records & registration",
      "Medical history tracking",
      "Role-based staff access",
      "Data-focused usability",
    ],
    tags: ["Healthcare", "Web Application"],
  },

  /* =======================
     CLIENT PORTFOLIO WEBSITES
  ======================= */
  {
    title: "Janiba Ginger Ltd",
    collaboration: "solo",
    context: "Agro-Allied Business Website",
    status: "completed",
    description:
      "Designed and developed a professional business website for an agro-allied company specializing in ginger production and processing, with a custom product ordering experience.",
    highlights: [
      "Product showcase and business branding",
      "Cart-style modal for product selection",
      "Order submission via WhatsApp integration",
      "Mobile-first and responsive design",
    ],
    tags: ["Client Project", "Agro-Allied", "Business Website"],
    caseStudyLink: "https://janibaginger.com/",
  },
  {
    title: "Global Stallion Integrated Services Nigeria Ltd",
    collaboration: "solo",
    context: "Corporate Business Website",
    status: "completed",
    description:
      "Developed a corporate website for a diversified business services company to establish online presence and communicate their service offerings clearly.",
    highlights: [
      "Corporate branding and layout",
      "Service-focused content structure",
      "Responsive and accessible design",
      "Clear call-to-action flow",
    ],
    tags: ["Client Project", "Corporate", "Business Website"],
    caseStudyLink: "https://gsisnl.com/",
  },
  {
    title: "Noon Capital and Finance Ltd",
    collaboration: "solo",
    context: "Financial Services Portfolio Website",
    status: "completed",
    description:
      "Built a clean, professional portfolio website for a financial services firm to communicate their fund management and financial planning offerings.",
    highlights: [
      "Clear service and brand positioning",
      "Professional financial content structure",
      "Responsive, modern UI",
      "Client-focused information architecture",
    ],
    tags: ["Client Project", "Finance", "Portfolio Website"],
    caseStudyLink: "https://www.nooncapitalandfinance.com/",
  },

  /* =======================
     MINI / PERSONAL PROJECTS
  ======================= */
  {
    title: "Gidaje360",
    collaboration: "team",
    context: "Property Management App",
    status: "completed",
    description:
      "Built a property management system. A landlord centered property listings workflow.",
    highlights: [
      "Property listings",
      "Landlord, agent, and tenant structure",
      "Business-oriented system design",
    ],
    tags: ["Real Estate", "Team Project", "Enterprise"],
    caseStudyLink: "https://gidaje360.vercel.app",
  },
  {
    title: "AdamuCreates – Developers Quiz Game",
    collaboration: "solo",
    context: "Personal Project",
    status: "completed",
    description:
      "A quiz-based web application designed to help developers test and improve their programming knowledge in an interactive way.",
    highlights: [
      "Dynamic question handling",
      "Score tracking and feedback",
      "Clean UI and smooth interactions",
      "Built for learning and fun",
    ],
    tags: ["Personal Project", "JavaScript", "Learning Tool"],
    caseStudyLink: "https://adamulab-js-mini-projects.netlify.app/quiz-app/",
  },
  {
    title: "Weather App",
    collaboration: "solo",
    context: "Mini Project",
    status: "completed",
    description:
      "A simple weather application that fetches real-time weather data based on user location or search input.",
    highlights: [
      "API integration",
      "Search-based weather lookup",
      "Clean and minimal UI",
      "Error and loading state handling",
    ],
    tags: ["Personal Project", "API", "JavaScript"],
    caseStudyLink: "https://adamulab-js-mini-projects.netlify.app/weather/",
  },
  {
    title: "To-Do List App",
    collaboration: "solo",
    context: "Mini Project",
    status: "completed",
    description:
      "A task management application focused on simplicity, helping users organize daily tasks efficiently.",
    highlights: [
      "Add, update, and delete tasks",
      "State management fundamentals",
      "Persistent data handling",
      "User-friendly interface",
    ],
    tags: ["Personal Project", "Productivity", "JavaScript"],
    caseStudyLink: "https://adamulab-js-mini-projects.netlify.app/todo-list/",
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
  const [open, setOpen] = useState(false);

  const handleCaseStudyClick = () => {
    if (project.status === "in-progress") {
      setOpen(true);
    }
  };

  return (
    <>
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
              {project.collaboration === "team" ? (
                <>
                  <Users size={18} className="text-indigo-400" />
                  Team Collaboration
                </>
              ) : (
                <>
                  <User size={18} className="text-indigo-400" />
                  Solo Development
                </>
              )}
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <TrendingUp size={18} className="text-indigo-400" /> Business
              Impact Focused
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

            <div>
              {project.status === "in-progress" && (
                <span className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300">
                  {CASE_STUDY_STATUS[project.caseStudyStatus].label}
                </span>
              )}
            </div>

            {/* CTA */}
            {project.status === "completed" ? (
              <a
                href={project.caseStudyLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-end gap-2 text-sm text-indigo-400 hover:text-indigo-300"
              >
                View Case Study <ExternalLink size={14} />
              </a>
            ) : (
              <button
                onClick={handleCaseStudyClick}
                className="mt-4 inline-flex items-center justify-end gap-2 text-sm text-amber-400 hover:text-amber-300"
              >
                Currently in {CASE_STUDY_STATUS[project.caseStudyStatus].label}{" "}
                Phase
                <ExternalLink size={14} />
              </button>
            )}
          </div>
        </div>
      </motion.div>
      <CaseStudyModal
        open={open}
        onClose={() => setOpen(false)}
        project={project}
      />
    </>
  );
}
