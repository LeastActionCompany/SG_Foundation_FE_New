import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";
import { galleryImages } from "../../data/siteContent";

const categories = ["All", "Education", "Community", "Empowerment"];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredImages = galleryImages.filter(img => filter === "All" || img.category === filter);

  return (
    <section id="gallery" className="relative overflow-hidden section">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-white" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Gallery"
          title="Moments of care, learning, and community action."
          description="A glimpse into the everyday work that turns support into visible hope."
          centered
        />

        <Reveal delay={100} className="mt-8 mb-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-primary text-white shadow-md scale-105"
                  : "bg-white/50 text-ink/70 hover:bg-white hover:text-primary hover:shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="mt-4 grid auto-rows-[220px] gap-4 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                key={image.src}
                className={[
                  "group relative cursor-pointer overflow-hidden rounded-3xl shadow-[0_4px_20px_rgba(40,60,129,0.1)]",
                  image.tall ? "md:row-span-2" : "",
                ].join(" ")}
                onClick={() => setLightbox(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-medium text-white/90">{image.alt}</p>
                </div>

                {/* Zoom icon */}
                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 backdrop-blur-xl p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            onClick={() => setLightbox(null)}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[85vh] max-w-5xl rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-white/60 text-center max-w-lg px-4">
            {lightbox.alt}
          </p>
        </div>
      )}
    </section>
  );
}
