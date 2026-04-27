import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface FadeInWrapperProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  threshold?: number;
  className?: string;
}

const FadeInWrapper: React.FC<FadeInWrapperProps> = ({
  children,
  delay = 0,
  duration = 600,
  direction = 'up',
  threshold = 0.1,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setTimeout(() => {
              setIsVisible(true);
              setHasAnimated(true);
            }, delay);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, threshold, hasAnimated]);

  const getTransformClass = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-8';
      case 'down':
        return '-translate-y-8';
      case 'left':
        return 'translate-x-8';
      case 'right':
        return '-translate-x-8';
      case 'fade':
        return '';
      default:
        return 'translate-y-8';
    }
  };

  const getVisibleTransformClass = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-0';
      case 'down':
        return 'translate-y-0';
      case 'left':
        return 'translate-x-0';
      case 'right':
        return 'translate-x-0';
      case 'fade':
        return '';
      default:
        return 'translate-y-0';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-out ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      data-visible={isVisible}
    >
      <div
        className={`transform transition-all ease-out ${
          isVisible
            ? `opacity-100 ${getVisibleTransformClass()}`
            : `opacity-0 ${getTransformClass()}`
        }`}
        style={{
          transitionDuration: `${duration}ms`,
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default FadeInWrapper;