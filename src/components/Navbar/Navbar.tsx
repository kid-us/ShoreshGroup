import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { assets, navs } from "../../services/nav";
import { motion } from "motion/react";
import Menu from "./Menu";

const Navbar = () => {
  const [savedTheme, setSavedTheme] = useState<string>("");
  const [hovered, setHovered] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      document.body.classList.add(storedTheme);
      setSavedTheme(storedTheme);
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setSavedTheme("dark");
      } else {
        document.body.classList.add("light");
        localStorage.setItem("theme", "light");
        setSavedTheme("light");
      }
    }
  }, []); // Run once on mount

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem("theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Update state and document body classes
    document.body.classList.remove("dark", "light");
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setSavedTheme(newTheme);
  };

  const [animationClass, setAnimationClass] = useState<string>(
    "animate__fadeInLeft"
  );

  // Menu Animation
  const handleCloseMenu = () => {
    setAnimationClass("animate__fadeOutLeft");
    setTimeout(() => {
      setMenu(false);
      setAnimationClass("animate__fadeInLeft");
    }, 500);
  };

  return (
    <>
      <div className="lg:py-7 py-6">
        {/* border border-zinc-700 rounded-b-[40px] rounded-t-2xl px-8 */}
        <div className="flex justify-between">
          <Link to="/" className="text-2xl text-blue-500">
            <span className="bi-house-fill"></span> Shoresh Group
          </Link>
          {/* Large device */}
          <div className="lg:flex hidden gap-x-14">
            <div className="mt-2">
              <motion.button
                whileHover={{
                  y: -1,
                  scale: 1.05,
                  transition: { duration: 0.5 },
                }}
                onMouseEnter={() => setHovered(true)}
                onClick={() => (hovered ? setHovered(false) : setHovered(true))}
                className="relative transition-colors text-link-100 hover:text-link-200 text-start"
              >
                Assets{" "}
                <span
                  className={`${
                    hovered ? "bi-chevron-up" : "bi-chevron-down"
                  } text-sm ms-3`}
                ></span>
                {/* Modal shown when hovered */}
                {hovered && (
                  <div className="absolute top-10 w-60 border border-gray-300 rounded bg-white shadow-lg p-3">
                    {assets.map((asset) => (
                      <Link
                        key={asset.id}
                        className="block hover:ms-1 transition-all mb-2 text-sm py-1 text-black"
                        to="/our-assets"
                      >
                        <span
                          className={`${asset.icon} me-2 font-light`}
                        ></span>
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
                key={n.id || index}
                whileHover={{
                  y: -1,
                  scale: 1.05,
                  transition: { duration: 0.5 },
                }}
                href={n.path}
                className={`relative transition-colors text-link-100 hover:text-link-200 ${
                  n.name === "Login"
                    ? "border px-14 py-2 text-sm rounded"
                    : "text-[17px] mt-2"
                }`}
              >
                {n.name}
              </motion.a>
            ))}

            <button
              onClick={toggleTheme}
              className={`${
                savedTheme === "light"
                  ? "bi-moon-fill"
                  : "bi-brightness-high text-xl"
              }`}
            ></button>
          </div>

          {/* Small device */}
          <div className="flex lg:hidden gap-x-5">
            <button
              onClick={() => setMenu(true)}
              className="bi-list text-2xl"
            ></button>
            <button
              onClick={toggleTheme}
              className={`${
                savedTheme === "light"
                  ? "bi-moon-fill"
                  : "bi-brightness-high text-xl"
              }`}
            ></button>
          </div>
        </div>
      </div>

      {/* Menu */}
      {menu && (
        <Menu
          onClose={() => handleCloseMenu()}
          menuAnimation={animationClass}
        />
      )}
    </>
  );
};

export default Navbar;
