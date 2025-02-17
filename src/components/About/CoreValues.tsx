import {
  community,
  excellence,
  innovation,
  plan,
  transparency,
} from "../../assets";
import { AnimatedBeam, Circle } from "./AnimatedBeam";
import { useRef } from "react";
import { Mission } from "./Mission";
import { motion } from "motion/react";

interface Value extends Mission {
  icon: string;
  desc: string;
}

const values: Value[] = [
  {
    id: 1,
    name: "Integrity:",
    icon: transparency,
    desc: "Transparent and honest dealings in every project. We uphold the highest ethical standards, ensuring trust and reliability in every decision we make.",
  },
  {
    id: 2,
    name: "Excellence:",
    icon: excellence,
    desc: "Delivering high-quality results with a focus on growth. We are committed to excellence in every aspect of our business, striving for continuous improvement and long-term success.",
  },

  {
    id: 3,
    name: "Vision for the Future:",
    icon: plan,
    desc: "Planning and investing with the future in mind. Shoresh Group is driven by a forward-thinking mindset, focusing on creating sustainable wealth and opportunities that benefit generations to come.",
  },

  {
    id: 4,
    name: "Collaboration:",
    icon: community,
    desc: "Working together to achieve mutual success. We believe that success is built through strong relationships and partnerships, whether within our family or with our investors.",
  },
  {
    id: 5,
    name: "Legacy:",
    icon: innovation,
    desc: "Building generational wealth that empowers future generations. Shoresh Group is focused on creating lasting value for both our family and the broader community.",
  },
];

const CoreValues = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  // const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="container mx-auto">
      {/* Only on Large device */}
      <div
        className="relative lg:flex hidden w-full lg:max-w-[90%] mx-auto items-center justify-center mt-2 mb-6 overflow-hidden pb-10"
        ref={containerRef}
      >
        <div className="flex h-full w-full flex-col items-stretch justify-between lg:gap-8">
          <p className="text-center text-2xl mb-10">
            At Shoresh Group, our core values are the foundation of everything
            we do. They guide our decision-making, shape our company culture,
            and help us stay focused on building lasting value.
          </p>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div8Ref}>
              <div className="grid grid-cols-5 gap-x-3">
                <div className="col-span-1 flex justify-center items-center">
                  <img src={transparency} alt="logo" className="h-12 w-12" />
                </div>
                <div className="col-span-4">
                  <p className="text-lg mt-3 text-white">Integrity:</p>
                  <p className="text-sm mt-2 text-gray-100">
                    Transparent and honest dealings in every project. We uphold
                    the highest ethical standards, ensuring trust and
                    reliability in every decision we make.
                  </p>
                </div>
              </div>
            </Circle>
            <Circle ref={div5Ref}>
              <div className="grid grid-cols-5 gap-x-3">
                <div className="col-span-1 flex justify-center items-center">
                  <img src={excellence} alt="logo" className="h-12 w-12" />
                </div>
                <div className="col-span-4">
                  <p className="text-lg mt-3 text-white">Excellence:</p>
                  <p className="text-sm mt-2 text-gray-100">
                    Delivering high-quality results with a focus on growth. We
                    are committed to excellence in every aspect of our business,
                    striving for continuous improvement and long-term success.
                  </p>
                </div>
              </div>
            </Circle>
          </div>
          <div className="flex items-center justify-between">
            <Circle ref={div2Ref}>
              <div className="grid grid-cols-5 gap-x-3">
                <div className="col-span-1 flex justify-center items-center">
                  <img src={community} alt="logo" className="h-12 w-12" />
                </div>
                <div className="col-span-4">
                  <p className="text-lg mt-3 text-white">Collaboration:</p>
                  <p className="text-sm mt-2 text-gray-100">
                    Working together to achieve mutual success. We believe that
                    success is built through strong relationships and
                    partnerships, whether within our family or with our
                    investors.
                  </p>
                </div>
              </div>
            </Circle>

            <div
              ref={div4Ref}
              className={"z-10 flex justify-center rounded-full"}
            >
              <div className="border rounded-xl py-3 px-10 bg-btn text-black font-bold shadow-lg shadow-amber-500">
                <p className="uppercase">Our Core Values</p>
              </div>
            </div>

            <Circle ref={div6Ref}>
              <div className="grid grid-cols-5 gap-x-3">
                <div className="col-span-1 flex justify-center items-center">
                  <img src={community} alt="logo" className="h-12 w-12" />
                </div>
                <div className="col-span-4">
                  <p className="text-lg mt-3 text-white">Collaboration:</p>
                  <p className="text-sm mt-2 text-gray-100">
                    Working together to achieve mutual success. We believe that
                    success is built through strong relationships and
                    partnerships, whether within our family or with our
                    investors.
                  </p>
                </div>
              </div>
            </Circle>
          </div>

          <div className="flex flex-row items-center justify-between">
            <Circle ref={div3Ref}>
              <div className="grid grid-cols-5 gap-x-3">
                <div className="col-span-1 flex justify-center items-center">
                  <img src={plan} alt="logo" className="h-12 w-12" />
                </div>
                <div className="col-span-4">
                  <p className="text-lg mt-3 text-white">
                    Vision for the Future:
                  </p>
                  <p className="text-sm mt-2 text-gray-100">
                    Planning and investing with the future in mind. Shoresh
                    Group is driven by a forward-thinking mindset, focusing on
                    creating sustainable wealth and opportunities that benefit
                    generations to come.
                  </p>
                </div>
              </div>
            </Circle>

            <Circle ref={div9Ref}>
              <div className="grid grid-cols-5 gap-x-3">
                <div className="col-span-1 flex justify-center items-center">
                  <img src={innovation} alt="logo" className="h-12 w-12" />
                </div>
                <div className="col-span-4">
                  <p className="text-lg mt-3 text-white">Legacy:</p>
                  <p className="text-sm mt-2 text-gray-100">
                    Building generational wealth that empowers future
                    generations. Shoresh Group is focused on creating lasting
                    value for both our family and the broader community.
                  </p>
                </div>
              </div>
            </Circle>
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
          dotted
          gradientStartColor="#d948ae"
          gradientStopColor="#5b60ff"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
          dotted
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
          reverse
          gradientStartColor="#00adee"
          gradientStopColor="#00a651"
          dotted
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div4Ref}
          reverse
          dotted
          gradientStartColor="#00ac47"
          gradientStopColor="#4fcc5d"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div9Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
          reverse
          dotted
          gradientStartColor="#00adee"
          gradientStopColor="#00a651"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div8Ref}
          toRef={div4Ref}
          curvature={-80}
          endYOffset={10}
          reverse
          dotted
          gradientStartColor="#00adee"
          gradientStopColor="#00a651"
        />
      </div>

      {/* On Small device */}
      <div className="lg:hidden grid gap-y-5 mt-10">
        <h1 className="text-2xl">Our Values</h1>
        {values.map((value, index) => (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: index * 0.01, duration: 0.5 },
            }}
            className="border border-amber-400 rounded-xl bg p-3 shadow hover:shadow-amber-500 hover:shadow-lg transition-colors"
          >
            <img src={value.icon} alt="logo" />
            <p className="text-lg mt-3 text-white">{value.name}</p>
            <p className="text-sm mt-2 text-gray-100">{value.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
