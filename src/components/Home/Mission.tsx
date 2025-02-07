import { useEffect, useState } from "react";
import Container from "../Container/Container";
import { motion } from "motion/react";

export interface Mission {
  id: number;
  name: string;
}

const Mission = () => {
  const [missionId, setMissionId] = useState<number>(1);

  const mission: Mission[] = [
    {
      id: 1,
      name: "Empower Investors:Provide transparent opportunities and deliver exceptional returns to our investors. We build lasting trust by offering clear insights into our strategies and performance, ensuring every investor feels confident and valued.",
    },
    {
      id: 2,
      name: "Innovate Sustainably: Implement cutting-edge, responsible strategies for lasting growth. By integrating advanced technologies with sustainable practices, we ensure our growth not only benefits our stakeholders but also contributes positively to the environment and society.",
    },
    {
      id: 3,
      name: "Build Communities: Create vibrant neighborhoods through thoughtful, community-focused development. Our developments are designed to enhance local quality of life, fostering safe and thriving",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMissionId((prevMissionId) =>
        prevMissionId === 3 ? 1 : prevMissionId + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden lg:mb-10">
      <div className="relative lg:h-[85vh] h-auto w-full">
        <div className="absolute lg:-top-20 -left-96 bg-secondary w-[3000px] h-full -z-20 -rotate-2 overflow-hidden"></div>
        <Container>
          <div className="lg:grid grid-cols-3 lg:my-50 mb-16 gap-x-8">
            <div className="flex items-center">
              <div className="mt-20">
                <h1 className="lg:text-3xl text-2xl poppins-bold">Our</h1>
                <h1 className="lg:text-3xl text-2xl poppins-bold text-white">
                  Mission
                </h1>
                <p className="mt-5 lg:text-lg text-white">
                  At Shoresh Group, our mission is to empower our investors,
                  partners, and communities by delivering innovative and
                  transparent real estate solutions. We strive to create
                  sustainable value through strategic property acquisitions,
                  active asset management, and a commitment to excellence. By
                  leveraging industry expertise and a forward-thinking approach,
                  we aim to build vibrant communities, generate competitive
                  returns, and secure the financial futures of all stakeholders.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 grid lg:grid-cols-4 gap-x-10 gap-y-6 lg:mx-10 lg:mt-0 mt-8">
              {mission.map((m, index) => (
                <>
                  {/* {m.id === missionId && (
                    <motion.div
                      layoutId="lol"
                      className="lg:flex justify-center items-center hidden h-full"
                    >
                      <img src={aim} alt="target" />
                    </motion.div>
                  )} */}
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: { delay: 0.05 * index, duration: 0.5 },
                    }}
                    onClick={() => setMissionId(m.id)}
                    className={`${
                      m.id === missionId
                        ? "col-span-4"
                        : "col-span-4 border border-black/20 rounded"
                    }  flex justify-center items-center p-5 font-medium border border-amber-300 lg:shadow-[8px_10px_3px_0px_black] shadow-[4px_6px_3px_0px_black] bg-white rounded ${
                      m.id % 2 === 0 ? "lg:-rotate-1" : "lg:rotate-1"
                    } `}
                  >
                    <p className={``}>{m.name}</p>
                  </motion.div>
                </>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Mission;
