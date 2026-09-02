import { motion } from "motion/react";
import { Compass, Utensils, GlassWater, Sparkles } from "lucide-react";

export default function WhyLounge() {
  const features = [
    {
      icon: <Compass size={22} className="text-brand-gold" />,
      title: "Rooftop Atmosphere",
      description: "A distinctive rooftop setting above Kigali, designed with modern comfortable lounges, natural leafy accents, and photo-friendly backdrops."
    },
    {
      icon: <Utensils size={22} className="text-brand-gold" />,
      title: "Cuisine Artistry",
      description: "A diverse, beautifully prepared menu featuring authentic Rwandan charcoal grills, gourmet pizzas, and savory international specialties."
    },
    {
      icon: <GlassWater size={22} className="text-brand-gold" />,
      title: "Curated Cocktails",
      description: "An impressive, fully customized bar menu hosting signature twilight drinks, classic cocktails, premium wines, and refreshing mocktails."
    },
    {
      icon: <Sparkles size={22} className="text-brand-gold" />,
      title: "Curated Soundscapes",
      description: "Elevating your nights throughout the week with live acoustic performances, guest DJs, themed dance sets, and vibrant social energy."
    }
  ];

  return (
    <section className="py-24 bg-brand-charcoal border-t border-b border-brand-green-deep/20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] ambient-gold-glow rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand-gold font-sans text-xs tracking-[0.4em] uppercase font-bold mb-3">
            THE SIGNATURE VIBE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-brand-cream uppercase">
            WHY THE GREEN LOUNGE
          </h2>
          <p className="text-brand-gold-muted font-serif text-lg tracking-wide italic mt-1">
            Every detail is calibrated to elevate your Kigali night.
          </p>
        </div>

        {/* 4-Column Feature Grid with clean borders, avoiding nesting or cheap templates */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-green-deep/30 border border-brand-green-deep/30">
          {features.map((feat, index) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-brand-charcoal p-8 sm:p-10 flex flex-col justify-between group transition-colors duration-300 hover:bg-brand-card"
            >
              <div>
                <div className="mb-6 p-3 w-fit bg-brand-green-deep/20 border border-brand-gold/15 group-hover:border-brand-gold/40 transition-colors duration-300">
                  {feat.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-cream tracking-wide uppercase mb-4">
                  {feat.title}
                </h3>
                <p className="font-sans text-brand-cream/70 text-sm leading-relaxed tracking-wide font-light">
                  {feat.description}
                </p>
              </div>
              <div className="w-12 h-[1px] bg-brand-gold/30 group-hover:bg-brand-gold group-hover:w-full transition-all duration-500 mt-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
