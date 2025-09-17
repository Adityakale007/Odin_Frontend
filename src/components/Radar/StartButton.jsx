import React from "react";

export default function StartButton({ onClick }) {
  return (
    <button 
      onClick={onClick}
      className="w-[clamp(160px,60vw,220px)] py-2 sm:py-2.5 px-3 bg-black/80 hover:bg-gray-900 text-white font-bold text-sm sm:text-base rounded-lg shadow-lg hover:shadow-xl border-2 border-dotted border-white transition duration-300 ease-in-out"
    >
      Choose Best Path
    </button>
  );
}
