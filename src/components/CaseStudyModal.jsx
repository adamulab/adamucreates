import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { CASE_STUDY_STATUS } from "../data/caseStudyStatusConfig";

export default function CaseStudyModal({ open, onClose, project }) {
  const status = CASE_STUDY_STATUS[project.caseStudyStatus];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

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

              <span className={`text-sm font-medium ${status.color}`}>
                {status.label}
              </span>

              <h3 className="text-2xl font-semibold mt-2 mb-4">
                {status.title}
              </h3>

              <p className="text-slate-400 leading-relaxed mb-6">
                <strong>{project.title}</strong> — {status.message}
              </p>

              <div className="bg-slate-800/60 rounded-xl p-4 text-sm text-slate-300">
                <p className="font-medium mb-2">Current Focus</p>
                <ul className="space-y-1">
                  <li>• Cross-team collaboration</li>
                  <li>• Business validation</li>
                  <li>• Production readiness</li>
                </ul>
              </div>

              <button
                onClick={onClose}
                className="mt-6 w-full rounded-full bg-indigo-600 hover:bg-indigo-500 transition px-6 py-3 text-sm font-medium"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
