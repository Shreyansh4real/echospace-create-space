import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

interface StudioCardProps {
  name: string;
  image: string;
  rate: string;
  description: string;
  onBook: () => void;
}

export const StudioCard = ({ name, image, rate, description, onBook }: StudioCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <Card 
      ref={cardRef}
      className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-neon-cyan/50 transition-all duration-500"
    >
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-neon-cyan transition-colors duration-300">
          {name}
        </h3>
        <p className="text-muted-foreground mb-3">{description}</p>
        <p className="text-neon-magenta font-semibold text-xl mb-4">{rate}</p>
        <Button 
          onClick={onBook}
          className="w-full bg-neon-cyan hover:bg-neon-magenta text-primary-foreground font-semibold shadow-glow-cyan hover:shadow-glow-magenta transition-all duration-500"
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};
