import { Link } from "react-router-dom";

interface Props {
  name: string;
  path: string;
  style?: string;
}

const LinkButton = ({ name, path, style }: Props) => {
  return (
    <Link
      to={path}
      className={`${
        style ? style : "bg-secondary text-white hover:text-gray-200"
      }  font-semibold px-12 py-3 text-sm rounded-full uppercase group`}
    >
      {name}
      <button className="bi-arrow-up-right ms-2 text-xs transition-transform duration-300 group-hover:rotate-45"></button>
    </Link>
  );
};

export default LinkButton;
