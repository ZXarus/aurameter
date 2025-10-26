"use client";

import LoadingPage from '@/components/sections/loading-page';
import NavigationHeader from '@/components/sections/navigation-header';
import NewHeroSection from '@/components/sections/new-hero-section';
import NewAboutSection from '@/components/sections/new-about-section';
import ProblemSection from '@/components/sections/problem-section';
import SolutionSection from '@/components/sections/solution-section';
import WhyNowSection from '@/components/sections/why-now-section';
import FinalCTASection from '@/components/sections/final-cta-section';
import Footer from '@/components/sections/footer';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  if (showLoading) {
    return <LoadingPage onComplete={handleLoadingComplete} />;
  }

  return (
    <main className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      <NavigationHeader />
      
      <div className="space-y-0 w-full">
        <div id="hero">
          <NewHeroSection />
        </div>
        <div id="about-section">
          <NewAboutSection />
        </div>
        <div id="problem">
          <ProblemSection />
        </div>
        <div id="solution">
          <SolutionSection />
        </div>
        <div id="why-now">
          <WhyNowSection />
        </div>
        <div id="cta">
          <FinalCTASection />
        </div>
      </div>
      
      <Footer />
    </main>
  );
}