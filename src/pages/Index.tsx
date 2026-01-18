import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FoundersSection from '@/components/FoundersSection';
import ProjectsSection from '@/components/ProjectsSection';
import GlowSeparator from '@/components/GlowSeparator';
import Footer from '@/components/Footer';

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
      <Navbar />
      <main className="relative z-10 w-full overflow-hidden">
        {/* Background Logo Watermark */}
        <div
          className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.3] bg-no-repeat bg-center bg-cover transition-transform duration-75 ease-linear will-change-transform"
          style={{ backgroundImage: 'url("/favicon.png")', transform: `scale(1.5) rotate(${rotation}deg)` }}
        />
        <HeroSection />
        <GlowSeparator />
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
