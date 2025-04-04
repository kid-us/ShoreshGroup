import { motion } from "motion/react";
import {
  lgHero2,
  lgHero3,
  lgHero4,
  lgHero5,
  lgHero6,
  lgHero7,
  lgHero8,
  lgHero9,
  lgHero10,
} from "../../assets";
import ImageFromFrames from "./ImageFrame";
import useToggleStore from "../../store/store";

const Hero = () => {
  const { isToggled } = useToggleStore();

  const lgFrames = [
    lgHero2,
    lgHero3,
    lgHero4,
    lgHero5,
    lgHero6,
    lgHero7,
    lgHero8,
    lgHero9,
    lgHero10,
  ];

  return (
    <div
      className={`${
        isToggled ? "hero-after-hide" : "hero-before-hide"
      } relative overflow-hidden h-[100dvh]`}
    >
      <div>
        <ImageFromFrames frames={lgFrames} fps={0.1} />
      </div>

      <div className="container mx-auto px-5">
        <div className="flex items-center h-screen">
          <div className="mt-20">
            <motion.h1
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-white lg:text-6xl md:text-5xl text-4xl lg:w-[50%] font-bold text-shadow logo-font"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
