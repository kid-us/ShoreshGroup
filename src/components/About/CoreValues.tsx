import {
  // accountability,
  community,
  excellence,
  innovation,
  transparency,
} from "../../assets";
import Container from "../Container/Container";
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
    desc: "Transparent and honest dealings in every project.",
  },
  {
    id: 2,
    name: "Excellence:",
    icon: excellence,
    desc: "Delivering high-quality results with a focus on growth.",
  },

  // {
  //   id: 3,
  //   name: "Stewardship & Accountability:",
  //   icon: accountability,
  //   desc: "We are committed to responsible management of assets and resources, holding ourselves accountable for sustainable growth and long-term success.",
  // },

  {
    id: 4,
    name: "Collaboration:",
    icon: community,
    desc: "Working together to achieve mutual success.",
  },
  {
    id: 5,
    name: "Legacy:",
    icon: innovation,
    desc: "Building generational wealth that empowers the future.",
  },
];

const CoreValues = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  // const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);
  return (
    <Container>
      {/* Only on Large device */}
      <div
        className="relative lg:flex hidden w-full lg:max-w-[90%] mx-auto items-center justify-center mt-2 mb-6 overflow-hidden pb-10"
        ref={containerRef}
      >
        <div className="flex h-full w-full flex-col items-stretch justify-between lg:gap-8">
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div8Ref}>
              <img src={transparency} alt="logo" />
              <p className="poppins-semibold text-lg mt-3 text-white">
                Integrity:
              </p>
              <p className="text-xs mt-2 text-gray-100">
                Transparent and honest dealings in every project.
              </p>
            </Circle>
            <Circle ref={div5Ref}>
              <img src={excellence} alt="logo" />
              <p className="poppins-semibold text-lg mt-3 text-white">
                Excellence:
              </p>
              <p className="text-xs mt-2 text-gray-100">
                Delivering high-quality results with a focus on growth.
              </p>
            </Circle>
          </div>
          <div className="items-center justify-between">
            <div
              ref={div4Ref}
              className={"z-40 flex justify-center rounded-full"}
            >
              <div className="border rounded-xl py-3 px-10 bg-btn text-black font-bold shadow-lg shadow-amber-500">
                <p className="uppercase">Our Core Values</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div3Ref}>
              <img src={community} alt="logo" />
              <p className="poppins-semibold text-lg mt-3 text-white">
                Collaboration:
              </p>
              <p className="text-xs mt-2 text-gray-100">
                Working together to achieve mutual success.
              </p>
            </Circle>
            {/* <Circle ref={div7Ref} className="mt-60">
              <img src={innovation} alt="logo" />
              <p className="poppins-semibold text-lg mt-3">
                Value Creation & Innovation:
              </p>
              <p className="text-xs mt-2">
                We continuously seek opportunities to enhance property value
                through creative, forward-thinking strategies and innovative
                improvements that benefit both our stakeholders and the
                communities we serve.
              </p>
            </Circle> */}
            <Circle ref={div9Ref}>
              <img src={innovation} alt="logo" />
              <p className="poppins-semibold text-lg mt-3 text-white">
                Legacy:
              </p>
              <p className="text-xs mt-2 text-gray-100">
                Building generational wealth that empowers the future.
              </p>
            </Circle>
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={10}
          dotted
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div4Ref}
          curvature={70}
          endYOffset={10}
          reverse
          gradientStartColor="#00adee"
          gradientStopColor="#00a651"
          dotted
        />
        {/* <AnimatedBeam
          containerRef={containerRef}
          fromRef={div7Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={20}
          reverse
          dotted
          gradientStartColor="#00adee"
          gradientStopColor="#00a651"
        /> */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div9Ref}
          toRef={div4Ref}
          curvature={-75}
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
          curvature={70}
          endYOffset={10}
          reverse
          dotted
          gradientStartColor="#00adee"
          gradientStopColor="#00a651"
        />
      </div>

      {/* On Small device */}
      <div className="lg:hidden grid gap-y-5 mt-10">
        <h1 className="text-2xl poppins-bold">Our Values</h1>
        {values.map((value, index) => (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: index * 0.01, duration: 0.5 },
            }}
            className="border border-amber-400 rounded-xl bg-secondary p-3 shadow hover:shadow-amber-500 hover:shadow-lg transition-colors"
          >
            <img src={value.icon} alt="logo" />
            <p className="poppins-semibold text-lg mt-3 text-white">
              {value.name}
            </p>
            <p className="text-xs mt-2 text-gray-100">{value.desc}</p>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default CoreValues;
