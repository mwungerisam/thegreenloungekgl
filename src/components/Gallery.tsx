import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { galleryImages } from "../config";
import { X, ZoomIn, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import ImageLoader from "./ImageLoader";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    { id: "ALL", label: "ALL MOMENTS" },
    { id: "rooftop", label: "ROOFTOP" },
    { id: "food", label: "CUISINE" },
    { id: "drinks", label: "DRINKS" },
    { id: "events", label: "EVENTS" },
    { id: "interior", label: "INTERIOR" },
    { id: "celebrations", label: "CELEBRATIONS" }
  ];

  const filteredImages =
    activeFilter === "ALL"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  // Handle lightbox keyboard binds
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNextLightbox();
      if (e.key === "ArrowLeft") handlePrevLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  const handleNextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % filteredImages.length;
    });
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + filteredImages.length) % filteredImages.length;
    });
  };

  return (
    <section id="gallery" className="py-24 bg-[#080a09] relative">
      <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] ambient-glow rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-brand-gold mb-3">
            <Sparkles size={14} />
            <span className="text-xs tracking-[0.3em] font-bold uppercase">
              VISUAL FEED
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-brand-cream uppercase">
            THE GREEN LOUNGE EXPERIENCE
          </h2>
          <p className="text-brand-gold-muted font-serif text-lg tracking-wide italic mt-1">
            Browse through sunset cocktails, delicious grills, and unforgettable nights.
          </p>
        </div>

        {/* Filters bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 border-b border-brand-green-deep/30 pb-4 mb-12 overflow-x-auto scrollbar-none">
          {filters.map((filt) => (
            <button
              key={filt.id}
              onClick={() => {
                setActiveFilter(filt.id);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 text-[10px] tracking-widest uppercase font-bold border-b-2 transition-all duration-300 whitespace-nowrap ${
                activeFilter === filt.id
                  ? "border-brand-gold text-brand-gold"
                  : "border-transparent text-brand-cream/50 hover:text-brand-cream hover:border-brand-cream/20"
              }`}
            >
              {filt.label}
            </button>
          ))}
        </div>

        {/* Masonry Styled Responsive Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={img.id}
                onClick={() => setLightboxIndex(index)}
                className="break-inside-avoid relative overflow-hidden group cursor-pointer border border-brand-green-deep/15 hover:border-brand-gold/30 bg-brand-charcoal transition-all duration-500"
              >
                {/* Image asset with custom hover scale */}
                <ImageLoader
                  src={img.url}
                  alt={img.title}
                  className="transition-transform duration-[6s] group-hover:scale-105"
                />
                
                {/* Sophisticated Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn size={18} className="text-brand-gold mb-2" />
                    <p className="text-[9px] tracking-widest text-brand-gold uppercase font-bold">
                      {img.category}
                    </p>
                    <h4 className="font-serif text-lg text-brand-cream font-bold mt-1 uppercase">
                      {img.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Premium Lightbox Overlay */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#060807]/98 z-[100] flex flex-col items-center justify-center p-6 select-none"
            >
              {/* Close Button top-right */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 p-3 bg-brand-charcoal border border-brand-cream/10 text-brand-cream hover:text-brand-gold hover:border-brand-gold transition-colors duration-300"
                aria-label="Close lightbox"
              >
                <X size={24} />
              </button>

              {/* Slider Arrows (Hidden on single item) */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrevLightbox}
                    className="absolute left-6 p-3 bg-brand-charcoal/80 border border-brand-cream/10 text-brand-cream hover:text-brand-gold hover:border-brand-gold transition-colors duration-300 z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={handleNextLightbox}
                    className="absolute right-6 p-3 bg-brand-charcoal/80 border border-brand-cream/10 text-brand-cream hover:text-brand-gold hover:border-brand-gold transition-colors duration-300 z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Centered Lightbox Image with descriptive titles */}
              <div className="max-w-4xl max-h-[75vh] w-full flex flex-col items-center relative">
                <motion.div
                  key={lightboxIndex}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-h-[70vh] aspect-[16/10] max-w-2xl border border-brand-green-deep/20"
                >
                  <ImageLoader
                    src={filteredImages[lightboxIndex].url}
                    alt={filteredImages[lightboxIndex].title}
                    className="max-h-[70vh]"
                  />
                </motion.div>
                
                {/* Description Frame at bottom */}
                <div className="text-center mt-6">
                  <span className="text-[10px] tracking-widest text-brand-gold uppercase font-bold">
                    {filteredImages[lightboxIndex].category}
                  </span>
                  <h3 className="font-serif text-xl text-brand-cream font-bold mt-1 uppercase">
                    {filteredImages[lightboxIndex].title}
                  </h3>
                  <p className="text-brand-cream/40 text-[10px] tracking-widest mt-2">
                    {lightboxIndex + 1} / {filteredImages.length}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
