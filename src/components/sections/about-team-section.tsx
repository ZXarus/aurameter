"use client";

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
}

const AboutTeamSection = () => {
  // Generate 20 team members
  const teamMembers: TeamMember[] = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `TEAM MEMBER ${String(i + 1).padStart(2, '0')}`,
    role: i % 2 === 0 ? "creative leader" : "strategy director",
    image: `https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${(i % 50) + 1}.jpg`,
    description: "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum"
  }));

  const handlePhotoClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    target.style.transform = 'scale(1.1)';
    setTimeout(() => {
      target.style.transform = 'scale(1)';
    }, 300);
  };

  const handleSocialIconHover = (e: React.MouseEvent<HTMLAnchorElement>, isEnter: boolean) => {
    const target = e.currentTarget;
    if (isEnter) {
      target.style.transform = 'translateY(-5px) scale(1.1)';
    } else {
      target.style.transform = 'translateY(0) scale(1)';
    }
  };

  return (
    <section className="py-16 px-4 md:px-5 bg-black text-white overflow-x-hidden" style={{ fontFamily: 'var(--font-sans)' }}>
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-10 md:mb-20 tracking-wide break-words relative mx-auto after:content-[''] after:block after:w-24 after:h-1 after:bg-[#FFD700] after:mx-auto after:mt-4 after:rounded-full" style={{ fontFamily: 'serif', fontStyle: 'italic' }}>
          Meet The Team
        </h1>
        
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-10">
          {/* First row with 2 members - always 2 columns */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {teamMembers.slice(0, 2).map((member) => (
              <div key={member.id} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full object-cover mx-auto mb-3 sm:mb-4 md:mb-6 block transition-all duration-300 cursor-pointer"
                  onClick={handlePhotoClick}
                  style={{ transition: 'all 0.3s ease' }}
                />
                <h2 className="text-base sm:text-lg md:text-xl font-bold uppercase text-white mb-1 sm:mb-2 tracking-[0.5px] break-words">
                  {member.name}
                </h2>
                <p className="text-xs sm:text-sm md:text-base font-semibold text-[#FFD700] mb-2 md:mb-4 break-words">
                  {member.role}
                </p>
                <p className="text-[10px] xs:text-xs sm:text-sm leading-[1.6] text-gray-300 mb-3 px-1 sm:px-2 break-words">
                  {member.description}
                </p>
                <div className="flex justify-center gap-2 sm:gap-3 md:gap-4">
                  <a 
                    href="#" 
                    aria-label="Facebook"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaFacebookF />
                  </a>
                  <a 
                    href="#" 
                    aria-label="Twitter"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaTwitter />
                  </a>
                  <a 
                    href="#" 
                    aria-label="Instagram"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href="#" 
                    aria-label="LinkedIn"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Subsequent rows with 3 members each - always 3 columns on mobile and all larger screens */}
          {/* Second row */}
          <div className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {teamMembers.slice(2, 5).map((member) => (
              <div key={member.id} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full object-cover mx-auto mb-3 sm:mb-4 md:mb-6 block transition-all duration-300 cursor-pointer"
                  onClick={handlePhotoClick}
                  style={{ transition: 'all 0.3s ease' }}
                />
                <h2 className="text-base sm:text-lg md:text-xl font-bold uppercase text-white mb-1 sm:mb-2 tracking-[0.5px] break-words">
                  {member.name}
                </h2>
                <p className="text-xs sm:text-sm md:text-base font-semibold text-[#FFD700] mb-2 md:mb-4 break-words">
                  {member.role}
                </p>
                <p className="text-[10px] xs:text-xs sm:text-sm leading-[1.6] text-gray-300 mb-3 px-1 sm:px-2 break-words">
                  {member.description}
                </p>
                <div className="flex justify-center gap-2 sm:gap-3 md:gap-4">
                  <a 
                    href="#" 
                    aria-label="Facebook"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaFacebookF />
                  </a>
                  <a 
                    href="#" 
                    aria-label="Twitter"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaTwitter />
                  </a>
                  <a 
                    href="#" 
                    aria-label="Instagram"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href="#" 
                    aria-label="LinkedIn"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Third row */}
          <div className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {teamMembers.slice(5, 8).map((member) => (
              <div key={member.id} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full object-cover mx-auto mb-3 sm:mb-4 md:mb-6 block transition-all duration-300 cursor-pointer"
                  onClick={handlePhotoClick}
                  style={{ transition: 'all 0.3s ease' }}
                />
                <h2 className="text-base sm:text-lg md:text-xl font-bold uppercase text-white mb-1 sm:mb-2 tracking-[0.5px] break-words">
                  {member.name}
                </h2>
                <p className="text-xs sm:text-sm md:text-base font-semibold text-[#FFD700] mb-2 md:mb-4 break-words">
                  {member.role}
                </p>
                <p className="text-[10px] xs:text-xs sm:text-sm leading-[1.6] text-gray-300 mb-3 px-1 sm:px-2 break-words">
                  {member.description}
                </p>
                <div className="flex justify-center gap-2 sm:gap-3 md:gap-4">
                  <a 
                    href="#" 
                    aria-label="Facebook"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaFacebookF />
                  </a>
                  <a 
                    href="#" 
                    aria-label="Twitter"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaTwitter />
                  </a>
                  <a 
                    href="#" 
                    aria-label="Instagram"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href="#" 
                    aria-label="LinkedIn"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Fourth row */}
          <div className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {teamMembers.slice(8, 11).map((member) => (
              <div key={member.id} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full object-cover mx-auto mb-3 sm:mb-4 md:mb-6 block transition-all duration-300 cursor-pointer"
                  onClick={handlePhotoClick}
                  style={{ transition: 'all 0.3s ease' }}
                />
                <h2 className="text-base sm:text-lg md:text-xl font-bold uppercase text-white mb-1 sm:mb-2 tracking-[0.5px] break-words">
                  {member.name}
                </h2>
                <p className="text-xs sm:text-sm md:text-base font-semibold text-[#FFD700] mb-2 md:mb-4 break-words">
                  {member.role}
                </p>
                <p className="text-[10px] xs:text-xs sm:text-sm leading-[1.6] text-gray-300 mb-3 px-1 sm:px-2 break-words">
                  {member.description}
                </p>
                <div className="flex justify-center gap-2 sm:gap-3 md:gap-4">
                  <a 
                    href="#" 
                    aria-label="Facebook"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaFacebookF />
                  </a>
                  <a 
                    href="#" 
                    aria-label="Twitter"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaTwitter />
                  </a>
                  <a 
                    href="#" 
                    aria-label="Instagram"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href="#" 
                    aria-label="LinkedIn"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Fifth row */}
          <div className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {teamMembers.slice(11, 14).map((member) => (
              <div key={member.id} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full object-cover mx-auto mb-3 sm:mb-4 md:mb-6 block transition-all duration-300 cursor-pointer"
                  onClick={handlePhotoClick}
                  style={{ transition: 'all 0.3s ease' }}
                />
                <h2 className="text-base sm:text-lg md:text-xl font-bold uppercase text-white mb-1 sm:mb-2 tracking-[0.5px] break-words">
                  {member.name}
                </h2>
                <p className="text-xs sm:text-sm md:text-base font-semibold text-[#FFD700] mb-2 md:mb-4 break-words">
                  {member.role}
                </p>
                <p className="text-[10px] xs:text-xs sm:text-sm leading-[1.6] text-gray-300 mb-3 px-1 sm:px-2 break-words">
                  {member.description}
                </p>
                <div className="flex justify-center gap-2 sm:gap-3 md:gap-4">
                  <a 
                    href="#" 
                    aria-label="Facebook"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaFacebookF />
                  </a>
                  <a 
                    href="#" 
                    aria-label="Twitter"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaTwitter />
                  </a>
                  <a 
                    href="#" 
                    aria-label="Instagram"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href="#" 
                    aria-label="LinkedIn"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Sixth row */}
          <div className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {teamMembers.slice(14, 17).map((member) => (
              <div key={member.id} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full object-cover mx-auto mb-3 sm:mb-4 md:mb-6 block transition-all duration-300 cursor-pointer"
                  onClick={handlePhotoClick}
                  style={{ transition: 'all 0.3s ease' }}
                />
                <h2 className="text-base sm:text-lg md:text-xl font-bold uppercase text-white mb-1 sm:mb-2 tracking-[0.5px] break-words">
                  {member.name}
                </h2>
                <p className="text-xs sm:text-sm md:text-base font-semibold text-[#FFD700] mb-2 md:mb-4 break-words">
                  {member.role}
                </p>
                <p className="text-[10px] xs:text-xs sm:text-sm leading-[1.6] text-gray-300 mb-3 px-1 sm:px-2 break-words">
                  {member.description}
                </p>
                <div className="flex justify-center gap-2 sm:gap-3 md:gap-4">
                  <a 
                    href="#" 
                    aria-label="Facebook"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaFacebookF />
                  </a>
                  <a 
                    href="#" 
                    aria-label="Twitter"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaTwitter />
                  </a>
                  <a 
                    href="#" 
                    aria-label="Instagram"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href="#" 
                    aria-label="LinkedIn"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Seventh row */}
          <div className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {teamMembers.slice(17, 20).map((member) => (
              <div key={member.id} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full object-cover mx-auto mb-3 sm:mb-4 md:mb-6 block transition-all duration-300 cursor-pointer"
                  onClick={handlePhotoClick}
                  style={{ transition: 'all 0.3s ease' }}
                />
                <h2 className="text-base sm:text-lg md:text-xl font-bold uppercase text-white mb-1 sm:mb-2 tracking-[0.5px] break-words">
                  {member.name}
                </h2>
                <p className="text-xs sm:text-sm md:text-base font-semibold text-[#FFD700] mb-2 md:mb-4 break-words">
                  {member.role}
                </p>
                <p className="text-[10px] xs:text-xs sm:text-sm leading-[1.6] text-gray-300 mb-3 px-1 sm:px-2 break-words">
                  {member.description}
                </p>
                <div className="flex justify-center gap-2 sm:gap-3 md:gap-4">
                  <a 
                    href="#" 
                    aria-label="Facebook"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaFacebookF />
                  </a>
                  <a 
                    href="#" 
                    aria-label="Twitter"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaTwitter />
                  </a>
                  <a 
                    href="#" 
                    aria-label="Instagram"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href="#" 
                    aria-label="LinkedIn"
                    className="text-white text-base sm:text-lg md:text-xl transition-all duration-300 no-underline hover:text-[#FFD700]"
                    onMouseEnter={(e) => handleSocialIconHover(e, true)}
                    onMouseLeave={(e) => handleSocialIconHover(e, false)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;