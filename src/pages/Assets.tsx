import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Modal from "../components/Modal/Modal";
import Container from "../components/Container/Container";
import { motion } from "motion/react";
import { assets } from "../services/assets";

const Assets = () => {
  const [modal, setModal] = useState<boolean>(false);

  const categories = ["Current", "For Sale", "Sold"];

  const [activeCategory, setActiveCategory] = useState<string>("Current");

  const handleAssetClicked = () => {
    setModal(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      {/* Modal */}
      {modal && (
        <Modal
          onClose={() => {
            setModal(false);
            document.body.style.overflow = "auto";
          }}
        />
      )}

      <Navbar bg />

      <Container>
        <div className="lg:mb-8 mb-3 pt-32">
          <h1 className="lg:text-3xl text-2xl poppins-bold ">Our Properties</h1>
          <p className="mt-3 w-[60%]">
            Discover our premium real estate assets, carefully selected for
            long-term growth, stability, and exceptional returns.
          </p>
          <p className="text-gray-500 mb-5 mt-10">Categories</p>
          <motion.div
            layout
            className="lg:flex grid grid-cols-2 gap-y-3 lg:gap-x-12 gap-x-4"
          >
            {categories.map((c) => (
              <motion.button
                layout
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`font-normal ${
                  activeCategory === c
                    ? "bg-secondary text-white lg:px-10 shadow-[2px_2px_3px_0px_black] text-sm py-3"
                    : "text-gray-600 lg:border-none border border-btn py-3 rounded"
                } `}
              >
                {c} Assets
              </motion.button>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:my-12 my-8 gap-x-5 lg:gap-y-7 gap-y-5">
            {assets.map(
              (asset) =>
                asset.category === activeCategory && (
                  <div
                    key={asset.id}
                    onClick={() => handleAssetClicked()}
                    className="rounded-2xl p-2 border border-btn overflow-hidden hover:scale-[0.99] transition-all duration-300 shadow cursor-pointer"
                  >
                    <img
                      src={asset.img}
                      alt={"asset" + asset.id}
                      className="lg:h-72 md:72 h-60 w-full rounded-xl object-cover object-bottom"
                    />
                    <div className="px-4 py-5">
                      <p className="font-semibold text-xl mb-2">{asset.name}</p>
                      <div className="flex justify-between">
                        <p className="text-gray-500 text-sm font-semibold">
                          <span className="bi-geo-alt-fill text-secondary me-2"></span>
                          {asset.location}
                        </p>
                        <p className="text-gray-500 text-sm font-semibold">
                          <span className="bi-calendar-check-fill me-2 text-secondary"></span>
                          Purchased {asset.purchased}
                        </p>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default Assets;
