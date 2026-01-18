const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-main">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <div className="accent-line mb-6" />
          <span className="text-label mb-4 block">About us</span>
          <h2 className="heading-section mb-6">
            Two companies.
            <br />
            One mission.
          </h2>
          <p className="text-body">
            We believe in building technology that solves real problems, not
            chasing trends.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Kenet Technologies Card */}
          <div className="card-3d surface-elevated glow-subtle rounded-xl p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-mono font-bold text-lg">K</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Kenet Technologies</h3>
                <span className="text-xs text-muted-foreground">Parent Company</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Kenet Technologies is our core entity, focused on building
              intelligent systems, automation platforms, and developer tools.
              We take on complex engineering challenges and turn them into
              reliable, production-ready solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Systems', 'Automation', 'AI/ML', 'Infrastructure'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono text-muted-foreground bg-muted rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Note Netra Card */}
          <div className="card-3d surface-elevated glow-subtle rounded-xl p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <span className="text-accent font-mono font-bold text-lg">N</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Note Netra</h3>
                <span className="text-xs text-muted-foreground">Subsidiary</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Note Netra is our specialized venture in intelligent document
              processing and note-taking solutions. It leverages AI to transform
              how people capture, organize, and retrieve information.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Documents', 'Notes', 'AI Processing', 'Search'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono text-muted-foreground bg-muted rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Relationship diagram */}
        <div className="mt-16 flex items-center justify-center">
          <div className="flex items-center gap-4 text-muted-foreground text-sm">
            <span className="font-mono">Kenet</span>
            <div className="w-16 h-px bg-border relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-border rotate-45" />
            </div>
            <span className="text-xs text-muted-foreground">owns</span>
            <div className="w-16 h-px bg-border relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-border rotate-45" />
            </div>
            <span className="font-mono">Note Netra</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
