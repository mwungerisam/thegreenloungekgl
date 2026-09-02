import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, ArrowRightLeft, Check } from "lucide-react";
import ImageLoader from "./ImageLoader";

interface Step {
  id: string;
  label: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  accent: string;
}

export default function ExperienceSection() {
  const steps: Step[] = [
    {
      id: "FOOD",
      label: "01 / FOOD",
      title: "Sunset Dining",
      tagline: "Sophisticated Flavors",
      description: "Step onto the rooftop during the afternoon and golden hour for relaxed culinary experiences. Indulge in aromatic Rwandan grills, hot thin-crust artisan pizza, and fresh international cuisines prepared with meticulous detail.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000",
      accent: "from-amber-500/10 to-transparent"
    },
    {
      id: "DRINKS",
      label: "02 / DRINKS",
      title: "Twilight Libations",
      tagline: "Masterful Mixology",
      description: "As dusk outlines the Kigali skyline, transition to our illuminated bar. Engage with our signature craft cocktails, premium bottled spirits, and custom mocktails engineered to spark conversation.",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=1000",
      accent: "from-brand-gold/10 to-transparent"
    },
    {
      id: "MUSIC",
      label: "03 / MUSIC",
      title: "Rhythmic Vibes",
      tagline: "High-Fidelity Sound",
      description: "Experience the transition of sound. From easy-listening sun-downer acoustics, the tempo builds as Kigali's top-tier DJs step into the booth to blend the deep rhythms of Amapiano and Afro-house.",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000",
      accent: "from-brand-green-accent/15 to-transparent"
    },
    {
      id: "NIGHT",
      label: "04 / NIGHT",
      title: "Energetic Nightlife",
      tagline: "Unforgettable Memories",
      description: "Under the stars, the lounge ascends to its final stage. High energy, elegant lighting, birthday celebrations, and a dynamic social dance floor where Kigali comes to celebrate life.",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1000",
      accent: "from-purple-500/10 to-transparent"
    }
  ];

  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = steps[activeStepIndex];

  const handleNext = () => {
    setActiveStepIndex((prev) => (prev + 1) % steps.length);
  };

  return (
    <section id="signature-experience" className="py-24 bg-[#0a0c0b] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] ambient-glow rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-brand-gold mb-3">
            <Sparkles size={14} />
            <span className="text-xs tracking-[0.3em] font-bold uppercase">
              THE TRANSITION
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-brand-cream uppercase">
            FROM DINNER TO DANCE FLOOR.
          </h2>
          <p className="text-brand-gold-muted font-serif text-lg tracking-wide italic mt-1">
            Watch the rooftop evolve as the sun dips below the hills.
          </p>
        </div>

        {/* Stepper Tabs Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Column: List Stepper Controllers */}
          <div className="w-full lg:w-5/12 flex flex-col space-y-4">
            {steps.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full text-left p-6 sm:p-8 border transition-all duration-500 rounded-none relative flex items-center justify-between group ${
                    isActive
                      ? "bg-brand-charcoal border-brand-gold shadow-2xl"
                      : "bg-brand-charcoal/30 border-brand-green-deep/15 hover:border-brand-gold/30 hover:bg-brand-charcoal/60"
                  }`}
                >
                  {/* Subtle active glow decoration */}
                  {isActive && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.accent} pointer-events-none z-0`} />
                  )}
                  
                  <div className="relative z-10 flex flex-col">
                    <span className={`text-[10px] tracking-[0.3em] font-bold mb-1 ${isActive ? "text-brand-gold" : "text-brand-cream/40"}`}>
                      {step.label}
                    </span>
                    <span className={`font-serif text-xl sm:text-2xl font-bold uppercase tracking-wide transition-colors ${isActive ? "text-brand-cream" : "text-brand-cream/70 group-hover:text-brand-cream"}`}>
                      {step.title}
                    </span>
                    <span className={`text-xs italic font-serif mt-1 ${isActive ? "text-brand-gold-muted" : "text-brand-cream/40"}`}>
                      {step.tagline}
                    </span>
                  </div>

                  <div className={`p-2 border transition-all duration-300 relative z-10 ${isActive ? "bg-brand-gold text-brand-charcoal border-brand-gold" : "border-brand-green-deep/30 text-brand-cream/30 group-hover:border-brand-gold/30 group-hover:text-brand-gold"}`}>
                    {isActive ? <Check size={16} /> : <ArrowRight size={16} />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Display Active Step Artwork and Narrative */}
          <div className="w-full lg:w-7/12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}
                className="bg-brand-charcoal border border-brand-green-deep/20 shadow-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-center"
              >
                {/* Visual Artwork Frame */}
                <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden relative shadow-md">
                  <ImageLoader
                    src={currentStep.image}
                    alt={currentStep.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Narrative Detail Frame */}
                <div className="w-full md:w-1/2 flex flex-col justify-between h-full py-2">
                  <div>
                    <span className="text-xs text-brand-gold font-sans font-bold tracking-[0.3em] uppercase">
                      THE SEQUENCE
                    </span>
                    <h3 className="font-serif text-3xl font-bold tracking-wide text-brand-cream uppercase mt-2">
                      {currentStep.title}
                    </h3>
                    <p className="text-brand-gold-muted font-serif italic text-base mt-1">
                      {currentStep.tagline}
                    </p>
                    <p className="font-sans text-brand-cream/80 text-sm leading-relaxed tracking-wide font-light mt-6">
                      {currentStep.description}
                    </p>
                  </div>

                  {/* Stepper loop prompt */}
                  <div className="mt-8 pt-6 border-t border-brand-green-deep/20 flex items-center justify-between">
                    <span className="text-[10px] tracking-widest font-bold text-brand-cream/40 uppercase">
                      THE GREEN LOUNGE
                    </span>
                    <button
                      onClick={handleNext}
                      className="text-xs tracking-widest font-bold text-brand-gold hover:text-brand-cream flex items-center gap-1 transition-colors"
                    >
                      NEXT PHASE <ArrowRightLeft size={12} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
