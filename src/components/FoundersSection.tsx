const founders = [
  {
    name: 'Chaitanya Sethi',
    role: 'Co-founder',
    focus: 'Engineering & Product',
    initial: 'CS',
  },
  {
    name: 'Anmol Garg',
    role: 'Co-founder',
    focus: 'Technology & Systems',
    initial: 'AG',
    image: '/anmol_garg.png',
  },
  {
    name: 'Tanishq Dagar',
    role: 'Co-founder',
    focus: 'Strategy & Operations',
    initial: 'TD',
    image: '/tanishq_dagar.png',
  },
];

import RevealOnScroll from "./RevealOnScroll";

const FoundersSection = () => {
  return (
    <section id="founders" className="section-padding bg-muted/30">
      <div className="container-main">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <RevealOnScroll>
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
          </RevealOnScroll>
        </div>

        {/* Founders grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {founders.map((founder, index) => (
            <RevealOnScroll key={founder.name} delay={index * 100} className="h-full">
              <div
                className="card-3d surface-elevated glow-subtle rounded-xl p-8 text-center group h-full"
              >
                {/* Avatar placeholder or Image */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center border border-border group-hover:border-primary/30 transition-colors duration-300 overflow-hidden relative">
                  {founder.image ? (
                    <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-mono text-xl font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      {founder.initial}
                    </span>
                  )}
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
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
