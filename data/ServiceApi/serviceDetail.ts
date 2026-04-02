// data/serviceDetail.ts

export const SeaFreight = {
  title: "Sea Freight (FCL & LCL)",
  overview:
    "Our Sea Freight services provide a cost-effective and reliable way to transport large volumes of goods internationally. Whether you need Full Container Load (FCL) for exclusive use or Less than Container Load (LCL) for smaller shipments, we ensure your cargo reaches its destination safely and on time.",
  features: [
    "Weekly consolidated shipments (LCL) from Asia to Dakar",
    "Full Container Load (FCL) solutions – 20', 40', and high cube",
    "Strong operational presence in Guangzhou & Yiwu",
    "Complete document support: B/L, BESC, DPI",
  ],
  benefits: [
    "Cost-Effective: The most economical solution for large shipments.",
    "Global Reach: Connecting major ports in Asia, Europe, and Americas to West Africa.",
    "Versatility: Suitable for everything from heavy machinery to retail goods.",
    "Predictability: Regular sailing schedules and reliable transit times.",
  ],
  process: [
    { step: "STEP 1", title: "Booking & Pickup", desc: "We arrange pickup from the supplier or receive goods at our warehouses." },
    { step: "STEP 2", title: "Consolidation & Loading", desc: "Goods are securely packed and loaded into containers." },
    { step: "STEP 3", title: "Export Customs", desc: "Handling all necessary export documentation and clearance." },
    { step: "STEP 4", title: "Ocean Transit", desc: "Real-time tracking as your cargo crosses the ocean." },
    { step: "STEP 5", title: "Import Clearance", desc: "Rapid processing of customs duties and release in Dakar." },
    { step: "STEP 6", title: "Final Delivery", desc: "Transporting the container to your facility or our distribution center." },
  ],
};

export const AirFreight = {
  title: "Air Freight",
  overview:
    "When time is critical, our Air Freight solutions offer the fastest delivery times. We leverage partnerships with major commercial airlines and cargo carriers to provide flexible scheduling and capacity for your urgent shipments.",
  features: [
    "Fast delivery of commercial samples and urgent shipments",
    "Last-mile delivery to client locations",
    "Coordination with customs and airport authorities",
    "Handling of sensitive and high-value cargo",
  ],
  benefits: [
    "Speed: The fastest transport mode for time-sensitive cargo.",
    "Reliability: Strict schedules with minimal delays.",
    "Security: High level of security and reduced risk of theft or damage.",
    "Inventory Control: Reduced need for local warehousing due to quick replenishment.",
  ],
  process: [
    { step: "STEP 1", title: "Pickup & Transfer", desc: "Immediate collection and transfer to the airport." },
    { step: "STEP 2", title: "Security Screening", desc: "Compliance with aviation security regulations." },
    { step: "STEP 3", title: "Air Transit", desc: "Direct or consolidated flights to Dakar DSS." },
    { step: "STEP 4", title: "Airport Recovery", desc: "Quick retrieval of cargo upon landing." },
    { step: "STEP 5", title: "Customs Clearance", desc: "Expedited clearance for air cargo." },
    { step: "STEP 6", title: "Door Delivery", desc: "Delivery to final destination within hours." },
  ],
};

export const CustomsClearance = {
  title: "Customs Clearance",
  overview: "Navigating customs regulations can be complex. Our licensed brokers are experts in Senegalese customs procedures (GAINDE), ensuring your goods are cleared quickly and in full compliance with all local laws.",
  features: [
    "End-to-end import/export declaration via GAINDE system",
    "Expert handling of customs documentation and compliance",
    "Efficient processing to minimize delays and costs",
    "Specialized knowledge for complex clearance scenarios"
  ],
  benefits: [
    "Speed: Fast processing of customs procedures.",
    "Compliance: Ensuring all documentation meets regulatory requirements.",
    "Cost-Effectiveness: Minimizing delays and associated costs.",
    "Expertise: Leveraging specialized knowledge for complex clearance scenarios.",
  ],
  process: [
    { step: "STEP 1", title: "Documentation Preparation", desc: "Gathering and preparing all necessary import/export documentation." },
    { step: "STEP 2", title: "Customs Filing", desc: "Submitting paperwork to customs authorities for review." },
    { step: "STEP 3", title: "Inspection & Verification", desc: "Conducting inspections and verifying compliance with regulations." },
    { step: "STEP 4", title: "Payment Processing", desc: "Handling duties, taxes, and other financial obligations." },
    { step: "STEP 5", title: "Release & Dispatch", desc: "Obtaining clearance and dispatching the shipment." },
  ],
};
export const serviceDetailMap: Record<string, any> = {
  "sea-freight": SeaFreight,
  "air-freight": AirFreight,
  "customs-clearance": CustomsClearance,
};