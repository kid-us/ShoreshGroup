import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import Nav from "./Nav";
import Header from "./Header";

interface Props {
  bg?: boolean;
}

const Navbar = ({ bg }: Props) => {
  const [hidden, setHidden] = useState<boolean>(false);
  const [hideHeader, setHideHeader] = useState<boolean>(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    // Navbar
    if (previous && latest > previous && latest > 900) {
      setHidden(true);
    } else if (previous && latest < previous && latest < 700) {
      setHidden(false);
    }
  });

  // Header Scrolling
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (previous !== undefined) {
      if (latest > previous) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    }
  });

  return (
    <>
      <header className={`fixed z-20 w-full`}>
        {/* Header */}
        {!hideHeader && <Header onClose={() => setHideHeader(true)} />}

        {/*Navbar */}
        <div
          className={`w-full  ${
            bg ? "bg-white" : hidden ? "bg-white" : "nav"
          } py-2`}
        >
          <div className="container mx-auto">
            <Nav onMenu={() => setHideHeader(true)} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
