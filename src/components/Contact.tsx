import { contactConfig, openingHours } from "../config";
import { Phone, MessageSquare, Instagram, MapPin, Clock, Navigation, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-charcoal relative">
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] ambient-glow rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="about">
          <p className="text-brand-gold font-sans text-xs tracking-[0.4em] uppercase font-bold mb-3">
            COME FIND US
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-brand-cream uppercase">
            FIND THE GREEN LOUNGE
          </h2>
          <p className="text-brand-gold-muted font-serif text-lg tracking-wide italic mt-1">
            Where food, drinks, and Kigali social life converge.
          </p>
        </div>

        {/* 3-Column Structured Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Contact Coordinates (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="border border-brand-green-deep/20 bg-brand-card/30 p-8">
              <h3 className="font-serif text-xl font-bold text-brand-cream uppercase tracking-wider mb-6 pb-3 border-b border-brand-green-deep/15">
                THE GREEN LOUNGE
              </h3>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex gap-4 items-start">
                  <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[10px] tracking-widest font-bold text-brand-gold-muted uppercase mb-1">
                      LOCATION
                    </h4>
                    <p className="font-sans text-sm text-brand-cream/80 leading-relaxed font-light">
                      Sonatube, Silverback Mall Rooftop,<br />
                      Kicukiro, Kigali, Rwanda
                    </p>
                  </div>
                </div>

                {/* Primary Contact */}
                <div className="flex gap-4 items-start">
                  <Phone size={18} className="text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[10px] tracking-widest font-bold text-brand-gold-muted uppercase mb-1">
                      PRIMARY PHONE / RESERVATIONS
                    </h4>
                    <a
                      href={`tel:${contactConfig.phonePrimary}`}
                      className="font-sans text-sm text-brand-cream hover:text-brand-gold transition-colors font-semibold"
                    >
                      {contactConfig.phonePrimaryFormatted}
                    </a>
                  </div>
                </div>

                {/* Secondary Contact */}
                <div className="flex gap-4 items-start">
                  <Phone size={18} className="text-brand-gold-muted shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[10px] tracking-widest font-bold text-brand-gold-muted uppercase mb-1">
                      SECONDARY PHONE
                    </h4>
                    <a
                      href={`tel:${contactConfig.phoneSecondary}`}
                      className="font-sans text-sm text-brand-cream/80 hover:text-brand-gold transition-colors"
                    >
                      {contactConfig.phoneSecondaryFormatted}
                    </a>
                  </div>
                </div>

                {/* Instagram Handle */}
                <div className="flex gap-4 items-start">
                  <Instagram size={18} className="text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[10px] tracking-widest font-bold text-brand-gold-muted uppercase mb-1">
                      INSTAGRAM
                    </h4>
                    <a
                      href={contactConfig.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm text-brand-cream hover:text-brand-gold transition-colors font-semibold flex items-center gap-1"
                    >
                      {contactConfig.instagramHandle} <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick-Action Direct Dial Button Matrix */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${contactConfig.phonePrimary}`}
                className="py-3 border border-brand-gold-muted/30 text-brand-gold text-center font-bold text-xs tracking-widest uppercase hover:bg-brand-cream/5 flex items-center justify-center gap-1.5"
              >
                <Phone size={12} /> CALL NOW
              </a>
              <a
                href={contactConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 bg-brand-green-accent text-brand-cream text-center font-bold text-xs tracking-widest uppercase hover:bg-brand-gold hover:text-brand-charcoal transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare size={12} /> WHATSAPP
              </a>
            </div>
          </div>

          {/* Column 2: Opening Hours (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <div className="border border-brand-green-deep/20 bg-brand-card/30 p-8">
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-brand-green-deep/15">
                <Clock size={18} className="text-brand-gold" />
                <h3 className="font-serif text-xl font-bold text-brand-cream uppercase tracking-wider">
                  OPENING HOURS
                </h3>
              </div>

              {/* Renders hours dynamically from configuration */}
              <div className="space-y-4 font-sans text-sm">
                {Object.entries(openingHours).map(([day, hours]) => {
                  const isWeekend = day === "Friday" || day === "Saturday";
                  return (
                    <div
                      key={day}
                      className={`flex justify-between items-center py-2 border-b border-brand-green-deep/10 last:border-0 ${
                        isWeekend ? "text-brand-gold" : "text-brand-cream/80"
                      }`}
                    >
                      <span className="font-medium tracking-wide">{day}</span>
                      <span className="font-light tracking-wider">
                        {hours.isClosed ? "CLOSED" : `${hours.open} - ${hours.close}`}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className="text-[10px] text-brand-gold-muted/60 tracking-widest uppercase mt-6 italic text-center">
                * Weekend nights host DJ sets starting from 7:00 PM.
              </p>
            </div>
          </div>

          {/* Column 3: Interactive Map (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="border border-brand-green-deep/20 bg-brand-card/30 p-4">
              <div className="aspect-[4/3] w-full relative group overflow-hidden border border-brand-green-deep/10">
                {/* Standard high-fidelity iframe embed pointing to Silverback Mall, Sonatube */}
                <iframe
                  src={contactConfig.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Green Lounge Map Location"
                  className="grayscale invert opacity-80 contrast-125 focus:outline-none"
                ></iframe>
              </div>
            </div>

            <a
              href={contactConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 border border-brand-cream hover:border-brand-gold text-brand-cream hover:text-brand-gold font-bold text-xs tracking-widest uppercase text-center transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Navigation size={14} /> GET DIRECTIONS TO SILVERBACK MALL
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
