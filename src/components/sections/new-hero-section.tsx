"use client";

import { useState, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const NewHeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const parallaxParticles = scrollY * 0.3;
  const waveEffect = Math.sin(Date.now() * 0.001) * 10;

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden pt-20">
      {/* Floating particles */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 animate-float"
              style={{
                width: `${Math.random() * 10 + 2}px`,
                height: `${Math.random() * 10 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 5}s`,
                transform: `translateY(${parallaxParticles * (i % 3 + 1) * 0.5}px)`,
              }}
            />
          ))}
        </div>
      )}
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-yellow-900/10 via-black to-black" />
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main Headlines */}
        <div className={`transition-all duration-1000 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-[clamp(40px,8vw,120px)] font-bold mb-6 leading-[0.9] tracking-[-0.02em]">
            <span className="block diagonal-fade-1" style={!isMobile ? { transform: `translateY(${scrollY * 0.02}px)` } : {}}>Social media was built</span>
            <span className="block diagonal-fade-2" style={!isMobile ? { transform: `translateY(${scrollY * 0.03}px)` } : {}}>to trap your time.</span>
          </h1>
          
          <h2 className="text-[clamp(35px,7vw,100px)] font-bold mb-12 leading-[0.9] tracking-[-0.02em]">
            <span className="block diagonal-fade-3" style={!isMobile ? { transform: `translateY(${scrollY * 0.04}px)` } : {}}>We built one that</span>
            <span className="block diagonal-fade-4 text-yellow-400" style={!isMobile ? { transform: `translateY(${scrollY * 0.05}px)` } : {}}>rewards it.</span>
          </h2>
        </div>

        {/* Join Button with glow effect */}
        <div className={`transition-all duration-1000 delay-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block mb-8">
            <button 
              onClick={scrollToNextSection}
              className="relative bg-yellow-400 text-black font-bold text-xl px-12 py-4 hover:bg-yellow-300 transition-all duration-300 hover:scale-105 z-10"
            >
              JOIN OUR AURAVERSE
            </button>
            <div className="absolute -inset-1 bg-yellow-400 opacity-20 blur animate-pulse-slow"></div>
          </div>
        </div>

        {/* Supporting Text with enhanced styling */}
        <div className={`transition-all duration-1000 delay-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block">
            <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed relative z-10">
              Join the Auraverse, where your <span className="text-yellow-400 font-semibold">grind for attention</span> and creativity turns into <span className="text-yellow-400 font-semibold">Aura</span> 
              and your Aura turns into <span className="text-yellow-400 font-semibold">status, rewards, and glory.</span>
            </p>
            <div className="absolute -inset-2 bg-white opacity-5 blur rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-300"
        onClick={scrollToNextSection}
        style={!isMobile ? { 
          transform: `translateX(-50%) translateY(${waveEffect * 0.3}px)`,
          opacity: Math.max(0.3, 1 - scrollY * 0.001)
        } : {}}
      >
        <ChevronDownIcon className="w-8 h-8 text-white/90 hover:text-yellow-400 transition-colors animate-bounce" />
      </div>

      <style jsx>{`
        @keyframes diagonal-fade {
          from { 
            opacity: 0; 
            transform: translateX(-50px) translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0) translateY(0); 
          }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        .diagonal-fade-1 {
          animation: diagonal-fade 1s ease-out 0.2s both;
        }
        
        .diagonal-fade-2 {
          animation: diagonal-fade 1s ease-out 0.4s both;
        }
        
        .diagonal-fade-3 {
          animation: diagonal-fade 1s ease-out 0.6s both;
        }
        
        .diagonal-fade-4 {
          animation: diagonal-fade 1s ease-out 0.8s both;
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

export default NewHeroSection;