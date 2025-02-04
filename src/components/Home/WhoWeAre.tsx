import { motion } from "motion/react";
import { arrow, we1, we2, we3, we4 } from "../../assets";
import Container from "../Container/Container";

const WhoWeAre = () => {
  return (
    <Container>
      <div className="grid lg:grid-cols-2 gap-x-10 my-20">
        <div className="flex items-center">
          <div>
            <h1 className="text-3xl poppins-bold">Who We Are</h1>
            <p className="mt-5 text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam est
              provident voluptatum aut sequi harum assumenda. In fugit et neque
              quam itaque? Nobis corrupti magni eius doloribus ducimus facilis
              nulla veniam impedit hic. Illum dolore itaque architecto quaerat
              aperiam aliquid repellat dicta sint. Magnam delectus nisi
              similique eos ea sit voluptatibus, asperiores saepe suscipit
              sapiente excepturi molestiae, inventore quibusdam natus laborum
              minima ipsum quos voluptatem expedita distinctio consectetur? Quis
              quaerat nesciunt, optio laboriosam illo at commodi deleniti quo
              est incidunt. Aperiam sapiente qui.
            </p>
            <img
              src={arrow}
              alt="Arrow"
              className="h-32 object-contain w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-10 overflow-hidden">
          <div className="col-span-2 space-y-4">
            <div className="relative rounded-xl overflow-hidden">
              <motion.img
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
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
            </div>

            <div className="relative rounded-xl overflow-hidden">
              <motion.img
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
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
            </div>
          </div>

          <div className="col-span-2 space-y-4">
            <div className="relative rounded-xl overflow-hidden">
              <motion.img
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
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
            </div>

            <div className="relative rounded-xl overflow-hidden">
              <motion.img
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
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
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhoWeAre;
