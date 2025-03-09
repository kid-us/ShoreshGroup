// import { useState, useEffect, useCallback } from "react";
// import {
//   currentAssets,
//   CurrentAssets,
//   ongoing,
//   soldAssets,
//   SoldAssets,
// } from "../../services/assets";
// import SoldDescription from "./SoldDescription";
// import CurrentDescription from "./CurrentDescription";

// interface Props {
//   onClose: () => void;
//   name: string;
//   category: string;
// }

// const Modal = ({ onClose, name, category }: Props) => {
//   const [animationClass, setAnimationClass] =
//     useState<string>("animate__zoomIn");
//   const [asset, setAsset] = useState<SoldAssets | CurrentAssets>();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (category === "Current") {
//       const filtered = currentAssets.filter((asset) => asset.name === name);
//       setAsset(filtered[0]);
//     } else if (category === "Sold") {
//       const filtered = soldAssets.filter((asset) => asset.name === name);
//       setAsset(filtered[0]);
//     } else if (category === "In Progress") {
//       const filtered = ongoing.filter((asset) => asset.name === name);
//       setAsset(filtered[0]);
//     }
//   }, [name, soldAssets, currentAssets, ongoing]);

//   // Handle modal close
//   const handleClose = () => {
//     setAnimationClass("animate__zoomOut");
//     setTimeout(() => {
//       onClose();
//     }, 100);
//   };

//   const [timer, setTimer] = useState<number | null>(null);

//   // Function to start/reset auto-slide
//   const startAutoSlide = useCallback(() => {
//     if (timer) clearInterval(timer); // Clear existing interval

//     const newTimer = setInterval(() => {
//       if (asset)
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % asset.imgs.length);
//     }, 5000);

//     setTimer(newTimer);
//   }, [asset, timer]);

//   // Function to move to the next image & restart auto-slide
//   const nextImage = useCallback(() => {
//     if (asset && asset.imgs.length > 0) {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % asset.imgs.length);
//       startAutoSlide(); // Restart auto-slide
//     }
//   }, [asset, startAutoSlide]);

//   // Function to move to the previous image & restart auto-slide
//   const prevImage = useCallback(() => {
//     if (asset && asset.imgs.length > 0) {
//       setCurrentIndex(
//         (prevIndex) => (prevIndex - 1 + asset.imgs.length) % asset.imgs.length
//       );
//       startAutoSlide(); // Restart auto-slide
//     }
//   }, [asset, startAutoSlide]);

//   // Start auto-slide when component mounts
//   useEffect(() => {
//     if (!asset || asset.imgs.length === 0) return;
//     startAutoSlide();

//     return () => {
//       if (timer) clearInterval(timer); // Cleanup on unmount
//     };
//   }, [startAutoSlide, asset]);

//   return (
//     <>
//       <div
//         onClick={() => onClose()}
//         className="bg-neutral-700/60 fixed z-30 top-0 left-0 w-full h-[100dvh]"
//       ></div>

//       <div className="fixed z-40 rounded-lg shadow-lg top-1/2 left-1/2 lg:w-[50%] w-[97%] -translate-x-1/2 -translate-y-1/2">
//         <div className="flex justify-center items-center">
//           <div
//             className={`relative animate__animated ${animationClass} bg-white rounded-lg lg:h-[75dvh] h-[95dvh] lg:p-16 py-7 px-5 overflow-y-scroll overflow-hidden`}
//           >
//             <button
//               onClick={() => handleClose()}
//               className="absolute lg:top-10 lg:right-7 top-3 right-5 bi-x-lg text-red-600 lg:text-xl"
//             ></button>
//             <div>
//               <p className="font-semibold mb-1 lg:text-lg text-xl">
//                 {asset?.name}
//               </p>
//               <p className="text-gray-700 text-sm mb-4">
//                 <span className="bi-geo-alt-fill text-secondary me-1"></span>{" "}
//                 {asset?.location}
//                 {asset?.purchased && (
//                   <>
//                     <span className="bi-calendar-check-fill mx-3 text-secondary"></span>
//                     Purchased : {asset?.purchased}
//                   </>
//                 )}
//               </p>
//               {/* Image */}
//               <div className="relative my-5 lg:h-96 h-80">
//                 <img
//                   src={asset?.imgs[currentIndex]}
//                   alt={`Slide ${currentIndex + 1}`}
//                   className="w-full lg:h-96 h-80 object-contain border border-btn lg:p-1 rounded-xl"
//                 />

//                 {/* Prev Button */}
//                 <button
//                   onClick={prevImage}
//                   className="absolute lg:-left-4 -left-3 top-1/2 transform -translate-y-1/2 bg-secondary p-2 bi-chevron-left text-white rounded"
//                 ></button>

