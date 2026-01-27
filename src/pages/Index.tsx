import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FoundersSection from '@/components/FoundersSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import GlowSeparator from '@/components/GlowSeparator';
import Footer from '@/components/Footer';
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
    <div className="min-h-screen bg-transparent">
      {/* AmbientBackground and Character are now global in App.tsx */}
      <Navbar />
      <main className="relative z-10 w-full overflow-hidden">
        <HeroSection />
        <AboutSection />
        <FoundersSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
