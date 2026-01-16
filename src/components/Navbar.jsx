import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Tools", path: "/tools" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold text-xl tracking-tight">
          Adamu<span className="text-indigo-400">Creates</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative text-sm transition ${
                  isActive
                    ? "text-indigo-400"
                    : "text-slate-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <span>
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 w-full h-[2px] bg-indigo-400"
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/hire-me"
          className="hidden md:inline-flex bg-indigo-500 hover:bg-indigo-600 text-white text-sm px-5 py-2.5 rounded-xl transition"
        >
          Hire Me
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Nav Panel */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden bg-slate-950 border-t border-slate-800"
        >
          <div className="px-6 py-6 flex flex-col gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-400 text-lg"
                    : "text-slate-300 text-lg"
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/hire-me"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl"
            >
              Hire Me
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
