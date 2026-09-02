export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string | number; // String to display currency (e.g., "12,000 RWF" or "8,000 RWF")
  category: "AFRICAN" | "BBQ" | "PIZZA" | "RWANDAN" | "INTERNATIONAL" | "VEGETARIAN" | "COCKTAIL" | "DRINK" | "WINE" | "MOCKTAIL";
  isPopular?: boolean;
  image?: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string; // e.g., "Saturday, Sep 12"
  time: string; // e.g., "8:00 PM"
  artistOrDJ?: string; // e.g., "DJ Toxxyk"
  description: string;
  image: string;
  rsvpNumber: string;
  isSpecialFeature?: boolean;
}

export interface GalleryItem {
  id: string;
  url: string;
  category: "rooftop" | "food" | "drinks" | "events" | "nightlife" | "interior" | "celebrations";
  title: string;
}

export interface DayHours {
  open: string;
  close: string;
  isClosed?: boolean;
}

export interface OpeningHours {
  Monday: DayHours;
  Tuesday: DayHours;
  Wednesday: DayHours;
  Thursday: DayHours;
  Friday: DayHours;
  Saturday: DayHours;
  Sunday: DayHours;
}

export interface ContactConfig {
  name: string;
  tagline: string;
  address: string;
  landmark: string;
  phonePrimary: string;
  phonePrimaryFormatted: string;
  phoneSecondary: string;
  phoneSecondaryFormatted: string;
  whatsappUrl: string;
  whatsappNumber: string;
  instagramUrl: string;
  instagramHandle: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
}
