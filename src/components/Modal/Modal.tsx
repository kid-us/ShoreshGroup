import { useState, useEffect, useCallback } from "react";
import { assets, Assets } from "../../services/assets";

interface Props {
  onClose: () => void;
  name: string;
}

const Modal = ({ onClose, name }: Props) => {
  const [animationClass, setAnimationClass] =
    useState<string>("animate__zoomIn");
  const [asset, setAsset] = useState<Assets>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const filtered = assets.filter((asset) => asset.name === name);
    setAsset(filtered[0]);
  }, [name, assets]);

  // Handle modal close
  const handleClose = () => {
    setAnimationClass("animate__zoomOut");
    setTimeout(() => {
      onClose();
    }, 100);
  };

  // Function to move to the next image
  const nextImage = useCallback(() => {
    if (asset && asset.imgs.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % asset.imgs.length);
    }
  }, [asset]);

  // Function to move to the previous image
  const prevImage = useCallback(() => {
    if (asset && asset.imgs.length > 0) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + asset.imgs.length) % asset.imgs.length
      );
    }
  }, [asset]);

  // Automatically change image every 5 seconds (5000ms)
  useEffect(() => {
    if (!asset || asset.imgs.length === 0) return; // ✅ Prevent running when `asset` is undefined

    const timer = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextImage, asset]);

  return (
    <>
      <div
        onClick={() => onClose()}
        className="bg-neutral-700/60 fixed z-30 top-0 left-0 w-full h-[100dvh]"
      ></div>

      <div className="fixed z-40  rounded-lg shadow-lg top-1/2 left-1/2 lg:w-[70%] w-[95%] -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-center items-center">
          <div
            className={`relative animate__animated ${animationClass} bg-white rounded-lg lg:h-[85dvh] h-[95dvh] lg:p-16 py-7 px-5 overflow-y-scroll overflow-hidden`}
          >
            <button
              onClick={() => handleClose()}
              className="absolute lg:top-10 lg:right-7 top-3 right-5 bi-x-lg text-red-600 lg:text-xl"
            ></button>
            <div>
              <p className="font-semibold mb-1 lg:text-lg text-xl">
                {asset?.name}
              </p>
              <p className="text-gray-700 text-sm mb-4">
                <span className="bi-geo-alt-fill text-secondary me-1"></span>{" "}
                {asset?.location}
                <span className="bi-calendar-check-fill mx-3 text-secondary"></span>
                Purchased : {asset?.purchased}
              </p>
              {/* Image */}
              <div className="relative my-5 lg:h-96 h-80">
                <img
                  src={asset?.imgs[currentIndex]}
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

              <p className="mt-5 font-semibold text-gray-600 uppercase">
                Description
              </p>
              <p className="mt-3 font-semibold">{asset?.desc}</p>

              <p className="mt-5 font-semibold text-gray-600 uppercase">
                Deal Overview
              </p>

              <p className="mt-3 text-sm text-gray-700">
                Property Address :{" "}
                <span className="font-bold">{asset?.location}</span>
              </p>
              <p className="mt-3 text-sm">
                Purchased Date : {asset?.purchased}
              </p>
              <p className="mt-3 text-sm">Sale Date : {asset?.sale}</p>
              <p className="mt-3 text-sm">Holding Period : {asset?.holding}</p>
              <p className="mt-3 text-sm">
                Purchased Price : {asset?.purchasePrice}
              </p>
              <p className="mt-3 text-sm">Sale Price : {asset?.salePrice}</p>
              <p className="mt-3 text-sm">Project Cost : {asset?.cost}</p>
              <p className="mt-3 text-sm">Profit : {asset?.profit}</p>
              <p className="mt-3 text-sm">ROI : {asset?.roi}</p>
              <p className="mt-3 text-sm">COC : {asset?.coc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
