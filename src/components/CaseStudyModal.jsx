import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function CaseStudyModal({ open, onClose, project }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-lg w-full relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-semibold mb-4">
                Case Study in Final Development
              </h3>

              <p className="text-slate-400 leading-relaxed mb-6">
                <strong>{project.title}</strong> is currently in its final
                development and validation phase. The system is being completed
                in collaboration with stakeholders and will be published after
                deployment and internal review.
              </p>

              <div className="bg-slate-800/60 rounded-xl p-4 text-sm text-slate-300">
                <p className="font-medium mb-2">Scope Highlights</p>
                <ul className="space-y-1">
                  <li>• Architecture & core features completed</li>
                  <li>• Business workflows validated</li>
                  <li>• Deployment & testing ongoing</li>
                </ul>
              </div>

              <button
                onClick={onClose}
                className="mt-6 w-full rounded-full bg-indigo-600 hover:bg-indigo-500 transition px-6 py-3 text-sm font-medium"
              >
                Got it
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
