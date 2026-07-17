import { useEffect, useRef } from 'react';

// Object Pooling: Reuse particle objects
class Particle {
  x: number = 0;
  y: number = 0;
  originalX: number = 0;
  originalY: number = 0;
  vx: number = 0;
  vy: number = 0;
  size: number = 0;
  color: string = '#ffffff';
  opacity: number = 0;
  driftOffset: number = 0;
  driftSpeed: number = 0;

  // Spawn particle using ONLY window.innerWidth and window.innerHeight
  spawn() {
    this.originalX = Math.random() * window.innerWidth;
    this.originalY = Math.random() * window.innerHeight;
    this.x = this.originalX;
    this.y = this.originalY;
    
    // Random natural movement
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.02 + Math.random() * 0.03;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    
    // Random size between 1-3px
    this.size = 1 + Math.random() * 2;
    
    // Colors: white, light red, dark red
    const colorChoice = Math.random();
    if (colorChoice < 0.4) this.color = '#ffffff';
    else if (colorChoice < 0.7) this.color = '#ff6b6b';
    else this.color = '#c92a2a';
    
    // Random opacity 0.1-0.4
    this.opacity = 0.1 + Math.random() * 0.3;
    
    // Drift for floating effect
    this.driftOffset = Math.random() * Math.PI * 2;
    this.driftSpeed = 0.001 + Math.random() * 0.002;
  }

  // Check if particle is outside viewport
  isOutsideViewport() {
    return this.x < -50 || this.x > window.innerWidth + 50 || 
           this.y < -50 || this.y > window.innerHeight + 50;
  }
}

export default function MagneticParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const animationIdRef = useRef<number | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  // Performance: Adjust particle count based on screen size
  const getOptimalParticleCount = () => {
    const width = window.innerWidth;
    if (width < 480) return 60;
    if (width < 768) return 80;
    return 100;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    ctxRef.current = ctx;

    // Initialize canvas dimensions
    const initCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // Initialize particles (only on first load)
    const initParticles = () => {
      const count = getOptimalParticleCount();
      particlesRef.current = [];
      for (let i = 0; i < count; i++) {
        const p = new Particle();
        p.spawn();
        particlesRef.current.push(p);
      }
    };

    initCanvasSize();
    initParticles();

    // Mouse handlers
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };
    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouseRef.current.x = touch.clientX;
        mouseRef.current.y = touch.clientY;
        mouseRef.current.active = true;
      }
    };
    const handleTouchEnd = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Single animation loop (only one!)
    const animate = () => {
      const ctx = ctxRef.current;
      if (!ctx) return;

      // Clear canvas
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const particles = particlesRef.current;
      const { x: mx, y: my, active } = mouseRef.current;

      // Update and draw each particle
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Natural floating drift
        p.driftOffset += p.driftSpeed;
        const driftX = Math.sin(p.driftOffset) * 0.1;
        const driftY = Math.cos(p.driftOffset * 0.7) * 0.1;

        // Update original position with natural movement
        p.originalX += p.vx + driftX;
        p.originalY += p.vy + driftY;

        // Wrap around edges
        if (p.originalX < -10) p.originalX = window.innerWidth + 10;
        if (p.originalX > window.innerWidth + 10) p.originalX = -10;
        if (p.originalY < -10) p.originalY = window.innerHeight + 10;
        if (p.originalY > window.innerHeight + 10) p.originalY = -10;

        // Spring back to original position
        let targetX = p.originalX;
        let targetY = p.originalY;

        if (active) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Only process particles within attraction radius (160px)
          if (dist < 160) {
            // Smooth attraction strength (easing)
            const normalizedDist = dist / 160;
            const force = (1 - normalizedDist * normalizedDist) * 0.1;
            targetX = p.x + dx * force;
            targetY = p.y + dy * force;
          }
        }

        // Smooth spring interpolation (no teleport, no jitter)
        const springStrength = 0.035;
        p.x += (targetX - p.x) * springStrength;
        p.y += (targetY - p.y) * springStrength;

        // Draw particle (simple dot, no glow, no links)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    // Handle visibility change
    const handleVisibilityChange = () => {
      if (document.hidden && animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      } else if (!document.hidden) {
        animationIdRef.current = requestAnimationFrame(animate);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange, { passive: true });

    // Handle resize: only update canvas size, respawn particles outside viewport
    const handleResize = () => {
      initCanvasSize();
      
      // Respawn only particles outside new viewport
      particlesRef.current.forEach(p => {
        if (p.isOutsideViewport()) {
          p.spawn();
        }
      });
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Full cleanup to prevent memory leaks
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed left-0 top-0 pointer-events-none z-[1]"
      style={{ 
        width: '100vw', 
        height: '100vh', 
        background: 'transparent' 
      }}
    />
  );
}
