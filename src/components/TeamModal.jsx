// src/components/TeamModal.jsx
import { motion } from "framer-motion";

export default function TeamModal({ member, onClose }) {
  if (!member) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, y: 18, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.96, y: 12, opacity: 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm rounded-lg bg-white p-8 text-center shadow-panel"
      >
        <img
          src={member.image}
          alt={member.name}
          className="mx-auto mb-4 h-25 w-24 rounded-full object-cover"
        />

        <h3 className="text-lg font-bold text-ink">{member.name}</h3>
        <p className="mt-1 text-primary">{member.role}</p>

        {/* <p className="mt-3 text-sm leading-7 text-muted">{member.bio}</p> */}

        <button
          onClick={onClose}
          className="mt-5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}
