import RevealOnScroll from "./RevealOnScroll";

const AboutSection = () => {
  const tags = ["Documents", "Notes", "AI Processing", "Search"];

  return (
    <section id="about" className="section-padding select-none">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Text Content */}
          <div className="order-2 md:order-1">
            <RevealOnScroll>
              <div className="accent-line mb-6" />
              <span className="text-label mb-4 block">About us</span>
              <h2 className="heading-section mb-6 text-[#EEE8DD]">
                Engineering,
                <br />
                done deliberately.
              </h2>

              <div className="space-y-8 text-body text-sm sm:text-base">
                <p>
                  <span className="font-semibold text-[#EEE8DD]">Kenet Technologies</span> is a product-driven engineering company focused on building systems that work in the real world. We don’t chase trends or ship abstractions — we design, test, and deploy technology where reliability actually matters.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#C0B8A0]">How we work</h3>
                  <div className="space-y-2 pl-3 border-l-2 border-[#C0B8A0]/20">
                    <p className="font-medium text-foreground">Problems first. Technology second.</p>
                    <p className="font-medium text-foreground">Systems over features.</p>
                    <p className="font-medium text-foreground">Deployment over demos.</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Every product we ship is engineered to operate under real constraints — scale, cost, performance, and longevity.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#C0B8A0]">Our ventures</h3>
                  <p>
                    Kenet Technologies builds and operates focused ventures where deep engineering is required.
                  </p>
                  <p>
                    <span className="font-semibold text-[#EEE8DD]">Note Netra</span> is one such subsidiary — an AI-driven information system designed to reduce cognitive overload and improve how people work with complex information.
                  </p>
                </div>

                <div className="flex gap-8 border-t border-border/40 pt-6 mt-2">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-[#EEE8DD]">3+</span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">
                      Years Applied R&D
                    </span>
                  </div>
                  <div className="w-px h-10 bg-border/40" />
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-[#EEE8DD]">10k+</span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">
                      Users Deployed
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
