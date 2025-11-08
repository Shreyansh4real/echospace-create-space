import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Instagram, Youtube, Music } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-24 px-4 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-yellow bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle className="text-neon-cyan">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-muted border-border text-foreground"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-muted border-border text-foreground"
                />
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-muted border-border text-foreground"
                />
                <Button 
                  type="submit"
                  className="w-full bg-neon-magenta hover:bg-neon-yellow text-primary-foreground font-semibold shadow-glow-magenta hover:shadow-glow-yellow transition-all duration-500"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="text-neon-yellow">Connect With Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Instagram className="w-6 h-6 text-neon-magenta" />
                  <span className="text-foreground">@echospace.studios</span>
                </div>
                <div className="flex items-center gap-4">
                  <Youtube className="w-6 h-6 text-neon-cyan" />
                  <span className="text-foreground">EchoSpace Studios</span>
                </div>
                <div className="flex items-center gap-4">
                  <Music className="w-6 h-6 text-neon-yellow" />
                  <span className="text-foreground">Listen on Spotify</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="text-neon-cyan">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-2">123 Music District</p>
                <p className="text-foreground mb-2">Creative Quarter</p>
                <p className="text-foreground mb-4">Artist City, AC 12345</p>
                <p className="text-muted-foreground">Open Mon-Sun, 9AM - 10PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
