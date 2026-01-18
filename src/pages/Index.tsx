import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FoundersSection from '@/components/FoundersSection';
import ProjectsSection from '@/components/ProjectsSection';
import GlowSeparator from '@/components/GlowSeparator';
import Footer from '@/components/Footer';

import AmbientBackground from '@/components/AmbientBackground';

import ScrollIndicator from '@/components/ScrollIndicator';

const Index = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setRotation(scrolled * 0.15);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <AmbientBackground />
      <Navbar />
      <main className="relative z-10 w-full overflow-hidden">
        <HeroSection />
        <AboutSection />
        <GlowSeparator />
        <FoundersSection />
        <GlowSeparator />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
