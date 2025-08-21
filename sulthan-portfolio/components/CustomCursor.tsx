'use client';

import { useEffect, useState, useRef } from 'react';

const CIRCLE_SIZE = 72; // px
const TRAIL_SPEED = 0.18; // 0 < speed <= 1

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      const isClickable = window.getComputedStyle(target).cursor === 'pointer';
      const isMenuElement = target.closest('nav') || target.closest('menu') || target.closest('[role="menu"]');
      setIsPointer(isClickable);
      setIsMenu(isMenuElement !== null);
    };
    window.addEventListener('mousemove', updatePosition);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  // Animate trailing circle
  useEffect(() => {
    const animate = () => {
      setTrail(prev => ({
        x: prev.x + (position.x - prev.x) * TRAIL_SPEED,
        y: prev.y + (position.y - prev.y) * TRAIL_SPEED,
      }));
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [position]);

  return (
    <>
      {/* Green outline circle, always visible, bulges on menu hover */}
      <div
        className="fixed pointer-events-none z-[999]"
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
          transform: `translate(-50%, -50%)`,
          width: CIRCLE_SIZE,
          height: CIRCLE_SIZE,
        }}
      >
        <div
          className={`w-full h-full rounded-full border-2 border-green-500 bg-transparent transition-transform duration-200 ${
            isMenu ? 'scale-125 border-[3px]' : 'scale-100 border-2'
          }`}
          style={{ boxSizing: 'border-box' }}
        />
      </div>

      {/* Modern white ring center with subtle shadow */}
      <div
        className="fixed pointer-events-none z-[999]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`w-6 h-6 rounded-full border-2 border-white bg-transparent shadow-[0_0_8px_2px_rgba(255,255,255,0.25)] flex items-center justify-center transition-all duration-200 ${
            isPointer ? 'scale-125 border-[3px]' : 'scale-100 border-2'
          }`}
        >
          <div className="w-2 h-2 rounded-full bg-white" />
        </div>
      </div>

      {/* Cursor trail (white) */}
      <div
        className="fixed pointer-events-none z-[999] mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`w-8 h-8 rounded-full border-2 border-white transition-all duration-300 ${
            isPointer ? 'scale-150 opacity-50' : 'scale-100 opacity-30'
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor; 