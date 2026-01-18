const projects = [
  {
    title: 'Intelligent Document Processing',
    description:
      'AI-powered pipeline that extracts, classifies, and routes documents automatically. Reduces manual processing time by 90%.',
    tags: ['AI/ML', 'OCR', 'Pipeline'],
    status: 'Production',
  },
  {
    title: 'Smart Automation Platform',
    description:
      'Workflow automation engine that connects disparate systems without code. Built for enterprise reliability.',
    tags: ['Automation', 'Integration', 'No-code'],
    status: 'Beta',
  },
  {
    title: 'Note Netra Core',
    description:
      'Advanced note-taking system with semantic search and AI-assisted organization. Your second brain, engineered.',
    tags: ['Notes', 'Search', 'AI'],
    status: 'Development',
  },
  {
    title: 'Piezo Electric Energy System',
    description:
      'A piezoelectric-based energy generation project focused on converting mechanical stress into usable electrical power. Designed for experimental applications.',
    tags: ['Embedded Systems', 'Energy Harvesting', 'Sensors'],
    status: 'Research / Prototype',
  },
  {
    title: 'Vape Detection & Alert System',
    description:
      'Real-time vape detection system implemented across college premises to detect aerosol emissions and trigger instant alerts for campus safety.',
    tags: ['IoT', 'Real-time Monitoring', 'Campus Safety'],
    status: 'Deployed',
  },
  {
    title: 'Infrastructure Toolkit',
    description:
      'Developer tools for monitoring, deployment, and infrastructure management. CLI-first, batteries included.',
    tags: ['DevOps', 'CLI', 'Monitoring'],
    status: 'Internal',
  },
];

const statusColors: Record<string, string> = {
  Production: 'bg-primary/20 text-primary',
  Deployed: 'bg-primary/20 text-primary',
  Beta: 'bg-accent/20 text-accent',
  Development: 'bg-muted text-muted-foreground',
  Internal: 'bg-secondary text-secondary-foreground',
  'Research / Prototype': 'bg-secondary text-secondary-foreground',
};

import RevealOnScroll from "./RevealOnScroll";

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-main">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <RevealOnScroll>
            <div className="accent-line mb-6" />
            <span className="text-label mb-4 block">Our work</span>
            <h2 className="heading-section mb-6">
              Projects that solve
              <br />
              real problems.
            </h2>
            <p className="text-body">
              We focus on building tools and systems that address genuine needs,
              not hypothetical ones.
            </p>
          </RevealOnScroll>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.title} delay={index * 100} className="h-full">
              <div
                className={`
                  relative h-full transition-all duration-500 group cursor-pointer overflow-hidden
                  ${project.title === 'Note Netra Core'
                    ? 'rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(255,255,255,0.07)] hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.15)] hover:border-white/20'
                    : 'card-3d surface-elevated glow-subtle rounded-xl p-8 lg:p-10'}
                `}
              >
                {project.title === 'Note Netra Core' ? (
                  // Glassmorphism Card Layout for Note Netra Core
                  <div className="p-8 lg:p-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      {/* Logo N */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center shrink-0">
                        <span className="font-sans font-bold text-xl text-white">N</span>
                      </div>

                      <div className="flex flex-col">
                        <h3 className="font-bold text-white text-2xl tracking-tight leading-none mb-1">
                          <a href="https://www.notenetra.in/" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="hover:text-primary transition-colors">
                            {project.title}
                          </a>
                        </h3>
                        <span className="text-sm font-light text-white/50 tracking-wide">
                          Subsidiary
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <p className="text-white/70 text-base leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 text-xs font-medium text-white/80 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Standard Card Layout for others
                  <div className="p-8 lg:p-10 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors duration-200">
                        {project.title}
                      </h3>
                      <span
                        className={`px-2 py-1 text-xs rounded-full font-mono ${statusColors[project.status]}`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-mono text-muted-foreground bg-muted rounded-full border border-transparent group-hover:border-border transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Arrow indicator */}
                    <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors duration-200">
                      <span>Learn more</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
