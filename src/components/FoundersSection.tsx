import { useState, useEffect, useRef } from 'react';
import RevealOnScroll from "./RevealOnScroll";

const founders = [
  {
    name: 'Chaitanya Sethi',
    role: 'Founder',
    focus: 'Engineering & Product',
    initial: 'CS',
    image: '/chaitanya_sethi_cleaned.png',
    skills: ['System Design', 'Backend', 'Product Eng'],
    bio: 'Leads product engineering and system design. Experienced in building scalable applications, core logic, and production-ready architectures. Focused on turning complex ideas into reliable products.',
  },
  {
    name: 'Anmol Garg',
    role: 'Co-founder',
    focus: 'Technology & Systems',
    initial: 'AG',
    image: '/anmol_garg.png',
    imagePosition: '50% 20%',
    skills: ['Architecture', 'Scalability', 'Automation'],
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
  {
    name: 'Tanush Yadav',
    role: 'Co-founder',
    focus: 'Strategy & Operations',
    initial: 'TY',
    image: '',
    skills: ['Strategy', 'Applied AI', 'R&D'],
    bio: 'Drives strategy, execution, and applied innovation. Focused on operational efficiency, strategic partnerships, and scaling institutional solutions.',
  },
];

const FounderCard = ({ founder, index }: { founder: typeof founders[0], index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle click outside for mobile to unflip
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsFlipped(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="perspective-1000 h-[420px] cursor-pointer group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`w-full h-full relative transition-transform duration-700 ease-in-out transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front Face: Profile */}
        <div className="absolute inset-0 backface-hidden card-3d surface-elevated glow-subtle rounded-xl p-8 flex flex-col justify-center items-center text-center border-border">
          {/* Avatar / Image */}
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center border border-border group-hover:border-primary/50 transition-colors duration-300 overflow-hidden shadow-lg">
            {founder.image ? (
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover"
                style={{ objectPosition: founder.imagePosition || 'center' }}
              />
            ) : (
              <span className="font-mono text-2xl font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                {founder.initial}
              </span>
            )}
          </div>

          <h3 className="font-semibold text-xl text-foreground mb-2">
            {founder.name}
          </h3>
          <p className="text-sm font-medium text-primary mb-4 tracking-wide">{founder.role}</p>
          <div className="h-px w-8 bg-border mb-4" />
          <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider opacity-80">
            {founder.focus}
          </p>
        </div>

        {/* Back Face: Info */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 surface-elevated rounded-xl p-8 flex flex-col justify-between border border-primary/20 bg-[#0A0A0A] shadow-depth">

          {/* Top: Focus */}
          <div className="shrink-0">
            <p className="text-[10px] font-mono text-primary mb-2 uppercase tracking-widest border-b border-white/5 pb-1 inline-block">Focus Area</p>
            <p className="text-sm text-foreground font-medium">{founder.focus}</p>
          </div>

          {/* Middle: Contribution */}
          <div className="flex-grow flex flex-col justify-center py-4">
            <p className="text-[10px] font-mono text-primary mb-2 uppercase tracking-widest border-b border-white/5 pb-1 inline-block">Contribution</p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{founder.bio}</p>
          </div>

          {/* Bottom: Skills */}
          <div className="shrink-0">
            <p className="text-[10px] font-mono text-primary mb-2 uppercase tracking-widest border-b border-white/5 pb-1 inline-block">Core Stack</p>
            <div className="flex flex-wrap gap-2">
              {founder.skills.map(skill => (
                <span key={skill} className="text-[10px] px-2.5 py-1 rounded-md bg-white/5 text-white/90 border border-white/10 shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
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
              Four founders with a shared obsession: building things that
              actually work.
            </p>
          </RevealOnScroll>
        </div>

        {/* Founders grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
