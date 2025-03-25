import { Nav } from "./nav";

export const footer: Nav[] = [
  { id: 1, name: "About US", path: "/about-us" },

  { id: 2, name: "Investor Portal", path: "/investor-portal" },

  { id: 3, name: "Contact us", path: "/contact" },

  {
    id: 4,
    name: "Long Term Properties",
    path: "/assets?asset=our-assets",
  },
  {
    id: 5,
    name: "Completed Properties",
    path: "/assets?asset=sold",
  },
  {
    id: 6,
    name: "Current Projects",
    path: "/assets?asset=in-progress",
  },

  // {
  //   id: 7,
  //   name: "Privacy Policy",
  //   path: "/",
  // {c === "Current"
  //   ? "Long Term Properties"
  //   : c === "In Progress"
  //   ? "Current Projects"
  //   : "Completed Properties"}{" "}
  // },

  // {
  //   id: 8,
  //   name: "Terms of Service",
  //   path: "/",
  // },
];
