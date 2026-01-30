import { useEffect, useState } from 'react';

interface GeometricShape {
  id: number;
  type: 'circle' | 'triangle' | 'square' | 'gear' | 'line';
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
    // Generate random shapes
    const generatedShapes: GeometricShape[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      type: ['circle', 'triangle', 'square', 'gear', 'line'][Math.floor(Math.random() * 5)] as GeometricShape['type'],
      x: Math.random() * 100,
      y: Math.random() * 300,
      size: Math.random() * 60 + 20,
      rotation: Math.random() * 360,
      speed: Math.random() * 0.5 + 0.1,
      opacity: Math.random() * 0.3 + 0.1,
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
            className="absolute rounded-full border-2 border-primary"
            style={style}
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
            }}
          />
        );
      case 'square':
        return (
          <div
            key={shape.id}
            className="absolute border-2 border-primary"
            style={style}
          />
        );
      case 'gear':
        return (
          <div
            key={shape.id}
            className="absolute"
            style={style}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M50 10 L55 25 L70 20 L65 35 L80 40 L65 50 L80 60 L65 65 L70 80 L55 75 L50 90 L45 75 L30 80 L35 65 L20 60 L35 50 L20 40 L35 35 L30 20 L45 25 Z"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                opacity={shape.opacity}
              />
            </svg>
          </div>
        );
      case 'line':
        return (
          <div
            key={shape.id}
            className="absolute h-0.5 bg-primary"
            style={{
              ...style,
              width: `${shape.size * 2}px`,
              height: '2px',
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Main glow effect */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full bg-glow opacity-30"
        style={{
          top: `${-100 + scrollY * 0.1}px`,
          right: '-200px',
        }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full bg-glow opacity-20"
        style={{
          bottom: `${-100 - scrollY * 0.05}px`,
          left: '-100px',
        }}
      />
      
      {/* Geometric shapes */}
      {shapes.map(renderShape)}
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      />
    </div>
  );
};

export default GeometricBackground;
