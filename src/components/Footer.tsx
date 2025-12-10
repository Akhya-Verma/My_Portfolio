import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#home" className="flex items-center gap-2">
              <span
                className="text-2xl leading-none"
                style={{ color: "hsl(var(--primary))" }}
                aria-hidden="true"
              >
                ❄
              </span>
              <span className="text-lg font-bold text-foreground">
                akhyaverma
              </span>
            </a>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Akhya Verma. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="#about"
              className="hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a href="#work" className="hover:text-foreground transition-colors">
              Work
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Akhya-Verma"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-muted-foreground"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/akhya-verma-6549072b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-muted-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://x.com/akhya0110"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-muted-foreground"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Made with love */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart size={14} className="text-primary fill-primary" />{" "}
            by Akhya Verma
          </p>
        </div>
      </div>
    </footer>
  );
};
