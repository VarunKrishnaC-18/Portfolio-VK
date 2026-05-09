import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const glowRef = useRef(null);
  const trailRef = useRef(null);

  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const glowPos = useRef({ x: 0, y: 0 });
  const trails = useRef([]);
  const animationFrameId = useRef(null);
  const isHovering = useRef(false);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Add trail particles
      trails.current.push({
        x: mousePos.current.x,
        y: mousePos.current.y,
        life: 1,
        id: Math.random(),
      });

      // Keep only last 20 trails
      if (trails.current.length > 20) {
        trails.current.shift();
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '1';
      if (glowRef.current) glowRef.current.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0';
      if (glowRef.current) glowRef.current.style.opacity = '0';
    };

    const checkHoverElements = () => {
      const hoverable = document.querySelectorAll(
        'a, button, .project-card, .skill-circle, .social-icon, input, textarea'
      );
      let hovering = false;

      hoverable.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (
          mousePos.current.x >= rect.left &&
          mousePos.current.x <= rect.right &&
          mousePos.current.y >= rect.top &&
          mousePos.current.y <= rect.bottom
        ) {
          hovering = true;
        }
      });

      isHovering.current = hovering;
    };

    const updateCursorPosition = () => {
      checkHoverElements();

      // Smooth interpolation for cursor
      const easing = 0.18;
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * easing;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * easing;

      // Slower interpolation for glow
      const glowEasing = 0.08;
      glowPos.current.x += (mousePos.current.x - glowPos.current.x) * glowEasing;
      glowPos.current.y += (mousePos.current.y - glowPos.current.y) * glowEasing;

      // Update cursor position and size
      if (cursorRef.current) {
        const scale = isHovering.current ? 1.8 : 1;
        cursorRef.current.style.left = cursorPos.current.x + 'px';
        cursorRef.current.style.top = cursorPos.current.y + 'px';
        cursorRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
      }

      // Update glow position
      if (glowRef.current) {
        const glowScale = isHovering.current ? 1.5 : 1;
        glowRef.current.style.left = glowPos.current.x + 'px';
        glowRef.current.style.top = glowPos.current.y + 'px';
        glowRef.current.style.transform = `translate(-50%, -50%) scale(${glowScale})`;
      }

      // Update trails
      trails.current = trails.current.map((trail) => ({
        ...trail,
        life: trail.life - 0.05,
      }));

      trails.current = trails.current.filter((trail) => trail.life > 0);

      if (trailRef.current) {
        trailRef.current.innerHTML = trails.current
          .map(
            (trail) =>
              `<div style="
                position: fixed;
                left: ${trail.x}px;
                top: ${trail.y}px;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(168, 85, 247, ${trail.life * 0.7}), transparent);
                pointer-events: none;
                transform: translate(-50%, -50%);
                z-index: 9998;
                box-shadow: 0 0 16px rgba(168, 85, 247, ${trail.life * 0.5});
              "></div>`
          )
          .join('');
      }

      animationFrameId.current = requestAnimationFrame(updateCursorPosition);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    animationFrameId.current = requestAnimationFrame(updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId.current);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Trail particles container */}
      <div ref={trailRef} style={{ pointerEvents: 'none' }} />

      {/* Main cursor orb */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0,
          transition: 'opacity 0.3s ease-out',
        }}
      >
        <div
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 1), rgba(168, 85, 247, 0.5))',
            boxShadow:
              '0 0 30px rgba(168, 85, 247, 1), 0 0 60px rgba(168, 85, 247, 0.6), inset 0 0 15px rgba(168, 85, 247, 0.8)',
            border: '2px solid rgba(168, 85, 247, 0.8)',
          }}
        />
      </div>

      {/* Outer glow */}
      <div
        ref={glowRef}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0,
          transition: 'opacity 0.3s ease-out',
        }}
      >
        <div
          style={{
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3), transparent)',
            boxShadow: '0 0 60px rgba(168, 85, 247, 0.5), 0 0 100px rgba(168, 85, 247, 0.2)',
            border: '1px solid rgba(168, 85, 247, 0.25)',
          }}
        />
      </div>
    </>
  );
}
