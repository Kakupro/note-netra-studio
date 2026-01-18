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
    title: 'Infrastructure Toolkit',
    description:
      'Developer tools for monitoring, deployment, and infrastructure management. CLI-first, batteries included.',
    tags: ['DevOps', 'CLI', 'Monitoring'],
    status: 'Internal',
  },
];

const statusColors: Record<string, string> = {
  Production: 'bg-primary/20 text-primary',
  Beta: 'bg-accent/20 text-accent',
  Development: 'bg-muted text-muted-foreground',
  Internal: 'bg-secondary text-secondary-foreground',
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-main">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
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
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-3d surface-elevated glow-subtle rounded-xl p-8 lg:p-10 group cursor-pointer"
            >
              {/* Header */}
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

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
