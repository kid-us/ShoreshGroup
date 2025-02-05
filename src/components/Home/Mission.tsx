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
    <Container>
      <div className="lg:grid grid-cols-3 lg:my-50 mb-16 gap-x-8">
        <div className="flex items-center">
          <div>
            <h1 className="lg:text-3xl text-2xl poppins-bold">Our</h1>
            <h1 className="lg:text-3xl text-2xl poppins-bold text-btn">
              Mission
            </h1>
            <p className="mt-5 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              suscipit, voluptas placeat magni unde at deserunt possimus a quas
              vero laborum enim optio assumenda aspernatur dolore voluptatibus
              et illo facilis.
            </p>

            <p className="mt-4 italic">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 grid lg:grid-cols-4 gap-x-10 gap-y-5 lg:mx-10 lg:mt-0 mt-8">
          {mission.map((m) => (
            <>
              {m.id === missionId && (
                <motion.div layoutId="lol" className="lg:block hidden h-full">
                  <img src={aim} alt="target" />
                </motion.div>
              )}
              <motion.div
                layout
                onClick={() => setMissionId(m.id)}
                className={`${
                  m.id === missionId
                    ? "lg:col-span-3 col-span-4 border-2 border-amber-400"
                    : "col-span-4 border border-gray-300"
                } shadow rounded-xl flex justify-center items-center p-8`}
              >
                <p
                  className={`${
                    m.id === missionId ? "text-black" : "text-gray-800"
                  }`}
                >
                  {m.name}
                </p>
              </motion.div>
            </>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Mission;
