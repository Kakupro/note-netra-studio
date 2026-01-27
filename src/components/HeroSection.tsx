import RevealOnScroll from "./RevealOnScroll";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background: Dark grid with subtle warm ambient highlights */}
      <div className="absolute inset-0 bg-[#050505]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(#C0B8A0 1px, transparent 1px),
              linear-gradient(90deg, #C0B8A0 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Warm ambient glow */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C0B8A0]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#E6DECF]/5 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="container-main relative z-10 pt-20 flex flex-col items-center">

        {/* 1. Eyebrow */}
        <RevealOnScroll delay={100}>
          <div className="mb-6 flex items-center gap-3 opacity-90 select-none">
            <div className="h-px w-8 bg-[#C0B8A0]/40"></div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C0B8A0] font-medium">
              Building the future, methodically
            </span>
            <div className="h-px w-8 bg-[#C0B8A0]/40"></div>
          </div>
        </RevealOnScroll>

        {/* 2. Headline: Two Beats */}
        <RevealOnScroll delay={300}>
          <div className="text-center mb-16 select-none">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-[#EEE8DD] mb-2">
              We don’t just build technology.
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-[#E6DECF]/60">
              We engineer systems that solve real problems.
            </h1>
          </div>
        </RevealOnScroll>

        {/* 3D Concept Node Graphic */}
        <RevealOnScroll delay={500} className="w-full flex justify-center mb-16 select-none">
          <div className="relative flex flex-col items-center w-full max-w-lg">

            {/* Center Node */}
            <div className="z-10 bg-[#0A0A0A] border border-[#C0B8A0]/20 px-6 py-2.5 rounded-full text-[#EEE8DD] text-sm font-medium tracking-wide shadow-[0_0_15px_rgba(238,232,221,0.05)]">
              We Engineer
            </div>

            {/* Thread Structure */}
            <div className="relative w-full mt-[-1px] flex flex-col items-center">
              {/* Vertical stem from center */}
              <div className="h-8 w-px bg-gradient-to-b from-[#C0B8A0]/20 to-[#C0B8A0]/10"></div>

              {/* Horizontal Connector */}
              <div className="w-[80%] max-w-sm h-px bg-gradient-to-r from-transparent via-[#C0B8A0]/20 to-transparent relative">
                {/* Vertical droppers */}
                <div className="absolute left-0 top-0 h-6 w-px bg-[#C0B8A0]/10"></div>
                <div className="absolute right-0 top-0 h-6 w-px bg-[#C0B8A0]/10"></div>
                <div className="absolute left-1/2 -translate-x-1/2 top-0 h-6 w-px bg-[#C0B8A0]/10"></div>
              </div>
            </div>

            {/* Values Row */}
            <div className="flex justify-between w-[90%] max-w-[400px] mt-6 gap-2">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-[#E6DECF]/70 text-center w-1/3 border-b border-[#C0B8A0]/10 pb-2">
                Freelancing
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-[#E6DECF]/70 text-center w-1/3 border-b border-[#C0B8A0]/10 pb-2">
                3D Web
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-[#E6DECF]/70 text-center w-1/3 border-b border-[#C0B8A0]/10 pb-2">
                Scalable Systems
              </span>
            </div>

          </div>
        </RevealOnScroll>

        {/* 4. CTAs */}
        <RevealOnScroll delay={700}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#projects"
              className="px-8 py-3.5 bg-[#EEE8DD] text-[#0A0A0A] rounded-lg font-medium text-sm hover:bg-[#E6DECF] transition-colors duration-300 shadow-[0_0_20px_rgba(238,232,221,0.1)]"
            >
              View our work
            </a>
            <a
              href="#about"
              className="px-8 py-3.5 border border-[#C0B8A0]/30 text-[#E6DECF] rounded-lg font-medium text-sm hover:bg-[#white]/5 hover:border-[#C0B8A0]/50 transition-all duration-300 backdrop-blur-sm"
            >
              Learn more
            </a>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
};

export default HeroSection;
