import React, { useEffect, useState } from "react";

// Base terminal outputs
const sampleOutputs = [
  "Scanning orbital trajectories...",
  "Calculating collision probabilities...",
  "Fetching date-specific data...",
  "Analyzing space debris density...",
  "Updating radar grid...",
  "Warning: High debris activity detected!",
  "Status: All systems nominal.",
  "Running predictive algorithms...",
  "Logging data for review...",
];

// Debris-related calculations
const debrisCalculations = [
  "Debris density at",
  "Satellite collision risk at",
  "Orbital debris velocity at",
  "Debris trajectory deviation at",
  "Impact probability at",
  "Radar scan result at",
  "Debris cluster count at",
  "Micro-debris particles at",
  "Debris orbit altitude at",
  "Debris fragmentation risk at",
  "Debris field expansion at",
  "Lunar orbit debris status at",
  "Debris monitoring node update at",
  "Satellite shield effectiveness at",
  "Debris area coverage at",
  "Space junk collision alert at",
  "Debris map calibration at",
  "Tracking new objects at",
  "Debris density trend at",
  "Orbital path deviation at",
  "Debris velocity vector at",
  "Debris mass distribution at",
  "Debris detection system health at",
  "Collision prediction update at",
  "High-risk debris alert at",
  "Debris tracking accuracy at",
  "Debris decay rate at",
  "Satellite debris avoidance at",
  "Orbital debris clustering at",
  "Debris orbital lifetime at",
  "Micro-debris tracking at",
  "Debris collision alert level at",
  "Debris cloud simulation at",
  "Space debris impact projection at",
  "Debris risk assessment at",
  "Debris mitigation status at",
  "Debris monitoring log at",
];

export default function Terminal({ running }) {
  const [lines, setLines] = useState([]);
  const [initDots, setInitDots] = useState(1);

  // Animate "Initializing..." dots
  useEffect(() => {
    const dotInterval = setInterval(() => {
      if (running) setInitDots((prev) => (prev % 3) + 1);
    }, 500);
    return () => clearInterval(dotInterval);
  }, [running]);

  // Add random lines when running
  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString();

      const nextLine =
        Math.random() > 0.5
          ? sampleOutputs[Math.floor(Math.random() * sampleOutputs.length)]
          : `${debrisCalculations[
              Math.floor(Math.random() * debrisCalculations.length)
            ]} ${timeString}: ${(
              Math.random() * 100
            ).toFixed(2)} ${Math.random() > 0.5 ? "particles/km²" : "km/s"}`;

      setLines((prev) => [...prev.slice(-12), nextLine]);
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div
      className="absolute bottom-6 right-6 w-96 h-64 bg-black/90 border border-white/30 rounded-lg p-4 text-green-400 font-mono text-xs overflow-hidden z-20"
      style={{
        boxShadow: `
          0 0 12px rgba(0, 255, 200, 0.2),   /* top glow */
          0 0 12px rgba(0, 255, 200, 0.4),   /* bottom glow */
          0 0 12px rgba(0, 255, 200, 0.2),   /* left glow */
          0 0 12px rgba(0, 255, 200, 0.4)    /* right glow */
        `
      }}
    >
      {/* Heading */}
      <div className="text-white font-bold mb-2">Decision Logs</div>

      {/* Animated initializing line */}
      <div className="mb-1">Initializing{".".repeat(initDots)}</div>

      {/* Terminal lines */}
      <div>
        {lines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>

      {/* Blinking cursor */}
      <div className="animate-pulse">_</div>
    </div>
  );
}
