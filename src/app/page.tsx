"use client";

import NavigationHeader from '@/components/sections/navigation-header';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import PortfolioGrid from '@/components/sections/portfolio-grid';
import AwardsSection from '@/components/sections/awards-section';
import ContactSection from '@/components/sections/contact-section';
import HelloSection from '@/components/sections/hello-section';
import Footer from '@/components/sections/footer';
import { useSmoothScroll } from '@/lib/hooks/use-smooth-scroll';
import { useEffect, useState, useRef } from 'react';
import BackToTop from '@/components/ui/back-to-top';
import ScrollEffects from '@/components/ui/scroll-effects';
import ModernAnimations from '@/components/ui/modern-animations';
import ScrollFromGround from '@/components/ui/scroll-from-ground';

export default function Home() {
  useSmoothScroll();
  
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const helloRef = useRef<HTMLDivElement>(null);
  
  // Scroll to top on page load and check for mobile
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Check if device is mobile
    const mobile = typeof window !== 'undefined' && window.innerWidth < 768;
    setIsMobile(mobile);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if elements are in viewport
  const isElementInViewport = (element: HTMLElement | null) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.85 && rect.bottom > 0;
  };

  const aboutVisible = isElementInViewport(aboutRef.current);
  const portfolioVisible = isElementInViewport(portfolioRef.current);
  const awardsVisible = isElementInViewport(awardsRef.current);
  const contactVisible = isElementInViewport(contactRef.current);
  const helloVisible = isElementInViewport(helloRef.current);

  return (
    <main className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      <ModernAnimations />
      {!isMobile && <ScrollEffects />}
      <NavigationHeader />
      <BackToTop />
      
      <div className="space-y-0 w-full">
        <div id="hero" className="relative w-full">
          <HeroSection />
        </div>
        <div ref={aboutRef} id="about-section">
          <ScrollFromGround delay={100} animationType="rise">
            <AboutSection />
          </ScrollFromGround>
        </div>
        <div ref={portfolioRef} id="work">
          <ScrollFromGround delay={200} animationType="pop">
            <PortfolioGrid />
          </ScrollFromGround>
        </div>
        <div ref={awardsRef} id="recognition">
          <ScrollFromGround delay={300} animationType="slide">
            <AwardsSection />
          </ScrollFromGround>
        </div>
        <div ref={contactRef} id="contact-us">
          <ScrollFromGround delay={400} animationType="rise">
            <ContactSection />
          </ScrollFromGround>
        </div>
        <div ref={helloRef} id="hello">
          <ScrollFromGround delay={500} animationType="rise">
            <HelloSection />
          </ScrollFromGround>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}