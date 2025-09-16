import React from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

const HomeButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    gsap.to("body", {
      duration: 0.6,
      opacity: 0,
      onComplete: () => {
        navigate("/"); // ✅ Go back to home route
        gsap.fromTo("body", { opacity: 0 }, { duration: 0.6, opacity: 1 });
      },
    });
  };

  return (
    <button
      className="w-40 py-2  bg-black/80 hover:bg-gray-900 text-white font-bold rounded-lg shadow-lg hover:shadow-xl border-2 border-dotted border-white transition duration-300 ease-in-out"
      onClick={handleClick}
    >
      Back
    </button>
  );
};

export default HomeButton;
