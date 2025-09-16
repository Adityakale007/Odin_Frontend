import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Insert this inside your RadarBackground file, above the main function
export default function AnimatedArrows({ coordinates }) {
  const [activeSegment, setActiveSegment] = useState(0);

  useEffect(() => {
    if (coordinates && activeSegment < coordinates.length - 1) {
      const timer = setTimeout(() => setActiveSegment(s => s + 1), 600); // adjust speed for animation
      return () => clearTimeout(timer);
    }
  }, [activeSegment, coordinates]);

  if (!coordinates || coordinates.length < 2) return null;

  const start = coordinates[activeSegment];
  const end = coordinates[activeSegment + 1];
  const angle = Math.atan2(end.y - start.y, end.x - start.x) * (180 / Math.PI);

  return (
    <svg style={{ position: "absolute", zIndex: 5, width: "100%", height: "100%", pointerEvents: "none" }}>
      {/* Draw completed segments */}
      {coordinates.slice(0, activeSegment + 1).map((coord, idx) => {
        if (idx === coordinates.length - 1 || idx >= activeSegment) return null;
        const c2 = coordinates[idx + 1];
        return (
          <line
            key={idx}
            x1={coord.x}
            y1={coord.y}
            x2={c2.x}
            y2={c2.y}
            stroke="red"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
        );
      })}
      {/* Animate moving arrowhead */}
      <motion.g
        initial={{ x: start.x, y: start.y, rotate: angle }}
        animate={{ x: end.x, y: end.y, rotate: angle }}
        transition={{ duration: 0.6 }}
      >
        <polygon points="0,-6 14,0 0,6" fill="red" />
      </motion.g>
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="red" />
        </marker>
      </defs>
    </svg>
  );
}
