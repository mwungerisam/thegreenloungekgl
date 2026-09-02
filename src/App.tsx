import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RooftopExperience from "./components/RooftopExperience";
import WhyLounge from "./components/WhyLounge";
import Menu from "./components/Menu";
import Drinks from "./components/Drinks";
import Events from "./components/Events";
import ExperienceSection from "./components/ExperienceSection";
import Gallery from "./components/Gallery";
import InstagramFeed from "./components/InstagramFeed";
import Reservation from "./components/Reservation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileActionBar from "./components/MobileActionBar";

export default function App() {
  // Smooth scroll handler targeting table reservation card
  const handleScrollToReserve = () => {
    const reservationSection = document.getElementById("reservations");
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Force page scroll reset on initial render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-charcoal text-brand-cream relative min-h-screen selection:bg-brand-gold selection:text-brand-charcoal font-sans overflow-x-hidden pb-14 lg:pb-0">
      
      {/* Premium Sticky Navigation Header */}
      <Navbar onReserveClick={handleScrollToReserve} />

      {/* Main Page Canvas */}
      <main>
        {/* Cinematic Hero Segment */}
        <Hero onReserveClick={handleScrollToReserve} />

        {/* Above Kigali: Rooftop Overview */}
        <RooftopExperience />

        {/* Why The Green Lounge Feature Grid */}
        <WhyLounge />

        {/* Signature Sequence: Dinner to Dance Floor */}
        <ExperienceSection />

        {/* Gourmet Pizzas & Rwandan Grills Menu Showcase */}
        <Menu />

        {/* Fine Mixology & Bar Section */}
        <Drinks />

        {/* Themed Parties & DJ Events Calendar */}
        <Events onReserveClick={handleScrollToReserve} />

        {/* Visual Media Masonry Gallery */}
        <Gallery />

        {/* @thegreenlounge_kgl Social Instagram Sync */}
        <InstagramFeed />

        {/* High-End Direct WhatsApp Reservation Intake */}
        <Reservation />

        {/* Detailed Operating Hours & Custom Google Map Coordinates */}
        <Contact />
      </main>

      {/* Brand Footer Info */}
      <Footer />

      {/* Tactile Mobile Actions Strip */}
      <MobileActionBar onReserveClick={handleScrollToReserve} />

    </div>
  );
}
