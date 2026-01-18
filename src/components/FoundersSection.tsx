import { useState, useEffect } from 'react';
import RevealOnScroll from "./RevealOnScroll";

const founders = [
  {
    name: 'Chaitanya Sethi',
    role: 'Co-founder',
    focus: 'Engineering & Product',
    initial: 'CS',
    skills: ['System Design', 'Scalability', 'Product Eng'],
    bio: 'Leads product engineering and system design. Experienced in building scalable applications, core logic, and production-ready architectures. Focused on turning complex ideas into reliable products.',
  },
  {
    name: 'Anmol Garg',
    role: 'Co-founder',
    focus: 'Technology & Systems',
    initial: 'AG',
    image: '/anmol_garg.png',
    imagePosition: '50% 20%',
    skills: ['Architecture', 'Backend', 'Automation'],
    bio: 'Specializes in system architecture, backend engineering, and automation. Works on infrastructure, integrations, and performance-critical systems. Focused on building reliable systems that scale in production.',
  },
  {
    name: 'Tanishq Dagar',
    role: 'Co-founder',
    focus: 'Strategy & Operations',
    initial: 'TD',
    image: '/tanishq_dagar.png',
    skills: ['Strategy', 'Applied AI', 'R&D'],
    bio: 'Drives strategy, execution, and applied innovation. Led projects including vape detection systems, piezoelectric energy research, and applied AI tools. Focused on solving real institutional and operational problems.',
  },
];

const FounderCard = ({ founder, index }: { founder: typeof founders[0], index: number }) => {
  const [autoShow, setAutoShow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Stagger start: 100-150ms stagger
    const stagger = index * 150;
    let intervalId: NodeJS.Timeout;

    const startTimer = setTimeout(() => {
      // Toggle every 5000ms (5s display per state, 10s total cycle)
      intervalId = setInterval(() => {
        if (!isHovered && !isPaused) {
          setAutoShow((prev) => !prev);
        }
      }, 5000);
    }, 500 + stagger);

    return () => {
      clearTimeout(startTimer);
      if (intervalId) clearInterval(intervalId);
    };
  }, [index, isHovered, isPaused]);

  // Show info if hovered, paused (tapped), or auto-cycle is active
  const showInfo = isHovered || isPaused || autoShow;

  return (
    <div
      className="card-3d surface-elevated glow-subtle rounded-xl p-8 text-center group h-full relative overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        setIsPaused(true);
        // Resume after 5 seconds for mobile reading
        setTimeout(() => setIsPaused(false), 5000);
      }}
    >
      {/* Info Overlay (Slides in from Right) */}
      <div
        className={`absolute inset-0 bg-[#0A0A0A] px-4 py-6 flex flex-col justify-between z-20 text-left transition-all duration-[800ms] ease-in-out ${showInfo
            ? 'opacity-100 translate-x-0 visible'
            : 'opacity-0 translate-x-2 invisible'
          }`}
      >
        {/* Top: Focus */}
        <div className="shrink-0">
          <p className="text-[10px] font-mono text-primary mb-2 uppercase tracking-widest">Focus</p>
          <p className="text-sm text-foreground font-medium">{founder.focus}</p>
        </div>

        {/* Middle: Contribution */}
        <div className="flex-grow flex flex-col justify-center py-2">
          <p className="text-[10px] font-mono text-primary mb-2 uppercase tracking-widest">Contribution</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{founder.bio}</p>
        </div>

        {/* Bottom: Skills */}
        <div className="shrink-0">
          <p className="text-[10px] font-mono text-primary mb-2 uppercase tracking-widest">Skills</p>
          <div className="flex flex-wrap gap-1.5">
            {founder.skills.map(skill => (
              <span key={skill} className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-white/80 border border-white/10">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Content (Slides in from Left) */}
      <div
        className={`h-full flex flex-col justify-center transition-all duration-[800ms] ease-in-out ${showInfo
            ? 'opacity-0 -translate-x-2'
            : 'opacity-100 translate-x-0'
          }`}
      >
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
    </div>
  );
};

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
              <FounderCard founder={founder} index={index} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
