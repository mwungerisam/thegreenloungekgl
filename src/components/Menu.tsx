import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { menuItems } from "../config";
import { MenuItem } from "../types";
import { Sparkles, ArrowRight } from "lucide-react";
import ImageLoader from "./ImageLoader";

export default function Menu() {
  const categories: Array<{ id: string; label: string }> = [
    { id: "ALL", label: "ALL DISHES" },
    { id: "RWANDAN", label: "RWANDAN" },
    { id: "BBQ", label: "BBQ & GRILL" },
    { id: "PIZZA", label: "PIZZERIA" },
    { id: "AFRICAN", label: "AFRICAN" },
    { id: "INTERNATIONAL", label: "INTERNATIONAL" },
    { id: "VEGETARIAN", label: "VEGETARIAN" },
  ];

  const [activeCategory, setActiveCategory] = useState("ALL");

  // Filter only food items (exclude drinks categories)
  const foodItems = menuItems.filter(
    (item) =>
      item.category !== "COCKTAIL" &&
      item.category !== "DRINK" &&
      item.category !== "WINE" &&
      item.category !== "MOCKTAIL"
  );

  const filteredItems =
    activeCategory === "ALL"
      ? foodItems
      : foodItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-brand-charcoal relative">
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] ambient-glow rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-brand-gold mb-3">
              <Sparkles size={14} />
              <span className="text-xs tracking-[0.3em] font-bold uppercase">
                THE KITCHEN
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-brand-cream uppercase">
              COME HUNGRY.
            </h2>
            <p className="text-brand-gold-muted font-serif text-xl tracking-wide italic mt-2">
              Flavor for every kind of occasion.
            </p>
          </div>
          <p className="text-brand-cream/60 text-sm font-sans max-w-sm tracking-wide font-light leading-relaxed">
            From locally sourced volcanic-charcoal Rwandan grills to hand-crafted Italian crust pizzas and rich African specialties, discover our exquisite collection.
          </p>
        </div>

        {/* Dynamic Category Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 md:gap-4 border-b border-brand-green-deep/30 pb-4 mb-12 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs tracking-widest uppercase font-semibold border-b-2 transition-all duration-300 whitespace-nowrap ${
                activeCategory === cat.id
                  ? "border-brand-gold text-brand-gold"
                  : "border-transparent text-brand-cream/50 hover:text-brand-cream hover:border-brand-cream/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Premium Food Showcase List & Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                key={item.id}
                className="flex flex-col sm:flex-row gap-6 p-4 sm:p-6 bg-brand-card/30 hover:bg-brand-card/70 border border-brand-green-deep/10 hover:border-brand-gold/20 transition-all duration-500 group"
              >
                {/* Food Thumbnail with Referrer Policy Safeguard */}
                {item.image && (
                  <div className="w-full sm:w-32 h-32 overflow-hidden shrink-0 relative">
                    <ImageLoader
                      src={item.image}
                      alt={item.name}
                      className="transition-transform duration-[4s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-brand-charcoal/10 mix-blend-multiply pointer-events-none" />
                    {item.isPopular && (
                      <span className="absolute top-2 left-2 bg-brand-gold text-brand-charcoal text-[9px] font-bold tracking-widest px-2 py-0.5 uppercase">
                        POPULAR
                      </span>
                    )}
                  </div>
                )}

                {/* Name, Description, Price Block */}
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <h4 className="font-serif text-lg sm:text-xl font-bold tracking-wide text-brand-cream uppercase group-hover:text-brand-gold transition-colors duration-300">
                        {item.name}
                      </h4>
                      <span className="font-serif text-base font-semibold text-brand-gold shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <p className="font-sans text-brand-cream/70 text-xs sm:text-sm leading-relaxed tracking-wide font-light">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Category Accent Badge */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] tracking-widest font-bold text-brand-gold-muted/50 uppercase">
                      {item.category}
                    </span>
                    <a
                      href="#reservations"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] tracking-widest font-bold text-brand-gold hover:text-brand-cream flex items-center gap-1"
                    >
                      ORDER WITH TABLE <ArrowRight size={10} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View Full Menu CTA section */}
        <div className="mt-16 text-center">
          <p className="text-xs text-brand-cream/40 tracking-widest font-sans mb-4">
            * Note: All prices are inclusive of local taxes. Please inform our staff of any dietary allergies.
          </p>
          <a
            href="#reservations"
            className="inline-flex items-center gap-3 px-8 py-4 border border-brand-gold-muted/30 text-brand-gold hover:text-brand-charcoal hover:bg-brand-gold hover:border-brand-gold text-xs tracking-[0.2em] uppercase font-bold rounded-none transition-all duration-300 shadow-xl"
          >
            RESERVE & DINE WITH US
          </a>
        </div>

      </div>
    </section>
  );
}
