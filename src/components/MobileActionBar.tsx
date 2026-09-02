import { Phone, MessageSquare, Calendar } from "lucide-react";
import { contactConfig } from "../config";

interface MobileActionBarProps {
  onReserveClick: () => void;
}

export default function MobileActionBar({ onReserveClick }: MobileActionBarProps) {
  const whatsappPreFilled = "Hello The Green Lounge, I would like to make an inquiry.";
  const mobileWhatsappUrl = `https://wa.me/250791700255?text=${encodeURIComponent(whatsappPreFilled)}`;

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 bg-brand-charcoal/95 border-t border-brand-green-deep/30 lg:hidden shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.5)]">
      <div className="grid grid-cols-3 gap-px bg-brand-green-deep/15">
        
        {/* Call Action Button */}
        <a
          href={`tel:${contactConfig.phonePrimary}`}
          className="flex flex-col items-center justify-center py-3 px-2 text-brand-cream/90 hover:text-brand-gold active:bg-brand-card transition-colors duration-200 h-14 select-none"
        >
          <Phone size={18} className="text-brand-gold-muted mb-1" />
          <span className="text-[10px] tracking-widest font-bold font-sans uppercase">
            CALL
          </span>
        </a>

        {/* WhatsApp Action Button */}
        <a
          href={mobileWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 px-2 text-brand-cream/90 hover:text-brand-gold active:bg-brand-card border-l border-r border-brand-green-deep/10 transition-colors duration-200 h-14 select-none"
        >
          <MessageSquare size={18} className="text-brand-gold mb-1" />
          <span className="text-[10px] tracking-widest font-bold font-sans uppercase">
            WHATSAPP
          </span>
        </a>

        {/* Scroll-To-Reserve Action Button */}
        <button
          onClick={onReserveClick}
          className="flex flex-col items-center justify-center py-3 px-2 bg-brand-green-accent text-brand-cream hover:bg-brand-gold hover:text-brand-charcoal active:bg-brand-gold/80 transition-colors duration-200 h-14 select-none rounded-none"
        >
          <Calendar size={18} className="text-brand-cream mb-1" />
          <span className="text-[10px] tracking-widest font-bold font-sans uppercase">
            RESERVE
          </span>
        </button>

      </div>
    </div>
  );
}
