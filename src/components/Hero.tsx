import { motion } from "motion/react";
import { contactConfig } from "../config";
import { Calendar, ChevronDown, Compass, Phone } from "lucide-react";
import ImageLoader from "./ImageLoader";

interface HeroProps {
  onReserveClick: () => void;
}

export default function Hero({ onReserveClick }: HeroProps) {
  // Cinematic background image: a stunning high-end evening rooftop lounge scene
  const heroImage = "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1920";

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between items-center bg-brand-charcoal overflow-hidden pt-28 pb-12"
    >
      {/* Background Image Container with Ken Burns effect using motion */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{
            scale: { duration: 12, ease: "easeOut" },
            opacity: { duration: 2, ease: "easeIn" },
          }}
          className="w-full h-full"
        >
          <ImageLoader
            src={heroImage}
            alt="The Green Lounge Rooftop Atmospheric Evening"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Layered cinematic gradients to guarantee maximum text contrast and elegant depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-brand-charcoal/80 z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/80 via-transparent to-brand-charcoal/80 z-0" />
      </div>

      {/* Spacing alignment helper */}
      <div className="w-full h-1" />

      {/* Central Interactive Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center flex-grow mt-8 md:mt-12">
        {/* Supporting Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-brand-gold font-sans text-xs sm:text-sm tracking-[0.4em] uppercase font-bold mb-4"
        >
          EXPERIENCE THE ELEVATION
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-brand-cream leading-none uppercase max-w-4xl"
        >
          ELEVATE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cream via-brand-gold-muted to-brand-gold">NIGHT.</span>
        </motion.h1>

        {/* Supporting Headline */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-brand-gold-muted font-serif text-lg sm:text-xl md:text-2xl tracking-wide italic mt-4 max-w-2xl"
        >
          WHERE KIGALI COMES TO UNWIND.
        </motion.h2>

        {/* Body Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-brand-cream/70 font-sans text-sm sm:text-base leading-relaxed tracking-wide max-w-xl mt-6 font-light"
        >
          Discover exceptional cuisine, handcrafted cocktails, premium events, and a vibrant social rooftop atmosphere designed for unforgettable moments above Kigali.
        </motion.p>

        {/* Dynamic CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto"
        >
          <button
            onClick={onReserveClick}
            className="w-full sm:w-auto px-8 py-4 bg-brand-green-accent hover:bg-brand-gold text-brand-cream hover:text-brand-charcoal text-xs tracking-[0.2em] uppercase font-bold rounded-none transition-all duration-300 border border-brand-green-accent hover:border-brand-gold shadow-xl flex items-center justify-center gap-2"
          >
            <Calendar size={14} />
            RESERVE A TABLE
          </button>
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 border border-brand-cream hover:border-brand-gold text-brand-cream hover:text-brand-gold text-xs tracking-[0.2em] uppercase font-bold rounded-none transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Compass size={14} />
            EXPLORE THE MENU
          </a>
        </motion.div>
      </div>

      {/* Bottom Information Frame */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-brand-cream/10 pt-8 mt-12">
        {/* Location Indicator */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex items-center gap-3 text-left"
        >
          <div className="w-2 h-2 rounded-full bg-brand-green-accent animate-pulse" />
          <div>
            <p className="text-[10px] tracking-[0.3em] text-brand-gold-muted font-bold uppercase">
              LOCATION
            </p>
            <p className="font-sans text-xs text-brand-cream/90 font-medium tracking-wider uppercase mt-1">
              SONATUBE • SILVERBACK MALL ROOFTOP • KIGALI
            </p>
          </div>
        </motion.div>

        {/* Scroll Down Hint */}
        <motion.a
          href="#experience"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="hidden md:flex flex-col items-center gap-1 text-brand-cream/40 hover:text-brand-gold transition-colors"
        >
          <span className="text-[9px] tracking-[0.3em] font-semibold uppercase">SCROLL</span>
          <ChevronDown size={14} />
        </motion.a>

        {/* Quick Contact Frame */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="flex items-center gap-3 text-right md:text-right"
        >
          <Phone size={14} className="text-brand-gold" />
          <div>
            <p className="text-[10px] tracking-[0.3em] text-brand-gold-muted font-bold uppercase">
              BOOKINGS & INQUIRIES
            </p>
            <a
              href={`tel:${contactConfig.phonePrimary}`}
              className="font-sans text-xs text-brand-cream hover:text-brand-gold font-bold tracking-wider transition-colors block mt-1"
            >
              {contactConfig.phonePrimaryFormatted}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
