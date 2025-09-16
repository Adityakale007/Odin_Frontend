import React from "react";
import { motion } from "framer-motion";
import moon from "../../assets/moon.png";
import earth from "../../assets/earth.png";

export default function RocketToMoon({
  earthImg = "https://www.nasa.gov/wp-content/uploads/2023/06/earth.jpg",
  moonImg = "https://www.nasa.gov/wp-content/uploads/2023/07/moon.jpg",
  rocketImg = "https://upload.wikimedia.org/wikipedia/commons/4/47/SpaceX_Falcon_9.jpg",
  duration = 6, // seconds for one-way
}) {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      {/* Earth */}
      <div
        className="absolute left-12 bottom-[35rem] w-[85rem] h-[85rem] rounded-full overflow-hidden
                   shadow-[0_0_40px_15px_rgba(0,150,255,0.9)] z-10"
      >
        <img
          src={earth}
          alt="Earth"
          className="w-full h-full object-cover"
          style={{
            filter: "brightness(1.2) contrast(1.1) drop-shadow(0 0 20px rgba(0, 150, 255, 0.8))",
          }}
        />
      </div>

      {/* Moon
      <div
        className="absolute right-24 top-32 w-48 h-48 rounded-full overflow-hidden
                   shadow-[0_0_30px_12px_rgba(255,255,200,0.9)] z-10"
      >
        <img
          src={moonImg}
          alt="Moon"
          className="w-full h-full object-cover"
          style={{
            filter: "brightness(1.1) contrast(1.2) drop-shadow(0 0 15px rgba(255, 255, 200, 0.8))",
          }}
        />
      </div> */}

      {/* Rocket
      <motion.img
        src={rocketImg}
        alt="Rocket"
        className="absolute w-20 h-20"
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, 520, 0], // Earth → Moon → Earth
          y: [0, -250, 0], // slight vertical curve
        }}
        transition={{
          duration: duration * 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    */}
    </div> 
  );
}
