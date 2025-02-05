import {
  accountability,
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
    name: "Integrity & Transparency:",
    icon: transparency,
    desc: "We conduct our business ethically, ensuring honesty and clear communication with investors, partners, and residents.",
  },

  {
    id: 3,
    name: "Stewardship & Accountability:",
    icon: accountability,
    desc: "We are committed to responsible management of assets and resources, holding ourselves accountable for sustainable growth and long-term success.",
  },

  {
    id: 4,
    name: "Community Impact & Partnership:",
    icon: community,
    desc: "We invest in more than properties; we invest in communities. By fostering positive relationships and engaging in meaningful partnerships, we work to create thriving neighborhoods where residents and investors can flourish.",
  },
  {
    id: 5,
    name: "Value Creation & Innovation:",
    icon: innovation,
    desc: "We continuously seek opportunities to enhance property value through creative, forward-thinking strategies and innovative improvements that benefit both our stakeholders and the communities we serve.",
  },
];

const CoreValues = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);
  return (
    <Container>
      {/* Only on Large device */}
      <div
        className="relative lg:flex hidden w-full lg:max-w-[100%] mx-auto items-center justify-center mt-2 mb-6"
        ref={containerRef}
      >
        <div className="flex h-full w-full flex-col items-stretch justify-between lg:gap-8">
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div8Ref}>
              <img src={transparency} alt="logo" />
              <p className="poppins-semibold text-lg mt-3">
                Integrity & Transparency:
              </p>
              <p className="text-xs mt-2">
                We conduct our business ethically, ensuring honesty and clear
                communication with investors, partners, and residents
              </p>
            </Circle>
            <Circle ref={div5Ref}>
              <img src={excellence} alt="logo" />
              <p className="poppins-semibold text-lg mt-3">
                Excellence & Operational Efficiency:
              </p>
              <p className="text-xs mt-2">
                We continuously seek opportunities to enhance property value
                through creative, forward-thinking strategies and innovative
                improvements that benefit both our stakeholders and the
                communities we serve.
              </p>
            </Circle>
          </div>
          <div className="items-center justify-between">
            <div
              ref={div4Ref}
              className={"z-40 flex justify-center rounded-full"}
            >
              <div className="border rounded-xl py-3 px-10 bg-black text-white shadow-lg shadow-amber-500">
                <p className="uppercase">Our Core Values</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div3Ref}>
              <img src={community} alt="logo" />
              <p className="poppins-semibold text-lg mt-3">
                Community Impact & Partnership:
              </p>
              <p className="text-xs mt-2">
                We invest in more than properties; we invest in communities. By
                fostering positive relationships and engaging in meaningful
                partnerships, we work to create thriving neighborhoods where
                residents and investors can flourish.
              </p>
            </Circle>
            <Circle ref={div7Ref} className="mt-60">
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
            </Circle>
            <Circle ref={div9Ref}>
              <img src={accountability} alt="logo" />
              <p className="poppins-semibold text-lg mt-3">
                Stewardship & Accountability:
              </p>
              <p className="text-xs mt-2">
                We are committed to responsible management of assets and
                resources, holding ourselves accountable for sustainable growth
                and long-term success.
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
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div7Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={20}
          reverse
          dotted
          gradientStartColor="#00adee"
          gradientStopColor="#00a651"
        />
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
      <div className="lg:hidden grid gap-y-5">
        <h1 className="text-2xl poppins-bold">Our Values</h1>
        {values.map((value, index) => (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: index * 0.01, duration: 0.5 },
            }}
            className="border border-amber-400 rounded-xl bg-white  p-3 shadow hover:bg-black hover:text-white hover:shadow-amber-500 hover:shadow-lg transition-colors"
          >
            <img src={value.icon} alt="logo" />
            <p className="poppins-semibold text-lg mt-3">{value.name}</p>
            <p className="text-xs mt-2">{value.desc}</p>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default CoreValues;
