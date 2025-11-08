import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutImage from '@/assets/about-studio.jpg';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-yellow/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 
          ref={titleRef}
          className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-neon-yellow to-neon-cyan bg-clip-text text-transparent"
        >
          About EchoSpace
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              <span className="text-neon-cyan font-semibold">EchoSpace Studios</span> is where passion meets sound. 
              We are a place where artists, musicians, and creators come together to bring their visions to life.
            </p>
            
            <p>
              Founded by musicians for musicians, we understand the creative process. Our state-of-the-art facilities 
              are designed to inspire, equipped with professional-grade gear, and maintained to the highest standards.
            </p>
            
            <p>
              Whether you're recording your first demo, rehearsing for a world tour, or producing your next masterpiece, 
              <span className="text-neon-magenta font-semibold"> EchoSpace</span> provides the perfect environment for your artistry to flourish.
            </p>

            <div className="pt-8 border-t border-border/30">
              <p className="text-center text-foreground font-semibold text-xl">
                "Every great song starts with a single note. Let EchoSpace be where yours begins."
              </p>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg blur-lg opacity-30"></div>
            <div className="relative rounded-lg overflow-hidden border border-border/50">
              <img 
                src={aboutImage} 
                alt="Professional music studio interior with artists collaborating and creating music"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
