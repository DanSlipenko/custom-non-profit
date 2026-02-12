export const site = {
  name: "Grace Community Church",
  tagline: "A place to belong. A faith to build your life on.",
  description:
    "Grace Community Church is a welcoming community centered on Jesus—gathering for worship, growing in faith, and serving our city.",
  givingUrl: "https://tithe.ly/",
  location: {
    addressLine1: "123 Church St",
    addressLine2: "Springfield, ST 12345",
    mapsUrl: "https://maps.google.com/?q=123+Church+St+Springfield+ST+12345",
  },
  contact: {
    phone: "(555) 123-4567",
    email: "office@gracechurch.org",
  },
  serviceTimes: [
    { label: "Sunday", time: "9:00 AM & 11:00 AM" },
    { label: "Wednesday", time: "6:30 PM" },
  ],
  social: {
    youtube: "https://www.youtube.com/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
} as const;

