// import { useState } from "react";
// import Header from "./Header";
// import Nav from "./Nav";
// import SubHeader from "./SubHeader";
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
        {!hideHeader && <Header onClose={() => setHideHeader(true)} />}

        {/* SubHeader */}
        {/* <div className={`bg-white`}>
          <div className="container mx-auto">
            <p>
              Shoresh Group is a family office unlocking opportunities in both
              short-term and long-term real estate projects, from distressed
              homes to mismanaged multifamily properties and large-scale
              developments. We strategically partner with investors to deliver
              sustainable growth and impactful returns, across a
              diverse portfolio.
            </p>
          </div>
        </div> */}

        {/*Navbar */}
        <div
          className={`w-full  ${
            bg ? "bg-white" : hidden ? "bg-white" : "nav"
          } py-2`}
        >
          <div className="container mx-auto">
            <Nav />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
