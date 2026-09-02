import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { menuItems } from "../config";
import { Sparkles, GlassWater } from "lucide-react";
import ImageLoader from "./ImageLoader";

export default function Drinks() {
  const [drinkFilter, setDrinkFilter] = useState<"ALL" | "COCKTAIL" | "MOCKTAIL">("ALL");

  // Get only drink items from the centralized config
  const drinkItems = menuItems.filter(
    (item) =>
      item.category === "COCKTAIL" ||
      item.category === "MOCKTAIL" ||
      item.category === "WINE" ||
      item.category === "DRINK"
  );

  const filteredDrinks =
    drinkFilter === "ALL"
      ? drinkItems
      : drinkItems.filter((item) => item.category === drinkFilter);

  return (
    <section className="py-24 bg-[#080a09] relative overflow-hidden border-t border-b border-brand-green-deep/40">
      {/* Dramatic Golden Backlight Glow */}
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] ambient-gold-glow rounded-full pointer-events-none z-0" />
      <div className="absolute -left-1/4 bottom-1/4 w-[500px] h-[500px] ambient-glow rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Grid Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-brand-gold mb-3">
              <Sparkles size={14} />
              <span className="text-xs tracking-[0.3em] font-bold uppercase">
                THE BAR & LOUNGE
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-brand-cream uppercase leading-tight">
              RAISE A GLASS.
            </h2>
            <h3 className="text-brand-gold-muted font-serif text-xl sm:text-2xl tracking-wide italic mt-2">
              Artistry in every pour.
            </h3>
            <p className="text-brand-cream/70 text-sm sm:text-base leading-relaxed tracking-wide font-light max-w-xl mt-6">
              Our master mixologists draw inspiration from Kigali&apos;s twilight colors and local botanical ingredients to formulate handcrafted signature cocktails, refined mocktails, and an impressive selection of premium wines and spirits.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            {/* Drinks Toggles */}
            <div className="flex items-center gap-2 p-1 bg-brand-charcoal border border-brand-gold/15 rounded-none">
              {(["ALL", "COCKTAIL", "MOCKTAIL"] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setDrinkFilter(filter)}
                  className={`px-4 py-2 text-[10px] tracking-widest uppercase font-bold transition-all duration-300 ${
                    drinkFilter === filter
                      ? "bg-brand-gold text-brand-charcoal"
                      : "text-brand-cream/60 hover:text-brand-cream"
                  }`}
                >
                  {filter === "ALL" ? "ALL LIQUID" : filter + "S"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cinematic Drinks Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredDrinks.map((drink, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                key={drink.id}
                className="group relative flex flex-col justify-between bg-brand-charcoal/40 border border-brand-green-deep/20 hover:border-brand-gold/30 p-6 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Drink Artwork */}
                <div className="aspect-[4/5] overflow-hidden relative mb-6">
                  <ImageLoader
                    src={drink.image}
                    alt={drink.name}
                    className="transition-transform duration-[5s] group-hover:scale-105"
                  />
                  {/* Dramatic vignette over thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-transparent to-transparent opacity-80 pointer-events-none" />
                  
                  {/* Icon Overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-charcoal/40 backdrop-blur-[2px]">
                    <div className="p-4 rounded-full border border-brand-gold/30 bg-brand-charcoal/80 text-brand-gold">
                      <GlassWater size={24} />
                    </div>
                  </div>
                </div>

                {/* Typography Block */}
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h4 className="font-serif text-lg font-bold tracking-wide text-brand-cream uppercase group-hover:text-brand-gold transition-colors duration-300">
                      {drink.name}
                    </h4>
                    <span className="font-serif text-sm font-semibold text-brand-gold shrink-0">
                      {drink.price}
                    </span>
                  </div>
                  <p className="font-sans text-brand-cream/60 text-xs leading-relaxed tracking-wide font-light">
                    {drink.description}
                  </p>
                </div>

                {/* Bottom Frame */}
                <div className="mt-4 pt-4 border-t border-brand-green-deep/10 flex items-center justify-between text-[9px] tracking-widest font-bold">
                  <span className="text-brand-gold-muted/40 uppercase">
                    {drink.category}
                  </span>
                  <span className="text-brand-gold uppercase">
                    CRAFTED FRESH
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Explanatory Brand Footnote */}
        <div className="mt-16 flex flex-col items-center text-center">
          <p className="text-sm text-brand-cream/60 font-sans max-w-lg tracking-wide font-light">
            Looking for something specific? Our cellars host an exhaustive inventory of premium single malts, classic liqueurs, champagne, local beers, and non-alcoholic options.
          </p>
          <a
            href="#reservations"
            className="mt-8 px-8 py-4 bg-transparent hover:bg-brand-cream hover:text-brand-charcoal border border-brand-cream text-brand-cream text-xs tracking-[0.2em] uppercase font-bold rounded-none transition-all duration-300"
          >
            EXPLORE THE BAR
          </a>
        </div>

      </div>
    </section>
  );
}
