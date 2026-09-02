import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { contactConfig } from "../config";

interface NavbarProps {
  onReserveClick: () => void;
}

export default function Navbar({ onReserveClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "HOME", href: "#home" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "MENU", href: "#menu" },
    { label: "EVENTS", href: "#events" },
    { label: "GALLERY", href: "#gallery" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-brand-charcoal/90 backdrop-blur-md py-3 shadow-lg border-b border-brand-green-deep/30"
            : "bg-gradient-to-b from-brand-charcoal/80 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Brand Frame */}
          <a
            href="#home"
            className="flex flex-col group"
            id="nav-logo"
            onClick={handleLinkClick}
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-brand-cream group-hover:text-brand-gold transition-colors duration-300">
              THE GREEN LOUNGE
            </span>
            <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.3em] text-brand-gold-muted font-semibold">
              BAR & RESTAURANT
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-xs tracking-widest font-medium text-brand-cream/80 hover:text-brand-gold transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-brand-gold after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Navigation CTA Buttons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={contactConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-brand-gold-muted/30 text-brand-gold-muted hover:border-brand-gold hover:text-brand-gold text-xs tracking-wider uppercase font-semibold rounded-none transition-all duration-300 bg-transparent"
            >
              WHATSAPP
            </a>
            <button
              onClick={onReserveClick}
              className="px-5 py-2 bg-brand-green-accent hover:bg-brand-gold text-brand-cream hover:text-brand-charcoal text-xs tracking-wider uppercase font-bold rounded-none transition-all duration-300 shadow-md border border-brand-green-accent hover:border-brand-gold"
            >
              RESERVE A TABLE
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-brand-cream hover:text-brand-gold transition-colors"
            aria-label="Toggle menu"
            id="hamburger-btn"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Backdrop & Overlay */}
      <div
        className={`fixed inset-0 bg-brand-charcoal/95 z-40 lg:hidden transition-all duration-500 flex flex-col justify-center items-center ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-6 text-center px-6 w-full">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="font-serif text-2xl tracking-widest text-brand-cream hover:text-brand-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}

          <div className="w-full max-w-xs border-t border-brand-green-deep/30 my-6 pt-6 flex flex-col space-y-4">
            <a
              href={contactConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 border border-brand-gold-muted/30 text-brand-gold-muted text-sm tracking-widest uppercase font-semibold text-center hover:bg-brand-cream/5"
            >
              WHATSAPP
            </a>
            <button
              onClick={() => {
                handleLinkClick();
                onReserveClick();
              }}
              className="w-full py-3 bg-brand-green-accent text-brand-cream text-sm tracking-widest uppercase font-bold text-center hover:bg-brand-gold hover:text-brand-charcoal transition-colors"
            >
              RESERVE A TABLE
            </button>
          </div>

          <div className="text-center text-xs text-brand-gold-muted/70 tracking-widest mt-4">
            <p className="flex items-center justify-center gap-1">
              <Phone size={12} /> {contactConfig.phonePrimaryFormatted}
            </p>
            <p className="mt-1 text-[10px]">SILVERBACK MALL ROOFTOP • KIGALI</p>
          </div>
        </div>
      </div>
    </>
  );
}
