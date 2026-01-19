import { Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-main py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side */}
          <div>
            <div className="flex items-center mb-6">
              <span className="inline-flex items-baseline gap-1">
                <span className="font-bold text-[#EEE8DD] text-lg tracking-tight leading-none">Kenet</span>
                <span className="font-medium text-[#E6DECF] text-base tracking-tight leading-none">Technologies</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md mb-6">
              Building intelligent systems and automation tools that solve
              genuine challenges. Based in India, serving globally.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:hello@kenet.tech"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                hello@kenet.tech
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col md:items-end">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-2 lg:col-span-1">
                <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
                  Company
                </span>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#about"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#founders"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      Projects
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
                  Ventures
                </span>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://www.notenetra.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      Note Netra
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
                  Socials
                </span>
                <div className="flex gap-4">
                  <a
                    href="https://x.com/KenetTech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    aria-label="X (Twitter)"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/kenet-technologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider my-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Kenet Technologies. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