//                 {/* Next Button */}
//                 <button
//                   onClick={nextImage}
//                   className="absolute lg:-right-4 -right-3 top-1/2 transform -translate-y-1/2 bg-secondary p-2 bi-chevron-right text-white rounded"
//                 ></button>
//               </div>
//               {/* Description */}

//               <p className="lg:my-10 my-5 font-semibold text-gray-600 uppercase">
//                 Description
//               </p>

//               {/* Sold Assets Info */}
//               {category === "Sold" && (
//                 <SoldDescription asset={asset as SoldAssets} />
//               )}

//               {/* Current Assets Info */}
//               {category === "Current" && (
//                 <CurrentDescription asset={asset as CurrentAssets} />
//               )}

//               {/* Ongoing Assets Info */}
//               {category === "In Progress" && (
//                 <p className="mb-2">{asset?.desc}</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Modal;

import { useState, useEffect } from "react";
import {
  currentAssets,
  CurrentAssets,
  ongoing,
  soldAssets,
  SoldAssets,
} from "../../services/assets";
import SoldDescription from "./SoldDescription";
import CurrentDescription from "./CurrentDescription";

interface Props {
  onClose: () => void;
  name: string;
  category: string;
}

const Modal = ({ onClose, name, category }: Props) => {
  const [animationClass, setAnimationClass] =
    useState<string>("animate__zoomIn");
  const [asset, setAsset] = useState<SoldAssets | CurrentAssets>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (category === "Current") {
      const filtered = currentAssets.filter((asset) => asset.name === name);
      setAsset(filtered[0]);
    } else if (category === "Sold") {
      const filtered = soldAssets.filter((asset) => asset.name === name);
      setAsset(filtered[0]);
    } else if (category === "In Progress") {
      const filtered = ongoing.filter((asset) => asset.name === name);
      setAsset(filtered[0]);
    }
  }, [name, category]);

  // Handle modal close
  const handleClose = () => {
    setAnimationClass("animate__zoomOut");
    setTimeout(() => {
      onClose();
    }, 100);
  };

  // Function to change image when thumbnail is clicked
  const changeImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div
        onClick={onClose}
        className="bg-neutral-700/60 fixed z-30 top-0 left-0 w-full h-[100dvh]"
      ></div>

      <div className="fixed z-40 rounded-lg shadow-lg top-1/2 left-1/2 lg:w-[50%] w-[97%] -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-center items-center">
          <div
            className={`relative animate__animated ${animationClass} bg-white rounded-lg lg:h-[85dvh] h-[95dvh] lg:p-16 py-7 px-5 overflow-y-scroll overflow-hidden`}
          >
            <button
              onClick={handleClose}
              className="absolute lg:top-10 lg:right-7 top-3 right-5 bi-x-lg text-red-600 lg:text-xl"
            ></button>
            <div>
              <p className="font-semibold mb-1 lg:text-lg text-xl">
                {asset?.name}
              </p>
              <p className="text-gray-700 text-sm mb-4">
                <span className="bi-geo-alt-fill text-secondary me-1"></span>{" "}
                {asset?.location}
                {asset?.purchased && (
                  <>
                    <span className="bi-calendar-check-fill mx-3 text-secondary"></span>
                    Purchased: {asset?.purchased}
                  </>
                )}
              </p>
            </div>

            {/* Main Image */}
            <div>
              <img
                src={asset?.imgs[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full lg:h-96 object-contain border border-btn p-1 rounded-xl"
              />
            </div>

            {/* Thumbnail Navigation */}
            <div
              className={`flex ${
                asset && asset.imgs.length > 7 ? "" : "justify-center"
              }  gap-2 mt-5 overflow-x-auto`}
            >
              {asset?.imgs.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-20 h-20 object-cover border rounded cursor-pointer ${
                    index === currentIndex
                      ? "border-btn border-2 scale-90 p-1"
                      : "border-gray-300"
                  }`}
                  onClick={() => changeImage(index)}
                />
              ))}
            </div>

            <div className="mt">
              {/* Description */}
              <p className="lg:my-10 my-5 font-semibold text-gray-600 uppercase">
                Description
              </p>

              {/* Sold Assets Info */}
              {category === "Sold" && (
                <SoldDescription asset={asset as SoldAssets} />
              )}

              {/* Current Assets Info */}
              {category === "Current" && (
                <CurrentDescription asset={asset as CurrentAssets} />
              )}

              {/* Ongoing Assets Info */}
              {category === "In Progress" && (
                <p className="mb-2">{asset?.desc}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
