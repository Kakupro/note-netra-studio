import RevealOnScroll from "./RevealOnScroll";

const AboutSection = () => {
  const tags = ["Documents", "Notes", "AI Processing", "Search"];

  return (
    <section id="about" className="section-padding">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Text Content */}
          <div className="order-2 md:order-1">
            <RevealOnScroll>
              <div className="accent-line mb-6" />
              <span className="text-label mb-4 block">About us</span>
              <h2 className="heading-section mb-6">
                Two companies.
                <br />
                One mission.
              </h2>
              <div className="space-y-6 text-body">
                <p>
                  At Note Netra, we believe that information overload is a design
                  problem, not a human one. Our mission is to create tools that
                  augment your memory, not replace it.
                </p>
                <p>
                  We are a subsidiary of{' '}
                  <span className="inline-flex items-baseline gap-1 mx-1.5 translate-y-[1.5px]">
                    <span className="font-bold text-[#EEE8DD] text-[1.1rem] tracking-tight leading-none">Kenet</span>
                    <span className="font-medium text-[#E6DECF] text-[1rem] tracking-tight leading-none">Technologies</span>
                  </span>
                  , carrying forward the legacy of robust engineering into the realm of intelligent information management.
                </p>
                <div className="mt-8 flex gap-4">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-foreground">3+</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                      Years R&D
                    </span>
                  </div>
                  <div className="w-px h-12 bg-border mx-4" />
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-foreground">10k+</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                      Users
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Compact Glass Card */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <RevealOnScroll delay={200}>
              <div className="relative group w-full max-w-[320px]">
                {/* Glossy sheen effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                <div className="rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(255,255,255,0.07)] p-6 hover:border-white/20 transition-all duration-300 transform group-hover:-translate-y-1">

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    {/* Logo N */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-black border border-white/20 shadow-inner flex items-center justify-center shrink-0">
                      <span className="font-sans font-bold text-lg text-white drop-shadow-md">N</span>
                    </div>

                    <div className="flex flex-col">
                      <h3 className="font-bold text-white text-lg tracking-tight leading-none mb-1">
                        Note Netra
                      </h3>
                      <span className="text-xs font-medium text-white/50 tracking-wider uppercase">
                        Subsidiary
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <p className="text-white/70 text-sm leading-relaxed mb-6 font-light">
                    AI-focused venture for intelligent document processing and note-taking.
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] font-medium text-white/80 bg-white/5 border border-white/10 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
