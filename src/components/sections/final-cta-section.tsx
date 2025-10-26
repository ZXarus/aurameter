"use client";

import { useState, useEffect, useRef } from 'react';

const FinalCTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    alert('Thanks for joining the Auraverse!');
    setEmail('');
  };

  const parallaxOffset = scrollY * 0.03;
  const waveEffect = Math.sin(Date.now() * 0.002) * 5;

  return (
    <section ref={sectionRef} className="relative py-20 bg-black text-white overflow-hidden">
      {/* Glowing particles */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-yellow-400/20 animate-float"
              style={{
                width: `${Math.random() * 30 + 10}px`,
                height: `${Math.random() * 30 + 10}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 8 + 6}s`,
                transform: `translateY(${parallaxOffset * (i % 4 + 1) * 0.5}px)`,
                filter: 'blur(10px)',
              }}
            />
          ))}
        </div>
      )}
      
      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        {/* Main Message */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block mb-6">
            <h2 className="text-[clamp(32px,6vw,64px)] font-bold relative z-10" style={!isMobile ? { transform: `translateY(${parallaxOffset * 0.2 + waveEffect * 0.1}px)` } : {}}>
              Are you still scrolling?
            </h2>
            <div className="absolute -inset-3 bg-white opacity-5 blur rounded-lg animate-pulse-slow"></div>
          </div>
          
          <div className="relative inline-block mb-6">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed relative z-10" style={!isMobile ? { transform: `translateY(${parallaxOffset * 0.1}px)` } : {}}>
              This isn't a magic trick. It's your <span className="text-yellow-400 font-bold animate-pulse-slow">moment</span>.
            </p>
            <div className="absolute -inset-2 bg-white opacity-3 blur rounded-lg"></div>
          </div>
          
          <div className="relative inline-block">
            <p className="text-lg md:text-xl font-semibold text-yellow-400 mb-12 relative z-10" style={!isMobile ? { transform: `translateY(${parallaxOffset * 0.15}px)` } : {}}>
              Join us. <span className="animate-pulse-slow">Flex later.</span>
            </p>
            <div className="absolute -inset-2 bg-yellow-400 opacity-10 blur rounded-lg animate-pulse-slow"></div>
          </div>
        </div>

        {/* Email Form */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block mb-8">
            <p className="text-lg text-white/80 relative z-10">
              Enter your email below to claim your spot.
            </p>
            <div className="absolute -inset-1 bg-white opacity-3 blur rounded-lg"></div>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@college.edu"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-all duration-300 relative z-10"
                  required
                />
                <div className="absolute -inset-1 bg-white opacity-5 blur rounded-lg"></div>
              </div>
              <div className="relative">
                <button
                  type="submit"
                  className="px-8 py-3 bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 relative z-10"
                >
                  CLAIM SPOT
                </button>
                <div className="absolute -inset-1 bg-yellow-400 opacity-20 blur animate-pulse-slow"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
          100% { transform: translateY(0px) rotate(360deg); }
        }
        
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default FinalCTASection;