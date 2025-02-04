import { Link } from "react-router-dom";
import { assets, navs } from "../../services/nav";

interface Props {
  menuAnimation: string;
  onClose: () => void;
}

const Menu = ({ onClose, menuAnimation }: Props) => {
  return (
    <>
      {/* Overlay */}
      <div className="fixed w-full top-0 h-screen bg-neutral-800"></div>
      <div
        className={`fixed z-20 top-0 left-0 w-[95%] border-r border-gray-700 h-screen bg-background animate__animated ${menuAnimation}`}
      >
        <div className="lg:py-7 py-6 px-5">
          {/* border border-zinc-700 rounded-b-[40px] rounded-t-2xl px-8 */}
          <div className="flex justify-between text-xl mb-20">
            <Link to="/">Logo</Link>

            <button onClick={onClose} className="bi-x text-2xl"></button>
          </div>

          {/* Links */}
          <div className="space-y-5">
            {assets.map((asset) => (
              <Link
                key={asset.id}
                className="block py-1 text-lg"
                to="/our-assets"
              >
                <span className={`${asset.icon} me-2 font-light`}></span>
                {asset.name}
              </Link>
            ))}

            {navs.map((n, index) => (
              <Link
                key={n.id || index}
                to={n.path}
                className={`block text-lg ${
                  n.name === "Login" && "border px-14 py-2 text-center rounded"
                }`}
              >
                {n.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
