"use client";

import { useState, useEffect, useRef } from 'react';

const SolutionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  const parallaxOffset = scrollY * 0.08;

  return (
    <section ref={sectionRef} className="relative py-20 bg-black text-white overflow-hidden">
      {/* Golden particles */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-yellow-400/15 animate-float"
              style={{
                width: `${Math.random() * 50 + 15}px`,
                height: `${Math.random() * 50 + 15}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 8}s`,
                transform: `translateY(${parallaxOffset * (i % 3 + 1) * 0.2}px)`,
                filter: 'blur(25px)',
              }}
            />
          ))}
        </div>
      )}
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Main Title */}
        <div className={`mb-12 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block">
            <h2 className="text-[clamp(28px,5vw,72px)] font-bold text-yellow-400 mb-8 leading-tight relative z-10" style={!isMobile ? { transform: `translateY(${parallaxOffset * 0.2}px)` } : {}}>
              We don't do doom-scrolling.<br />We do <span className="animate-pulse-slow">Aura farming</span>.
            </h2>
            <div className="absolute -inset-4 bg-yellow-400 opacity-10 blur rounded-lg animate-pulse-slow"></div>
          </div>
        </div>

        {/* Description */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative mb-6">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed relative z-10" style={!isMobile ? { transform: `translateY(${parallaxOffset * 0.1}px)` } : {}}>
              We deserve better than an endless feed designed to drain attention and profit off insecurity. 
              <span className="text-yellow-400 font-semibold">Aurameter flips the script</span> — instead of trapping your attention, we <span className="text-yellow-400 font-semibold">reward it</span>.
            </p>
            <div className="absolute -inset-2 bg-white opacity-3 blur rounded-lg"></div>
          </div>
          
          <div className="relative mb-6">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed relative z-10" style={!isMobile ? { transform: `translateY(${parallaxOffset * 0.05}px)` } : {}}>
              You <span className="text-yellow-400 font-semibold">grind</span>, you <span className="text-yellow-400 font-semibold">play</span>, you <span className="text-yellow-400 font-semibold">compete</span>, and you earn Aura that actually matters.
            </p>
            <div className="absolute -inset-2 bg-white opacity-3 blur rounded-lg"></div>
          </div>
          
          <div className="relative text-center">
            <p className="text-xl md:text-2xl font-bold text-yellow-400 relative z-10" style={!isMobile ? { transform: `translateY(${parallaxOffset * 0.15}px)` } : {}}>
              No vanity metrics. No empty dopamine.<br />Just <span className="animate-pulse-slow">status, power, and rewards</span> you can flex.
            </p>
            <div className="absolute -inset-3 bg-yellow-400 opacity-15 blur rounded-lg animate-pulse-slow"></div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default SolutionSection;