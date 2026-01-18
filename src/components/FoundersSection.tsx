const founders = [
  {
    name: 'Tanishq Dagar',
    role: 'Co-founder',
    focus: 'Engineering & Product',
    initial: 'TD',
  },
  {
    name: 'Anmol Garg',
    role: 'Co-founder',
    focus: 'Technology & Systems',
    initial: 'AG',
  },
  {
    name: 'Chaitanya Sethi',
    role: 'Co-founder',
    focus: 'Strategy & Operations',
    initial: 'CS',
  },
];

const FoundersSection = () => {
  return (
    <section id="founders" className="section-padding bg-muted/30">
      <div className="container-main">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <div className="accent-line mb-6" />
          <span className="text-label mb-4 block">The team</span>
          <h2 className="heading-section mb-6">
            Built by engineers,
            <br />
            for engineers.
          </h2>
          <p className="text-body">
            Three founders with a shared obsession: building things that
            actually work.
          </p>
        </div>

        {/* Founders grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className="card-3d surface-elevated glow-subtle rounded-xl p-8 text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center border border-border group-hover:border-primary/30 transition-colors duration-300">
                <span className="font-mono text-xl font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {founder.initial}
                </span>
              </div>

              {/* Info */}
              <h3 className="font-semibold text-foreground mb-1">
                {founder.name}
              </h3>
              <p className="text-sm text-primary mb-3">{founder.role}</p>
              <p className="text-xs text-muted-foreground font-mono">
                {founder.focus}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
