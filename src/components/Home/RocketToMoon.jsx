import React from "react";
import earth from "../../assets/earth.png";
import moon from "../../assets/moon.png";

export default function RocketToMoon() {
  return (
    <div className="relative w-full h-full overflow-visible pointer-events-none">
      {/* Earth */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-[25vh] w-[clamp(40rem,55vw,90rem)] h-[clamp(40rem,55vw,90rem)] rounded-full overflow-hidden
                   shadow-[0_0_40px_15px_rgba(0,150,255,0.9)] z-0"
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

      {/* Moon (half visible at the bottom) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-[-10vh] w-[clamp(40rem,55vw,90rem)] h-[clamp(40rem,55vw,90rem)] rounded-full overflow-hidden
                   shadow-[0_0_30px_12px_rgba(255,255,200,0.9)] z-0"
      >
        <img
          src={moon}
          alt="Moon"
          className="w-full h-full object-cover"
          style={{
            filter: "brightness(1.1) contrast(1.2) drop-shadow(0 0 15px rgba(255, 255, 200, 0.8))",
          }}
        />
      </div>

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
