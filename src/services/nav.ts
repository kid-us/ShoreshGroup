export interface Nav {
  id: number;
  name: string;
  path: string;
  icon?: string;
}

export const navs: Nav[] = [
  { id: 1, name: "About US", path: "/about-us" },
  { id: 2, name: "Investor Portal", path: "/investor-portal" },
  { id: 3, name: "Contact us", path: "/contact" },
];

export const assets: Nav[] = [
  {
    id: 5,
    name: "Long Term Properties",
    icon: "bi-building",
    path: "/assets?asset=our-assets",
  },
  {
    id: 6,
    name: "Completed Projects",
    icon: "bi-buildings-fill",
    path: "/assets?asset=sold",
  },
  {
    id: 7,
    name: "Current Projects",
    icon: "bi-cone-striped",
    path: "/assets?asset=in-progress",
  },
];
