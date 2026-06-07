// import { motion } from "framer-motion";

// export default function TeamCard({ member, isActive, onClick, onMouseEnter }) {
//   return (
//     <motion.div
//       onClick={onClick}
//       onMouseEnter={onMouseEnter}
//       whileHover={{ y: -8 }}
//       animate={{
//         scale: isActive ? 1 : 0.96,
//         opacity: isActive ? 1 : 0.65,
//         y: isActive ? -6 : 0,
//       }}
//       transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//       className={`h-full cursor-pointer overflow-hidden rounded-3xl border transition-all duration-300 ${
//         isActive
//           ? "border-primary/25 bg-white shadow-[0_20px_60px_rgba(40,60,129,0.18)]"
//           : "border-slate-100 bg-white/90 shadow-sm"
//       }`}
//     >
//       {/* Image area */}
//       <div className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
//         <img
//           src={member.image}
//           alt={member.name}
//           className="mx-auto h-48 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
//         />
//         {isActive && (
//           <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-light" />
//         )}
//       </div>

//       {/* Content */}
//       <div className="p-5 text-center">
//         <h3 className="font-display text-base font-bold text-ink">{member.name}</h3>
//         <p className={`mt-1 text-xs font-bold uppercase tracking-wider transition-colors ${isActive ? "text-primary" : "text-muted"}`}>
//           {member.role}
//         </p>
//         <p className="mt-3 text-xs leading-5 text-muted line-clamp-2">{member.description}</p>

//         <div className={`mt-4 inline-flex items-center gap-1 text-xs font-bold transition-all duration-300 ${isActive ? "opacity-100 text-primary" : "opacity-0"}`}>
//           View Profile →
//         </div>
//       </div>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";

export default function TeamCard({
  member,
  isActive,
  onClick,
  onMouseEnter,
}) {
  return (
    <motion.div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      whileHover={{
        y: -12,
        x: 6,
        scale: 1.04,
        rotate: -1,
      }}
      animate={{
        scale: isActive ? 1 : 0.95,
        opacity: isActive ? 1 : 0.75,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      // className={`
      //   group relative cursor-pointer overflow-hidden
      //   rounded-[28px] border border-white/20
      //   bg-white/70 backdrop-blur-xl
      //   transition-all duration-500
      //   ${
      //     isActive
      //       ? "shadow-[0_20px_80px_rgba(59,130,246,0.18)]"
      //       : "shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
      //   }
      // `}
      className={`
       group relative will-change-transform
       cursor-pointer overflow-hidden
       bg-white
       transition-all duration-500
       `}
    >
      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Image */}
      <div className="relative overflow-hidden p-4 pb-0">
        <div className="overflow-hidden rounded-3xl">
          <img
            src={member.image}
            alt={member.name}
            className="
              h-64 w-full object-cover object-top
              transition-transform duration-700
              group-hover:scale-110
            "
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6 text-center">
        <h3 className="text-lg font-bold text-slate-900">
          {member.name}
        </h3>

        <p className="mt-1 text-sm font-medium text-primary">
          {member.role}
        </p>

        {/* <p className="mt-3 text-sm leading-6 text-slate-500 line-clamp-2">
          {member.description}
        </p> */}

        {/* <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="
            mt-5 inline-flex items-center gap-2
            rounded-full bg-primary/10
            px-4 py-2 text-xs font-semibold
            text-primary
          "
        >
          Explore Profile
        </motion.div> */}
      </div>
    </motion.div>
  );
}
