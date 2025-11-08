import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-studio.jpg';

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      );
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
      );
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 0.6, ease: 'back.out(1.7)' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-yellow bg-clip-text text-transparent"
        >
          EchoSpace Studios
        </h1>
        <p 
          ref={subtitleRef}
          className="text-2xl md:text-3xl text-foreground/90 mb-12 font-light tracking-wide"
        >
          Where Artists Create Their Echo
        </p>
        <div ref={ctaRef}>
          <Button 
            onClick={scrollToBooking}
            size="lg"
            className="bg-neon-cyan hover:bg-neon-cyan/80 text-primary-foreground font-semibold px-12 py-6 text-lg shadow-glow-cyan hover:shadow-glow-magenta transition-all duration-500"
          >
            Book a Studio
          </Button>
        </div>
      </div>

      {/* Animated sound wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-30">
        <svg viewBox="0 0 1200 100" className="w-full h-full">
          <path 
            d="M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50" 
            stroke="url(#gradient)" 
            strokeWidth="3" 
            fill="none"
            className="animate-pulse"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(189, 94%, 43%)" />
              <stop offset="50%" stopColor="hsl(330, 81%, 60%)" />
              <stop offset="100%" stopColor="hsl(43, 96%, 56%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};
