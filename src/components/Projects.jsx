import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "naijahomepro",
    title: "NaijaHomePro",
    desc: "A real estate marketplace for Nigerian homebuyers and renters.",
    tag: "MERN",
    details:
      "Built a responsive marketplace with agent-centred listing flows, search and filters, and a scalable API.",
    live: "https://gidaje360.vercel.app",
  },
  {
    id: "janiba-ginger",
    title: "Janiba Ginger",
    desc: "Organic ginger processing and export brand with a focus on healthy ginger-based drinks.",
    tag: "React.js",
    details: `Janiba Ginger is a Nigerian agribusiness that processes fresh ginger into a range of healthy drinks while also exporting raw ginger internationally.
  
  **Overview:** The website serves as both a company profile and an online store, highlighting Janiba’s premium organic ginger products and global export capabilities.

  **Challenges:** The client needed a sleek, responsive, and animated website that could display products in modals, integrate basic e-commerce functionality, and showcase their export operations professionally.

  **Solutions:** Built a React and Next.js-powered site with smooth Framer Motion animations, Tailwind-based responsive design, and product modals for quick views. The site features a CMS-driven product list, SEO optimization, and performance-tuned loading speeds.

  **Results:** The redesign positioned Janiba Ginger as a trusted exporter in the agro-health industry, with improved engagement and streamlined B2B communication.`,
    live: "https://janibaginger.com/",
  },
  {
    id: "janiba-intercontinental",
    title: "Janiba Intercontinental",
    desc: "Corporate logistics and trading company website.",
    tag: "React",
    details:
      "Corporate site with multilingual support and contact lead capture.",
    live: "https://janibaintercontinentalnetwork.com",
  },
  {
    id: "global-stallion",
    title: "Global Stallion Integrated Services Nig. Ltd.",
    desc: "Transport, logistics, and import/export web presence.",
    tag: "Corporate",
    details:
      "Showcased services, routes, and client testimonials with admin CMS.",
    live: "https://gsisnl.com",
  },
  {
    id: "five-star-college",
    title: "Five Star College of Health Technology",
    desc: "Educational institution website for health and tech programs.",
    tag: "Education",
    details: "Course listings, enrollment forms, and student resources.",
    live: "https://fivestarcollegeofhealthtech.ng/",
  },
  {
    id: "noon-capital",
    title: "Noon Capital and Finance",
    desc: "Finance and investment firm portfolio site.",
    tag: "Finance",
    details:
      "Portfolio, team bios, and a secure contact form integrated with email provider.",
    live: "https://nooncapitalandfinance.com",
  },
];

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  function openCase(p) {
    setSelected(p);
    setOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeCase() {
    setOpen(false);
    setSelected(null);
    document.body.style.overflow = "";
  }

  return (
    <section id="projects" className="mt-12">
      <h2 className="text-2xl font-semibold">Selected Work</h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="p-6 bg-white rounded-2xl shadow-sm border flex flex-col justify-between"
          >
            <div>
              <div className="text-xs uppercase text-slate-500">{p.tag}</div>
              <h3 className="mt-2 text-xl font-semibold text-emerald-800">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{p.desc}</p>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => openCase(p)}
                className="text-sm px-3 py-2 rounded bg-emerald-50 border"
              >
                View Case Study
              </button>
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-3 py-2 rounded bg-emerald-600 text-white"
              >
                Visit Live Site
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Sliding case study drawer */}
      {open && selected && (
        <motion.aside
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 w-full md:w-2/5 h-full bg-white shadow-2xl z-50 overflow-auto"
        >
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs uppercase text-slate-500">
                  {selected.tag}
                </div>
                <h3 className="mt-1 text-2xl font-semibold text-emerald-800">
                  {selected.title}
                </h3>
              </div>
              <button onClick={closeCase} className="text-slate-500">
                Close
              </button>
            </div>

            <div className="mt-6 text-slate-700">
              <p>{selected.details}</p>

              <div className="mt-6">
                <h4 className="font-semibold">Key features</h4>
                <ul className="mt-2 list-disc ml-5 text-sm text-slate-600">
                  <li>Responsive UI and mobile-first design</li>
                  <li>Performance optimizations and lazy loading</li>
                  <li>SEO-friendly server-side rendering where needed</li>
                </ul>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={selected.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-emerald-600 text-white"
                >
                  Visit live site
                </a>
                <button
                  onClick={closeCase}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded border"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.aside>
      )}

      {/* overlay */}
      {open && (
        <div onClick={closeCase} className="fixed inset-0 bg-black/30 z-40" />
      )}
    </section>
  );
}
