import { StudioCard } from './StudioCard';
import studioA from '@/assets/studio-a.jpg';
import studioB from '@/assets/studio-b.jpg';
import studioC from '@/assets/studio-c.jpg';

const studios = [
  {
    id: 1,
    name: 'Studio A - Recording',
    image: studioA,
    rate: '$50/hour',
    description: 'Professional recording setup with vocal booth and premium mics',
  },
  {
    id: 2,
    name: 'Studio B - Rehearsal',
    image: studioB,
    rate: '$35/hour',
    description: 'Full band rehearsal space with drums, amps, and PA system',
  },
  {
    id: 3,
    name: 'Studio C - Production',
    image: studioC,
    rate: '$60/hour',
    description: 'Complete production suite with synthesizers and MIDI setup',
  },
];

export const Studios = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-magenta/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
            Our Studios
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional spaces designed for your creative journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {studios.map((studio) => (
            <StudioCard key={studio.id} {...studio} onBook={scrollToBooking} />
          ))}
        </div>
      </div>
    </section>
  );
};
