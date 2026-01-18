const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border">
      <div className="container-main py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-semibold text-lg tracking-tight text-foreground">
                Kenet
              </span>
              <span className="text-primary font-mono text-sm">Technologies</span>
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
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
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
                    <span className="text-sm text-muted-foreground">
                      Note Netra
                    </span>
                  </li>
                </ul>
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
