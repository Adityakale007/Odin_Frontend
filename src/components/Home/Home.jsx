import React from 'react';
import { useNavigate } from 'react-router-dom';
import Galaxy from './Galaxy';
import TextType from './TextType';
import ScrollFloat from './ScrollFloat';
import CardNav from './CardNav';
import TargetCursor from '../Radar/TargetCursor';
import earthImg from '../../assets/earth.png';
import moonImg from '../../assets/moon.png';

// StartButton component for navigation
const StartButton = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className="w-32 xs:w-36 sm:w-40 md:w-44 lg:w-48 py-2 sm:py-3 text-sm xs:text-base sm:text-lg font-bold bg-black/80 hover:bg-gray-900 text-white rounded-lg shadow-lg hover:shadow-xl border-2 border-dotted border-white transition duration-300 ease-in-out"
  >
    {label}
  </button>
);

const Home = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [{ label: "Team", ariaLabel: "About Team" }]
    },
    {
      label: "Contribute",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [{ label: "GitHub", ariaLabel: "Contribute to Project" }]
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <div className='bg-black relative min-h-screen text-white'>
      {/* Galaxy background fixed */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">

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

      {/* Navigation */}
      <CardNav
        logo={undefined}
        logoAlt="ODIN"
        items={items}
        baseColor="black"
        menuColor="white"
        buttonBgColor="white"
        buttonTextColor="black"
        ease="power3.out"
      />

      {/* Hero section */}
      <section className='relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32'>
        <h1 className='text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-tight'>ODIN</h1>
        <h1 className='text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white leading-tight mt-2 sm:mt-4 px-2'>
          Optimal Dynamic Interplanetary Navigator
        </h1>
        <div className='mt-4 sm:mt-6 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-white px-2'>
          <TextType
            text={[
              'Hazard Aware Trajectory Planning',
              'Intelligent Decision Making',
              'Unmatched System Resilience',
              'Transparent & Human Centric'
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>

        {/* Predict Path button */}
        <div className="mt-6 sm:mt-8">
          <StartButton label="Predict Path" onClick={() => navigate('/radar')} />
        </div>
      </section>

      {/* ScrollFloat section */}
      <section className='relative z-10 min-h-screen flex px-4 sm:px-6 md:px-8 lg:px-12 mt-0 md:mt-[-2rem] lg:mt-[-4rem]'>
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='top 75%'
          scrollEnd='bottom 60%'
          stagger={0.3}
          containerClassName='mx-auto px-2 sm:px-4 md:px-6 lg:px-8 whitespace-normal'
          textClassName='text-white font-semibold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-relaxed'
        >
          ODIN is the ultimate AI co-pilot, dynamically planning and re-planning Earth-to-Moon trajectories in real-time. We're not just mapping a route; we're ensuring crew safety and mission success with every decision.
        </ScrollFloat>
      </section>

      {/* Planets overlay (fixed, clipped to viewport) */}
      <div className="block absolute inset-0 z-0 overflow-hidden pointer-events-none">
  <div className="absolute -top-[clamp(0vh,80vh,100vh)] left-1/2 -translate-x-1/2 w-full h-1/2 ">
    <img
      src={earthImg}
      alt="Earth"
      className="absolute top-0 left-1/2 -translate-x-1/2 
                 w-[clamp(32rem,90vw,190rem)] h-[clamp(32rem,90vw,190rem)] 
                 rounded-full object-cover shadow-[0_0_40px_15px_rgba(0,150,255,0.9)]"
    />
  </div>
</div>

     {/* Moon overlay (absolute, clipped to viewport) */}
            <div className="hidden md:block absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute -bottom-[clamp(100vh,120vh,100vh)] left-1/2 -translate-x-1/2 w-full h-1/2 ">
  <img
    src={moonImg}
    alt="Moon"
    className="absolute top-0 left-1/2 -translate-x-1/2 
                 w-[clamp(32rem,90vw,190rem)] h-[clamp(32rem,90vw,190rem)] 
                 rounded-full object-cover shadow-[0_0_30px_12px_rgba(255,255,200,0.9)]"
  />
</div>
            </div>

{/* Video section (higher z-index so it sits above moon) */}
<div className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 -mt-10 md:-mt-20 z-10">
  <div
    className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl rounded-lg overflow-hidden relative"
    style={{
      boxShadow: `
        0 0 12px rgba(0, 255, 200, 0.4),
        0 0 12px rgba(0, 255, 200, 0.6),
        0 0 12px rgba(0, 255, 200, 0.4),
        0 0 12px rgba(0, 255, 200, 0.6)
      `
    }}
  >
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover bg-black"
    >
      <source 
        src="https://res.cloudinary.com/dgmgjphac/video/upload/v1758104405/ODIN_video_r672wa.mp4" 
        type="video/mp4" 
      />
      Your browser does not support the video tag.
    </video>
  </div>
</div>



      {/* Custom cursor */}
      <TargetCursor
        targetSelector="button"
        spinDuration={2}
        hideDefaultCursor={true}
      />
    </div>
  );
};

export default Home;
