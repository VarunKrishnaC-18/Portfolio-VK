import { useEffect, useRef } from 'react';

export default function MouseGlow() {
  const glowRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const glowPos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const updateGlow = () => {
      // Smooth interpolation for glow effect
      const easing = 0.1;
      glowPos.current.x += (mousePos.current.x - glowPos.current.x) * easing;
      glowPos.current.y += (mousePos.current.y - glowPos.current.y) * easing;

      if (glowRef.current) {
        glowRef.current.style.left = glowPos.current.x + 'px';
        glowRef.current.style.top = glowPos.current.y + 'px';
      }

      animationFrameId.current = requestAnimationFrame(updateGlow);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId.current = requestAnimationFrame(updateGlow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      <div
        style={{
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(79, 70, 229, 0.08) 30%, transparent 70%)',
          filter: 'blur(60px)',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
}
