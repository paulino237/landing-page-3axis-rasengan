import React, { useState } from 'react';
import { PageComponent } from 'rasengan';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HeroSection2 from '@/components/HeroSection2';

const Page: PageComponent = () => {
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

Page.metadata = {
  title: 'TriAxis - Create Stunning 3D Experiences',
  description:
    'TriAxis simplifie la création d\'animations et visualisations 3D pour le web. Une surcouche légère de Three.js qui rend le 3D accessible à tous.',
};

export default Page;
