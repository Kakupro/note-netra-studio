import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FoundersSection from '@/components/FoundersSection';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="relative z-10 w-full overflow-hidden">
        {/* Background Logo Watermark */}
        <div
          className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.03] bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: 'url("/favicon.png")', transform: 'scale(0.8)' }}
        />
        <HeroSection />
        <AboutSection />
        <FoundersSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
