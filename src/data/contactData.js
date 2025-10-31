// Data configuration following Open/Closed Principle
export const contactLocations = [
  {
    title: "Dubai",
    addresses: [
      "Karrar Design - Projects LLC Level 41, Emirates Towers Sheikh Zayed Road\nPO Box: 31303, Dubai, UAE",
      "Karrar Design - Projects LLC, Dubai Commercity Building B2, 11-17th St,\nUmm Ramool, Dubai, UAE"
    ]
  },
  {
    title: "Canada",
    addresses: [
      "Karrar Design - Projects Inc. 3695 Kaneff Cresent Suite 1712, Mississauga. LSA 4B, Ontario, Canada"
    ]
  },
  {
    title: "India",
    addresses: [
      "Karrar Design - Projects Inc.",
      "205 SLT, Richmond Road,\nBangalore 560025"
    ]
  }
];

export const contactDetails = {
  email: "info@karrardesign-projects.com",
  phones: [
    "+971-50-459-1031",
    "+971-50-860-0624", 
    "+1-647-949-4284",
    "+91-63664-43351"
  ]
};

export const mapConnections = [
  {
    start: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
    end: { lat: 12.9716, lng: 77.5946, label: "Bangalore" },
  },
  {
    start: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
    end: { lat: 43.6532, lng: -79.3832, label: "Toronto" },
  }
];