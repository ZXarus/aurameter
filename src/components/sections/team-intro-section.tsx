"use client";

import React from 'react';
import { useScrollAnimation } from '@/lib/hooks/use-scroll-animation';
import { useIsMobile } from '@/hooks/use-mobile';

const TeamIntroSection = () => {
  const { scrollY, scrollOpacity } = useScrollAnimation();
  const isMobile = useIsMobile();

  // Sample team members data - you can replace with actual data
  const teamMembers = [
    {
      id: 1,
      name: "Alex Morgan",
      role: "Founder & CEO",
      bio: "Visionary leader with 10+ years in digital innovation.",
    },
    {
      id: 2,
      name: "Jamie Chen",
      role: "Creative Director",
      bio: "Award-winning designer specializing in immersive experiences.",
    },
    {
      id: 3,
      name: "Taylor Williams",
      role: "Lead Developer",
      bio: "Full-stack expert passionate about cutting-edge technologies.",
    },
    {
      id: 4,
      name: "Jordan Lee",
      role: "UX Researcher",
      bio: "Human-centered design advocate with a psychology background.",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-black">
      <div className="container relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-[clamp(36px,5vw,64px)] font-bold leading-[1.1] tracking-[-0.01em] mb-6 text-white">
            Meet Our <span className="text-yellow-400">Team</span>
          </h2>
          <p className="text-[16px] leading-[1.7] max-w-2xl mx-auto text-foreground/80">
            Passionate experts dedicated to revolutionizing the digital landscape through innovative solutions and exceptional craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/20 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]"
            >
              {/* Decorative corner elements */}
              <div className="absolute top-3 left-3 w-3 h-3 border-l-2 border-t-2 border-yellow-500/50 rounded-tl-md"></div>
              <div className="absolute top-3 right-3 w-3 h-3 border-r-2 border-t-2 border-yellow-500/50 rounded-tr-md"></div>
              <div className="absolute bottom-3 left-3 w-3 h-3 border-l-2 border-b-2 border-yellow-500/50 rounded-bl-md"></div>
              <div className="absolute bottom-3 right-3 w-3 h-3 border-r-2 border-b-2 border-yellow-500/50 rounded-br-md"></div>
              
              {/* Member image placeholder */}
              <div className="relative mb-6">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 flex items-center justify-center border-2 border-yellow-500/30">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-yellow-500/30 to-yellow-600/30 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Member info */}
              <div className="text-center">
                <h3 className="text-[20px] md:text-[24px] font-bold mb-2 text-white">
                  {member.name}
                </h3>
                <p className="text-yellow-400 font-medium text-[14px] md:text-[16px] mb-4">
                  {member.role}
                </p>
                <p className="text-[14px] md:text-[16px] text-foreground/80">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 text-center">
          <p className="text-[16px] leading-[1.7] max-w-2xl mx-auto text-foreground/80 mb-8">
            Interested in joining our team? We're always looking for talented individuals who share our passion for innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#" 
              className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-full font-bold text-[14px] md:text-[16px] transition-all duration-300 hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 mx-auto sm:mx-0"
            >
              <span className="relative z-10">View Open Positions</span>
            </a>
            
            <a 
              href="mailto:careers@aurameter.app" 
              className="px-6 py-3 md:px-8 md:py-4 border-2 border-white/30 rounded-full font-bold text-[14px] md:text-[16px] transition-all duration-300 hover:border-white/60 hover:bg-white/10 transform hover:scale-105 mx-auto sm:mx-0"
            >
              Contact Careers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamIntroSection;