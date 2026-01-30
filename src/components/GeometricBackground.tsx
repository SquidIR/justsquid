import { useEffect, useState } from 'react';

interface GeometricShape {
  id: number;
  type: 'circle' | 'triangle' | 'square' | 'gear' | 'line' | 'blob';
  x: number;
  y: number;
  size: number;
  rotation: number;
  speed: number;
  opacity: number;
}

const GeometricBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [shapes, setShapes] = useState<GeometricShape[]>([]);

  useEffect(() => {
    // Generate random shapes with more variety
    const generatedShapes: GeometricShape[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      type: ['circle', 'triangle', 'square', 'gear', 'line', 'blob'][Math.floor(Math.random() * 6)] as GeometricShape['type'],
      x: Math.random() * 100,
      y: Math.random() * 300,
      size: Math.random() * 80 + 15,
      rotation: Math.random() * 360,
      speed: Math.random() * 0.8 + 0.05,
      opacity: Math.random() * 0.25 + 0.08,
    }));
    setShapes(generatedShapes);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderShape = (shape: GeometricShape) => {
    const parallaxY = shape.y + scrollY * shape.speed * 0.1;
    const parallaxRotation = shape.rotation + scrollY * shape.speed * 0.05;

    const style = {
      left: `${shape.x}%`,
      top: `${parallaxY}px`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      opacity: shape.opacity,
      transform: `rotate(${parallaxRotation}deg)`,
      transition: 'transform 0.1s ease-out',
    };

    switch (shape.type) {
      case 'circle':
        return (
          <div
            key={shape.id}
            className="absolute rounded-full border border-primary blur-sm"
            style={{
              ...style,
              boxShadow: `0 0 ${shape.size * 0.5}px hsl(var(--primary) / 0.3)`,
            }}
          />
        );
      case 'triangle':
        return (
          <div
            key={shape.id}
            className="absolute"
            style={{
              ...style,
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid hsl(var(--primary) / ${shape.opacity})`,
              filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 0.2))',
            }}
          />
        );
      case 'square':
        return (
          <div
            key={shape.id}
            className="absolute border border-primary blur-sm"
            style={{
              ...style,
              boxShadow: `0 0 ${shape.size * 0.4}px hsl(var(--primary) / 0.25)`,
            }}
          />
        );
      case 'gear':
        return (
          <div
            key={shape.id}
            className="absolute"
            style={style}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
              <path
                d="M50 10 L55 25 L70 20 L65 35 L80 40 L65 50 L80 60 L65 65 L70 80 L55 75 L50 90 L45 75 L30 80 L35 65 L20 60 L35 50 L20 40 L35 35 L30 20 L45 25 Z"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1.5"
                opacity={shape.opacity}
              />
            </svg>
          </div>
        );
      case 'line':
        return (
          <div
            key={shape.id}
            className="absolute bg-gradient-to-r from-transparent via-primary to-transparent"
            style={{
              ...style,
              width: `${shape.size * 2.5}px`,
              height: '2px',
              opacity: shape.opacity * 0.7,
            }}
          />
        );
      case 'blob':
        return (
          <div
            key={shape.id}
            className="absolute rounded-full blur-md"
            style={{
              ...style,
              background: `radial-gradient(circle, hsl(var(--primary) / ${shape.opacity * 0.5}), transparent)`,
              filter: 'blur(4px)',
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated glow effects */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-40"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.4), transparent)',
          top: `${-100 + scrollY * 0.1}px`,
          right: '-200px',
          animation: 'pulse 8s ease-in-out infinite',
        }}
      />
      <div 
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.3), transparent)',
          bottom: `${-100 - scrollY * 0.05}px`,
          left: '-100px',
          animation: 'pulse 10s ease-in-out infinite 1s',
        }}
      />
      
      {/* Additional accent glow */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.25), transparent)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          animation: 'pulse 12s ease-in-out infinite 2s',
        }}
      />
      
      {/* Geometric shapes */}
      {shapes.map(renderShape)}
      
      {/* Animated grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.2) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.08}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      
      {/* Radial gradient backdrop */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, hsl(var(--primary) / 0.1), transparent 70%)',
        }}
      />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default GeometricBackground;
