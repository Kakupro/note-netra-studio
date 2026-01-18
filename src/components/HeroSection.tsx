const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Subtle radial gradient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30"
        style={{
          background: `radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)`,
        }}
      />

      <div className="container-main relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <div
            className="inline-flex items-center gap-2 mb-8 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-label">Building the future, methodically</span>
          </div>

          {/* Main heading */}
          <h1
            className="heading-hero mb-6 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Technology that{' '}
            <span className="text-gradient-primary">works</span>
            <br />
            for real problems
          </h1>

          {/* Subtext */}
          <p
            className="text-body max-w-2xl mx-auto mb-12 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            We build intelligent systems and automation tools that solve genuine
            challenges. No hype. No buzzwords. Just engineering that delivers.
          </p>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-all duration-200 shadow-depth"
            >
              View our work
            </a>
            <a
              href="#about"
              className="px-8 py-3 border border-border text-foreground rounded-lg font-medium text-sm hover:bg-muted/50 transition-all duration-200"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up hidden md:block"
          style={{ animationDelay: '0.6s' }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
