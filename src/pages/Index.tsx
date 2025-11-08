import { Hero } from '@/components/Hero';
import { Studios } from '@/components/Studios';
import { BookingCalendar } from '@/components/BookingCalendar';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Studios />
      <BookingCalendar />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
