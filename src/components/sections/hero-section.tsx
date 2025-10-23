"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDownIcon } from 'lucide-react';
import { useScrollAnimation } from '@/lib/hooks/use-scroll-animation';
import { useIsMobile } from '@/hooks/use-mobile';

const AnimatedBackgroundText = ({ scrollY, isMobile }: { scrollY: number, isMobile: boolean }) => {
    // Simplified background text for mobile
    if (isMobile) {
      return null;
    }
    
    const text = "AuraMeter • AuraMeter • AuraMeter • AuraMeter • ";
    const repeatedText = text.repeat(6);

    return (
        <div 
            className="absolute inset-x-0 -top-1/4 -bottom-1/4 z-0 flex items-center justify-center overflow-hidden pointer-events-none"
            aria-hidden="true"
        >
            <div 
                className="relative flex whitespace-nowrap text-[clamp(100px,20vw,250px)] font-bold text-white/5 uppercase"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
                <div className="animate-marquee will-change-transform">
                    {repeatedText}
                </div>
                <div className="absolute top-0 animate-marquee2 will-change-transform">
                    {repeatedText}
                </div>
            </div>
        </div>
    );
};

const HeroSection = () => {
  const { scrollY, velocity, scrollOpacity, scrollBlur, hueRotation } = useScrollAnimation();
  const isMobile = useIsMobile();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Trigger mount animation
    setIsMounted(true);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Calculate parallax effect for floating particles
  const parallaxParticles = scrollY * 0.2;
  
  // Calculate wave effect for decorative elements
  const waveEffect = Math.sin(scrollY * 0.02) * 10;

  return (
    <>
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0%); }
            to { transform: translateX(-100%); }
          }
          @keyframes marquee2 {
            from { transform: translateX(100%); }
            to { transform: translateX(0%); }
          }
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          @keyframes pulse {
            0% { opacity: 0.5; }
            50% { opacity: 1; }
            100% { opacity: 0.5; }
          }
          @keyframes wave {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .animate-marquee {
            animation: marquee 60s linear infinite;
          }
          .animate-marquee2 {
            animation: marquee2 60s linear infinite;
          }
          .animate-rotate {
            animation: rotate 20s linear infinite;
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-pulse-slow {
            animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          .animate-wave {
            animation: wave 4s ease-in-out infinite;
          }
        `}
      </style>
      <section className="relative flex items-center justify-center min-h-screen text-foreground overflow-hidden py-16 md:py-24">
        <AnimatedBackgroundText scrollY={scrollY} isMobile={isMobile} />
        
        {/* Floating particles with parallax effect - Reduced for mobile performance */}
        {!isMobile && (
          <div className="absolute inset-0 z-0 pointer-events-none">
            {[...Array(10)].map((_, i) => (
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
                  opacity: scrollOpacity,
                  filter: `blur(${scrollBlur}px)`
                }}
              />
            ))}
          </div>
        )}
        
        <div className="relative z-10 w-full container py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[60vh]">
            
            {/* Main Artistic Typography - Left/Center */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className={`transition-all duration-1000 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 
                  className="text-[clamp(60px,12vw,180px)] font-bold leading-[0.85] tracking-[-0.03em]"
                  style={isMobile ? {} : { 
                    transform: `translateY(${scrollY * 0.05}px)`
                  }}
                >
                  <span className="block animate-pulse-slow">AuraMeter</span>
                  <span className="block mt-2 sm:mt-3">Social Media</span>
                  <span className="block mt-2 sm:mt-3 italic">that Heals</span>
                </h1>
              </div>
              
              {/* Bottom Text with increased spacing for mobile */}
              <div className={`mt-8 sm:mt-10 lg:mt-12 transition-all duration-1000 delay-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex items-center gap-4 sm:gap-5 flex-wrap">
                  {!isMobile ? (
                    <>
                      <div className="relative animate-float" style={{ animationDelay: '1s', animationDuration: '5s' }}>
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center">
                          <span className="text-overline">WE</span>
                        </div>
                      </div>
                      <div className="relative animate-float" style={{ animationDelay: '2s', animationDuration: '5s' }}>
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center">
                          <span className="text-overline">ARE</span>
                        </div>
                      </div>
                      <div className="animate-float" style={{ animationDelay: '3s', animationDuration: '5s' }}>
                        <p className="text-[clamp(20px,2.5vw,32px)] font-bold leading-tight tracking-tight">
                          YOUR<br />AURA
                        </p>
                      </div>
                    </>
                  ) : (
                    // Simplified version for mobile
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                        <span className="text-[10px] font-bold">WE</span>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                        <span className="text-[10px] font-bold">ARE</span>
                      </div>
                      <p className="text-[20px] font-bold leading-tight">
                        YOUR<br />AURA
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-6">
              <div className={`text-center lg:text-right transition-all duration-1000 delay-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <p className="text-[clamp(16px,1.8vw,20px)] leading-[1.4] text-white/80 mb-4">
                  Stop chasing likes.<br />
                  Start growing your aura.
                </p>
                <p className="text-[clamp(12px,1.3vw,16px)] leading-[1.5] text-white/60 max-w-md mx-auto lg:mx-0 lg:ml-auto">
                  AI-powered emotional intelligence meets social connection. 
                  Earn rewards for authenticity, not attention.
                </p>
              </div>

              {/* Decorative Circle with Download Button */}
              <div className={`relative flex items-center justify-center py-4 transition-all duration-1000 delay-700 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
                <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                  {/* Rotating circle background - REPLACED */}
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      animation: `spin 25s linear infinite`,
                    }}
                  >
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/90045eb5-1278-4866-96fd-694b701cd2a9-synchronized-studio/assets/svgs/circle-text-3.svg?"
                      alt="Rotating aura symbol"
                      fill
                      sizes="(max-width: 640px) 192px, 224px"
                    />
                  </div>
                  
                  {/* Download text inside the circle with enhanced styling */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2 z-10">
                    <p className="text-[16px] sm:text-[18px] font-extrabold leading-tight text-yellow-400 drop-shadow-[0_0_8px_rgba(255,215,0,0.8)] animate-pulse tracking-wider">
                      DOWNLOAD
                    </p>
                    <p className="text-[14px] sm:text-[16px] font-extrabold italic underline underline-offset-4 decoration-2 decoration-yellow-400 text-yellow-400 drop-shadow-[0_0_6px_rgba(255,215,0,0.6)] animate-pulse-slow mt-1">
                      START AURA FARMING
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer transition-all duration-300"
          onClick={scrollToNextSection}
          style={isMobile ? {} : { 
            transform: `translateX(-50%) translateY(${waveEffect}px)`,
            opacity: Math.max(0, 1 - scrollY * 0.001)
          }}
        >
          <ChevronDownIcon className="w-6 h-6 text-white/60 hover:text-white transition-colors" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;