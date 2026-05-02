export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  specs: {
    material: string;
    size: string;
    application: string;
    brand?: string;
  };
  image: string;
};

export const categories = [
  "Fasteners",
  "Industrial Tools",
  "Pipes & Fittings",
  "Construction Materials",
  "Hardware Accessories"
];

export const products: Product[] = [
  // Fasteners
  {
    id: "f-001",
    name: "High Tensile Hex Bolts",
    category: "Fasteners",
    price: "₹150 - ₹500 / Kg",
    description: "Premium grade high tensile hex bolts designed for heavy industrial machinery and structural joints.",
    specs: {
      material: "Alloy Steel / Stainless Steel",
      size: "M6 to M36",
      application: "Construction, Automotive, Machinery",
      brand: "Salasar Fasteners"
    },
    image: "/images/fastener.jpg"
  },
  {
    id: "f-002",
    name: "Stainless Steel Nyloc Nuts",
    category: "Fasteners",
    price: "₹200 - ₹800 / Box",
    description: "Vibration-resistant nyloc nuts offering secure fastening in high-stress environments.",
    specs: {
      material: "SS 304 / SS 316",
      size: "M3 to M24",
      application: "Automotive, Aerospace, Manufacturing"
    },
    image: "/images/nut.jpg"
  },
  
  // Industrial Tools
  {
    id: "t-001",
    name: "Heavy Duty Angle Grinder",
    category: "Industrial Tools",
    price: "Get Latest Price",
    description: "Professional grade 850W angle grinder for cutting and grinding metal, concrete, and masonry.",
    specs: {
      material: "Impact Resistant Plastic & Metal",
      size: "100mm / 4 inch disc",
      application: "Fabrication, Construction, Maintenance",
      brand: "Bosch / Makita"
    },
    image: "/images/grinder.jpg"
  },
  {
    id: "t-002",
    name: "Industrial Torque Wrench",
    category: "Industrial Tools",
    price: "₹2,500 - ₹12,000 / Unit",
    description: "Precision adjustable torque wrench for accurate tightening of critical fasteners.",
    specs: {
      material: "Chrome Vanadium Steel",
      size: "1/2 inch drive, 20-200 Nm",
      application: "Automotive Repair, Heavy Machinery"
    },
    image: "/images/wrench.jpg"
  },

  // Pipes & Fittings
  {
    id: "p-001",
    name: "GI Pipe Class B & C",
    category: "Pipes & Fittings",
    price: "₹80 - ₹450 / Meter",
    description: "Hot-dipped galvanized iron pipes offering excellent corrosion resistance for water and gas lines.",
    specs: {
      material: "Galvanized Iron",
      size: "1/2 inch to 6 inch",
      application: "Plumbing, Irrigation, Structural",
      brand: "Tata / Jindal"
    },
    image: "/images/gi-pipe.jpg"
  },
  {
    id: "p-002",
    name: "HDPE Coil Pipe",
    category: "Pipes & Fittings",
    price: "₹45 - ₹120 / Meter",
    description: "Flexible, high-density polyethylene pipes for underground water supply and irrigation systems.",
    specs: {
      material: "High-Density Polyethylene (HDPE)",
      size: "20mm to 110mm",
      application: "Agriculture, Water Supply, Telecom Ducting"
    },
    image: "/images/hdpe-pipe.jpg"
  },

  // Construction Materials
  {
    id: "c-001",
    name: "TMT Rebars (FE 500D)",
    category: "Construction Materials",
    price: "Get Latest Price",
    description: "High-strength ribbed TMT bars for reinforced concrete structures ensuring seismic resistance.",
    specs: {
      material: "Thermo Mechanically Treated Steel",
      size: "8mm to 32mm",
      application: "Building Construction, Bridges, Dams",
      brand: "SAIL / Tata Tiscon"
    },
    image: "/images/tmt-bar.jpg"
  },
  {
    id: "c-002",
    name: "Concrete Cover Blocks",
    category: "Construction Materials",
    price: "₹2 - ₹15 / Piece",
    description: "Durable concrete spacers to maintain proper rebar cover in reinforced concrete elements.",
    specs: {
      material: "High Strength Concrete",
      size: "20mm, 25mm, 40mm, 50mm",
      application: "Slabs, Columns, Footings"
    },
    image: "/images/cover-block.jpg"
  },

  // Hardware Accessories
  {
    id: "h-001",
    name: "Heavy Duty Door Hinges",
    category: "Hardware Accessories",
    price: "₹80 - ₹350 / Pair",
    description: "Premium stainless steel bearing hinges for smooth operation of heavy commercial doors.",
    specs: {
      material: "SS 304",
      size: "4 inch, 5 inch",
      application: "Commercial Buildings, Residential Doors"
    },
    image: "/images/hinge.jpg"
  },
  {
    id: "h-002",
    name: "Industrial Padlocks",
    category: "Hardware Accessories",
    price: "₹450 - ₹1,800 / Unit",
    description: "High-security brass padlocks with hardened steel shackles for maximum protection.",
    specs: {
      material: "Solid Brass & Hardened Steel",
      size: "50mm, 65mm",
      application: "Warehouses, Gates, Shutters",
      brand: "Godrej / Harrison"
    },
    image: "/images/padlock.jpg"
  }
];
