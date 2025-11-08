export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border/30 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent mb-2">
              EchoSpace Studios
            </h3>
            <p className="text-muted-foreground text-sm">Where Artists Create Their Echo</p>
          </div>

          <nav className="flex gap-8">
            <button onClick={scrollToTop} className="text-muted-foreground hover:text-neon-cyan transition-colors">
              Home
            </button>
            <button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-neon-magenta transition-colors"
            >
              Book
            </button>
            <a href="#" className="text-muted-foreground hover:text-neon-yellow transition-colors">
              About
            </a>
            <a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors">
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border/20 text-center text-muted-foreground text-sm">
          <p>&copy; 2025 EchoSpace Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
