import RevealOnScroll from "./RevealOnScroll";

const AboutSection = () => {
  const tags = ["Documents", "Notes", "AI Processing", "Search"];

  return (
    <section id="about" className="section-padding flex items-center justify-center min-h-[60vh]">
      <div className="container-main max-w-4xl">
        <RevealOnScroll>
          <div className="relative group">
            {/* Glossy sheen effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

            <div className="rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(255,255,255,0.07)] p-8 md:p-12 lg:p-16 hover:border-white/20 transition-all duration-300">

              {/* Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
                {/* Logo N */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-white/20 to-black border border-white/20 shadow-inner flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <span className="font-sans font-bold text-3xl text-white drop-shadow-md">N</span>
                </div>

                <div className="flex flex-col">
                  <h2 className="font-bold text-white text-4xl md:text-5xl tracking-tight leading-none mb-2">
                    Note Netra
                  </h2>
                  <span className="text-sm md:text-base font-medium text-white/50 tracking-[0.2em] uppercase">
                    Subsidiary
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="space-y-6 text-white/80 text-lg md:text-xl leading-relaxed font-light">
                <p>
                  Note Netra is a pioneering subsidiary of <span className="font-semibold text-white">Kenet Technologies</span>, dedicated to revolutionizing AI-driven document processing.
                </p>
                <p>
                  We specialize in intelligent note-taking solutions that help users seamlessly capture, organize, and retrieve information, transforming unstructured data into actionable knowledge.
                </p>
              </div>

              {/* Footer / Tags */}
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-5 py-2 text-sm font-medium text-white/90 bg-white/5 border border-white/10 rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-sm backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default AboutSection;
