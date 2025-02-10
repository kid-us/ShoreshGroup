import { Nav } from "./nav";

export const footer: Nav[] = [
  { id: 1, name: "About", path: "/about-us", icon: "" },
  // { id: 6, name: "Contact", path: "/contact", icon: "" },
  { id: 3, name: "Invest with US", path: "/contact" },
  // { id: 2, name: "Invest with US", path: "/invest-with-us" },
  {
    id: 3,
    name: "Our Assets",
    icon: "bi-building",
    path: "/assets?asset=our-assets",
  },
  {
    id: 4,
    name: "For Sale",
    icon: "bi-door-open-fill",
    path: "/assets?asset=for-sale",
  },
  {
    id: 5,
    name: "Recently Sold",
    icon: "bi-buildings-fill",
    path: "/assets?asset=sold",
  },
];
