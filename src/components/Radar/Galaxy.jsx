import React, { useEffect, useRef } from "react";

const Galaxy = ({
  mouseRepulsion = false,
  mouseInteraction = false,
  density = 1.5,
  glowIntensity = 0.5,
  saturation = 0.8,
  hueShift = 140,
  transparent = true,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to full viewport
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create stars
    const stars = [];
    const numStars = Math.floor(((canvas.width * canvas.height) / 10000) * density);

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        color: `hsl(${hueShift + Math.random() * 60}, ${saturation * 100}%, ${
          70 + Math.random() * 30
        }%)`,
      });
    }

    let animationId;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!transparent) {
        ctx.fillStyle = "rgba(0, 0, 0, 1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      time += 0.01;

      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed) * 0.3 + 0.7;
        const currentOpacity = star.opacity * twinkle;

        ctx.save();
        ctx.globalAlpha = currentOpacity;

        if (glowIntensity > 0) {
          ctx.shadowColor = star.color;
          ctx.shadowBlur = star.size * glowIntensity * 10;
        }

        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [mouseRepulsion, mouseInteraction, density, glowIntensity, saturation, hueShift, transparent]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{
        display: "block",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default Galaxy;
