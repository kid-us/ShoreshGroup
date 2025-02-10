import { Link } from "react-router-dom";

interface Props {
  name: string;
  path: string;
}

const LinkButton = ({ name, path }: Props) => {
  return (
    <Link
      to={path}
      className="bg-secondary text-white font-semibold px-12 py-3 text-sm rounded-full uppercase group hover:text-gray-200"
    >
      {name}
      <button className="bi-arrow-up-right ms-2 text-xs transition-transform duration-300 group-hover:rotate-45"></button>
    </Link>
  );
};

export default LinkButton;
