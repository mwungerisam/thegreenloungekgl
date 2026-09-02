import { contactConfig } from "../config";
import { ChevronUp, Sparkles, Instagram, Phone, Mail } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#060807] border-t border-brand-green-deep/30 py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Segment */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-brand-green-deep/15">
          
          {/* Brand Presentation Column */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-widest text-brand-cream">
                THE GREEN LOUNGE
              </span>
              <span className="font-sans text-[10px] tracking-[0.3em] text-brand-gold font-semibold uppercase">
                BAR & RESTAURANT
              </span>
            </div>
            
            <p className="font-sans text-brand-cream/60 text-xs sm:text-sm leading-relaxed tracking-wide font-light max-w-sm">
              Kigali&apos;s premier rooftop social hub. Bringing together flame-grilled African and international delicacies, custom cocktails, and a high-vibe nightlife atmosphere at Sonatube.
            </p>
          </div>

          {/* Quick-Link Indices */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <h4 className="text-[10px] tracking-[0.25em] font-bold text-brand-gold uppercase">
              EXPLORE
            </h4>
            <div className="flex flex-col space-y-2 text-xs text-brand-cream/70 font-sans tracking-wider">
              <a href="#home" className="hover:text-brand-gold transition-colors">HOME</a>
              <a href="#experience" className="hover:text-brand-gold transition-colors">THE ROOFTOP</a>
              <a href="#menu" className="hover:text-brand-gold transition-colors">FOOD MENU</a>
              <a href="#events" className="hover:text-brand-gold transition-colors">NIGHTLIFE EVENTS</a>
              <a href="#gallery" className="hover:text-brand-gold transition-colors">GALLERY</a>
            </div>
          </div>

          {/* Location & Reservation Coordinate Directs */}
          <div className="md:col-span-4 flex flex-col space-y-3 text-xs text-brand-cream/70 font-sans tracking-wide">
            <h4 className="text-[10px] tracking-[0.25em] font-bold text-brand-gold uppercase">
              RESERVATIONS
            </h4>
            <p className="font-light text-brand-cream/60">
              Rooftop of Silverback Mall, Sonatube, Kigali, Rwanda
            </p>
            <div className="space-y-1 mt-2">
              <p className="flex items-center gap-2">
                <Phone size={12} className="text-brand-gold" />
                <a href={`tel:${contactConfig.phonePrimary}`} className="hover:text-brand-gold font-semibold">
                  {contactConfig.phonePrimaryFormatted}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={12} className="text-brand-gold-muted/60" />
                <a href={`tel:${contactConfig.phoneSecondary}`} className="hover:text-brand-gold font-light">
                  {contactConfig.phoneSecondaryFormatted}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Instagram size={12} className="text-brand-gold" />
                <a href={contactConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold">
                  {contactConfig.instagramHandle}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Segment */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] font-sans text-brand-cream/40 tracking-wider">
          <div>
            <p>
              &copy; {new Date().getFullYear()} The Green Lounge Kigali. All Rights Reserved.
            </p>
            <p className="text-[9px] mt-1 font-light tracking-[0.1em] text-brand-cream/20">
              Design and engineering by Premium Hospitality Partners.
            </p>
          </div>

          {/* Return-To-Top Trigger */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 hover:text-brand-gold transition-colors"
            aria-label="Scroll to top"
          >
            BACK TO THE CLOUDS <ChevronUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
