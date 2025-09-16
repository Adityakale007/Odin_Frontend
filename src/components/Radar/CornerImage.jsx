import React from "react";

export default function CornerImage({ src, alt, position, size = 400, translate = { x: 0, y: 0 }, shadow, isFixed = false, interactive = false }) {
  const positionOnlyClasses =
    position === "bottom-left"
      ? "bottom-0 left-0"
      : position === "top-right"
      ? "top-0 right-0"
      : "";

  return (
    <div
      className={`${isFixed ? "fixed" : "absolute"} ${positionOnlyClasses} rounded-full ${shadow ? shadow : ""} ${interactive ? "" : "pointer-events-none select-none"}`}
      style={{
        width: `clamp(150px, ${Math.round(size * 0.6)}px, ${size}px)`,
        height: `clamp(150px, ${Math.round(size * 0.6)}px, ${size}px)`,
        transform: `translate(${translate.x}px, ${translate.y}px)`,
        overflow: "visible",
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain rounded-full"
      />
    </div>
  );
}
