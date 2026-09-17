/**
 * NPLYBOARDS business information.
 */

export type Contact = {
  /** Display form, e.g. "+91 97787 35004" */
  display: string;
  /** Digits only with country code, e.g. "919778735004" */
  digits: string;
};

export const contacts: Contact[] = [
  { display: "+91 97787 35004", digits: "919778735004" },
  { display: "+91 97450 22235", digits: "919745022235" },
];

export const site = {
  name: "NPLYBOARDS",
  tagline: "Premium plywood and wood solutions in Kerala.",
  email: "info@nply.in",
  emailHref: "mailto:info@nply.in",
  contacts,
  address: "NPLYBOARDS, Kerala, India",
  hours: "Mon – Sat, 9:00 AM – 7:00 PM · Sunday closed",
  mapsEmbed: "https://www.google.com/maps?q=Kerala,India&output=embed",
} as const;

export const telHref = (c: Contact) => `tel:+${c.digits}`;

/** WhatsApp deep link that works on both desktop and mobile. */
export const whatsappHref = (c: Contact, message?: string) =>
  `https://wa.me/${c.digits}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const productEnquiryMessage = (productName: string) =>
  `Hello NPLYBOARDS, I would like to enquire about ${productName}.`;

export const generalEnquiryMessage =
  "Hello NPLYBOARDS, I would like to enquire about your plywood and boards.";

export const keralaAreas = [
  "Kochi",
  "Thrissur",
  "Palakkad",
  "Kozhikode",
  "Kannur",
  "Thiruvananthapuram",
  "Kollam",
  "Kottayam",
  "Alappuzha",
  "Malappuram",
] as const;
