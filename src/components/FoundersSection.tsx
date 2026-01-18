const founders = [
  {
    name: 'Chaitanya Sethi',
    role: 'Co-founder',
    focus: 'Engineering & Product',
    initial: 'CS',
    skills: ['System Design', 'AI Architecture', 'Product'],
    bio: 'Architecting the core processing engine and defining the product roadmap.',
  },
  {
    name: 'Anmol Garg',
    role: 'Co-founder',
    focus: 'Technology & Systems',
    initial: 'AG',
    image: '/anmol_garg.png',
    imagePosition: '50% 20%',
    skills: ['Cloud Infra', 'Security', 'Scalability'],
    bio: 'Designing robust, scalable systems enabling enterprise-grade reliability.',
  },
  {
    name: 'Tanishq Dagar',
    role: 'Co-founder',
    focus: 'Strategy & Operations',
    initial: 'TD',
    image: '/tanishq_dagar.png',
    skills: ['Strategy', 'Operations', 'Growth'],
    bio: 'Leading go-to-market strategy and driving operational excellence.',
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
                className="card-3d surface-elevated glow-subtle rounded-xl p-8 text-center group h-full relative overflow-hidden"
              >
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#0A0A0A]/95 backdrop-blur-[2px] p-6 flex flex-col justify-center items-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out translate-y-4 group-hover:translate-y-0 z-10">
                  <div className="text-left w-full space-y-4">
                    <div>
                      <p className="text-[10px] font-mono text-primary mb-1 uppercase tracking-widest">Focus</p>
                      <p className="text-sm text-foreground font-medium">{founder.focus}</p>
                    </div>

                    <div>
                      <p className="text-[10px] font-mono text-primary mb-1 uppercase tracking-widest">Contribution</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{founder.bio}</p>
                    </div>

                    <div>
                      <p className="text-[10px] font-mono text-primary mb-2 uppercase tracking-widest">Skills</p>
                      <div className="flex flex-wrap gap-1.5">
                        {founder.skills.map(skill => (
                          <span key={skill} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/80 border border-white/10">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Avatar placeholder or Image */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center border border-border group-hover:border-primary/30 transition-colors duration-300 overflow-hidden relative">
                  {founder.image ? (
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: founder.imagePosition || 'center' }}
                    />
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
