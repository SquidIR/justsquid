import { useEffect } from 'react';
import MusicPlayer from '@/components/MusicPlayer';
import { Headphones, Music2 } from 'lucide-react';

const MusicPage = () => {
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Reset animations by removing the class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => {
      el.classList.remove('animate-slide-in-up');
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-8 animate-pulse-glow">
            <Headphones className="w-10 h-10 text-primary" />
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-primary">Music</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Welcome to my music corner! Here you'll find my original tracks and compositions. 
            Put on your headphones and enjoy the beats!
          </p>
        </div>
      </section>

      {/* Featured Track Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="flex items-center justify-center gap-3 mb-8 reveal opacity-0">
            <Music2 className="w-6 h-6 text-primary" />
            <h2 className="font-heading text-2xl font-bold">Featured Track</h2>
          </div>

          <div className="space-y-8">
            <div className="reveal opacity-0">
              <MusicPlayer
                title="Make Your Day"
                audioSrc="/music/make-your-day.m4a"
              />
              <p className="text-center text-muted-foreground mt-4">
                I literaly made this song before school ._. 
                This is one of my best songs!
              </p>
            </div>

            <div className="reveal opacity-0">
              <MusicPlayer
                title="Grudges"
                audioSrc="/music/Grudges.mp3"
              />
              <p className="text-center text-muted-foreground mt-4">
                Some random song I made for no particular reason. It's quite dark tbh
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-24 px-6 bg-card/50 border-y border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 reveal opacity-0">
            More <span className="text-primary">Coming Soon</span>
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12 reveal opacity-0">
            I'm always working on new tracks! Stay tuned for more original music, 
            remixes, and collaborations. Subscribe to my YouTube channel to be the 
            first to hear new releases!
          </p>

          {/* Placeholder for future tracks */}
          <div className="grid md:grid-cols-3 gap-6 reveal opacity-0">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="card-geometric opacity-50 flex flex-col items-center justify-center min-h-[200px]"
              >
                <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mb-4">
                  <Music2 className="w-8 h-8 text-muted-foreground" />
                </div>
                <p className="font-heading text-muted-foreground">Coming Soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Style Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16 reveal opacity-0">
            My <span className="text-primary">Style</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-geometric reveal opacity-0 hover:glow-red transition-all duration-300">
              <h3 className="font-heading text-xl font-bold mb-4 text-primary">Electronic & EDM</h3>
              <p className="text-muted-foreground">
                Heavy basslines, catchy synths, and energetic drops. I love creating tracks that make you want to move!
              </p>
            </div>

            <div className="card-geometric reveal opacity-0 hover:glow-red transition-all duration-300">
              <h3 className="font-heading text-xl font-bold mb-4 text-primary">Rhythm Game Inspired</h3>
              <p className="text-muted-foreground">
                Inspired by games like Geometry Dash, my music often features syncopated rhythms and dynamic transitions.
              </p>
            </div>

            <div className="card-geometric reveal opacity-0 hover:glow-red transition-all duration-300">
              <h3 className="font-heading text-xl font-bold mb-4 text-primary">Chiptune Elements</h3>
              <p className="text-muted-foreground">
                I love mixing modern production with retro 8-bit and chiptune sounds for that nostalgic gaming feel.
              </p>
            </div>

            <div className="card-geometric reveal opacity-0 hover:glow-red transition-all duration-300">
              <h3 className="font-heading text-xl font-bold mb-4 text-primary">Positive Vibes</h3>
              <p className="text-muted-foreground">
                Most of my tracks aim to uplift and energize. Music should make you feel good!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MusicPage;
