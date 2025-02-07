import { useState, useEffect, useCallback } from "react";

const images = [
  hero2,
  hero2,
  hero4,
  hero5,
  hero6,
  hero7,
  hero8,
  hero9,
  hero10,
  hero11,
];

interface Props {
  onClose: () => void;
}

import {
  hero2,
  hero4,
  hero5,
  hero6,
  hero7,
  hero8,
  hero9,
  hero10,
  hero11,
} from "../../assets";

const Modal = ({ onClose }: Props) => {
  const [animationClass, setAnimationClass] =
    useState<string>("animate__zoomIn");

  //   Handle Agreement close
  const handleClose = () => {
    setAnimationClass("animate__zoomOut");
    setTimeout(() => {
      onClose();
    }, 100);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next image
  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  // Function to move to the previous image
  const prevImage = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, []);

  // Automatically change image every 5 seconds (5000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextImage]);

  return (
    <>
      <div className="bg-neutral-700/60 fixed z-30 top-0 left-0 w-full h-[100dvh]"></div>
      <div className="fixed z-40 top-0 left-0 w-full h-full">
        <div className="flex justify-center items-center h-full w-full">
          <div
            className={`relative animate__animated ${animationClass} lg:w-[70%] w-[95%] lg:h-[85dvh] h-[95dvh] bg-white rounded-lg lg:p-16 py-7 px-5 overflow-y-scroll overflow-hidden`}
          >
            <button
              onClick={() => handleClose()}
              className="absolute lg:top-10 lg:right-7 top-3 right-5 bi-x-lg text-red-600 lg:text-xl"
            ></button>

            <div>
              <p className="font-semibold mb-1 lg:text-lg text-xl">
                Mt. Laurel Crossing
              </p>
              <p className="text-gray-700 text-sm mb-4">
                <span className="bi-geo-alt-fill text-secondary me-1"></span>{" "}
                Mt. Laurel Crossing
                <span className="bi-calendar-check-fill mx-3 text-secondary"></span>
                Purchased-2035
              </p>
              {/* Image */}
              <div className="relative my-5 lg:h-96 h-80">
                <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  className="w-full lg:h-96 h-80 object-contain border border-btn lg:p-1 rounded-xl"
                />

                {/* Prev Button */}
                <button
                  onClick={prevImage}
                  className="absolute lg:-left-4 -left-3 top-1/2 transform -translate-y-1/2 bg-secondary p-2 bi-chevron-left text-white rounded"
                ></button>

                {/* Next Button */}
                <button
                  onClick={nextImage}
                  className="absolute lg:-right-4 -right-3 top-1/2 transform -translate-y-1/2 bg-secondary p-2 bi-chevron-right text-white rounded"
                ></button>
              </div>
              {/* Description */}

              <p className="mt-5 font-semibold text-gray-600">Description</p>
              <p className="mt-3 text-sm">
                Under the esteemed umbrella of Shoresh Group Company, we are
                proud to present our latest real estate asset—a visionary
                project that redefines modern living while honoring timeless
                sophistication. This landmark development is meticulously
                designed to cater to discerning individuals seeking both luxury
                and practicality in a rapidly evolving urban landscape.
              </p>
              <p className="mt-3 text-sm">
                Nestled in a prime location, the asset benefits from excellent
                connectivity and proximity to vibrant commercial hubs, top-tier
                educational institutions, and premier recreational facilities.
                The strategic positioning ensures that residents enjoy seamless
                access to all major amenities, making everyday living both
                convenient and enriching.
              </p>
              <p className="mt-3 text-sm">
                Architecturally, the project is a masterpiece of contemporary
                design. Expansive open-plan layouts, abundant natural light, and
                carefully curated green spaces converge to create a serene
                environment that balances urban energy with a sense of
                tranquility. State-of-the-art construction techniques and
                sustainable practices have been employed to guarantee both
                aesthetic excellence and long-term durability, setting new
                benchmarks in eco-friendly development.
              </p>
              <p className="mt-3 text-sm">
                The interiors are thoughtfully crafted to offer an elevated
                lifestyle, featuring premium finishes, smart-home technology,
                and bespoke design elements that speak to the modern tastes of
                our clientele. Each space is designed with a focus on comfort,
                functionality, and style—ensuring that every corner of this
                asset exudes quality and exclusivity.
              </p>
              <p className="mt-3 text-sm">
                At its core, this real estate asset is more than just a
                collection of beautifully designed units; it is a thriving
                community. A comprehensive suite of amenities—ranging from
                fitness centers and landscaped outdoor lounges to co-working
                spaces and secure parking facilities—ensures that residents
                experience a perfect blend of luxury, convenience, and community
                engagement.
              </p>
              <p className="mt-3 text-sm">
                Shoresh Group Company’s commitment to excellence is evident in
                every detail of this project. By combining innovative design,
                sustainable development, and a deep understanding of market
                trends, we have created an asset that not only meets the demands
                of modern living but also sets a new standard for future
                developments. This is a place where comfort meets
                sophistication—a true reflection of our vision to create
                environments that nurture growth, foster community, and enhance
                quality of life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
