import React, { useState, useEffect } from "react";

type VideoFromFramesProps = {
  frames: string[];
  fps?: number;
};

const ImageFromFrames: React.FC<VideoFromFramesProps> = ({
  frames,
  fps = 24,
}) => {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  useEffect(() => {
    // Calculate the interval duration in milliseconds
    const intervalDuration = 1000 / fps;

    // Set up an interval to update the frame index at the desired fps
    const intervalId = setInterval(() => {
      setCurrentFrameIndex((prevIndex) => (prevIndex + 1) % frames.length);
    }, intervalDuration);

    // Clear the interval when the component unmounts or fps/frames change
    return () => clearInterval(intervalId);
  }, [frames, fps]);

  return (
    <div className="overflow-hidden">
      {frames.map((frame, index) => (
        <img
          key={index}
          src={frame}
          alt={`Frame ${index}`}
          style={{
            position: "absolute",
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 0.8s ease-in-out, transform 1s ease-in-out",
            opacity: index === currentFrameIndex ? 1 : 0,
            transform: index === currentFrameIndex ? "scale(1)" : "scale(1.1)",
            zIndex: -2,
            objectPosition: "top",
          }}
          className="hero-img"
        />
      ))}
    </div>
  );
};

export default ImageFromFrames;
