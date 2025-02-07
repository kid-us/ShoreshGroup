import { motion } from "motion/react";
import { arrow, we1, we2, we3, we4 } from "../../assets";
import Container from "../Container/Container";

const WhoWeAre = () => {
  const heading =
    "At Shores Group, we are a premier real estate investment firm dedicated to creating long-term value through strategic acquisitions, asset management, and innovative financial solutions. Our expertise spans across multifamily, commercial, and mixed-use properties, delivering exceptional returns for our investors while enhancing the communities we serve. ";
  const heading2 =
    "With a commitment to integrity, transparency, and performance, we leverage deep market insights and data-driven strategies to identify high-potential opportunities. Whether you are an investor seeking stable growth or a property owner looking for a trusted partner, Shores Group is your pathway to success in real estate.";
  const heading3 =
    "Would you like me to refine it further based on your company's specific focus?";

  const words = heading.split(" ");
  const words2 = heading2.split(" ");
  const words3 = heading3.split(" ");

  return (
    <Container>
      <div className="grid lg:grid-cols-2 gap-x-10 my-20">
        <div className="flex items-center">
          <div>
            <h1 className="lg:text-3xl text-2xl poppins-bold lg:text-left text-center">
              Who We Are
            </h1>
            <p className="lg:text-lg lg:leading-7 mt-5 ">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ x: -30 }}
                  whileInView={{ x: 0 }}
                  transition={{ type: "spring", delay: index * 0.001 }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </p>

            <p className="lg:text-lg lg:leading-7 mt-2 ">
              {words2.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ x: -30 }}
                  whileInView={{ x: 0 }}
                  transition={{ type: "spring", delay: index * 0.001 }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </p>

            <p className="lg:text-lg lg:leading-7 mt-2 ">
              {words3.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ x: -30 }}
                  whileInView={{ x: 0 }}
                  transition={{ type: "spring", delay: index * 0.001 }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </p>

            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 0.2, duration: 1.5 },
              }}
              viewport={{ once: true }}
              src={arrow}
              alt="Arrow"
              className="h-32 object-contain w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-10 overflow-hidden">
          <div className="col-span-2 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden"
            >
              <img
                src={we1}
                alt="Ceo"
                className="lg:h-72 h-40 w-full object-cover shadow shadow-black"
              />
              <div className="bg-gradient-to-r from-neutral-900/50 to-neutral-900/50 h- w-full absolute bottom-0 left-0 leading-6 lg:p-3 p-2">
                <p className="uppercase text-white poppins-semibold lg:text-lg text-xs">
                  Ceo
                </p>
                <p className="text-btn lg:text-sm text-xs poppins-semibold">
                  Meron
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden"
            >
              <img
                src={we2}
                alt="Ceo"
                className="lg:h-96 w-full object-cover shadow shadow-black"
              />

              <div className="bg-gradient-to-r from-neutral-900/50 to-neutral-900/50 h- w-full absolute bottom-0 left-0 leading-6 lg:p-3 p-2">
                <p className="uppercase text-white poppins-semibold lg:text-lg text-xs">
                  Manager
                </p>
                <p className="text-btn lg:text-sm text-xs poppins-semibold">
                  Rediet
                </p>
              </div>
            </motion.div>
          </div>

          <div className="col-span-2 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden"
            >
              <img
                src={we3}
                alt="Ceo"
                className="lg:h-96 w-full shadow shadow-black"
              />

              <div className="bg-gradient-to-r from-neutral-900/50 to-neutral-900/50 h- w-full absolute bottom-0 left-0 leading-6 lg:p-3 p-2">
                <p className="uppercase text-white poppins-semibold lg:text-lg text-xs">
                  Marketer
                </p>
                <p className="text-btn lg:text-sm text-xs poppins-semibold">
                  John
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden"
            >
              <img
                src={we4}
                alt="Ceo"
                className="lg:h-72 h-40 w-full object-cover object-top shadow shadow-black"
              />
              <div className="bg-gradient-to-r from-neutral-900/50 to-neutral-900/50 h- w-full absolute bottom-0 left-0 leading-6 lg:p-3 p-1">
                <p className="uppercase text-white poppins-semibold lg:text-lg text-sm">
                  Architect
                </p>
                <p className="text-btn lg:text-sm text-xs poppins-semibold">
                  Doe
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/*  */}
    </Container>
  );
};

export default WhoWeAre;
