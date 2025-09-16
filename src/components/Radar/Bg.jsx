import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DateChooser from "./DateChooser";
import CornerImage from "./CornerImage";
import moon from "../../assets/moon.png";
import earth from "../../assets/earth.png";
import Terminal from "./Terminal";
import StartButton from "./StartButton";
import HomeButton from "./HomeButton";
import Galaxy from "./Galaxy";

export default function RadarBackground() {
  const [terminalRunning, setTerminalRunning] = useState(false);
  const [trajectory, setTrajectory] = useState(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const pathRef = useRef(null);
  const navigate = useNavigate();

  // Fetch trajectory and start animation when button is clicked
  const fetchTrajectoryAndStart = async () => {
    try {
      const res = await fetch(
        "https://odin-backend-r6d7.onrender.com/api/plan_trajectory",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            start: "Earth",
            end: "Moon",
          }),
        }
      );

      if (!res.ok) throw new Error("Failed to fetch trajectory");

      const data = await res.json();
      if (data?.decision?.chosen_trajectory?.path_coordinates) {
        setTrajectory(data.decision);
        setTerminalRunning(true);
        setStartAnimation(true);

        // Initialize animation position
        const coords = data.decision.chosen_trajectory.path_coordinates;
        const minX = Math.min(...coords.map((c) => c.x));
        const maxX = Math.max(...coords.map((c) => c.x));
        const minY = Math.min(...coords.map((c) => c.y));
        const maxY = Math.max(...coords.map((c) => c.y));

        const mapPoint = (p) => ({
          x: ((p.x - minX) / (maxX - minX)) * 100,
          y: 100 - ((p.y - minY) / (maxY - minY)) * 100,
        });

        const points = coords.map(mapPoint);

        // Start at Moon (opposite direction)
        setPosition(points[points.length - 1]);

        // Animate the red dot in reverse
        const duration = 12000; // 12 seconds
        const totalPoints = points.length;
        let startTime = null;

        function animate(time) {
          if (!startTime) startTime = time;
          const elapsed = time - startTime;
          const progress = (elapsed % duration) / duration; // loop
          // Reverse direction: from last point to first
          const index = totalPoints - 1 - Math.floor(progress * totalPoints);

          if (points[index]) setPosition(points[index]);
          requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);
      } else {
        console.warn("No trajectory found in response", data);
      }
    } catch (err) {
      console.error("Error fetching trajectory:", err);
    }
  };

  // Radar grid lines
  const horizontalLines = Array.from({ length: 15 }, (_, i) => {
    const y = i * (100 / 14);
    return (
      <path
        key={`h-${i}`}
        d={`M0,${y} Q50,${y - 15} 100,${y}`}
        stroke="rgba(255,255,255,0.25)"
        fill="none"
        strokeWidth="0.15"
      />
    );
  });

  const verticalLines = Array.from({ length: 15 }, (_, i) => {
    const x = i * (100 / 14);
    return (
      <path
        key={`v-${i}`}
        d={`M${x},0 Q${x - 15},50 ${x},100`}
        stroke="rgba(255,255,255,0.25)"
        fill="none"
        strokeWidth="0.15"
      />
    );
  });

  // Map trajectory to SVG path
  let trajectoryPath = null;
  if (trajectory) {
    const coords = trajectory.chosen_trajectory.path_coordinates;
    const minX = Math.min(...coords.map((c) => c.x));
    const maxX = Math.max(...coords.map((c) => c.x));
    const minY = Math.min(...coords.map((c) => c.y));
    const maxY = Math.max(...coords.map((c) => c.y));

    const mapPoint = (p) => ({
      x: ((p.x - minX) / (maxX - minX)) * 100,
      y: 100 - ((p.y - minY) / (maxY - minY)) * 100,
    });

    const points = coords.map(mapPoint);
    const pathD = points
      .map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`))
      .join(" ");

    trajectoryPath = { pathD, points };
  }

  return (
    <div className="relative w-screen h-dvh md:h-screen bg-black overflow-hidden text-white">
      {/* Galaxy Background */}
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
        <Galaxy
          mouseRepulsion={false}
          mouseInteraction={false}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={140}
          transparent={true}
        />
      </div>

      {/* Radar Grid + Trajectory */}
      <svg
        className="absolute inset-0 w-full h-full z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <g transform="rotate(180 50 50)">
          {horizontalLines}
          {verticalLines}
          {trajectoryPath && (
            <>
              {/* Semi-transparent red path */}
              <path
                ref={pathRef}
                d={trajectoryPath.pathD}
                fill="none"
                stroke="rgba(255,0,0,0.4)"
                strokeWidth="0.6"
                strokeDasharray="3,3"
              />
              {/* Fully visible red circle */}
              {startAnimation && (
                <circle
                  r={1.5}
                  fill="red"
                  cx={position.x}
                  cy={position.y}
                />
              )}
            </>
          )}
        </g>
      </svg>

      {/* Earth + Moon */}
      <CornerImage
        src={earth}
        alt="Earth"
        position="bottom-left"
        size={520}
        translate={{ x: -120, y: 120 }}
        shadow="shadow-[0_0_50px_20px_rgba(0,150,255,0.45)]"
        isFixed={true}
      />
      <CornerImage
        src={moon}
        alt="Moon"
        position="top-right"
        size={350}
        translate={{ x: 60, y: -60 }}
        shadow="shadow-[0_0_40px_15px_rgba(255,255,200,0.45)]"
      />

      {/* Controls */}
      <div className="absolute top-2 left-4 sm:left-10 md:left-14 flex flex-col space-y-3 z-20">
        <HomeButton />
      </div>
      <div className="absolute top-10 left-4 sm:left-10 md:left-auto flex flex-col space-y-3 z-20">
        <DateChooser />
      </div>
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 right-4 sm:right-6 flex flex-col items-center space-y-1 z-20">
        <Terminal running={terminalRunning} />
      </div>
      <div className="absolute bottom-2 right-6 md:right-40 flex flex-col items-center space-y-1 z-20">
        <StartButton
          label="Choose Best Path"
          onClick={fetchTrajectoryAndStart}
        />
      </div>
    </div>
  );
}
