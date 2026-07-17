import { useEffect, useState } from 'react';

export default function MouseEffects() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      setTrail(prev => [
        { x: e.clientX, y: e.clientY, id: Date.now() },
        ...prev.slice(0, 10),
      ]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div
        className="fixed w-4 h-4 bg-primary/50 rounded-full pointer-events-none z-[10000] mix-blend-screen"
        style={{
          left: cursorPosition.x - 8,
          top: cursorPosition.y - 8,
          transform: 'translate(0, 0)',
        }}
      />
      
      {/* Cursor trail */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed w-2 h-2 bg-primary/30 rounded-full pointer-events-none z-[9999]"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            opacity: (10 - index) / 10,
            transform: `scale(${(10 - index) / 10})`,
          }}
        />
      ))}
    </>
  );
}
