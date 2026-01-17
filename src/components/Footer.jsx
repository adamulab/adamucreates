// src/components/Footer.jsx
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-24">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {/* Branding & Trust */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex flex-col">
            <div>
              Adamu<span className="text-indigo-400">Creates</span>
            </div>
            <p className="text-xs text-indigo-400">Stuffs Online</p>
          </h2>
          <p className="text-slate-400">
            Building modern, scalable digital products with focus, clarity, and
            impact.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <MapPin size={18} /> <span>Nigeria</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <Mail size={18} /> <span>info@adamucreates.online</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <Phone size={18} /> <span>+234 803 442 3548</span>
          </div>
        </div>

        {/* Quick Nav */}
        <div className="space-y-4">
          <h3 className="font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/tools" className="hover:text-white">
                Tools
              </Link>
            </li>
            <li>
              <Link to="/hire-me" className="hover:text-white">
                Hire Me
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social & Trust Signals */}
        <div className="space-y-4">
          <h3 className="font-semibold text-white mb-2">Connect</h3>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com/adamucreates"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://x.com/adamucreates"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://instagram.com/adamucreates"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/adamucreates"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <p className="text-slate-400 text-sm mt-4">
            Trusted by teams, clients, and learners worldwide.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800 mt-10 py-4 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} AdamuCreates. All rights reserved.
      </div>
    </footer>
  );
}
