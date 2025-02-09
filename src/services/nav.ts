export interface Nav {
  id: number;
  name: string;
  path: string;
  icon?: string;
}

export const navs: Nav[] = [
  // { id: 2, name: "Assets", path: "/" },
  { id: 1, name: "About", path: "/" },
  // { id: 2, name: "Contact", path: "/" },
  { id: 3, name: "Invest with Us", path: "/contact" },
  { id: 4, name: "Login", path: "/" },
];

export const assets: Nav[] = [
  {
    id: 1,
    name: "Our Assets",
    icon: "bi-building",
    path: "/assets?asset=our-assets",
  },
  {
    id: 2,
    name: "For Sale",
    icon: "bi-door-open-fill",
    path: "/assets?asset=for-sale",
  },
  {
    id: 3,
    name: "Recently Sold",
    icon: "bi-buildings-fill",
    path: "/assets?asset=sold",
  },
];
