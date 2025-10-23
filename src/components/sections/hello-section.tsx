"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/use-mobile';
import Link from 'next/link';

// Circle component for moving text elements
const MovingCircle = ({ text, index }: { text: string; index: number }) => {
  const circleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!circleRef.current) return;
    
    // Initialize random position and velocity
    const circle = circleRef.current;
    const container = circle.parentElement;
    if (!container) return;
    
    const containerRect = container.getBoundingClientRect();
    const maxX = containerRect.width - circle.offsetWidth;
    const maxY = containerRect.height - circle.offsetHeight;
    
    // Random starting position
    let x = Math.random() * maxX;
    let y = Math.random() * maxY;
    
    // Random velocity
    let vx = (Math.random() - 0.5) * 2;
    let vy = (Math.random() - 0.5) * 2;
    
    // Ensure minimum speed
    if (Math.abs(vx) < 0.2) vx = 0.2 * (vx > 0 ? 1 : -1);
    if (Math.abs(vy) < 0.2) vy = 0.2 * (vy > 0 ? 1 : -1);
    
    // Animation function
    const animate = () => {
      if (!circle || !container) return;
      
      // Update position
      x += vx;
      y += vy;
      
      // Boundary collision - bounce
      if (x <= 0 || x >= maxX) {
        vx = -vx;
        x = x <= 0 ? 0 : maxX;
      }
      if (y <= 0 || y >= maxY) {
        vy = -vy;
        y = y <= 0 ? 0 : maxY;
      }
      
      // Apply new position
      circle.style.transform = `translate(${x}px, ${y}px)`;
      
      // Continue animation
      requestAnimationFrame(animate);
    };
    
    // Start animation
    const animationId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [index]);
  
  return (
    <div
      ref={circleRef}
      className="absolute rounded-full border-2 border-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400"
      style={{
        width: '120px',
        height: '120px',
        left: '0',
        top: '0',
        willChange: 'transform',
      }}
    >
      <span className="text-center font-['Dancing_Script'] font-semibold text-white text-lg">
        {text}
      </span>
    </div>
  );
};

const HelloSection = () => {
  const isMobile = useIsMobile();

  // Using the new image URLs
  const faceSvgUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/90045eb5-1278-4866-96fd-694b701cd2a9-synchronized-studio/assets/svgs/face-7.svg?";
  const sunSvgUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/90045eb5-1278-4866-96fd-694b701cd2a9-synchronized-studio/assets/svgs/sun-5.svg?";

  // Adjust font sizes for better mobile experience while keeping the same font style
  const heroTextSize = isMobile 
    ? "text-[36px] leading-[0.9] tracking-[-1px]" 
    : "text-[48px] sm:text-[58px] md:text-[75px] lg:text-[100px] xl:text-[120px] leading-[0.9] tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px]";

  const diagonalSlashSize = isMobile 
    ? "w-[35px] h-[1.5px] my-4" 
    : "w-[45px] sm:w-[55px] md:w-[70px] lg:w-[85px] xl:w-[100px] h-[1.5px] sm:h-2 md:h-[2px] lg:h-[2px] xl:h-[2.5px] my-6 sm:my-7 md:my-8 lg:my-9 xl:my-10";

  const emailSize = isMobile 
    ? "text-[20px] border-b-[2px] pb-1" 
    : "text-[26px] sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[48px] border-b-[2px] md:border-b-[2.5px] pb-1 sm:pb-2 md:pb-2 lg:pb-3";

  const bottomTextSize = isMobile 
    ? "text-[13px] tracking-[1px] leading-[1.8] mt-4" 
    : "text-[15px] sm:text-[17px] md:text-[20px] lg:text-[22px] xl:text-[24px] tracking-[1px] sm:tracking-[1px] md:tracking-[1.5px] lg:tracking-[2px] leading-[1.8] mt-6 sm:mt-7 md:mt-8 lg:mt-10";

  const imageSize = isMobile 
    ? "w-[30px] h-auto" 
    : "w-[40px] sm:w-[50px] md:w-[60px] lg:w-[80px] h-auto";

  const sunImageSize = isMobile 
    ? "w-[40px] h-auto" 
    : "w-[50px] sm:w-[60px] md:w-[70px] lg:w-[100px] h-auto";

  const starburstSize = isMobile 
    ? "w-[100px] h-[100px] my-6" 
    : "w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] my-8 sm:my-9 md:my-10 lg:my-12";

  const raySize = isMobile 
    ? "w-[50px] h-[1px]" 
    : "w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px] h-[1px]";

  // Texts for the moving circles
  const circleTexts = ["About", "Work", "Recognition", "Contact us"];

  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black z-0"></div>
      
      <div className="container relative z-10">
        <div className="w-full min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-6 md:px-10 lg:px-20">
          {/* Moving Circles Container - New Feature */}
          <div className="fixed inset-0 pointer-events-none z-10">
            <div className="relative w-full h-full">
              {circleTexts.map((text, index) => (
                <MovingCircle key={index} text={text} index={index} />
              ))}
            </div>
          </div>
          
          {/* Main Content */}
          <div className="main-content text-center max-w-[1400px] w-full relative z-20">
            {/* Hero Text */}
            <div className="hero-text mb-12 sm:mb-16 md:mb-20 lg:mb-28">
              <div className={`text-line font-['Dancing_Script'] font-semibold mb-0 ${heroTextSize}`}>
                Don't hesitate
              </div>
              <div className={`text-line font-['Dancing_Script'] font-semibold mb-0 ${heroTextSize}`}>
                to say Hello
              </div>
              
              {/* Diagonal Slash */}
              <div className={`diagonal-slash bg-white mx-auto transform rotate-[-15deg] ${diagonalSlashSize}`}></div>
              
              <div className={`text-line font-['Dancing_Script'] font-semibold mb-0 ${heroTextSize}`}>
                to our team
              </div>
              
              {/* Animated elements */}
              <div className="flex items-end justify-center space-x-2 sm:space-x-3 md:space-x-4 mt-8 sm:mt-10 md:mt-12">
                <Image 
                  src={faceSvgUrl} 
                  alt="Face illustration" 
                  width={40} 
                  height={40} 
                  className={`${imageSize} animate-float`} 
                  style={{ animationDuration: '6s' }}  
                />
                {/* Button between Face and Sun illustrations */}
                <Link href="/team">
                  <button 
                    className="px-4 py-2 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
                  >
                    See the Team
                  </button>
                </Link>
                <Image 
                  src={sunSvgUrl} 
                  alt="Sun illustration" 
                  width={50} 
                  height={50} 
                  className={`${sunImageSize} animate-[spin_20s_linear_infinite]`} 
                />
              </div>
              
              {/* Starburst */}
              <div className={`starburst relative mx-auto ${starburstSize}`}>
                {[...Array(16)].map((_, i) => (
                  <div 
                    key={i}
                    className={`ray absolute bg-gradient-to-r from-transparent via-gray-500 to-transparent top-1/2 left-1/2 origin-left ${raySize}`}
                    style={{ transform: `rotate(${i * 22.5}deg)` }}
                  />
                ))}
              </div>
            </div>

            {/* Email - Changed to "see the team" */}
            <div className="email-section my-12 sm:my-14 md:my-16 lg:my-20">
              <div className={`email font-['PT_Serif'] font-normal border-white inline-block tracking-normal ${emailSize}`}>
                see the team
              </div>
            </div>

            {/* Bottom Text */}
            <div className={`bottom-text font-['Dancing_Script'] font-medium ${bottomTextSize}`}>
              Work inquiries and<br />partnerships
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelloSection;