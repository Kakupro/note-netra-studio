import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2">
            <span className="font-semibold text-lg tracking-tight text-foreground">
              Kenet
            </span>
            <span className="text-primary font-mono text-sm">Technologies</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#founders"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Team
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Projects
            </a>
          </div>

          <a
            href="#contact"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
