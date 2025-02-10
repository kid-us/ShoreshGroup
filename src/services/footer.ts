import { Nav } from "./nav";

export const footer: Nav[] = [
  { id: 1, name: "About US", path: "/about-us" },
  { id: 2, name: "Contact", path: "/contact" },
  // { id: 4, name: "Investor's Login", path: "/" },
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
