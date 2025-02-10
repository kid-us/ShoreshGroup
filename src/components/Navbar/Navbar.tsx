import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Nav from "./Nav";
import Header from "./Header";
import useToggleStore from "../../store/store";

interface Props {
  bg?: boolean; // Optional prop
}

const Navbar = ({ bg = false }: Props) => {
  // Default to false if undefined
  const [hidden, setHidden] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [hideAlways, setHideAlways] = useState(false);

  const { toggle } = useToggleStore();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (previous !== undefined) {
      // Navbar Logic
      if (latest > previous && latest > 900) {
        setHidden(true);
      } else if (latest < previous && latest < 700) {
        setHidden(false);
      }

      // Header Logic
      if (!hideAlways) {
        if (latest > previous) {
          setHideHeader(true);
        } else if (latest < 100) {
          setHideHeader(false);
        }
      }
    }
  });

  return (
    <header className="fixed z-20 w-full">
      {/* Header */}
      {!hideAlways && !hideHeader && (
        <Header
          onClose={() => {
            toggle();
            setHideAlways(true);
          }}
        />
      )}

      {/* Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          bg
            ? "bg-white border-b border-gray-300"
            : hidden
            ? "bg-white opacity-0 pointer-events-none"
            : "nav"
        } py-2`}
      >
        <div className="container mx-auto">
          <Nav bg={bg} onMenuOpen={() => setHideHeader(true)} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
