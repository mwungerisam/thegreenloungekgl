import { motion } from "motion/react";
import { upcomingEvents } from "../config";
import { Calendar, Clock, Music, ArrowRight, Sparkles, MessageCircle } from "lucide-react";

interface EventsProps {
  onReserveClick: () => void;
}

export default function Events({ onReserveClick }: EventsProps) {
  // Pre-filled WhatsApp link specifically for Event RSVPs
  const getEventRSVPUrl = (eventTitle: string) => {
    const text = encodeURIComponent(
      `Hello The Green Lounge, I would like to RSVP/Book a table for the upcoming event: ${eventTitle}. Please let me know the availability.`
    );
    return `https://wa.me/250791700255?text=${text}`;
  };

  return (
    <section id="events" className="py-24 bg-brand-charcoal relative">
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] ambient-glow rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* SECTION 10: WHAT'S HAPPENING */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-brand-gold mb-3">
            <Sparkles size={14} />
            <span className="text-xs tracking-[0.3em] font-bold uppercase">
              VIBRANT NIGHTS
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-brand-cream uppercase">
            WHAT&apos;S HAPPENING
          </h2>
          <p className="text-brand-gold-muted font-serif text-lg tracking-wide italic mt-1">
            Unforgettable events above the Kigali skyline.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-24">
          {upcomingEvents.map((evt, index) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-brand-card/40 hover:bg-brand-card/90 border border-brand-green-deep/20 hover:border-brand-gold/30 flex flex-col justify-between h-full group transition-all duration-500"
            >
              {/* Event Image Cover */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/20 to-transparent" />
                
                {/* Special Tag for Main Feature */}
                {evt.isSpecialFeature && (
                  <span className="absolute top-4 left-4 bg-brand-green-accent text-brand-cream text-[9px] font-bold tracking-widest px-3 py-1 uppercase border border-brand-gold/20">
                    WEEKEND KICKOFF
                  </span>
                )}
              </div>

              {/* Event Metadata and Descriptions */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-brand-gold-muted font-bold tracking-widest uppercase mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} className="text-brand-gold" /> {evt.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} className="text-brand-gold" /> {evt.time}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold tracking-wide text-brand-cream uppercase group-hover:text-brand-gold transition-colors duration-300 mb-3">
                    {evt.title}
                  </h3>

                  {evt.artistOrDJ && (
                    <div className="flex items-center gap-2 mb-4 text-xs text-brand-cream/90 font-medium tracking-wide">
                      <Music size={12} className="text-brand-gold-muted" />
                      <span className="font-sans">Lineup: <strong className="text-brand-gold">{evt.artistOrDJ}</strong></span>
                    </div>
                  )}

                  <p className="font-sans text-brand-cream/70 text-sm leading-relaxed tracking-wide font-light mb-6">
                    {evt.description}
                  </p>
                </div>

                {/* RSVP Interactions */}
                <div className="pt-4 border-t border-brand-green-deep/20 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={getEventRSVPUrl(evt.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-3 border border-brand-gold-muted/30 text-brand-gold hover:text-brand-charcoal hover:bg-brand-gold hover:border-brand-gold text-xs tracking-widest font-bold uppercase transition-all duration-300 flex items-center justify-center gap-1"
                  >
                    <MessageCircle size={12} /> RSVP WHATSAPP
                  </a>
                  <button
                    onClick={onReserveClick}
                    className="w-full py-3 bg-brand-green-accent text-brand-cream hover:bg-brand-gold hover:text-brand-charcoal text-xs tracking-widest font-bold uppercase transition-all duration-300"
                  >
                    BOOK TABLE
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SECTION 11: CINEMATIC FULL-WIDTH EVENT FEATURE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative min-h-[450px] w-full flex flex-col justify-center items-center bg-brand-charcoal overflow-hidden group border border-brand-gold/10"
        >
          {/* Background image for event feature with subtle slow zoom */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full transform transition-transform duration-[8s] scale-105 group-hover:scale-100">
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1500"
                alt="The Green Lounge Nightlife Atmosphere"
                className="w-full h-full object-cover opacity-25"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Cinematic Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/80 to-brand-charcoal" />
            {/* Subtle animated lighting sweep */}
            <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-brand-green-accent/30 to-transparent -translate-x-full animate-[shimmer_8s_infinite] pointer-events-none" />
          </div>

          <div className="relative z-10 text-center max-w-3xl px-6 flex flex-col items-center py-16">
            <p className="text-brand-gold font-sans text-xs tracking-[0.4em] uppercase font-bold mb-4">
              CHOOSE THE VIBE
            </p>
            
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-cream uppercase mb-4 leading-tight">
              YOUR NIGHT STARTS HERE.
            </h2>

            <p className="text-brand-cream/80 text-sm sm:text-base leading-relaxed tracking-wide font-light max-w-xl mb-8">
              At The Green Lounge, transitions are seamless. Dine in style at sunset, and watch the lounge evolve as premium tracks and social energy take over the rooftop canvas.
            </p>

            {/* Overlays Grid Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-8 text-xs sm:text-sm text-brand-gold-muted font-serif italic mb-10">
              <span className="flex items-center gap-1 font-sans not-italic text-[10px] tracking-widest font-bold text-brand-cream/90">
                MUSIC
              </span>
              <span className="text-brand-gold/30">•</span>
              <span className="flex items-center gap-1 font-sans not-italic text-[10px] tracking-widest font-bold text-brand-cream/90">
                DRINKS
              </span>
              <span className="text-brand-gold/30">•</span>
              <span className="flex items-center gap-1 font-sans not-italic text-[10px] tracking-widest font-bold text-brand-cream/90">
                FOOD
              </span>
              <span className="text-brand-gold/30">•</span>
              <span className="flex items-center gap-1 font-sans not-italic text-[10px] tracking-widest font-bold text-brand-cream/90">
                GOOD COMPANY
              </span>
            </div>

            <button
              onClick={onReserveClick}
              className="px-8 py-4 bg-brand-green-accent hover:bg-brand-gold text-brand-cream hover:text-brand-charcoal text-xs tracking-[0.2em] uppercase font-bold rounded-none transition-all duration-300 border border-brand-green-accent hover:border-brand-gold shadow-2xl flex items-center gap-2"
            >
              PLAN YOUR NIGHT <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
