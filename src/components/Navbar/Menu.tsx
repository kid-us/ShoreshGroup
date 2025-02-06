import { Link } from "react-router-dom";
import { assets, navs } from "../../services/nav";
import { logo } from "../../assets";

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
        <div className="py-7 px-5">
          <div className="flex justify-between text-xl mb-10">
            <a
              href="/"
              className="text-2xl uppercase poppins-bold flex lg:gap-x-5 gap-x-2"
            >
              <img src={logo} alt="Logo" className="w-13" />

              <span className="items-center flex logo-font">Shoresh Group</span>
            </a>

            <button
              onClick={onClose}
              className="bi-chevron-left text-2xl"
            ></button>
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
                  "border px-14 text-center poppins-semibold bg-btn flex justify-center items-center h-12 text-white transition-all duration-200 shadow-[3px_3px_0px_black] mt-10 rounded"
                }`}
              >
                {n.name}
              </Link>
            ))}
          </div>

          <div className="absolute bottom-4 w-full">
            <p className="text-sm text-gray-800">
              &copy;2025 SHORESH GROUP. All right reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
