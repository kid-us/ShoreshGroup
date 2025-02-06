export interface Nav {
  id: number;
  name: string;
  path: string;
  icon?: string;
}

export const navs: Nav[] = [
  // { id: 2, name: "Assets", path: "/" },
  { id: 1, name: "About", path: "/" },
  { id: 2, name: "Contact", path: "/" },
  { id: 3, name: "Become an Investor", path: "/" },
  { id: 4, name: "Login", path: "/" },
];

export const assets: Nav[] = [
  { id: 1, name: "Our Assets", icon: "bi-building", path: "/" },
  { id: 2, name: "For Sale", icon: "bi-door-open-fill", path: "/" },
  { id: 3, name: "Recently Sold", icon: "bi-buildings-fill", path: "/" },
];
