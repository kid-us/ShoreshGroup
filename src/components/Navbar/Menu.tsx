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
      <div className="bg-neutral-700/50 fixed z-10 top-0 left-0 w-full h-[100dvh]"></div>
      <div
        className={`fixed z-50 top-0 left-0 w-[95%] h-screen bg-white animate__animated ${menuAnimation}`}
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
                className={`block text-lg poppins-semibold${
                  n.name === "Login" &&
                  "border px-14 text-center rounded-xl poppins-semibold bg-btn py-3"
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
