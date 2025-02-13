import { motion } from "motion/react";
import {
  heroVid,
  hero2,
  hero3,
  hero4,
  hero5,
  hero6,
  hero7,
} from "../../assets";
// import { Link } from "react-router-dom";
import ImageFromFrames from "./ImageFrame";
// import LinkButton from "../Button/LinkButton";
import useToggleStore from "../../store/store";

const Hero = () => {
  const { isToggled } = useToggleStore();

  const frames = [hero2, hero3, hero4, hero5, hero6, hero7];

  return (
    <div
      className={` ${
        isToggled ? "hero-after-hide" : "hero-before-hide"
      } h-[100dvh] relative`}
    >
      <div className="lg:block hidden">
        <video
          style={{
            position: "absolute",
            top: isToggled ? 0 : "4em",
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -2,
          }}
          src={heroVid}
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="lg:hidden block">
        <ImageFromFrames frames={frames} fps={0.4} />
      </div>

      <div className="container mx-auto px-5">
        <div className="flex items-center h-screen">
          <div className="mt-40">
            <motion.h1
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-white lg:text-6xl md:text-5xl text-4xl lg:w-[50%] font-bold text-shadow "
            >
              Building Generational
              <span className="text-btn"> Wealth</span> Through Real Estate 
              <span className="text-btn"> Investment.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-white mt-5 lg:text-md lg:w-[53%] text-shadow"
            >
              Turning real estate opportunities into generational prosperity.
            </motion.p>

            {/* <div className="mt-16 mb-10">
              <LinkButton
                name="Invest With Us"
                path="/contact"
                style="bg-[white] hover:text-gray-700"
              />
            </div> */}

            {/* <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex text-white mt-14 gap-x-10"
            >
              <Link to="/" className="text-btn text-xl bi-facebook"></Link>
              <Link to="/" className="text-btn text-xl bi-instagram"></Link>
              <Link to="/" className="text-btn text-xl bi-linkedin"></Link>
              <Link to="/" className="text-btn text-xl bi-twitter-x"></Link>
            </motion.div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
