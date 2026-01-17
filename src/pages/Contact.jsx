// src/pages/Contact.jsx
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="container mx-auto px-6 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          Whether you have a project, a question, or just want to connect, feel
          free to reach out. I typically respond within 24 hours.
        </p>
      </motion.div>

      {/* Contact Info */}
      <div className="mt-16 grid sm:grid-cols-2 gap-12">
        <ContactCard
          icon={<Mail size={24} />}
          title="Email"
          text="ingo@adamucreates.online"
          link="mailto:adamuabu@gmail.com"
        />
        <ContactCard
          icon={<Phone size={24} />}
          title="Phone"
          text="+234 803 442 3548"
          link="tel:+2348034423548"
        />
        <ContactCard
          icon={<MapPin size={24} />}
          title="Location"
          text="Nigeria"
        />
        <ContactCard
          icon={<Linkedin size={24} />}
          title="LinkedIn"
          text="linkedin.com/in/adamucreates"
          link="https://linkedin.com/in/adamucreates"
        />
        <ContactCard
          icon={<Twitter size={24} />}
          title="X (Twitter)"
          text="@adamucreates"
          link="https://x.com/adamucreates"
        />
        <ContactCard
          icon={<Instagram size={24} />}
          title="Instagram"
          text="@adamucreates"
          link="https://instagram.com/adamucreates"
        />
      </div>

      {/* Contact Form (optional) */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mt-24 max-w-3xl mx-auto flex flex-col gap-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <textarea
          placeholder="Your Message"
          rows={6}
          className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-2xl transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}

function ContactCard({ icon, title, text, link }) {
  return (
    <div className="flex items-start gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
      <div className="text-indigo-400 mt-1">{icon}</div>
      <div className="flex flex-col">
        <span className="font-semibold text-slate-100 mb-1">{title}</span>
        {link ? (
          <a href={link} className="text-slate-400 hover:text-white text-sm">
            {text}
          </a>
        ) : (
          <span className="text-slate-400 text-sm">{text}</span>
        )}
      </div>
    </div>
  );
}
