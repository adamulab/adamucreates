import { motion } from "framer-motion";
import { ArrowRight, Code2, Megaphone, PenTool } from "lucide-react";
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";

export default function HomePage() {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex items-center">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-indigo-400 mb-4">
              Software Developer • Digital Marketer • Content Creator
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Building digital products that <br />
              <span className="text-indigo-400">scale, sell, and inspire</span>
            </h1>
            <p className="text-slate-400 max-w-xl mb-8">
              I collaborate with teams and brands to design and build
              enterprise-grade applications, data-driven marketing systems, and
              educational content that deliver real-world impact.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-2xl transition"
              >
                View Projects <ArrowRight size={18} />
              </Link>
              <Link
                to="/hire-me"
                className="inline-flex items-center gap-2 border border-slate-700 hover:border-indigo-400 px-6 py-3 rounded-2xl transition"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <FeatureCard
              icon={<Code2 size={28} />}
              title="Developer"
              desc="Enterprise apps, modern web systems, scalable architectures."
            />
            <FeatureCard
              icon={<Megaphone size={28} />}
              title="Digital Marketer"
              desc="SEO-driven platforms, funnels, analytics, and growth systems."
            />
            <FeatureCard
              icon={<PenTool size={28} />}
              title="Content Creator"
              desc="Educational tech content that simplifies complex ideas."
            />
          </motion.div>
        </div>
      </section>
      <Testimonials />
    </>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-slate-900/70 backdrop-blur border border-slate-800 rounded-2xl p-6 shadow-lg"
    >
      <div className="text-indigo-400 mb-4">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-slate-400">{desc}</p>
    </motion.div>
  );
}
