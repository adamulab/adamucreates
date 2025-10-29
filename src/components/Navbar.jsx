import React from "react";
import { Home, Briefcase, Code2, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "../assets/adamu-cat.jpg";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/60 border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* profile thumbnail placeholder */}
          <img
            src={Logo}
            alt="Adamu"
            className="w-10 h-10 rounded-full object-cover border-2 border-emerald-200"
          />
          <div className="text-2xl font-bold tracking-tight text-emerald-800">
            AdamuCreates
          </div>
        </div>

        <div className="hidden sm:flex gap-6 text-sm text-slate-600">
          <button
            onClick={() =>
              document
                .getElementById("home")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-emerald-900 flex items-center gap-1"
          >
            <Home size={16} /> Home
          </button>
          <button
            onClick={() =>
              document
                .getElementById("naijahomepro")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-emerald-900 flex items-center gap-1"
          >
            <Briefcase size={16} /> Work
          </button>
          <button
            onClick={() =>
              document
                .getElementById("skills")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-emerald-900 flex items-center gap-1"
          >
            <Code2 size={16} /> Skills
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-emerald-900 flex items-center gap-1"
          >
            <MessageSquare size={16} /> Hire Me
          </button>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:you@example.com"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-full bg-emerald-600 text-white text-sm"
          >
            Hire Me
          </a>
          <div className="flex gap-3 text-lg text-slate-600">
            <a aria-label="github" href="#">
              <FaGithub />
            </a>
            <a aria-label="linkedin" href="#">
              <FaLinkedin />
            </a>
            <a aria-label="twitter" href="#">
              <FaTwitter />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
