import { motion } from "motion/react";
import { contactConfig } from "../config";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import ImageLoader from "./ImageLoader";

export default function RooftopExperience() {
  const rooftopImage = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000";

  return (
    <section
      id="experience"
      className="relative py-24 bg-brand-charcoal overflow-hidden"
    >
      {/* Subtle ambient lighting behind the content */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] ambient-glow rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Large, cinematic, parallax-feeling rooftop image */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-[4/5] overflow-hidden group shadow-2xl border border-brand-green-deep/20"
            >
              <ImageLoader
                src={rooftopImage}
                alt="Sophisticated rooftop dining and lounge environment at The Green Lounge"
                className="transition-transform duration-[6s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-transparent to-transparent opacity-60 pointer-events-none" />
              
              {/* Corner Badge */}
              <div className="absolute bottom-6 left-6 bg-brand-charcoal/80 backdrop-blur-md border border-brand-gold/30 px-4 py-3">
                <p className="text-[10px] tracking-[0.3em] text-brand-gold font-bold uppercase">
                  ATMOSPHERE
                </p>
                <p className="font-serif text-sm text-brand-cream font-medium mt-1">
                  Elevated Social Dining
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Editorial brand text explaining the experience */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Section Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-brand-gold mb-4"
            >
              <Sparkles size={14} />
              <span className="text-xs tracking-[0.3em] font-bold uppercase">
                THE ROOFTOP
              </span>
            </motion.div>

            {/* Editorial Headlines */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-brand-cream uppercase"
            >
              ABOVE KIGALI.
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-gold-muted font-serif text-xl sm:text-2xl tracking-wide italic mt-2"
            >
              A rooftop experience made for good times.
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 space-y-6 text-brand-cream/80 font-sans text-sm sm:text-base leading-relaxed tracking-wide font-light"
            >
              <p>
                Set above Kigali at Sonatube&apos;s Silverback Mall, The Green Lounge brings together delicious food, refreshing drinks, amazing music, and a vibrant social atmosphere.
              </p>
              <p>
                Whether you are stepping in for a sun-kissed afternoon meal with friends, meeting business colleagues over coffee, enjoying our curated cocktail menus at twilight, or dancing the night away to live DJ mixes, we provide the perfect vantage point to take in Kigali&apos;s social heartbeat.
              </p>
              <p className="border-l-2 border-brand-gold pl-4 italic text-brand-gold-muted">
                &ldquo;It&apos;s not simply a place to eat. It is a full-sensory experience crafted with premium details, ambient sounds, and local Rwandan warmth.&rdquo;
              </p>
            </motion.div>

            {/* CTA Interaction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10"
            >
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 group text-xs tracking-[0.2em] uppercase font-bold text-brand-gold hover:text-brand-cream transition-colors duration-300"
              >
                DISCOVER THE LOUNGE
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2 text-brand-gold" />
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
