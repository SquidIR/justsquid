import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Youtube, ChevronDown } from 'lucide-react';
import logo from '@/assets/logo.png';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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
    <div className="relative">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex flex-col items-center justify-center relative px-6"
      >
        {/* Animated ring behind logo */}
        <div className="absolute w-[500px] h-[500px] rounded-full border border-primary/20 animate-spin-slow" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-primary/30 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
        <div className="absolute w-[300px] h-[300px] rounded-full border-2 border-primary/40 animate-pulse-glow" />

        {/* Logo */}
        <div className="relative z-10 mb-8 animate-fade-in">
          <img
            src={logo}
            alt="JustSquid Logo"
            className="w-48 h-48 md:w-64 md:h-64 rounded-2xl drop-shadow-2xl"
          />
        </div>

        {/* Channel Name */}
        <h1 className="font-heading text-5xl md:text-7xl font-black text-center mb-4 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
          JUST<span className="text-gradient-red">SQUID</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-2xl mb-8 font-body animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
          Music Creator • Geometry Dash Enthusiast • Content Creator
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
          <a
            href="https://www.youtube.com/@ItsSquid534"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero flex items-center gap-3"
          >
            <Youtube size={24} />
            Subscribe
          </a>
          <Link to="/about" className="btn-outline-hero">
            Learn More
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown size={32} className="text-primary" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 relative">
        <div className="container mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 reveal opacity-0">
            What I <span className="text-primary">Create</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16 reveal opacity-0">
            Combining my love for music and gaming into unique content
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="card-geometric reveal opacity-0 hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <h3 className="font-heading text-xl text-center mb-4">Geometry Dash Shorts</h3>
              <p className="text-muted-foreground text-center text-sm">
                I make short funny Geometry Dash videos of popular levels and glitches!
              </p>
            </div>

            {/* Card 2 */}
            <div className="card-geometric reveal opacity-0 hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
              </div>
              <h3 className="font-heading text-xl text-center mb-4">Original Music</h3>
              <p className="text-muted-foreground text-center text-sm">
                Creating beats and tracks inspired by rhythm games and electronic music
              </p>
            </div>

            {/* Card 3 */}
            <div className="card-geometric reveal opacity-0 hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="12" y1="5" x2="12" y2="9" />
                  <line x1="12" y1="15" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="9" y2="12" />
                  <line x1="15" y1="12" x2="19" y2="12" />
                </svg>
              </div>
              <h3 className="font-heading text-xl text-center mb-4">Drums</h3>
              <p className="text-muted-foreground text-center text-sm">
                I love playing drums! It helps me keep the rhythm and inspires my music production
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-card/50 border-y border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center reveal opacity-0">
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">∞</div>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">Creativity</p>
            </div>
            <div className="text-center reveal opacity-0" style={{ animationDelay: '0.1s' }}>
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">24 / 7</div>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">Dedication</p>
            </div>
            <div className="text-center reveal opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">Passion</p>
            </div>
            <div className="text-center reveal opacity-0" style={{ animationDelay: '0.3s' }}>
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">GD</div>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">Focused</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-glow opacity-50" />
        <div className="container mx-auto text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 reveal opacity-0">
            Ready to <span className="text-primary">Join</span> the Journey?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 reveal opacity-0">
            Subscribe to JustSquid for the latest Geometry Dash content, original music, and more!
          </p>
          <a
            href="https://www.youtube.com/@ItsSquid534"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero inline-flex items-center gap-3 reveal opacity-0"
          >
            <Youtube size={24} />
            Subscribe Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
