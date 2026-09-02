import { ContactConfig, OpeningHours, MenuItem, EventItem, GalleryItem } from "./types";

export const contactConfig: ContactConfig = {
  name: "THE GREEN LOUNGE",
  tagline: "BAR & RESTAURANT",
  address: "Sonatube, Silverback Mall Rooftop, Kicukiro, Kigali, Rwanda",
  landmark: "Silverback Mall Rooftop",
  phonePrimary: "+250791700255",
  phonePrimaryFormatted: "+250 791 700 255",
  phoneSecondary: "+250788987473",
  phoneSecondaryFormatted: "+250 788 987 473",
  whatsappUrl: "https://wa.me/250791700255",
  whatsappNumber: "+250 791 700 255",
  instagramUrl: "https://www.instagram.com/thegreenlounge_kgl/",
  instagramHandle: "@thegreenlounge_kgl",
  googleMapsUrl: "https://maps.google.com/?q=Silverback+Mall,+Kigali",
  // Standard embed of a stylish Kigali map
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4925893144825!2d30.0877969!3d-1.9611985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca68fd709cb41%3A0xe212574e44fbff!2sSilverback%20Mall!5e0!3m2!1sen!2srw!4v1693680000000!5m2!1sen!2srw"
};

// Opening hours represent the real-life operation schedule of Kigali's premium lounges
export const openingHours: OpeningHours = {
  Monday: { open: "11:00 AM", close: "11:00 PM" },
  Tuesday: { open: "11:00 AM", close: "11:00 PM" },
  Wednesday: { open: "11:00 AM", close: "11:00 PM" },
  Thursday: { open: "11:00 AM", close: "11:00 PM" },
  Friday: { open: "11:00 AM", close: "2:00 AM" },
  Saturday: { open: "11:00 AM", close: "2:00 AM" },
  Sunday: { open: "12:00 PM", close: "11:00 PM" }
};

// Curated menu items with realistic RWF pricing based on premium Kigali rooftop lounges
export const menuItems: MenuItem[] = [
  // RWANDAN / BBQ MAIN COURSES
  {
    id: "rw-1",
    name: "Flame-Grilled Beef Brochettes",
    description: "Tender cubes of local beef marinated in Rwandan spices, skewered with onions and bell peppers, grilled over volcanic charcoal.",
    price: "4,500 RWF",
    category: "RWANDAN",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "rw-2",
    name: "Kigali Whole Tilapia",
    description: "Large local fresh Tilapia fish seasoned with garlic, ginger, and local herbs, slow-grilled and served with kachumbari salad.",
    price: "12,000 RWF",
    category: "RWANDAN",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "bbq-1",
    name: "Signature Pork Ribs (Nyama Choma)",
    description: "Succulent, slow-smoked local pork ribs basted in our house-made dark honey and herb BBQ glaze.",
    price: "9,500 RWF",
    category: "BBQ",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "bbq-2",
    name: "Green Lounge Mixed Platter",
    description: "A social platter featuring beef brochettes, grilled chicken wings, goat nyama choma, served with roasted plantains (imizuzu) and hand-cut fries.",
    price: "24,000 RWF",
    category: "BBQ",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80&w=600"
  },
  
  // PIZZAS
  {
    id: "pz-1",
    name: "Rooftop Margherita",
    description: "House-made thin crust pizza topped with fresh tomato sauce, mozzarella, garden basil, and a drizzle of extra virgin olive oil.",
    price: "8,000 RWF",
    category: "PIZZA",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "pz-2",
    name: "The Kigali Spicy Salami",
    description: "Loaded with premium Italian cured salami, local hot bird's eye chilies, caramelized onions, and rich mozzarella cheese.",
    price: "10,500 RWF",
    category: "PIZZA",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=600"
  },
  
  // AFRICAN / INTERNATIONAL
  {
    id: "int-1",
    name: "Angolan Piri Piri Chicken",
    description: "Half spring chicken charcoal-grilled with a fiery African piri piri marinade, served with spiced rice and house salad.",
    price: "11,000 RWF",
    category: "AFRICAN",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "int-2",
    name: "The Green Lounge Gourmet Burger",
    description: "A thick 200g prime beef patty, melted cheddar, crispy bacon, caramelized onion jam, and secret garlic-aioli on a brioche bun.",
    price: "8,500 RWF",
    category: "INTERNATIONAL",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600"
  },
  
  // VEGETARIAN
  {
    id: "veg-1",
    name: "Local Grilled Halloumi & Veg Skewers",
    description: "Cubes of squeaky halloumi cheese grilled with zucchini, bell peppers, and button mushrooms, brushed with rosemary herb oil.",
    price: "7,500 RWF",
    category: "VEGETARIAN",
    image: "https://images.unsplash.com/photo-1594911774802-8822a707c99c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "veg-2",
    name: "Rooftop Garden Avocado Salad",
    description: "Creamy Rwandan avocados, cherry tomatoes, crisp cucumber, sweetcorn, toasted pumpkin seeds, tossed in a wild lemon-basil vinaigrette.",
    price: "6,000 RWF",
    category: "VEGETARIAN",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600"
  },

  // COCKTAILS / BAR DRINKS
  {
    id: "dr-1",
    name: "The Sonatube Sunset",
    description: "Our signature cocktail: Dark rum, passion fruit purée, fresh lime juice, house ginger syrup, and a splash of aromatic bitters.",
    price: "9,000 RWF",
    category: "COCKTAIL",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "dr-2",
    name: "Volcanic Mojito",
    description: "White rum muddled with fresh mint leaves, local lime, wild cane sugar, topped with club soda and a dash of hibiscus reduction.",
    price: "8,500 RWF",
    category: "COCKTAIL",
    image: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "dr-3",
    name: "Kigali Mule",
    description: "Premium vodka, freshly squeezed lime juice, and spicy local artisanal ginger beer, served cold in a chilled copper mug.",
    price: "8,500 RWF",
    category: "COCKTAIL",
    image: "https://images.unsplash.com/photo-1530991808291-7e157454758c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "dr-4",
    name: "Passion Fruit Virgin Sparkler",
    description: "A refreshing mocktail of blended local passion fruit, cucumber ribbons, mint leaves, fresh lime juice, and sparkling water.",
    price: "5,000 RWF",
    category: "MOCKTAIL",
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&q=80&w=600"
  }
];

// Actual representative events based on Green Lounge's active nightlife and DJ occurrences
export const upcomingEvents: EventItem[] = [
  {
    id: "evt-1",
    title: "After Work Friday",
    date: "Every Friday",
    time: "5:00 PM - Late",
    artistOrDJ: "DJ Phil Peter & DJ Toxxyk",
    description: "Unwind from the work week with Kigali's finest. Unmatched sunset vibes, delicious brochettes, craft beers, and the hottest Amapiano & Afro-house transition sets in town.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800",
    rsvpNumber: "+250791700255",
    isSpecialFeature: true
  },
  {
    id: "evt-2",
    title: "Green Saturdays",
    date: "Every Saturday",
    time: "7:00 PM - 2:00 AM",
    artistOrDJ: "DJ Yves & DJ Higa",
    description: "Our signature Saturday celebration above the Kigali skyline. Energetic rhythms, guest performers, premium bottles, and an unforgettable rooftop lounge experience.",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=800",
    rsvpNumber: "+250791700255",
    isSpecialFeature: false
  },
  {
    id: "evt-3",
    title: "Sunday Sunset Acoustic",
    date: "Every Sunday",
    time: "4:00 PM - 11:00 PM",
    artistOrDJ: "Live Acoustic Band",
    description: "Wrap up the weekend with smooth live acoustic covers, chilled cocktails, and a relaxed family-friendly dining atmosphere overlooking Kigali.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
    rsvpNumber: "+250791700255",
    isSpecialFeature: false
  }
];

// Beautiful high-end masonry and gallery images with correct aspect ratios representing the Green Lounge
export const galleryImages: GalleryItem[] = [
  {
    id: "gal-1",
    url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1200",
    category: "rooftop",
    title: "Stunning Rooftop Sunset"
  },
  {
    id: "gal-2",
    url: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=800",
    category: "nightlife",
    title: "Vibrant Kigali Social Scene"
  },
  {
    id: "gal-3",
    url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
    category: "food",
    title: "Volcanic Grilled Beef Skewers"
  },
  {
    id: "gal-4",
    url: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    category: "drinks",
    title: "Craft Cocktails at the Bar"
  },
  {
    id: "gal-5",
    url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
    category: "events",
    title: "Guest DJ Spinning Sets"
  },
  {
    id: "gal-6",
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
    category: "interior",
    title: "Sleek Afro-Modern Interior Design"
  },
  {
    id: "gal-7",
    url: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=800",
    category: "food",
    title: "Fresh Baked Rooftop Pizza"
  },
  {
    id: "gal-8",
    url: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=800",
    category: "drinks",
    title: "Premium Spirits and Mocktails"
  },
  {
    id: "gal-9",
    url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800",
    category: "celebrations",
    title: "Guests Celebrating Unforgettable Nights"
  }
];
