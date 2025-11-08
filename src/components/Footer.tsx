import { Music, Mail, Phone, MapPin, Instagram, Youtube, Twitter } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-card border-t border-border/30 py-16 px-4 overflow-hidden">
      {/* Gradient overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Music className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                EchoSpace
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Where Artists Create Their Echo. Premium music studios and equipment for rent by the hour.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors p-2 hover:bg-secondary/10 rounded-full">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-full">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <button onClick={scrollToTop} className="text-muted-foreground hover:text-primary transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('studios')} className="text-muted-foreground hover:text-primary transition-colors text-left">
                Studios
              </button>
              <button onClick={() => scrollToSection('booking')} className="text-muted-foreground hover:text-primary transition-colors text-left">
                Booking
              </button>
              <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-primary transition-colors text-left">
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-lg">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@echospace.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>info@echospace.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>123 Music Avenue<br />Sound City, SC 12345</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-lg">Studio Hours</h4>
            <div className="flex flex-col gap-2 text-muted-foreground">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-foreground">9AM - 11PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-foreground">10AM - 12AM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-foreground">10AM - 10PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              &copy; 2025 EchoSpace Studios. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
