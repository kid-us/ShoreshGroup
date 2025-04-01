import { we1, we2, we3 } from "../assets";

interface We {
  id: number;
  name: string;
  title: string;
  image: string;
}

export const WeAre: We[] = [
  { id: 1, name: "Meron", title: "CEO", image: we1 },
  { id: 2, name: "Matt", title: "Manager", image: we2 },
  { id: 3, name: "Sara", title: "Marketer", image: we3 },
];
