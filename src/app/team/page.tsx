'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import './team.css';
import Link from 'next/link';
import { usePageRestart } from '@/lib/hooks/use-page-restart';
import { markPageAsActive, markPageAsInactive } from '@/lib/utils/page-transitions';

const roles = ['Developer', 'Designer', 'Product Manager', 'Marketing Lead', 'DevOps Engineer', 'UX Designer', 'Data Scientist', 'QA Engineer'];
const names = [
  'Alex Morgan', 'Sarah Chen', 'Marcus Rivera', 'Emily Zhang', 'James Carter', 'Nina Patel',
  'David Kim', 'Rachel Adams', 'Tom Wilson', 'Lisa Brown', 'Chris Lee', 'Anna Martinez',
  'Mike Johnson', 'Sophie Taylor', 'John Anderson', 'Maria Garcia', 'Robert Smith', 'Jessica Davis',
  'Daniel White', 'Laura Thompson', 'Kevin Moore', 'Amy Jackson', 'Brian Harris', 'Emma Clark',
  'Ryan Lewis', 'Olivia Walker', 'Jason Hall', 'Mia Allen', 'Eric Young', 'Grace King',
  'Sam Wright', 'Chloe Lopez', 'Tyler Hill', 'Zoe Scott', 'Jordan Green', 'Hannah Adams',
  'Austin Baker', 'Lily Nelson', 'Brandon Carter', 'Sophia Mitchell'
];

interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export default function TeamPage() {
  const membersRef = useRef<Member[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const centerInfoRef = useRef<HTMLDivElement>(null);
  const currentMemberIndexRef = useRef<number>(0);
  const autoShowIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isClient, setIsClient] = useState(false);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pageVisibilityRef = useRef<boolean>(true);

  const showMember = useCallback((index: number) => {
    currentMemberIndexRef.current = index;
    const member = membersRef.current[index];
    
    // Update active class on member circles with smooth transition
    document.querySelectorAll('.member-circle').forEach((circle, i) => {
      if (i === index) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    });
    
    // Update center info
    if (typeof document !== 'undefined') {
      const centerNumber = document.getElementById('centerNumber');
      const centerName = document.getElementById('centerName');
      const centerRole = document.getElementById('centerRole');
      const centerBio = document.getElementById('centerBio');
      const centerImage = document.getElementById('centerImage') as HTMLImageElement;
      
      if (centerNumber) centerNumber.textContent = `MEMBER ${String(member.id).padStart(2, '0')}`;
      if (centerName) centerName.textContent = member.name.toUpperCase();
      if (centerRole) centerRole.textContent = member.role.toUpperCase();
      if (centerBio) centerBio.textContent = member.bio;
      if (centerImage) {
        centerImage.src = member.image;
        centerImage.alt = member.name;
      }
    }
    
    // Show detail view with smooth transition
    if (centerInfoRef.current) {
      centerInfoRef.current.classList.add('show-details');
    }
  }, []);

  const createCircle = useCallback(() => {
    if (!containerRef.current) return;
    
    // Clear existing member circles
    const existingCircles = containerRef.current.querySelectorAll('.member-circle');
    existingCircles.forEach(el => el.remove());
    
    const containerWidth = containerRef.current.offsetWidth;
    const radius = containerWidth * 0.42;
    // Adjust member size based on screen width for better mobile experience
    const memberSize = window.innerWidth <= 320 ? 28 : 
                      window.innerWidth <= 360 ? 30 : 
                      window.innerWidth <= 480 ? 35 : 
                      window.innerWidth <= 768 ? 40 : 70;
    
    membersRef.current.forEach((member, index) => {
      const angle = (360 / 40) * index;
      const radian = (angle * Math.PI) / 180;
      
      const x = radius * Math.cos(radian);
      const y = radius * Math.sin(radian);
      
      const memberDiv = document.createElement('div');
      memberDiv.className = 'member-circle';
      memberDiv.setAttribute('data-index', index.toString());
      memberDiv.style.left = `calc(50% + ${x}px - ${memberSize / 2}px)`;
      memberDiv.style.top = `calc(50% + ${y}px - ${memberSize / 2}px)`;
      memberDiv.innerHTML = `<img src="${member.image}" alt="${member.name}" loading="lazy">`;
      
      // Use passive event listeners for better performance
      memberDiv.addEventListener('click', () => showMember(index), { passive: true });
      memberDiv.addEventListener('touchstart', (e) => {
        e.preventDefault();
        showMember(index);
      }, { passive: false });
      
      containerRef.current?.appendChild(memberDiv);
    });
  }, [showMember]);

  const startAutoShow = useCallback(() => {
    if (autoShowIntervalRef.current) {
      clearInterval(autoShowIntervalRef.current);
    }
    
    // Changed interval to 3 seconds as requested
    autoShowIntervalRef.current = setInterval(() => {
      currentMemberIndexRef.current = (currentMemberIndexRef.current + 1) % 40;
      showMember(currentMemberIndexRef.current);
    }, 3000); // 3 seconds instead of 4
  }, [showMember]);

  // Function to restart all animations
  const restartAllAnimations = useCallback(() => {
    // Clear existing intervals
    if (autoShowIntervalRef.current) {
      clearInterval(autoShowIntervalRef.current);
      autoShowIntervalRef.current = null;
    }
    
    // Recreate the circle layout
    createCircle();
    
    // Reset to first member
    currentMemberIndexRef.current = 0;
    showMember(0);
    
    // Restart auto show
    setTimeout(() => {
      startAutoShow();
    }, 500);
  }, [createCircle, showMember, startAutoShow]);

  // Use our custom hook for page restart functionality
  usePageRestart(restartAllAnimations);

  const handleCenterClick = useCallback(() => {
    if (autoShowIntervalRef.current) {
      clearInterval(autoShowIntervalRef.current);
      autoShowIntervalRef.current = null;
      if (centerInfoRef.current) {
        centerInfoRef.current.style.opacity = '0.7';
      }
    } else {
      startAutoShow();
      if (centerInfoRef.current) {
        centerInfoRef.current.style.opacity = '1';
      }
    }
  }, [startAutoShow]);

  // Initialize members
  useEffect(() => {
    setIsClient(true);
    
    const members: Member[] = [];
    for (let i = 0; i < 40; i++) {
      const gender = i % 2 === 0 ? 'men' : 'women';
      const randomNum = Math.floor(Math.random() * 90) + 1;
      members.push({
        id: i + 1,
        name: names[i],
        role: roles[i % roles.length],
        image: `https://randomuser.me/api/portraits/${gender}/${randomNum}.jpg`,
        bio: `Experienced professional with expertise in ${roles[i % roles.length]}. Passionate about innovation and collaboration.`
      });
    }
    membersRef.current = members;
    
    // Use requestAnimationFrame for better performance
    requestAnimationFrame(() => {
      createCircle();
      
      // Show first member after a delay
      setTimeout(() => {
        showMember(0);
        startAutoShow();
      }, 1000);
    });
    
    // Add page visibility change listener
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page is hidden
        pageVisibilityRef.current = false;
        if (autoShowIntervalRef.current) {
          clearInterval(autoShowIntervalRef.current);
          autoShowIntervalRef.current = null;
        }
      } else {
        // Page is visible again - restart everything
        pageVisibilityRef.current = true;
        restartAllAnimations();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Mark that we've initialized the page
    markPageAsActive('team');
    
    return () => {
      if (autoShowIntervalRef.current) {
        clearInterval(autoShowIntervalRef.current);
      }
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      // Clean up the class when component unmounts
      markPageAsInactive('team');
    };
  }, [createCircle, showMember, startAutoShow, restartAllAnimations]);

  useEffect(() => {
    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = setTimeout(() => {
        createCircle();
        if (centerInfoRef.current?.classList.contains('show-details')) {
          showMember(currentMemberIndexRef.current);
        }
      }, 300);
    };
    
    // Use passive event listener for better performance
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [createCircle, showMember]);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <div className="header">
        <Link href="/" className="back-link">← BACK</Link>
        <h1>TEAM</h1>
      </div>

      <div className="main-content">
        <div className="circle-container" ref={containerRef} id="circleContainer">
          <div 
            className="center-info" 
            ref={centerInfoRef} 
            id="centerInfo" 
            onClick={handleCenterClick}
            onTouchStart={(e) => {
              e.preventDefault();
              handleCenterClick();
            }}
          >
            <div className="default-view">
              <h2>40</h2>
              <p>TAP ANY MEMBER</p>
            </div>
            
            <div className="detail-view" id="detailView">
              <div className="center-image">
                <img id="centerImage" src="" alt="" />
              </div>
              <div className="member-number" id="centerNumber"></div>
              <h2 className="member-name" id="centerName"></h2>
              <div className="member-role" id="centerRole"></div>
              <p className="member-bio" id="centerBio"></p>
              <div className="member-social">
                <a href="#" onClick={(e) => e.stopPropagation()}>TWITTER</a>
                <a href="#" onClick={(e) => e.stopPropagation()}>LINKEDIN</a>
                <a href="#" onClick={(e) => e.stopPropagation()}>GITHUB</a>
              </div>
            </div>
          </div>
        </div>
        <div className="team-footer">
          <p>40 MEMBERS</p>
        </div>
      </div>
    </div>
  );
}