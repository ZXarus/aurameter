"use client";

import React from 'react';

// Updated reward data - separating icons and descriptions
const rewardsData = [
  { title: "Gift Cards", value: "Unlimited", icon: "💳", bgColor: "bg-black", description: "Earn unlimited gift cards from your favorite brands" },
  { title: "Gift Cards", value: "Monthly", icon: "💳", bgColor: "bg-black", description: "Monthly rewards from premium retailers" },
  { title: "Experiences", value: "Weekly", icon: "🚀", bgColor: "bg-black", description: "Exclusive weekly events and activities" },
  { title: "Merchandise", value: "Weekly", icon: "🛍", bgColor: "bg-black", description: "Trendy merchandise from top brands" },
  { title: "Charity", value: "Daily", icon: "🎁", bgColor: "bg-black", description: "Support causes you care about daily" },
  { title: "Donations", value: "Daily", icon: "❤", bgColor: "bg-black", description: "Make an impact with daily donations" }
];

const AwardsSection = () => {

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start justify-between">
        {/* Left side - Heading */}
        <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 text-center lg:text-left">
          <h2 className="text-6xl md:text-[120px] font-['Audiowide'] text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/80 leading-[0.95] tracking-[-0.02em] mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Earn Rewards
            <br />
            for Your AURA
          </h2>
          <p className="text-[16px] text-gray-400/90 leading-[1.6] max-w-[520px] mx-auto lg:mx-0">
            Transform your social media experience...
            <br />
            On outreran im sptul astih alondising soluvods tha
            <br />
            briopierse you businesss thrive.
          </p>
        </div>

        {/* Right side - Rewards Card */}
        <div className="lg:w-1/2 w-full max-w-2xl">
          <div className="relative bg-black/40 backdrop-blur-md rounded-[24px] border-4 border-white overflow-hidden p-3 sm:p-4 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all duration-300">
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
              {/* First pair - Icon and Description */}
              <div
                className={`bg-black rounded-[24px] p-2.5 flex flex-col items-center justify-center border-2 border-white backdrop-blur-sm hover:border-yellow-400 transition-all duration-300 shadow-[0_4px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.25)] hover:scale-[1.02] hover:-translate-y-0.5 w-full h-[120px]`}
              >
                <div className="text-4xl">{rewardsData[0].icon}</div>
              </div>
              
              <div
                className={`bg-black rounded-[24px] p-2.5 flex flex-col items-start border-2 border-white backdrop-blur-sm hover:border-yellow-400 transition-all duration-300 shadow-[0_4px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.25)] hover:scale-[1.02] hover:-translate-y-0.5 w-full`}
              >
                <div className="text-navigation font-medium text-white mb-0.5 text-xs sm:text-sm">{rewardsData[0].title}</div>
                <div className="text-base font-medium text-white mb-0.5 text-xs sm:text-sm">{rewardsData[0].value}</div>
                <div className="text-gray-300 leading-snug text-[10px] sm:text-xs">{rewardsData[0].description}</div>
              </div>
              
              {/* Second pair - Icon and Description */}
              <div
                className={`bg-black rounded-[24px] p-2.5 flex flex-col items-center justify-center border-2 border-white backdrop-blur-sm hover:border-yellow-400 transition-all duration-300 shadow-[0_4px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.25)] hover:scale-[1.02] hover:-translate-y-0.5 w-full h-[120px]`}
              >
                <div className="text-4xl">{rewardsData[1].icon}</div>
              </div>
              
              <div
                className={`bg-black rounded-[24px] p-2.5 flex flex-col items-start border-2 border-white backdrop-blur-sm hover:border-yellow-400 transition-all duration-300 shadow-[0_4px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.25)] hover:scale-[1.02] hover:-translate-y-0.5 w-full`}
              >
                <div className="text-navigation font-medium text-white mb-0.5 text-xs sm:text-sm">{rewardsData[1].title}</div>
                <div className="text-base font-medium text-white mb-0.5 text-xs sm:text-sm">{rewardsData[1].value}</div>
                <div className="text-gray-300 leading-snug text-[10px] sm:text-xs">{rewardsData[1].description}</div>
              </div>
              
              {/* Third pair - Icon and Description */}
              <div
                className={`bg-black rounded-[24px] p-2.5 flex flex-col items-center justify-center border-2 border-white backdrop-blur-sm hover:border-yellow-400 transition-all duration-300 shadow-[0_4px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.25)] hover:scale-[1.02] hover:-translate-y-0.5 w-full h-[120px]`}
              >
                <div className="text-4xl">{rewardsData[2].icon}</div>
              </div>
              
              <div
                className={`bg-black rounded-[24px] p-2.5 flex flex-col items-start border-2 border-white backdrop-blur-sm hover:border-yellow-400 transition-all duration-300 shadow-[0_4px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.25)] hover:scale-[1.02] hover:-translate-y-0.5 w-full`}
              >
                <div className="text-navigation font-medium text-white mb-0.5 text-xs sm:text-sm">{rewardsData[2].title}</div>
                <div className="text-base font-medium text-white mb-0.5 text-xs sm:text-sm">{rewardsData[2].value}</div>
                <div className="text-gray-300 leading-snug text-[10px] sm:text-xs">{rewardsData[2].description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;