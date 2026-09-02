import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { contactConfig } from "../config";
import { Calendar, Users, Clock, MessageSquare, ShieldCheck, HelpCircle } from "lucide-react";

export default function Reservation() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");
  const [specialRequest, setSpecialRequest] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !date || !time) {
      alert("Please fill in all the required fields (Name, Phone, Date, and Time).");
      return;
    }

    // Compose a beautifully formatted WhatsApp booking request message
    const lineBreak = "%0A";
    const message = `Hello The Green Lounge, I would like to reserve a table.${lineBreak}${lineBreak}` +
      `*Name:* ${name}${lineBreak}` +
      `*Phone:* ${phone}${lineBreak}` +
      `*Date:* ${date}${lineBreak}` +
      `*Time:* ${time}${lineBreak}` +
      `*Guests:* ${guests}${lineBreak}` +
      (specialRequest ? `*Special Requests:* ${specialRequest}${lineBreak}` : "") +
      `${lineBreak}Please confirm availability. Thank you!`;

    const whatsappUrl = `https://wa.me/250791700255?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="reservations" className="py-24 bg-[#080a09] relative overflow-hidden border-t border-b border-brand-green-deep/10">
      {/* Visual ambiance glows */}
      <div className="absolute left-10 top-1/4 w-[500px] h-[500px] ambient-glow rounded-full pointer-events-none z-0" />
      <div className="absolute right-10 bottom-1/4 w-[400px] h-[400px] ambient-gold-glow rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Column */}
          <div className="lg:col-span-5">
            <span className="text-xs text-brand-gold font-sans font-bold tracking-[0.3em] uppercase mb-3 block">
              SECURE YOUR EXPERIENCE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-brand-cream uppercase leading-tight">
              SAVE YOUR TABLE.
            </h2>
            <p className="text-brand-gold-muted font-serif italic text-lg sm:text-xl mt-1">
              Guaranteed seating above the city.
            </p>
            
            <div className="mt-8 space-y-6 text-brand-cream/80 font-sans text-sm leading-relaxed tracking-wide font-light">
              <p>
                Due to high demand, especially during weekend events like our **After Work Friday** and **Green Saturdays**, we highly recommend booking your rooftop lounge or dining tables in advance.
              </p>
              <p>
                Our booking system integrates directly with our guest-relations team on WhatsApp. Once you request your table below, we will instantly receive your request and confirm availability back to you in minutes.
              </p>
            </div>

            {/* Verification highlights to build trust */}
            <div className="mt-10 space-y-4 border-t border-brand-green-deep/20 pt-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-green-deep/20 border border-brand-gold/20 text-brand-gold">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-cream tracking-wide uppercase">
                    INSTANT WHATSAPP HANDOFF
                  </p>
                  <p className="text-[11px] text-brand-cream/60 mt-0.5">
                    No waiting for email confirmations. Chat directly with us.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-green-deep/20 border border-brand-gold/20 text-brand-gold">
                  <HelpCircle size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-cream tracking-wide uppercase">
                    SPECIAL CELEBRATIONS?
                  </p>
                  <p className="text-[11px] text-brand-cream/60 mt-0.5">
                    Birthdays, anniversaries, or group events—let us know below!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-brand-charcoal border border-brand-green-deep/25 shadow-2xl p-8 sm:p-10 relative"
            >
              <h3 className="font-serif text-2xl font-bold text-brand-cream uppercase tracking-wide mb-6 border-b border-brand-green-deep/20 pb-4">
                RESERVATION REQUEST
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name and Phone Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] tracking-widest font-bold text-brand-gold uppercase mb-2">
                      YOUR FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Jean Claude"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-brand-card/40 border border-brand-green-deep/20 focus:border-brand-gold focus:outline-none p-3.5 text-brand-cream font-sans text-sm rounded-none tracking-wide"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-widest font-bold text-brand-gold uppercase mb-2">
                      PHONE / WHATSAPP NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g., +250 791 700 255"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-brand-card/40 border border-brand-green-deep/20 focus:border-brand-gold focus:outline-none p-3.5 text-brand-cream font-sans text-sm rounded-none tracking-wide"
                    />
                  </div>
                </div>

                {/* Date and Time Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] tracking-widest font-bold text-brand-gold uppercase mb-2 flex items-center gap-1">
                      <Calendar size={12} /> SELECT DATE *
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-brand-card/40 border border-brand-green-deep/20 focus:border-brand-gold focus:outline-none p-3.5 text-brand-cream font-sans text-sm rounded-none tracking-wide [color-scheme:dark]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-widest font-bold text-brand-gold uppercase mb-2 flex items-center gap-1">
                      <Clock size={12} /> CHOOSE TIME *
                    </label>
                    <input
                      type="time"
                      required
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-brand-card/40 border border-brand-green-deep/20 focus:border-brand-gold focus:outline-none p-3.5 text-brand-cream font-sans text-sm rounded-none tracking-wide [color-scheme:dark]"
                    />
                  </div>
                </div>

                {/* Number of Guests Selector */}
                <div>
                  <label className="block text-[10px] tracking-widest font-bold text-brand-gold uppercase mb-2 flex items-center gap-1">
                    <Users size={12} /> NUMBER OF GUESTS
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-brand-card/40 border border-brand-green-deep/20 focus:border-brand-gold focus:outline-none p-3.5 text-brand-cream font-sans text-sm rounded-none tracking-wide"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="7">7 Guests</option>
                    <option value="8">8+ Guests (Group Event)</option>
                  </select>
                </div>

                {/* Special Request Area */}
                <div>
                  <label className="block text-[10px] tracking-widest font-bold text-brand-gold uppercase mb-2">
                    SPECIAL REQUESTS (OPTIONAL)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g., Birthday celebration, VIP lounge seating, dietary requirements..."
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                    className="w-full bg-brand-card/40 border border-brand-green-deep/20 focus:border-brand-gold focus:outline-none p-3.5 text-brand-cream font-sans text-sm rounded-none tracking-wide resize-none"
                  />
                </div>

                {/* Submit Action Block */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-green-accent hover:bg-brand-gold text-brand-cream hover:text-brand-charcoal text-xs tracking-[0.25em] uppercase font-bold rounded-none transition-all duration-300 flex items-center justify-center gap-2 border border-brand-green-accent hover:border-brand-gold shadow-lg"
                  >
                    <MessageSquare size={14} />
                    REQUEST TABLE VIA WHATSAPP
                  </button>
                  <p className="text-center text-[10px] text-brand-cream/40 tracking-widest mt-3 uppercase">
                    🔒 Instant Secure Redirect to +250 791 700 255
                  </p>
                </div>

              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
