"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const Card = ({ image }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl bg-slate-400 flex justify-center items-center"
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 z-10 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full"></div>
            <motion.h1
              className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-2 ga-[0.5ch] hover:opacity-75"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-black">Explore Now</span>{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_707_6)">
                  <path
                    d="M10.0294 20.0589C15.5161 20.0589 20.0589 15.5063 20.0589 10.0294C20.0589 4.54274 15.5063 0 10.0196 0C4.54274 0 0 4.54274 0 10.0294C0 15.5063 4.55257 20.0589 10.0294 20.0589ZM13.2054 12.5466C12.7531 12.5466 12.4581 12.2319 12.4581 11.7501V10.0098L12.6056 8.42668L11.1406 9.9901L7.43357 13.7069C7.27624 13.8544 7.08943 13.9429 6.84361 13.9429C6.40113 13.9429 6.09632 13.6479 6.09632 13.1857C6.09632 12.9891 6.19464 12.7826 6.34214 12.6351L10.0688 8.91832L11.6519 7.44341L10.1474 7.60073H8.31852C7.82688 7.60073 7.51224 7.30575 7.51224 6.86327C7.51224 6.41097 7.81705 6.11598 8.29886 6.11598H13.0972C13.6184 6.11598 13.9527 6.35196 13.9527 6.95177V11.7305C13.9527 12.2024 13.6479 12.5466 13.2054 12.5466Z"
                    fill="black"
                    fill-opacity="0.85"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_707_6">
                    <rect width="19.9903" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      <Image
        src={image}
        alt={image}
        width={600}
        height={400}
        style={{ objectFit: "cover" }}
      />
    </motion.div>
  );
};

export default Card;
