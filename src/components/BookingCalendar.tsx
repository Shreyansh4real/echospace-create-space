import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface Booking {
  date: string;
  time: string;
  studio: string;
}

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', 
  '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
];

const studios = ['Studio A', 'Studio B', 'Studio C'];

export const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const savedBookings = localStorage.getItem('echoSpaceBookings');
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  }, []);

  const saveBooking = (time: string, studio: string) => {
    const newBooking: Booking = {
      date: selectedDate,
      time,
      studio,
    };

    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    localStorage.setItem('echoSpaceBookings', JSON.stringify(updatedBookings));

    toast({
      title: 'Booking Confirmed!',
      description: `${studio} booked for ${selectedDate} at ${time}`,
    });
  };

  const isBooked = (time: string, studio: string) => {
    return bookings.some(
      (booking) => 
        booking.date === selectedDate && 
        booking.time === time && 
        booking.studio === studio
    );
  };

  const getUpcomingBookings = () => {
    const today = new Date().toISOString().split('T')[0];
    return bookings.filter(booking => booking.date >= today).slice(0, 5);
  };

  return (
    <section id="booking" className="py-24 px-4 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-neon-magenta to-neon-yellow bg-clip-text text-transparent">
            Book Your Session
          </h2>
          <p className="text-muted-foreground text-lg">
            Select a date, time, and studio to reserve your spot
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="md:col-span-2 bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle className="text-neon-cyan">Available Time Slots</CardTitle>
              <input 
                type="date" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-muted border border-border rounded-md px-4 py-2 text-foreground mt-2"
                min={new Date().toISOString().split('T')[0]}
              />
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {studios.map((studio) => (
                  <div key={studio}>
                    <h4 className="font-semibold mb-3 text-foreground">{studio}</h4>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {timeSlots.map((time) => {
                        const booked = isBooked(time, studio);
                        return (
                          <Button
                            key={time}
                            onClick={() => !booked && saveBooking(time, studio)}
                            disabled={booked}
                            variant={booked ? 'outline' : 'default'}
                            className={
                              booked 
                                ? 'opacity-50 cursor-not-allowed' 
                                : 'bg-neon-cyan hover:bg-neon-magenta text-primary-foreground shadow-glow-cyan hover:shadow-glow-magenta transition-all duration-300'
                            }
                          >
                            {time}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle className="text-neon-yellow">Your Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              {getUpcomingBookings().length === 0 ? (
                <p className="text-muted-foreground text-center py-8">No upcoming bookings</p>
              ) : (
                <div className="space-y-3">
                  {getUpcomingBookings().map((booking, index) => (
                    <div 
                      key={index}
                      className="p-3 bg-muted/30 rounded-lg border border-border/30"
                    >
                      <p className="font-semibold text-neon-cyan text-sm">{booking.studio}</p>
                      <p className="text-xs text-muted-foreground">{booking.date}</p>
                      <p className="text-xs text-muted-foreground">{booking.time}</p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
