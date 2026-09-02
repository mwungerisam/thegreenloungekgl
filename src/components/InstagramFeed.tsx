import { motion } from "motion/react";
import { Instagram, ExternalLink, MessageSquare } from "lucide-react";
import { contactConfig } from "../config";
import ImageLoader from "./ImageLoader";

export default function InstagramFeed() {
  // 6 Curated Instagram post proxies representing genuine activities from @thegreenlounge_kgl
  const socialPosts = [
    {
      id: "ig-1",
      url: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=500",
      caption: "Kigali nights shine brighter up here. ✨ Come vibe with us on the rooftop! #TheGreenLounge #KigaliNightlife"
    },
    {
      id: "ig-2",
      url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=500",
      caption: "Flame-grilled to absolute perfection. 🔥 Try our Signature Beef Brochettes tonight. #KigaliFoodies #RwandanGrill"
    },
    {
      id: "ig-3",
      url: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=500",
      caption: "Sip on 'The Sonatube Sunset' - our custom signature cocktail infusion. 🍹 #CocktailLovers #RooftopBar"
    },
    {
      id: "ig-4",
      url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=500",
      caption: "Decks are hot! After Work Friday with the absolute finest DJ line-ups in town. 🎧 #Amapiano #KigaliVibes"
    },
    {
      id: "ig-5",
      url: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=500",
      caption: "Freshly baked pizzas out of our volcanic stone ovens! 🍕 Perfect for sharing. #PizzaTime #KigaliRestaurant"
    },
    {
      id: "ig-6",
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=500",
      caption: "Your favorite rooftop escape at Silverback Mall Sonatube. Book your tables early! 🌿 #RooftopDining"
    }
  ];

  return (
    <section className="py-24 bg-brand-charcoal border-t border-brand-green-deep/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <Instagram size={28} className="text-brand-gold mb-4" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-brand-cream uppercase">
            FOLLOW THE VIBE
          </h2>
          <p className="text-brand-gold font-sans text-xs tracking-widest font-bold uppercase mt-1">
            {contactConfig.instagramHandle}
          </p>
          <p className="text-brand-cream/70 text-sm leading-relaxed tracking-wide font-light mt-4">
            See what&apos;s happening at The Green Lounge and discover our latest food, events, music, and rooftop moments.
          </p>
          
          <a
            href={contactConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-brand-green-accent hover:bg-brand-gold text-brand-cream hover:text-brand-charcoal text-xs tracking-widest font-bold uppercase transition-all duration-300 rounded-none border border-brand-green-accent hover:border-brand-gold"
          >
            FOLLOW ON INSTAGRAM <ExternalLink size={12} />
          </a>
        </div>

        {/* 6-Column Responsive Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {socialPosts.map((post) => (
            <a
              key={post.id}
              href={contactConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-brand-card/50 border border-brand-green-deep/20 flex flex-col justify-center items-center"
            >
              <ImageLoader
                src={post.url}
                alt="Instagram post from The Green Lounge Kigali"
                className="transition-transform duration-[5s] group-hover:scale-105"
              />
              
              {/* Instagram Style Hover Overlay */}
              <div className="absolute inset-0 bg-brand-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center">
                <Instagram size={20} className="text-brand-gold mb-2" />
                <p className="text-brand-cream text-[10px] line-clamp-3 font-sans leading-relaxed">
                  {post.caption}
                </p>
                <span className="text-brand-gold-muted text-[8px] font-bold tracking-widest uppercase mt-3 flex items-center gap-1">
                  VIEW POST <ExternalLink size={8} />
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
