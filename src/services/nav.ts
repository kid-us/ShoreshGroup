interface Nav {
  id: number;
  name: string;
  path: string;
}

export const navs: Nav[] = [
  { id: 1, name: "Logo", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Assets", path: "/assets" },
  { id: 4, name: "Become an Investor", path: "/become-investor" },
  { id: 5, name: "Login", path: "/login" },
];
