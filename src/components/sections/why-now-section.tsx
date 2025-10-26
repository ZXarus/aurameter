"use client";

import { useState, useEffect, useRef } from 'react';

const WhyNowSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        {/* Title */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8">
            WHY NOW?
          </h2>
        </div>

        {/* Main Content */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
            The Auraverse is opening and only the early ones will get in.
          </p>
          
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
            The first wave becomes the founding class of Aura farmers — the ones campus will remember. 
            Beta spots are limited. Once the gates close, you wait outside.
          </p>
          
          <p className="text-sm md:text-base text-white/60 italic">
            Don't be the guy who discovers it later on someone else's story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;