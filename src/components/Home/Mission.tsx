import { useEffect, useState } from "react";
import Container from "../Container/Container";
import { motion } from "motion/react";
import { aim } from "../../assets";

export interface Mission {
  id: number;
  name: string;
}

const Mission = () => {
  const [missionId, setMissionId] = useState<number>(1);

  const mission: Mission[] = [
    {
      id: 1,
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, suscipit, voluptas placeat magni unde at deserunt possimus a quas vero laborum enim optio assumenda aspernatur dolore voluptatibus et illo facilis.",
    },
    {
      id: 2,
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, suscipit, voluptas placeat magni unde at deserunt possimus a quas vero laborum enim optio assumenda aspernatur dolore voluptatibus et illo facilis.",
    },
    {
      id: 3,
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, suscipit, voluptas placeat magni unde at deserunt possimus a quas vero laborum enim optio assumenda aspernatur dolore voluptatibus et illo facilis.",
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
    <div className="overflow-hidden lg:mb-28 lg:mt-10">
      <div className="relative lg:h-[85vh] h-auto w-full">
        <div className="absolute lg:-top-20 -left-96 bg-amber-400 w-[3000px] h-full -z-20 -rotate-2 overflow-hidden"></div>
        <Container>
          <div className="lg:grid grid-cols-3 lg:my-50 mb-16 gap-x-8">
            <div className="flex items-center">
              <div className="mt-20">
                <h1 className="lg:text-3xl text-2xl poppins-bold">Our</h1>
                <h1 className="lg:text-3xl text-2xl poppins-bold text-white">
                  Mission
                </h1>
                <p className="mt-5 lg:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, suscipit, voluptas placeat magni unde at deserunt
                  possimus a quas vero laborum enim optio assumenda aspernatur
                  dolore voluptatibus et illo facilis.
                </p>

                <p className="mt-4 italic">
                  Lorem ipsum, dolor sit amet consectetur adipisicing.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 grid lg:grid-cols-4 gap-x-10 gap-y-6 lg:mx-10 lg:mt-0 mt-8">
              {mission.map((m, index) => (
                <>
                  {m.id === missionId && (
                    <motion.div
                      layoutId="lol"
                      className="lg:block hidden h-full"
                    >
                      <img src={aim} alt="target" />
                    </motion.div>
                  )}
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
                        ? "lg:col-span-3 col-span-4 border border-amber-300 lg:shadow-[8px_10px_3px_0px_black] shadow-[4px_6px_3px_0px_black] bg-white rounded"
                        : "col-span-4 border border-black/20 rounded"
                    }  flex justify-center items-center p-8`}
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
