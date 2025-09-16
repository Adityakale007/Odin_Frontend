import React from "react";

export default function StartButton({ onClick }) {
  return (
    <button 
      onClick={onClick}
      className="w-40 py-2  bg-black/80 hover:bg-gray-900 text-white font-bold rounded-lg shadow-lg hover:shadow-xl border-2 border-dotted border-white transition duration-300 ease-in-out"
    >
      Choose Best Path
    </button>
  );
}
