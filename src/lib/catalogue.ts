import mrImg from "@/assets/app-home.jpg";
import bwrImg from "@/assets/app-office.jpg";
import bwpImg from "@/assets/app-kitchen.jpg";
import premiumImg from "@/assets/story-timber.jpg";

export type Category = {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: "plywood",
    name: "N PLY Collection",
    short: "Four plywood ranges engineered for different performance and moisture requirements.",
    description:
      "A focused N PLY plywood collection covering everyday interiors through premium, demanding applications.",
    image: mrImg,
  },
];

export type Product = {
  slug: string;
  name: string;
  categorySlug: string;
  brand: string;
  grade: string;
  positioning: string;
  wood: string;
  calibration: string;
  core: string;
  warranty: string;
  description: string;
  features: string[];
  applications: string[];
  moisturePerformance: string;
  image: string;
};

export const products: Product[] = [
  {
    slug: "n-ply-is-303-mr",
    name: "N PLY IS 303 MR",
    categorySlug: "plywood",
    brand: "N PLY",
    grade: "IS 303 MR",
    positioning: "Reliable Performance for Everyday Interiors",
    wood: "Carefully selected plantation-grown timbers such as Poplar, Eucalyptus, Silver Oak and other suitable plantation wood species.",
    calibration: "Standard",
    core: "Approximately zero core gaps under N PLY internal quality-control standards.",
    warranty: "10 Years",
    description:
      "Moisture-resistant commercial plywood designed for dry and low-moisture interior applications, balancing strength, stability, workability and value.",
    features: [
      "IS 303 MR grade",
      "Plantation wood construction",
      "Good dimensional stability",
      "Approximately zero core gaps under internal QC standards",
      "Good screw-holding capacity",
      "Easy to cut, drill and machine",
      "Suitable for laminates, veneers and decorative finishes",
      "Economical solution for regular interiors",
      "Consistent panel performance",
      "Suitable for everyday furniture manufacturing",
    ],
    applications: [
      "Bedroom furniture",
      "Wardrobes",
      "Bookshelves",
      "Study tables",
      "Indoor cabinets",
      "Wall panelling",
      "False ceilings",
      "Office furniture",
      "Interior partitions",
      "General interior applications",
    ],
    moisturePerformance:
      "Primarily intended for dry interior environments. It should not be exposed to prolonged water contact, continuous dampness or outdoor weather conditions.",
    image: mrImg,
  },
  {
    slug: "n-ply-is-303-bwr",
    name: "N PLY IS 303 BWR",
    categorySlug: "plywood",
    brand: "N PLY",
    grade: "IS 303 BWR",
    positioning: "Enhanced Moisture Resistance with Precision",
    wood: "Dense plantation wood and suitable mixed semi-hardwood species selected for density, strength, veneer quality and suitability for plywood manufacturing.",
    calibration: "100% Calibrated",
    core: "Approximately zero core gaps under N PLY internal quality-control standards.",
    warranty: "20 Years",
    description:
      "Boiling water resistant calibrated plywood designed for higher humidity, occasional moisture and indirect exposure to water.",
    features: [
      "IS 303 BWR grade",
      "100% calibrated",
      "Dense plantation wood / mixed semi-hardwood construction",
      "Approximately zero core gaps under internal QC standards",
      "Enhanced moisture resistance",
      "Better dimensional stability",
      "Strong screw holding",
      "Good nail holding capacity",
      "Excellent machining performance",
      "Smooth and uniform surface",
      "Suitable for premium interior furniture",
      "Better resistance to seasonal humidity",
      "Suitable for areas exposed to occasional moisture",
    ],
    applications: [
      "Living room furniture",
      "Modular furniture",
      "Office cabinets",
      "Kitchen cabinets in suitable protected areas",
      "Wardrobes",
      "TV units",
      "Storage units",
      "Interior partitions",
      "Furniture near windows",
      "Areas with seasonal humidity",
      "Premium residential interiors",
    ],
    moisturePerformance:
      "Designed to withstand higher moisture exposure than MR plywood. It is not intended to replace waterproof plywood in applications involving continuous water exposure.",
    image: bwrImg,
  },
  {
    slug: "n-ply-is-303-bwp",
    name: "N PLY IS 303 BWP",
    categorySlug: "plywood",
    brand: "N PLY",
    grade: "IS 303 BWP",
    positioning: "Built for High-Moisture Environments",
    wood: "High-density hardwood and suitable semi-hardwood species selected for density, structural strength, veneer quality, natural durability, dimensional stability and screw-holding performance.",
    calibration: "100% Calibrated",
    core: "Zero core gaps under N PLY internal quality-control standards.",
    warranty: "30 Years",
    description:
      "Premium waterproof plywood engineered for applications where strength, durability and resistance to prolonged moisture exposure are essential.",
    features: [
      "IS 303 grade",
      "BWP / Boiling Water Proof",
      "100% calibrated",
      "High-density hardwood / selected semi-hardwood construction",
      "Zero core gaps under internal QC standards",
      "Premium waterproof bonding system",
      "High moisture resistance",
      "Excellent dimensional stability",
      "High screw and nail holding capacity",
      "Strong edge holding",
      "Excellent machining performance",
      "Suitable for premium modular furniture",
      "Long-lasting performance in demanding environments",
      "Suitable for high-humidity areas",
    ],
    applications: [
      "Modular kitchens",
      "Kitchen cabinets",
      "Bathroom vanities",
      "Utility areas",
      "Wash areas",
      "Premium wardrobes",
      "High-end residential furniture",
      "Commercial interiors",
      "Hospitality projects",
      "Moisture-prone interior applications",
      "Areas exposed to high humidity",
    ],
    moisturePerformance:
      "Designed for a higher level of resistance to water and moisture than conventional MR and BWR plywood. For direct outdoor exposure or continuous immersion, the complete system—including edges, surface finish, joints and installation—should also be appropriately protected.",
    image: bwpImg,
  },
  {
    slug: "n-ply-is-710-premium",
    name: "N PLY IS 710 Premium",
    categorySlug: "plywood",
    brand: "N PLY",
    grade: "IS 710",
    positioning: "The Ultimate N PLY Performance Series",
    wood: "100% selected hardwood, chosen for density, strength, veneer quality, structural suitability, dimensional stability, natural durability and uniformity.",
    calibration: "100% Calibrated",
    core: "Zero core gaps under N PLY internal quality-control standards.",
    warranty: "50 Years",
    description:
      "Premium marine / waterproof hardwood plywood for applications demanding high durability, moisture resistance, structural strength and long-term reliability.",
    features: [
      "IS 710 grade",
      "Premium BWP / waterproof performance",
      "100% selected hardwood",
      "100% calibrated",
      "Zero core gaps under internal QC standards",
      "High structural strength",
      "Excellent dimensional stability",
      "Superior screw holding",
      "Excellent nail holding",
      "Strong edge performance",
      "High resistance to moisture",
      "Excellent machining characteristics",
      "Premium surface quality",
      "Suitable for demanding residential and commercial applications",
      "Designed for long-term performance",
    ],
    applications: [
      "Luxury modular kitchens",
      "Premium wardrobes",
      "High-end furniture",
      "Premium residential interiors",
      "Luxury villas",
      "Hospitality projects",
      "Commercial interiors",
      "High-moisture areas",
      "Premium modular furniture",
      "Demanding structural and interior applications",
    ],
    moisturePerformance:
      "Designed for demanding applications requiring high moisture resistance and long-term reliability.",
    image: premiumImg,
  },
];

export const brands = Array.from(new Set(products.map((p) => p.brand))).sort();
export const grades = Array.from(new Set(products.map((p) => p.grade))).sort();
export const allThicknesses: string[] = [];
export const allSizes: string[] = [];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const categoryName = (slug: string) => getCategory(slug)?.name ?? slug;

export const applicationList = Array.from(
  new Set(products.flatMap((p) => p.applications)),
).sort();
