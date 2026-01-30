import { useEffect } from 'react';
import { Music, Gamepad2, Heart, Sparkles } from 'lucide-react';
import logo from '@/assets/logo.png';

const About = () => {
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
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            {/* Avatar */}
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-xl animate-pulse-glow" />
              <img
                src={logo}
                alt="JustSquid"
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl border-4 border-primary glow-red"
              />
            </div>

            {/* Intro */}
            <div className="text-center md:text-left">
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                About <span className="text-primary">Me</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                The squid behind the content
              </p>
            </div>
          </div>

          {/* Main Story */}
          <div className="space-y-8 text-lg text-foreground/90 font-body leading-relaxed">
            <p className="reveal opacity-0">
              Hello there! I'm <span className="text-primary font-semibold">JustSquid</span>, a small content creator with a big passion for music and gaming. Welcome to my little corner of the internet where creativity meets chaos!
            </p>

            <p className="reveal opacity-0">
              I've always been fascinated by music and gaming which is exactly what led me to <span className="text-primary font-semibold">Geometry Dash</span>. There's something magical about a game that combines gameplay with music so perfectly. Every jump, every obstacle, every moment feels like it's part of a symphony – and that's what I try to capture in my shorts.
            </p>

            <p className="reveal opacity-0">
              When I'm not dying to triple spikes and attempting Bloodbath, I'm creating my own music. I love experimenting with electronic beats, synthesizers, and sounds that would feel right at home in a rhythm game. I basically live off of this music software called GarageBand (all them iOS users will know what I mean). Music production has become more than just a hobby for me – it's a way to express myself and connect with others who share the same passion.
            </p>

            <p className="reveal opacity-0">
              My Geometry Dash shorts are a labor of love. Whether it's showcasing incredible community levels, sharing levels that deserve to be rated, or highlighting cool glitches, I put my heart into every video. I believe that even the shortest content can bring a smile to someone's face or inspire them to pick up the game themselves.
            </p>

            <p className="reveal opacity-0">
              As a small creator, every subscriber, every like, and every comment means the world to me. I'm on a journey to grow this channel and build a community of music lovers and GD enthusiasts. If you're into catchy beats, addictive gameplay, and a whole lot of determination, then we're going to get along just fine!
            </p>
          </div>
        </div>
      </section>

      {/* What I Love Section */}
      <section className="py-24 px-6 bg-card/50 border-y border-border">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16 reveal opacity-0">
            What I <span className="text-primary">Love</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Music Card */}
            <div className="card-geometric reveal opacity-0 hover:glow-red transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Music className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold">Music Production</h3>
              </div>
              <p className="text-muted-foreground">
                I spend countless hours crafting beats and melodies. From EDM to chiptune-inspired tracks, I love exploring different genres and pushing my creative boundaries. Music is my way of telling stories without words.
              </p>
            </div>

            {/* Gaming Card */}
            <div className="card-geometric reveal opacity-0 hover:glow-red transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Gamepad2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold">Geometry Dash</h3>
              </div>
              <p className="text-muted-foreground">
                This game is more than just entertainment – it's an art form. The community levels are incredible, and the perfect sync between gameplay and music creates moments that are pure magic. I never get tired of discovering new levels.
              </p>
            </div>

            {/* Creating Card */}
            <div className="card-geometric reveal opacity-0 hover:glow-red transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold">Creating Shorts</h3>
              </div>
              <p className="text-muted-foreground">
                There's an art to making short-form content that captures attention instantly. I love the challenge of telling a story or sharing an experience in just a few seconds. Every frame matters, every cut counts.
              </p>
            </div>

            {/* Community Card */}
            <div className="card-geometric reveal opacity-0 hover:glow-red transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold">The Community</h3>
              </div>
              <p className="text-muted-foreground">
                The Geometry Dash community is incredibly creative and supportive. From level creators to musicians to fellow content creators, I'm constantly inspired by the talent around me. Being part of this community is a privilege.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16 reveal opacity-0">
            Fun <span className="text-primary">Facts</span>
          </h2>

          <div className="space-y-6">
            {[
              "My favorite Geometry Dash level is Broken Gameplay by CloudEngineer – it's amazing!",
              "I've probably restarted levels thousands of times. Persistence is key!",
              "Using my Akai Pro MPK Mini MK3 helps me make the best music!",
              "I believe every failed attempt is just practice for success",
              "The squid name? Let's just say I think squids are underrated 🦑"
            ].map((fact, index) => (
              <div
                key={index}
                className="flex items-start gap-4 reveal opacity-0 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="font-heading text-2xl text-primary">{index + 1}</span>
                <p className="text-foreground/90">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
