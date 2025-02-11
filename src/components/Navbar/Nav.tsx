import { useState } from "react";
import { Link } from "react-router-dom";
import { assets, navs } from "../../services/nav";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Menu from "./Menu";
import { logo } from "../../assets";

interface Props {
  bg?: boolean;
  onMenuOpen?: () => void;
}

const Nav = ({ bg, onMenuOpen }: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const [animationClass, setAnimationClass] = useState<string>(
    "animate__fadeInLeft"
  );
  const [hidden, setHidden] = useState<boolean>(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 700) {
      setHidden(true);
    } else if (previous && latest < previous && latest < 700) {
      setHidden(false);
    }
  });

  // Menu Animation
  const handleCloseMenu = () => {
    setAnimationClass("animate__fadeOutLeft");
    setTimeout(() => {
      setMenu(false);
      setAnimationClass("animate__fadeInLeft");
    }, 500);
  };

  return (
    <AnimatePresence>
      <div
        className={`flex justify-between ${
          bg ? "text-black" : hidden ? "text-black" : "text-white"
        }`}
      >
        <motion.a
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          href="/"
          className="text-2xl uppercase poppins-bold flex lg:gap-x-5 gap-x-2"
        >
          <img src={logo} alt="Logo" className="w-13" />

          <span className="items-center flex logo-font logo-font uppercase underline underline-offset-2 decoration-amber-400 decoration-1">
            Shoresh Group
          </span>
        </motion.a>
        {/* Large device */}
        <div className="lg:flex hidden gap-x-14">
          <div className="mt-3">
            <motion.button
              whileHover={{
                y: -1,
                scale: 1.05,
                transition: { duration: 0.5 },
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              onClick={() => (hovered ? setHovered(false) : setHovered(true))}
              className="relative transition-colors font-medium uppercase text-sm"
            >
              Assets{" "}
              <span
                className={`${
                  hovered ? "bi-chevron-up" : "bi-chevron-down"
                } text-sm ms-3`}
              ></span>
              {/* Modal shown when hovered */}
              {hovered && (
                <div className="absolute top-10 w-60 border border-gray-300 rounded bg-white shadow-lg py-3 ps-5 text-start">
                  {assets.map((asset) => (
                    <Link
                      key={asset.id}
                      className="block hover:ms-1 transition-all mb-2 text-sm py-1 text-black"
                      to={asset.path}
                    >
                      <span className={`${asset.icon} me-2`}></span>
                      {asset.name}
                    </Link>
                  ))}
                </div>
              )}
            </motion.button>
          </div>

          {/* Links */}
          {navs.map((n, index) => (
            <motion.a
              key={`${n.name}-${index}`}
              whileHover={{
                y: -1,
                scale: 1.05,
                transition: { duration: 0.5 },
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.2 }}
              href={n.path}
              className={`relative transition-colors poppins-medium ${
                n.name === "Investor's Login"
                  ? "bg-secondary flex items-center font-semibold uppercase text-white transition-all duration-200 shadow-[3px_3px_0px_#000] h-10 px-14 hover:shadow-none rounded"
                  : n.name === "Invest with US"
                  ? "border border-gray-400 flex justify-center items-center rounded-full h-9 mt-1 px-5 hover:bg-secondary hover:border-none group hover:text-gray-200 hover:text-sm"
                  : "mt-3"
              } font-medium uppercase text-sm`}
            >
              {n.name}
              {n.name === "Invest with US" && (
                <span className="bi-arrow-up-right ms-2 text-xs transition-transform duration-300 group-hover:rotate-45"></span>
              )}
            </motion.a>
          ))}
        </div>

        {/* Small device */}
        <div className="flex lg:hidden gap-x-5">
          <button
            onClick={() => {
              if (onMenuOpen) onMenuOpen();
              setMenu(true);
            }}
            className="bi-list text-2xl"
          ></button>
        </div>
      </div>

      {/* Menu */}
      {menu && (
        <Menu
          onClose={() => handleCloseMenu()}
          menuAnimation={animationClass}
        />
      )}
    </AnimatePresence>
  );
};

export default Nav;
