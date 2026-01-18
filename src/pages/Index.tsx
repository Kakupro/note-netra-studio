import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FoundersSection from '@/components/FoundersSection';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-background">
      <Navbar />
      <div className="flex h-full w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth">
        <section className="min-w-[100vw] h-full snap-center overflow-y-auto">
          <HeroSection />
        </section>
        <section className="min-w-[100vw] h-full snap-center overflow-y-auto">
          <AboutSection />
        </section>
        <section className="min-w-[100vw] h-full snap-center overflow-y-auto">
          <FoundersSection />
        </section>
        <section className="min-w-[100vw] h-full snap-center overflow-y-auto">
          <ProjectsSection />
        </section>
        <section className="min-w-[100vw] h-full snap-center overflow-y-auto">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Index;
