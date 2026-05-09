import { useEffect, useRef, useState } from "react";

/**
 * Enhanced Reveal Component with Multiple Animation Styles
 * 
 * Props:
 * - children: React elements to animate
 * - type: 'fade-up' | 'slide-left' | 'scale' (default: 'fade-up')
 * - staggerChildren: boolean - stagger child elements (default: false)
 * - threshold: IntersectionObserver threshold (default: 0.15)
 * - delay: custom animation delay in ms (default: 0)
 * 
 * Usage:
 * <Reveal type="fade-up" staggerChildren>
 *   <h2>Title</h2>
 *   <p>Content 1</p>
 *   <p>Content 2</p>
 * </Reveal>
 */

export default function Reveal({
  children,
  type = "fade-up",
  staggerChildren = false,
  threshold = 0.15,
  delay = 0,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  const getAnimationClass = () => {
    const baseClass = "reveal-stagger";
    switch (type) {
      case "slide-left":
        return `${baseClass}-left`;
      case "scale":
        return `${baseClass}-scale`;
      default:
        return baseClass;
    }
  };

  const animationClass = getAnimationClass();

  if (staggerChildren && visible) {
    // Render children with staggered animation delays
    return (
      <div ref={ref}>
        {Array.isArray(children)
          ? children.map((child, index) => (
              <div
                key={index}
                className={`${animationClass} reveal-delay-${index}`}
                style={{
                  animationDelay: `${delay + index * 100}ms`,
                }}
              >
                {child}
              </div>
            ))
          : children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={visible ? animationClass : "reveal-stagger"}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
