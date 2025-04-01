// import { motion } from "motion/react";
import { we1, we2, we3 } from "../../assets";
import Container from "../Container/Container";
// import { useEffect, useState } from "react";
// import LinkButton from "../Button/LinkButton";

interface Team {
  id: number;
  name: string;
  job_title: string;
  img: string;
}

const teams: Team[] = [
  {
    id: 1,
    img: we1,
    name: "Johai Mor",
    job_title: "Chief Executive Officer",
  },
  {
    id: 2,
    img: we2,
    name: "David Sher",
    job_title: "Chief Financial Officer",
  },
  {
    id: 3,
    img: we3,
    name: "Daniel Pitrone",
    job_title: "Chief Operating Officer",
  },
];

const Team = () => {
  // const [index, setIndex] = useState(0); // Track current team member index
  // const [autoChange, setAutoChange] = useState<number | null>(null);

  // const handleNext = () => {
  //   setIndex((prevIndex) => (prevIndex + 1) % teams.length);
  //   restartAutoChange();
  // };

  // // Function to restart auto-change counter
  // const restartAutoChange = () => {
  //   if (autoChange) clearInterval(autoChange);

  //   const newInterval = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex + 1) % teams.length);
  //   }, 15000);

  //   setAutoChange(newInterval);
  // };

  // // Start auto-change when component mounts
  // useEffect(() => {
  //   restartAutoChange();

  //   return () => {
  //     if (autoChange) clearInterval(autoChange);
  //   };
  // }, []);

  return (
    <Container>
      <div className="lg:col-span-2 lg:pt-16 lg:pb-10 py-8">
        <p className="text-sm uppercase text-white mb-10">Meet our Team</p>
        <h1 className="font-semibold lg:text-3xl text-2xl  text-white">
          We Build Wealth Through Smart Real Estate Investments.
        </h1>

        <p className="text-sm mb-2 text-white">
          Our team brings years of experience in real estate and
          wealth-building.
        </p>

        <p className="text-sm mb-2 text-white">
          Comprised of dedicated, ethical, and innovative professionals with
          diverse expertise, we work together to protect and grow your wealth
          while making Shoresh-group a leader in real estate investment.
        </p>

        <p className="text-sm mb-2 text-white">
          We invite you to invest passively alongside us.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 pb-10">
        {teams.map((t) => (
          <div key={t.id}>
            <img
              src={t.img}
              alt={t.name}
              className="rounded-lg h-96 w-full object-cover object-top"
            />
            <div className="bg-white rounded-xl p-3 mt-2">
              <p className="font-bold text-xl mt-2">{t.name}</p>
              <p className="text-gray-600">{t.job_title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="grid lg:grid-cols-5 mt-28 gap-x-10 py-20">
        <div className="lg:col-span-3">
          <div className="grid lg:grid-cols-9">
            <div className="lg:col-span-4 lg:col-start-2 overflow-hidden shadow-[7px_3px_3px_0px_#E0B84D] lg:rounded-full rounded-xl">
              <motion.img
                key={teams[index].id}
                src={teams[index].img}
                alt={teams[index].name}
                initial={{ opacity: 0, x: 20 }} // Start animation
                animate={{ opacity: 1, x: 0 }} // End animation
                exit={{ opacity: 0, x: -20 }} // Exit animation
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full object-cover lg:h-[70vh] h-[50vh] lg:rounded-full rounded-xl"
              />
            </div>

            <div className="lg:flex lg:justify-center lg:items-center lg:col-span-4 lg:px-16">
              <div className="lg:block flex justify-between mt-5">
                <div className="">
                  <p className="lg:text-3xl text-2xl font-bold text-white">
                    {teams[index].name}
                  </p>
                  <p className="lg:mt-2 text-sm mt-1 text-white">
                    {teams[index].job_title}
                  </p>
                </div>

                <motion.button
                  layout
                  whileHover={{ x: 10, transition: { ease: "easeInOut" } }}
                  onClick={handleNext}
                  className="lg:inline hidden text-white bg-black border border-gray-600 rounded-full px-10 font-light text-sm lg:py-2 py-1 group lg:mt-20"
                >
                  Next <span className="bi-arrow-right ms-2"></span>
                </motion.button>

                <motion.button
                  layout
                  whileHover={{ x: 10, transition: { ease: "easeInOut" } }}
                  onClick={handleNext}
                  className="lg:hidden text-white bg-black border border-gray-600 rounded-lg px-2 font-light h-10 lg:py-2 py-1 group lg:mt-20"
                >
                  <span className="bi-chevron-right ms-2"></span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Container>
  );
};

export default Team;
