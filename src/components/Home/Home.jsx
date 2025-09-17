import React from 'react';
import { useNavigate } from 'react-router-dom';
import Galaxy from './Galaxy';
import TextType from './TextType';
import ScrollFloat from './ScrollFloat';
import CardNav from './CardNav';
import RocketToMoon from './RocketToMoon';
import RocketToMoon2 from './RocketToMoon2';
import TargetCursor from '../Radar/TargetCursor';

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

      {/* RocketToMoon animation */}
      <div className="hidden lg:flex absolute inset-0 z-0 -top-[20rem] items-center justify-center pointer-events-none">
        <RocketToMoon
          earthImg="earth.png"
          moonImg="moon.png"
          rocketImg="rocket.png"
          duration={10}
        />
      </div>

      {/* Video section */}
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 -mt-10 md:-mt-20">
        <div
          className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl aspect-[16/9] rounded-lg overflow-hidden"
          style={{
            position: "relative",
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
            className="w-full h-full object-contain bg-black"
          >
            <source 
              src="https://res.cloudinary.com/dgmgjphac/video/upload/v1758101499/ODIN_pa7tdk.mov" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* RocketToMoon2 */}
      {/* <div className="hidden xl:block absolute z-0 w-[20rem] h-[20rem] 2xl:w-[30rem] 2xl:h-[30rem] bottom-[30rem] right-[10rem] 2xl:bottom-[58rem] 2xl:right-[55rem]">
        <RocketToMoon2
          earthImg="earth.png"
          moonImg="moon.png"
          rocketImg="rocket.png"
          duration={10}
        />
      </div> */}

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
