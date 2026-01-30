import { useEffect, useState } from 'react';

const WavyBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1400 1000"
        preserveAspectRatio="none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, #1a1a1a 0%, #000000 100%)',
          transform: `translateY(${scrollY * 0.1}px)`,
          filter: 'blur(0.8px)',
        }}
      >
        <defs>
          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff0000" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Animated wavy shapes */}
        <path
          d={`
            M 0 ${200 + Math.sin(scrollY * 0.003) * 50}
            Q 350 ${150 + Math.sin(scrollY * 0.002) * 60}, 700 ${200 + Math.sin(scrollY * 0.004) * 50}
            T 1400 ${200 + Math.sin(scrollY * 0.003) * 50}
            L 1400 300
            L 0 300
            Z
          `}
          fill="url(#waveGrad1)"
          opacity="0.4"
        />

        <path
          d={`
            M 0 ${400 + Math.sin(scrollY * 0.0025) * 40}
            Q 350 ${350 + Math.sin(scrollY * 0.0015) * 50}, 700 ${400 + Math.sin(scrollY * 0.0035) * 40}
            T 1400 ${400 + Math.sin(scrollY * 0.0025) * 40}
            L 1400 500
            L 0 500
            Z
          `}
          fill="url(#waveGrad1)"
          opacity="0.25"
        />

        {/* Red accent lines */}
        <line
          x1="0"
          y1={250 + Math.sin(scrollY * 0.003) * 30}
          x2="1400"
          y2={250 + Math.sin(scrollY * 0.003) * 30}
          stroke="#ff0000"
          strokeWidth="2"
          opacity="0.5"
        />

        <line
          x1="0"
          y1={600 + Math.sin(scrollY * 0.002) * 40}
          x2="1400"
          y2={600 + Math.sin(scrollY * 0.002) * 40}
          stroke="#ffffffff"
          strokeWidth="1.5"
          opacity="0.3"
        />
      </svg>
    </div>
  );
};

export default WavyBackground;
