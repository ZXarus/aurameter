"use client";

import { useState, useEffect, useRef } from 'react';

const NewAboutSection = () => {
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

  const parallaxOffset = scrollY * 0.1;

  return (
    <section ref={sectionRef} className="relative py-20 bg-black text-white overflow-hidden">
      {/* Floating particles */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-yellow-400/10 animate-float"
              style={{
                width: `${Math.random() * 60 + 20}px`,
                height: `${Math.random() * 60 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 15 + 10}s`,
                transform: `translateY(${parallaxOffset * (i % 3 + 1) * 0.3}px)`,
                filter: 'blur(20px)',
              }}
            />
          ))}
        </div>
      )}
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* What is Aurameter */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <h2 className="text-[clamp(32px,5vw,64px)] font-bold mb-6 text-yellow-400" style={!isMobile ? { transform: `translateY(${parallaxOffset * 0.2}px)` } : {}}>
              What is Aurameter?
            </h2>
            <div className="absolute -inset-2 bg-yellow-400 opacity-5 blur rounded-lg"></div>
          </div>
          <div className="relative">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl relative z-10">
              Aurameter is a social media app where you play, compete, and climb your college and global leaderboards. 
              Every interaction you make earns <span className="text-yellow-400 font-bold animate-pulse-slow">AURA</span> — your status, your currency, your power.
            </p>
            <div className="absolute -inset-1 bg-white opacity-3 blur rounded-lg"></div>
          </div>
        </div>

        {/* What is AuraVerse */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <h2 className="text-[clamp(32px,5vw,64px)] font-bold mb-6 text-yellow-400" style={!isMobile ? { transform: `translateY(${parallaxOffset * 0.15}px)` } : {}}>
              What is AuraVerse?
            </h2>
            <div className="absolute -inset-2 bg-yellow-400 opacity-5 blur rounded-lg"></div>
          </div>
          <div className="relative">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl relative z-10">
              The Auraverse is where you farm Aura with others and against others — <span className="text-yellow-400 font-semibold">flex your identity</span>, 
              <span className="text-yellow-400 font-semibold">prove your rank</span>, and become someone <span className="text-yellow-400 font-semibold">unforgettable</span>.
            </p>
            <div className="absolute -inset-1 bg-white opacity-3 blur rounded-lg"></div>
          </div>
        </div>

        {/* Features */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative mb-8">
            <h2 className="text-[clamp(32px,5vw,64px)] font-bold text-yellow-400" style={!isMobile ? { transform: `translateY(${parallaxOffset * 0.1}px)` } : {}}>
              Features
            </h2>
            <div className="absolute -inset-2 bg-yellow-400 opacity-5 blur rounded-lg"></div>
          </div>
          
          <div className="overflow-hidden relative">
            <div className="flex animate-scroll-horizontal space-x-8 text-lg md:text-xl font-semibold">
              <span className="whitespace-nowrap hover:text-yellow-400 transition-colors">Discover Your Aura</span>
              <span className="text-yellow-400 animate-pulse">•</span>
              <span className="whitespace-nowrap hover:text-yellow-400 transition-colors">Compete with Your College</span>
              <span className="text-yellow-400 animate-pulse">•</span>
              <span className="whitespace-nowrap hover:text-yellow-400 transition-colors">Climb the Leaderboards</span>
              <span className="text-yellow-400 animate-pulse">•</span>
              <span className="whitespace-nowrap hover:text-yellow-400 transition-colors">Enjoy mindscape (Game hub)</span>
              <span className="text-yellow-400 animate-pulse">•</span>
              <span className="whitespace-nowrap hover:text-yellow-400 transition-colors">Personalized themes</span>
              <span className="text-yellow-400 animate-pulse">•</span>
              <span className="whitespace-nowrap hover:text-yellow-400 transition-colors">Chat with Intent</span>
              <span className="text-yellow-400 animate-pulse">•</span>
              <span className="whitespace-nowrap hover:text-yellow-400 transition-colors">Earn Real Rewards</span>
              <span className="text-yellow-400 animate-pulse">•</span>
              <span className="whitespace-nowrap hover:text-yellow-400 transition-colors">Discover Your Aura</span>
              <span className="text-yellow-400 animate-pulse">•</span>
              <span className="whitespace-nowrap hover:text-yellow-400 transition-colors">Compete with Your College</span>
            </div>
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-scroll-horizontal {
          animation: scroll-horizontal 20s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default NewAboutSection;