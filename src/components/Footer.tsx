import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <a href="#" className="shine-animation font-bold text-xl tracking-tight">
            MFBT
          </a>
          <a
            href="https://github.com/move-fast-and-break-things"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
