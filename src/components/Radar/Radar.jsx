import React from 'react';
import Bg from './Bg';
import TargetCursor from './TargetCursor';

const Radar = () => {
  return (
    <main className="flex justify-center gap-4 flex-col min-h-screen">
      <Bg />
      <TargetCursor 
        targetSelector="button"
        spinDuration={2}
        hideDefaultCursor={true}
      />
    </main>
  );
};

export default Radar;
