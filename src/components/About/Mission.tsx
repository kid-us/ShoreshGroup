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
      name: "Empower Investors: Provide transparent opportunities and deliver exceptional returns to our investors. We build lasting trust by offering clear insights into our strategies and performance, ensuring every investor feels confident and valued.",
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
        <div className="absolute lg:-top-20 -left-96 border border-btn w-[3000px] h-full -z-20 -rotate-2 overflow-hidden"></div>
        <Container>
          <div className="lg:grid grid-cols-3 lg:my-50 mb-16 gap-x-8">
            <div className="flex items-center">
              <div className="mt-20">
                <h1 className="lg:text-3xl text-2xl poppins-bold">Our</h1>
                <h1 className="lg:text-3xl text-2xl poppins-bold text-btn">
                  Mission
                </h1>
                <p className="mt-5 lg:text-lg text-black">
                  Our commitment is to empower each generation of our family to
                  thrive by building a legacy of financial security. We unlock
                  value in both short-term fix-and-flip projects and long-term
                  investments, ensuring lasting growth and success for our
                  family, partners, investors, and like-minded families. We aim
                  to pass on this legacy of opportunity, fostering prosperity
                  and success for all who join us on this journey.
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
                    }  flex justify-center items-center p-5 font-medium border border-amber-300 lg:shadow-[3px_4px_3px_0px_black] shadow-[3px_4px_3px_0px_black] bg-secondary text-white rounded 
                      
                      
                    `}
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
