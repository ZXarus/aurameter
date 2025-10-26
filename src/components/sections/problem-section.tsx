"use client";

import { useState, useEffect, useRef } from 'react';

const ProblemSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [revealedLines, setRevealedLines] = useState<number[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const problemLines = [
    "Scroll. Compare. Repeat.",
    "Fake vibes. Filtered lives. Zero meaning.",
    "You give your time. It gives you nothing."
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Reveal lines one by one
          problemLines.forEach((_, index) => {
            setTimeout(() => {
              setRevealedLines(prev => [...prev, index]);
            }, (index + 1) * 800);
          });
        }
      },
      { threshold: 0.3 }
    );

    const handleScroll = () => setScrollY(window.scrollY);
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    
    window.addEventListener('scroll', handleScroll);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxOffset = scrollY * 0.05;

  return (
    <section ref={sectionRef} className="relative py-20 bg-gray-900 text-white overflow-hidden">
      {/* Dark particles */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-red-400/10 animate-float"
              style={{
                width: `${Math.random() * 40 + 10}px`,
                height: `${Math.random() * 40 + 10}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 12 + 8}s`,
                transform: `translateY(${parallaxOffset * (i % 3 + 1) * 0.4}px)`,
                filter: 'blur(15px)',
              }}
            />
          ))}
        </div>
      )}
      
      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        {/* Title */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block">
            <h2 className="text-[clamp(36px,6vw,80px)] font-bold text-red-400 relative z-10" style={!isMobile ? { transform: `translateY(${parallaxOffset * 0.3}px)` } : {}}>
              Social media is broken.
            </h2>
            <div className="absolute -inset-3 bg-red-400 opacity-10 blur rounded-lg animate-pulse-slow"></div>
          </div>
        </div>

        {/* Scrolly Lines */}
        <div className="space-y-8">
          {problemLines.map((line, index) => (
            <div
              key={index}
              className={`text-xl md:text-2xl font-medium transition-all duration-1000 ${
                revealedLines.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={!isMobile ? { transform: `translateY(${parallaxOffset * 0.1 * (index + 1)}px)` } : {}}
            >
              <div className="relative inline-block">
                <p className="text-white/90 relative z-10">{line}</p>
                <div className="absolute -inset-2 bg-white opacity-5 blur rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default ProblemSection;