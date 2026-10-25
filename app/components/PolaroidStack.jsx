
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const photos = [
  {
    src: "/me.jpg",
    alt: "A photo of me",
    caption: "around campus ♡",
    rotation: -12,
    x: -65,
    y: -15,
  },
  {
    src: "/leo.jpg",
    alt: "My cat Leo",
    caption: "mr. leo",
    rotation: 9,
    x: 55,
    y: -25,
  },
  {
    src: "/memories.jpg",
    alt: "tung tung tung shaur inflatable costume in the middle of a room",
    caption: "from KHIX",
    rotation: -4,
    x: 0,
    y: 35,
  },
];

export default function PolaroidStack() {
  const [activePhoto, setActivePhoto] = useState(null);
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative w-full max-w-sm h-[420px] mx-auto">
      {photos.map((photo, index) => {
        const isActive = activePhoto === index;

        return (
          <motion.button
            key={photo.src}
            type="button"
            aria-label={`View ${photo.caption}`}
            aria-pressed={isActive}
            onHoverStart={() => setActivePhoto(index)}
            onHoverEnd={() => setActivePhoto(null)}
            onFocus={() => setActivePhoto(index)}
            onBlur={() => setActivePhoto(null)}
            onClick={() =>
              setActivePhoto(isActive ? null : index)
            }
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: photo.y + 35 }
            }
            animate={{
              opacity: 1,
              x: photo.x,
              y: photo.y,
              rotate: isActive ? 0 : photo.rotation,
              scale: isActive ? 1.12 : 1,
              zIndex: isActive ? 20 : index + 1,
            }}
            transition={{
              type: "spring",
              stiffness: reduceMotion ? 500 : 180,
              damping: reduceMotion ? 50 : 18,
              delay: reduceMotion ? 0 : index * 0.12,
            }}
            className="absolute left-1/2 top-1/2 -ml-[90px] -mt-[120px] w-[180px] bg-white p-3 pb-6 shadow-xl rounded-sm cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500"
            style={{ transformOrigin: "center center" }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              draggable="false"
              className="w-full h-[180px] object-cover pointer-events-none"
            />

            <span className="block mt-3 text-center font-reenie text-2xl text-gray-800">
              {photo.caption}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
