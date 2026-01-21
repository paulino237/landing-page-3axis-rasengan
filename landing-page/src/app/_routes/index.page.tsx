import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HeroSection2 from '@/components/HeroSection2';

const Page = () => {
  const [showSecondHero, setShowSecondHero] = useState(false);

  return (
    <div className="app-container">
      <Navbar />
      {showSecondHero ? (
        <HeroSection2 onSwitch={() => setShowSecondHero(false)} />
      ) : (
        <HeroSection onSwitch={() => setShowSecondHero(true)} />
      )}
    </div>
  );
};

// Page metadata removed as it is Rasengan specific. Title is set in index.html.

export default Page;
